import { UserInterface } from './../interfaces/User';
import { UserService } from '../services/user.service';
import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { User } from './../classes/User';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnDestroy, OnInit {

  private APIURL = 'http://localhost:8000/users';
  title = 'Users';
  users: User[] = [];
  @Output() updateUser = new EventEmitter<User>();
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private userService: UserService, private http: HttpClient) {
  }

  ngOnInit() : void {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 10
    // };
    // this.userService.getUsers().subscribe(
    //   res => {
    //     this.users = res.data;
    //     this.dtTrigger.next();
    //   }
    // )
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http.get<DataTablesResponse>(this.APIURL + '/datatableData', dataTablesParameters, {})
        .subscribe((resp) => {
            that.users = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'name' }, { data: 'lastname' }, { data: 'fiscalcode' }, {data: 'email'}, {data: 'phone'}, {data: 'province'}]
    };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  onDeleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(
      (response) => {
        if (response.success == true) {
          alert(response.message);
          // this.userService.getUsers().subscribe(res => {this.users = res.data;});
          window.location.reload();
        } else {
          alert(response.message);
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  onSelectUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }
}
