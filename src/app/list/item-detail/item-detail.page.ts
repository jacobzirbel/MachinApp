import { Component, OnInit } from '@angular/core';
import { ItemService, Item } from 'src/app/Services/ItemService';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  loadedItem: Item;
  constructor(
    private itemService: ItemService,
    private router: Router,
    private alertCtrl: AlertController,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('itemId')) {
        // redirect 
        return;
      }
      const itemId = paramMap.get('itemId');
      this.loadedItem = this.itemService.getItem(itemId);
    });
  }

}
