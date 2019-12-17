import { Component, OnInit } from '@angular/core';
import { Item, ItemService } from '../Services/ItemService';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  private selectedItem: Item;
  public list: Item[];

  constructor(
    private itemService: ItemService,
  ) { 
    this.list = this.itemService.getAllItems();
  }

  ngOnInit() {
  }

}
