import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private loansUrl = 'https://testapi.creditwallet.ng/api/v2/loan/list/active/interview';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /*loans = [
    {id: 1, name: 'Bayo', email: 'bayo@gmail.com'},
    {id: 1, name: 'Bayo', email: 'bayo@gmail.com'},
    {id: 1, name: 'Bayo', email: 'bayo@gmail.com'},
  ];*/

  loans: any = [];

  /*getLoans(): Observable<any> {
    const loanns = of(this.loans);
    return loanns;
  }*/

  getLoans(): Observable<any> {
    return this.http.post<any>(this.loansUrl, this.httpOptions)
  }

  constructor(
    private http: HttpClient,
  ) { }
}
