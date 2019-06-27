import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProfileDetailsComponent } from './edit-profile-details/edit-profile-details.component';

const routes: Routes = [

  {
    path: 'edit-profile-details',
    component: EditProfileDetailsComponent,
  },
  {
    path: '',
    component: LoginComponent,
  }

];

@NgModule({
  declarations: [LoginComponent, EditProfileDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,


  ]
})


export class LoginModule { }
