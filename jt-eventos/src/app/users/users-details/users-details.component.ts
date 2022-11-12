import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css', '../../../styles.css']
})
export class UsersDetailsComponent implements OnInit {
  title = 'Detalhes do usuário';

  constructor() { }

  ngOnInit(): void {
  }

}
