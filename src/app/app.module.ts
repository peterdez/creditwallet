import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoansComponent } from './loans/loans.component';
import { HeaderComponent } from './header/header.component';
import { SearchSvgComponent } from './search-svg/search-svg.component';
import { DownArrowSvgComponent } from './down-arrow-svg/down-arrow-svg.component';
import { ArrowLeftSvgComponent } from './arrow-left-svg/arrow-left-svg.component';
import { ArrowRightSvgComponent } from './arrow-right-svg/arrow-right-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoansComponent,
    HeaderComponent,
    SearchSvgComponent,
    DownArrowSvgComponent,
    ArrowLeftSvgComponent,
    ArrowRightSvgComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
