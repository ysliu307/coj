import { Component, OnInit , Inject} from '@angular/core';
import { Problem } from '../../models/problem.model';
import {PROBLEMS} from '../../mock-problem';


@Component({
  selector: 'app-problemlist',
  templateUrl: './problemlist.component.html',
  styleUrls: ['./problemlist.component.css']
})
export class ProblemlistComponent implements OnInit {
  problems : Problem[];
  constructor(@Inject("data") private data) { }

  ngOnInit() {
    //VIEW MODEL
    this.getProblems() ;
  }
  getProblems() : void{
    this.problems = this.data.getProblems();
  }

}
