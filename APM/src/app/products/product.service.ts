import { Injectable } from "@angular/core";
import { IProduct } from "./product";

// http
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// inject the service to the root angularInjector so it is available anywhear for the application
@Injectable({
    providedIn: 'root'
}) 
export class ProductService {
    //private productUrl = 'api/products/products.json';
    private productUrl = "http://localhost:3000/api/Products";

    constructor(private http: HttpClient) {
    }
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }
    getProductById(productId: string): Observable<IProduct> {
        return this.http.get<IProduct>(`${this.productUrl}/${productId}`).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }


    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}