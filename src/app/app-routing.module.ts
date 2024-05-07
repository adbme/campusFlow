import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent } from './planning/planning.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DocumentsLinksComponent } from './documents-links/documents-links.component';
import { ReportGradesComponent } from './report-grades/report-grades.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'report-grades', component: ReportGradesComponent, canActivate: [AuthGuard] },
  { path: 'documents-links', component: DocumentsLinksComponent, canActivate: [AuthGuard] },
  { path: 'planning', component: PlanningComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
