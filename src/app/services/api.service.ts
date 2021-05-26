import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  getDataValues(url: string): Observable<any> {
    return this._http.get(url);
  }

  postDataValues(url: string, data: any): Observable<any> {
    return this._http.post(url, data);
  }

  putDataValues(url: string, data: any): Observable<any> {
    return this._http.put(url, data);
  }
}
