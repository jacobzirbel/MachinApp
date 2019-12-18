import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService } from '../Services/UserService';
import { Item, ItemService } from '../Services/ItemService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userLoggedIn: boolean;
  users: User[];
  currentUser: User;

  constructor(
    private router: Router,
    private userService: UserService,
    private itemService: ItemService,

  ) {

  }

  ngOnInit(): void {
    this.users = this.userService.getAllUsers();
    this.currentUser = this.userService.currentUser;
    console.log(this.users);
    if(!this.userService.currentUser){
      this.userLoggedIn = false;
    }
    else{
      this.userLoggedIn = true;
    }
    
    
  }

  postItem(){
    this.router.navigateByUrl('post');
  }

  toList(d: number){
    if(d===0) {this.router.navigateByUrl('list');}
    if(d===1){
      this.router.navigateByUrl('user-items');
    }

  }

  addUser(){
    this.userService.addUser();
    this.ngOnInit();
  }

  loginAs(id: string){
    this.userService.loginUser(id);
    this.ngOnInit();
  }

  logoutUser(){
    this.userService.logoutUser();
    this.ngOnInit();
  }
}
