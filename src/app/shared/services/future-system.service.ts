import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs';
import { UrlEndpoints } from '../constant/url-endpoints';
import { IProject } from '../models/project.model';
import { IService } from '../models/service.model';
import { IEmployee } from '../models/employee.model';
import { IClient } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class FutureSystemService {
  private projectsUrl = 'Company/Projects';
  private servicesUrl = 'Company/Services';
  private employeesUrl = 'Company/Employees';
  private clientsUrl = 'Company/Clients';
  private sendEmailUrl = 'Mails/ProjectSignup';
  private sendPickAppointmentEmailUrl = 'Mails/PickAppointment';
  constructor(private _http: HttpClient) {}

  projects$ = this._http
    .get<IProject[]>(UrlEndpoints.apiRoot + this.projectsUrl)
    .pipe(
      map((projects: any[]) => {
        return projects as IProject[];
      }),
      shareReplay(1)
    );

  services$ = this._http
    .get<IService[]>(UrlEndpoints.apiRoot + this.servicesUrl)
    .pipe(
      map((services: IService[]) => {
        return services as IService[];
      }),
      shareReplay(1)
    );

  employees$ = this._http
    .get<IEmployee[]>(UrlEndpoints.apiRoot + this.employeesUrl)
    .pipe(
      map((employees: IEmployee[]) => {
        return employees as IEmployee[];
      }),
      shareReplay(1)
    );
  clients$ = this._http
    .get<IClient[]>(UrlEndpoints.apiRoot + this.clientsUrl)
    .pipe(
      map((clients: IClient[]) => {
        return clients as IClient[];
      }),
      shareReplay(1)
    );

  PostEmail = (email: string) =>
    this._http.get(UrlEndpoints.apiRoot + this.sendEmailUrl + `/${email}`);

  PostPickAppointmentEmail = (model: any) =>
    this._http.post(
      UrlEndpoints.apiRoot + this.sendPickAppointmentEmailUrl,
      model
    );
}
