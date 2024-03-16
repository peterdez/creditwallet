import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-right-svg',
  template: `
   <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 13L7 7L1 1" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  `,
  styles: [
  ]
})
export class ArrowRightSvgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}