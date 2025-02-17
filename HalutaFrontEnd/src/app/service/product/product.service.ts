import { BasicAuth } from './../../constant/basic_auth';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product, Url } from '../../constant/api';
import { APIRes } from '../../interface/APIRes.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  authHeader = 'Basic ' + btoa(`${BasicAuth.username}:${BasicAuth.password}`);
  getProducts(): Observable<APIRes> {
    return this.http.get<APIRes>(`${Url + product.getAll}`, {
      headers: {
        Authorization: this.authHeader,
        'Content-Type': 'application/json',
      },
    });
  }
}
