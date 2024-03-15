import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  currentPage: any;
  collectionSize: any;
  total: any;
  loans: any = [];
  result: any;
  /*getLoans(): void {
    this.loans = this.loanService.getLoans();
  }*/
  getLoans(): void {
    this.loanService.getLoans()
        .subscribe((res) => {
          this.result = res;
          //this.loans = res.loans;
          this.loans = (res.loans.data);
          this.currentPage = (res.loans.current_page);
          this.collectionSize = (res.loans.data.length);
          this.total = (res.loans.total);
          console.log(res);
          console.log(this.collectionSize);
        })
  }
  constructor(
    private loanService: LoanService
  ) { }


  ngOnInit(): void {
    this.getLoans();
  }

}
