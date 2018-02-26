import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ApiService {
  apiRoot = 'http://localhost:3000/';
  constructor(private http: HttpClient) {

  }

  fetch(verb: string, url: string, data: any | null | undefined) {
    const promise = new Promise((resolve, reject) => {
      const apiUrl = `${this.apiRoot}${url}`;

<<<<<<< HEAD
      this.http[verb](apiUrl)
=======
      this.http[verb](apiUrl,verb.toUpperCase() == 'POST' ? data : '')
>>>>>>> origin/steve
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
    return promise;
  }

}
