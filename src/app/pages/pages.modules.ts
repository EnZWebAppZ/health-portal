import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientRecordsComponent } from './patient-records/patient-records.component';
import { RouterModule, Routes } from '@angular/router';

/* should have XX-routing.module.ts */

const heroesRoutes: Routes = [
  { path: '', component: PatientRecordsComponent }
];


@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(heroesRoutes)],
  declarations: [PatientRecordsComponent],
  entryComponents: [
    PatientRecordsComponent
  ],
  exports: [
    RouterModule
  ]
})
export class PagesModule { }
