import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css', '../../../styles.css']
})
export class UsersCreateComponent implements OnInit {
  title = 'Cadastro de Usuário';

  constructor() { }

  ngOnInit(): void {
  }

}
