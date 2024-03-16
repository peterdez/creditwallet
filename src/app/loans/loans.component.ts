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
  lastPage: any;
  collectionSize: any;
  total: any;
  loans: any;
  filteredLoans: any = [];
  result: any;
  changePage(page: number): void {
    if (page >= 1 && page <= this.lastPage) {
    this.currentPage = page;
    this.getLoans(this.currentPage);
    }
  }
  findByTitle() {
    if (!this.searchTitle && this.isSearched === false) {
      this.filteredLoans = this.loans;
      return;
    }
    this.getLoansSearch(this.searchTitle);
    //this.filteredLoans = this.loans.filter((loan: any) => loan.firstname.toLowerCase().substring(0, this.searchTitle.length) === this.searchTitle.trim().toLowerCase());
    this.filteredLoans = this.loans;
    this.collectionSize = this.filteredLoans.length;
    this.isSearched = true;
    //console.log(this.filteredLoans);
  }  
  getLoans(page: number): void {
    this.loanService.getLoans(page)
        .subscribe((res) => {
          this.result = res;
          this.loans = (res.loans.data);
          this.filteredLoans = (res.loans.data);
          this.currentPage = (res.loans.current_page);
          this.lastPage = (res.loans.last_page);
          this.collectionSize = (res.loans.data.length);
          this.total = (res.loans.total);
          console.log(res);
        })
  }
  getLoansSearch(search: any): void {
    this.loanService.getLoansSearch(search)
        .subscribe((res) => {
          this.result = res;
          this.loans = (res.loans.data);
          this.filteredLoans = (res.loans.data);
          this.currentPage = (res.loans.current_page);
          this.lastPage = (res.loans.last_page);
          this.collectionSize = (res.loans.data.length);
          this.total = (res.loans.total);
          console.log(res);
        })
  }
  constructor(
    private loanService: LoanService
  ) {}


  ngOnInit(): void {
    this.getLoans(1);
  }

}
