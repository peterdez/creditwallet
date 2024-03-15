import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  welcomeMsg = 'Good Morning';
  welcomeMsgName = 'Michael';
  date = 'April 7, 2021';
  ngOnInit(): void {
  }

}
