import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorQueteService {
  static URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
      return this.http.get<any>(InterceptorQueteService.URL);
    }
  }
