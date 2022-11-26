import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Establishment } from 'src/app/classes/establishments/establishment';
import { EstablishmentApiService } from 'src/app/services/establishments/establishment-api.service';
import { EstablishmentsDetailsComponent } from '../establishments-details/establishments-details.component';
import { EstablishmentsFormComponent } from '../establishments-form/establishments-form.component';

@Component({
  selector: 'app-establishments-table',
  templateUrl: './establishments-table.component.html',
  styleUrls: ['./establishments-table.component.css', '../../../../styles.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class EstablishmentsTableComponent implements OnInit {
  title = "Estabelecimentos";
  searchField = '';
  list: Establishment[] = [];

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private establishmentService: EstablishmentApiService,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.findAll();
  }

  findAll() {
    this.establishmentService.findAll().subscribe((data) => {
      this.list = data;
    });
  }

  createEstablishment() {
    const modalRef = this.modalService.open(EstablishmentsFormComponent, { centered: true });
    modalRef.componentInstance.title = 'Cadastro';
  }

  detailEstablishment() {
    this.modalService.open(EstablishmentsDetailsComponent, { centered: true });
  }

  ngOnInit(): void {}
}
