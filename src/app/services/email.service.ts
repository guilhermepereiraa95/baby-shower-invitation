// email.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private formSpreeEndpoint = 'https://formspree.io/f/xoqgvlkj'; // Replace with your actual Formspree email

  constructor(private http: HttpClient) {}

  sendEmail(data: any): Observable<any> {
    return this.http.post(this.formSpreeEndpoint, data);
  }
}
