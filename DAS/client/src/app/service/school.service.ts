import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }
  httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
});

  RegisterSchool(data): Observable<any>{
    const url='http://localhost:3301/register/school';
    return this.http.post(url, data, 
      {headers: this.httpHeaders, observe:'response',responseType: 'json'})
    
  }

}
