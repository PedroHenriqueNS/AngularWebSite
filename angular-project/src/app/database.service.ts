import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Response } from './interfaces/response';
import IArquivos from './interfaces/iarquivos';
import ILogin from './interfaces/ilogin';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private urlDB = 'http://localhost:3306' //TODO check if it's correct

  constructor(private http: HttpClient) { }

  private async request(method: string, url: string, data?: any) {

    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });

    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  // get(): Observable<Response<ILogin []>> {
  //   return this.http.get<Response<ILogin []>>(this.urlDB);
  // }

  // post(formData: FormData): Observable<FormData> {
  //   return this.http.post<FormData>(this.urlDB, formData);
  // }

  get(): any {
    return this.request('GET', `${this.urlDB}/angular_project`);
  }
  
}
