import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-problemdetail',
  templateUrl: './problemdetail.component.html',
  styleUrls: ['./problemdetail.component.css']
})
export class ProblemdetailComponent implements OnInit {
  problem : Problem;
  constructor(private route : ActivatedRoute, @Inject("data") private data) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.data.getProblem(+params['id'])
                .then(problem => this.problem = problem);
    });
  }

}
