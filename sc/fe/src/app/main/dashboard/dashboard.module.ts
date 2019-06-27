import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule, MatListModule, MatLineModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CreateCertificateComponent } from './create-certificate/create-certificate.component';
import { LandingComponent } from './landing/landing.component';
import { EnrollStudentComponent } from './enroll-student/enroll-student.component';
import { ViewEnrolledStudentComponent } from './view-enrolled-student/view-enrolled-student.component';
import { ViewCertificateComponent } from './view-certificate/view-certificate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CertificateTemplateComponent } from './certificate-template/certificate-template.component';
// import {TopnavComponent} from '../topnav/topnav.component';

const routes: Routes = [
  
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: 'create-certificate',
        component: CreateCertificateComponent,
      },
      {
        path: 'certificate-template',
        component: CertificateTemplateComponent,
      },
      {
        path: 'enroll-student',
        component: EnrollStudentComponent,
      },
      {
        path:'view-enrolled-student',
        component:ViewEnrolledStudentComponent,
      },
      {
        path:'view-certificate',
        component:ViewCertificateComponent,
      },
      {
        path:'',
        component:LandingComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    CreateCertificateComponent,
    LandingComponent,
    EnrollStudentComponent,
    ViewEnrolledStudentComponent,
    ViewCertificateComponent,
    CertificateTemplateComponent
  ],

    imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatLineModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule

    ]
})
export class DashboardModule { }
