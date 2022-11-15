import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css', '../../../styles.css']
})
export class AuthenticationComponent implements OnInit {
  title = 'Login'

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void { }
}
