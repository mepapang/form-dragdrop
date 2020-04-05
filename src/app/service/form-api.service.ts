import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forms } from '../model/field.model';

@Injectable({
  providedIn: 'root'
})
export class FormApiService {

  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  creatForms(dataForm): Observable<Forms> {
    return this.httpClient.post<Forms>(this.REST_API_SERVER + '/forms', JSON.stringify(dataForm));
  }
}
