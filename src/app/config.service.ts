import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  URL = 'http://ec2-3-16-91-130.us-east-2.compute.amazonaws.com:3000/api/create';

  constructor(private http: HttpClient) {
  }

  request(sessionName: string): void {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    this.http.post(this.URL, {
      session_name: sessionName
    }, {
      headers,
    }).subscribe(res => console.log(res));
  }
}
