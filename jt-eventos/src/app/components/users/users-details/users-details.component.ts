import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/classes/users/user';
import { UserApiService } from 'src/app/services/users/user-api.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css', '../../../../styles.css']
})
export class UsersDetailsComponent implements OnInit {
  id!: number;
  user = new User();

  constructor(
    private route: ActivatedRoute,
    private userService: UserApiService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.userService.findById(this.id).subscribe((data) => {
        this.user = data;
      });
    }
  }
}
