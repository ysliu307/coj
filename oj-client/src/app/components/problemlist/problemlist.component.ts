import { Component, OnInit , Inject} from '@angular/core';
import { Problem } from '../../models/problem.model';
import { PROBLEMS } from '../../mock-problem';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-problemlist',
  templateUrl: './problemlist.component.html',
  styleUrls: ['./problemlist.component.css']
})
export class ProblemlistComponent implements OnInit {

  problems : Problem[] = [];
  subscriptionProblems: Subscription;

  constructor(@Inject("data") private data) { }

  ngOnInit() {
    //VIEW MODEL
    this.getProblems() ;
  }
  getProblems() : void{
    this.subscriptionProblems = this.data.getProblems()
                                          .subscribe(problems => this.problems = problems);
  }

}
