import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsService } from 'src/app/services/toasts/toasts.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css', '../../../styles.css']
})
export class AuthenticationComponent implements OnInit {
  title = 'Login'

  constructor(private toastService: ToastsService, public activeModal: NgbActiveModal) { }

  login() {
    this.toastService.showDanger("Usuário ou senha inválidos.");
    this.activeModal.close();
  }

  ngOnInit(): void { }
}
