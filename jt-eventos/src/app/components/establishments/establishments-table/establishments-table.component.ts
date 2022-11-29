import { Component, OnInit } from '@angular/core';
import { Establishment } from 'src/app/classes/establishments/establishment';
import { EstablishmentApiService } from 'src/app/services/establishments/establishment-api.service';

@Component({
  selector: 'app-establishments-table',
  templateUrl: './establishments-table.component.html',
  styleUrls: ['./establishments-table.component.css', '../../../../styles.css'],
})
export class EstablishmentsTableComponent implements OnInit {
  searchField = '';
  list: Establishment[] = [];

  constructor(private establishmentService: EstablishmentApiService) {
    this.findAll();
  }

  findAll() {
    this.establishmentService.findAll().subscribe((data) => {
      this.list = data;
    });
  }

  ngOnInit(): void {}
}
