import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageForms } from '../model/field.model';

@Injectable({
  providedIn: 'root'
})
export class FormApiService {

  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  creatForms(dataForm): Observable<PageForms> {
    return this.httpClient.post<PageForms>(this.REST_API_SERVER + '/pageForms', dataForm);
  }
}
