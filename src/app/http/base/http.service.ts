import { HttpClient, HttpParams } from "@angular/common/http";
import { BaseHttpService } from "./base-http.service";
import { Observable, catchError, retry, throwError } from "rxjs";

export abstract class HttpService<T> extends BaseHttpService {

    constructor(public httpClient: HttpClient){
        super();
    }

    public get(webServiceUrl : string, params?: HttpParams): Observable<T[]>{
        return this.httpClient.get<T[]>(webServiceUrl,{params})
        .pipe(retry(0),
            catchError(this.handleError)
        );
    }
    public getHtml(webServiceUrl : string): Observable<string>{
        return this.httpClient.get(webServiceUrl,{ responseType: 'text' })
        .pipe(retry(0),
            catchError(this.handleError)
        );
    }

    public getById(id:number,webServiceUrl : string, params?: HttpParams): Observable<T>{
        return this.httpClient.get<T>(webServiceUrl.concat('/',String(id)),{params, headers: this.defaultHeader, withCredentials: true})
        .pipe(retry(0),
            catchError(this.handleError)
        );
    }

    public getSingle(webServiceUrl : string, params?: HttpParams): Observable<T>{
        return this.httpClient.get<T>(webServiceUrl,{params, headers: this.defaultHeader, withCredentials: true})
        .pipe(retry(0),
            catchError(this.handleError)
        );
    }

    public getMany(ids:number[],webServiceUrl : string, parameterName: string): Observable<T[]>{
        const parameter: string = parameterName.concat('=', ids.join('&'.concat(parameterName, '=')));
        return this.httpClient.get<T[]>(webServiceUrl.concat('/',parameter))
        .pipe(retry(0),
            catchError(this.handleError)
        );
    }

    public getWithCriteria(object:any, webServiceUrl : string, params?: HttpParams): Observable<T[]>{
        return this.httpClient.post<T[]>(webServiceUrl, object, {params})
        .pipe(retry(0),
            catchError(this.handleError)
        );
    }

    public post(object:any, webServiceUrl : string, params?: HttpParams): Observable<T>{
        return this.httpClient.post<T>(webServiceUrl, object, {params})
        .pipe(retry(0),
            catchError(this.handleError)
        );
    }

    public postWithoutHeaders(object:any, webServiceUrl : string, params?: HttpParams): Observable<T[]>{
        return this.httpClient.post<T[]>(webServiceUrl, object, {params, withCredentials: true})
        .pipe(retry(0),
            catchError(this.handleError)
        );
    }

    public postWithList(object:any, webServiceUrl : string, params?: HttpParams): Observable<T[]>{
        return this.httpClient.post<T[]>(webServiceUrl, object, {params})
        .pipe(retry(0),
            catchError(this.handleError)
        );
    }

    public postById(id: number | string, object:any, webServiceUrl : string, params?: HttpParams): Observable<T>{
        return this.httpClient.post<T>(webServiceUrl.concat('/', String(id)), object, {params, headers: this.defaultHeader, withCredentials: true})
        .pipe(retry(0),
            catchError(this.handleError)
        );
    }

    public put(object:any, webServiceUrl : string, params?: HttpParams): Observable<T>{
        return this.httpClient.put<T>(webServiceUrl, object, {params, headers: this.defaultHeader, withCredentials: true})
        .pipe(retry(0),
            catchError(this.handleError)
        );
    }

    public patch(object:any, webServiceUrl : string, params?: HttpParams): Observable<T>{
        return this.httpClient.patch<T>(webServiceUrl, object, {params, headers: this.defaultHeader, withCredentials: true})
        .pipe(retry(0),
            catchError(this.handleError)
        );
    }

    public delete(id: number | string, webServiceUrl : string, params?: HttpParams): Observable<T>{
        return this.httpClient.delete<T>(webServiceUrl.concat('/', String(id)), {params, headers: this.defaultHeader, withCredentials: true})
        .pipe(retry(0),
            catchError(this.handleError)
        );
    }

    public deleteWithParams( webServiceUrl : string, params?: HttpParams): Observable<T>{
        return this.httpClient.delete<T>(webServiceUrl, {params, headers: this.defaultHeader, withCredentials: true})
        .pipe(retry(0),
            catchError(this.handleError)
        );
    }

    public deleteMany(ids:number[],webServiceUrl : string, parameterName: string): Observable<T>{
        const parameter: string = parameterName.concat('=', ids.join('&'.concat(parameterName, '=')));
        return this.httpClient.delete<T>(webServiceUrl.concat('/',parameter),{ headers: this.defaultHeader, withCredentials: true})
        .pipe(retry(0),
            catchError(this.handleError)
        );
    }

    public deleteWithCriteria(object:any, webServiceUrl : string, params?: HttpParams): Observable<T[]>{
        return this.httpClient.post<T[]>(webServiceUrl, object, {params, headers: this.defaultHeader, withCredentials: true})
        .pipe(retry(0),
            catchError(this.handleError)
        );
    }

    protected handleError =(error: any) =>{
        const msg: string = `Error ${error.status}`;
        return throwError(msg);
    };
}