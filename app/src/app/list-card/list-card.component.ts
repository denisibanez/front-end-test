import { Component, OnInit } from '@angular/core';
import { ListModel } from '../shared/list.model'
import { ItemModel } from '../shared/item.model'

import { Lists } from './list-card.mock'
import { Items } from './item-card.model'


@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {
  public lists: Array<ListModel> = Lists
  public items: Array<ItemModel> = Items
  public listSelect: Object = {}
  public itemValue: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  public updateItemStatus($event): void {
    console.log(this.lists, $event)
    const indexList = $event.list.id - 1
    const indexItem = $event.item.id
  }

  public saveListSelect($event): void {
    console.log($event)
    this.listSelect = $event
  }

  public inputItemList() {
    this.lists.map((el, index) => {
      /* if(el.id === this.listSelect.id) {
        const item = {
          id: el.items.length + 1,
          name: this.itemValue,
          done: false,
        }
        el.items.push(item)
      }*/
    })
  }

  public updateItemValue($event) {
    console.log($event)
  }
}
