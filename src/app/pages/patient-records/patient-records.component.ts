import { Component, Input, ChangeDetectorRef, OnInit } from '@angular/core';
import { PatientService } from '../../shared/services/patient.service'
import { IPatient } from '../../interfaces/patient.interface'


@Component({
  selector: 'patient-records',
  templateUrl: './patient-records.component.html',
  styleUrls: [`./patient-records.component.scss`]
})
export class PatientRecordsComponent implements OnInit {
  pServ: PatientService

  patientRecords: IPatient[];

  patientRecordHeaders: string[];

  constructor(pService: PatientService) {
    this.pServ = pService;
  }

  ngOnInit() {
    this.pServ.getPatientRecords().subscribe((res) => {
      console.log(res);
      this.patientRecords = res;
      this.patientRecordHeaders = Object.keys(this.patientRecords[0]);
    });
  }

}
