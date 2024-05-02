import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent } from './planning/planning.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { DocumentsLinksComponent } from './documents-links/documents-links.component';
import { ReportGradesComponent } from './report-grades/report-grades.component';

const routes: Routes = [
  { path: "report-grades", component: ReportGradesComponent },
  { path: "documents-links", component: DocumentsLinksComponent },
  { path: "planning", component: PlanningComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
