import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  title = 'Loans';
  searchTitle: any;
  isSearched = false;
  currentPage: any;
  collectionSize: any;
  total: any;
  loans: any;
  filteredLoans: any = [];
  result: any;
  findByTitle() {
    if (!this.searchTitle && this.isSearched === false) {
      this.filteredLoans = this.loans;
      return;
    }
    this.filteredLoans = this.loans.filter((loan: any) => loan.firstname.toLowerCase().substring(0, this.searchTitle.length) === this.searchTitle.trim().toLowerCase());
    this.collectionSize = this.filteredLoans.length;
    this.isSearched = true;
    //console.log(this.filteredLoans);
  }  
  getLoans(): void {
    this.loanService.getLoans()
        .subscribe((res) => {
          this.result = res;
          this.loans = (res.loans.data);
          this.filteredLoans = (res.loans.data);
          this.currentPage = (res.loans.current_page);
          this.collectionSize = (res.loans.data.length);
          this.total = (res.loans.total);
        })
  }
  constructor(
    private loanService: LoanService
  ) {}


  ngOnInit(): void {
    this.getLoans();
  }

}
