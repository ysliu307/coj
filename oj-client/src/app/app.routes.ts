import { Routes, RouterModule} from '@angular/router';
import { ProblemlistComponent } from './components/problemlist/problemlist.component';
import { ProblemdetailComponent } from './components/problemdetail/problemdetail.component';


const ROUTES: Routes =[
  {
    path:"",
    redirectTo:"problems",
    pathMatch:"full"
  },
  {
    path:"problems",
    component: ProblemlistComponent
  },
  {
    path:"problems/:id",
    component: ProblemdetailComponent
  },
  {
    path:"**",
    redirectTo:"problems"
  }
];
 export const routing = RouterModule.forRoot(ROUTES);
