import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css', '../../../styles.css']
})
export class UsersEditComponent implements OnInit {
  title = "Edição de Usuário";

  constructor() { }

  ngOnInit(): void {
  }

}
