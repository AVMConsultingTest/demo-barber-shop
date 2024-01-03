import { Injectable } from '@angular/core';
import { HttpService } from '../http/base/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService extends HttpService<any> {

  constructor(public override httpClient: HttpClient) {
    super(httpClient);
  }
}
