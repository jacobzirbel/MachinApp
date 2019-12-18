import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item, ItemService } from '../Services/ItemService';
import { User, UserService } from '../Services/UserService';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  item: Item;


  constructor(
    private itemService: ItemService,
    private userService: UserService,
    private router: Router
  ) {
    this.item = {
      
        id: '',
        name: '',
        addedBy: this.userService.currentUser.name,
        dateAdded: '',
        price: 0,
        description: ""
    }
  }

  ngOnInit() {
  }

  addItem(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    
    let date = (mm + '/' + dd + '/' + yyyy).toString();
    this.item.id = "00" + (this.itemService.getAllItems().length + 1).toString();
    this.item.dateAdded = date;

    this.itemService.addItem(this.item);
    this.router.navigateByUrl('');
  }
  goBack(){
    this.router.navigateByUrl('');
  }
}
