import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';
import { PROBLEMS} from '../mock-problem';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

private problemsSource = new BehaviorSubject<Problem[]>([]);

  constructor(private http : Http) { }
  getProblems() : Observable<Problem[]> {
    //return observable
    this.http.get("api/v1/problems")
            .toPromise()
            .then((res: Response) => {
              this.problemsSource.next(res.json());
            })
            .catch(this.handleError);
    return this.problemsSource.asObservable();
  }

  getProblem(id:number) : Promise<Problem>{
    return this.http.get(`api/v1/problems/${id}`)
                    .toPromise()
                    .then((res: Response) => res.json())
                    .catch(this.handleError);
  }

  addProblem(problem: Problem) :Promise<Problem> {
    //post problem as json type
    let headers = new Headers({'content-type' : 'application/json'});
    return this.http.post('api/v1/problems', problem, headers)
                    .toPromise()
                    .then((res: Response) => {
                      this.getProblems();
                      return res.json();
                    })
                    .catch(this.handleError);

  }
  private handleError(error : any) : Promise<any> {
    console.error('There is an error', error);
    return Promise.reject(error.body || error);
  }
}
