import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { AvatarModule } from 'ngx-avatars';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PlanningComponent } from './planning/planning.component';
import { ReportGradesComponent } from './report-grades/report-grades.component';
import { DocumentsLinksComponent } from './documents-links/documents-links.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatCardAvatar, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthGuard } from './auth.guard';




import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PlanningComponent,
    ReportGradesComponent,
    DocumentsLinksComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    MatSelectModule,
    CommonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    AvatarModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCardAvatar,
    MatTableModule,
    MatButtonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [
    provideAnimationsAsync(),
    AuthGuard
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
