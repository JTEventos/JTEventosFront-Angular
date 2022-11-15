import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-report',
  templateUrl: './events-report.component.html',
  styleUrls: ['./events-report.component.css', '../../../../styles.css']
})
export class EventsReportComponent implements OnInit {
  description = "Casamento Luzia"

  constructor() { }

  ngOnInit(): void {
  }

}
