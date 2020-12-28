import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../classes/User';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  public user: User;

  constructor(private route: ActivatedRoute, private userServcice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.route.params.subscribe((p) => {
      this.user = this.userServcice.getUser(+p.id);
    }
    )
  }

  backToUsers() {
    this.router.navigate(['users']);
  }

}
