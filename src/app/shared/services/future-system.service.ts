import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs';
import { UrlEndpoints } from '../constant/url-endpoints';
import { IProject } from '../models/project.model';
import { IService } from '../models/service.model';

@Injectable({
  providedIn: 'root',
})
export class FutureSystemService {
  private projectsUrl = 'Projects';
  private servicesUrl = 'Services';
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
}
