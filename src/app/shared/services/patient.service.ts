import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPatient } from '../../interfaces/patient.interface'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class PatientService {
  constructor(private http: HttpClient) { }

  public getPatientRecords(): Observable<IPatient[]> {
    // ideally this link should be defined somewhere as a setting.
    return this.http.get<IPatient[]>('https://www.mocky.io/v2/5ca09191330000ff27a87e2b');
  }

}