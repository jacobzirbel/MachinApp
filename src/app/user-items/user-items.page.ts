import { Component, OnInit } from '@angular/core';
import { Item, ItemService } from '../Services/ItemService';
import { User, UserService } from '../Services/UserService';


@Component({
  selector: 'app-user-items',
  templateUrl: './user-items.page.html',
  styleUrls: ['./user-items.page.scss'],
})
export class UserItemsPage implements OnInit {
  list: Item[];

  constructor(
    private itemService: ItemService,
    private userService: UserService
  ) { 
    this.list = this.itemService.getUserItems(this.userService.currentUser.name)
  }

  ngOnInit() {
  }

}
