import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-left-svg',
  template: `
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 13L1 7L7 1" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  `,
  styles: [
  ]
})
export class ArrowLeftSvgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}