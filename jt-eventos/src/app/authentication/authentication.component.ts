import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css', '../../styles.css']
})
export class AuthenticationComponent implements OnInit {
  title = 'Login'

  constructor() { }

  ngOnInit(): void {
  }

}
