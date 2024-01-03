 import { HttpHeaders } from '@angular/common/http';
export abstract class BaseHttpService {
    protected defaultHeader : HttpHeaders = new HttpHeaders (
        {
        'Content-Type' : 'application/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
        });
}