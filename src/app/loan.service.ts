import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private loansUrl = 'https://testapi.creditwallet.ng/api/v2/loan/list/active/interview';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  loans: any = [];

  getLoans(page: number): Observable<any> {
    //return this.http.post<any>(this.loansUrl, { params }, this.httpOptions);
    return this.http.post<any>(`${this.loansUrl}/?page=${page}`, this.httpOptions)
  }

  getLoansSearch(search: any): Observable<any> {
    //return this.http.post<any>(this.loansUrl, { params }, this.httpOptions);
    return this.http.post<any>(`${this.loansUrl}/?search_text=${search}`, this.httpOptions)
  }

  constructor(
    private http: HttpClient,
  ) { }
}
