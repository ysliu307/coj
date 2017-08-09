import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProblemlistComponent } from './components/problemlist/problemlist.component';

import { DataService } from './services/data.service';
import { ProblemdetailComponent } from './components/problemdetail/problemdetail.component';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ProblemlistComponent,
    ProblemdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [{
    provide: "data",
    useClass: DataService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
