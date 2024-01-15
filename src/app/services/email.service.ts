// email.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private formSpreeEndpoint = 'https://formspree.io/f/xoqgvlkj'; // Replace with your actual Formspree email

  constructor(private http: HttpClient) {}

  sendEmail(data: any) {
    return this.http.post(this.formSpreeEndpoint, data);
  }
}
