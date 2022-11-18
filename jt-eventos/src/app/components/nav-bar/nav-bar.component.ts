import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationComponent } from '../authentication/authentication.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css', '../../../styles.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class NavBarComponent {
  name = 'Thiago';
  username = 'thiago_user'

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  login() {
    this.modalService.open(AuthenticationComponent);
  }
}
