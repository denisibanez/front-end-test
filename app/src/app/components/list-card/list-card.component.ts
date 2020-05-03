import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

import { CategoriesModel } from '../shared/categories.model';
import { ListModel } from '../shared/list.model'

import { ItemsService } from 'src/app/services/items.service';
import { ItemModel } from '../shared/item.model';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
  providers: [ ListService, ItemsService ]
})

export class ListCardComponent implements OnInit {
  public lists: Array<ListModel>
  public list: any
  public listValue: string = ''
  public itemValue: string = ''
  @Input() public selectCategory: CategoriesModel

  constructor(private listService: ListService, private itemsService: ItemsService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    this.getLists()
  }

  public listNameBind($event): void {
    this.listValue = $event
  }

  public insertIdList($event): void {
    this.list = $event
  }

  public updateItemValue($event):void {
    this.itemValue = $event
  }

  public getLists(): void {
    if (this.selectCategory) {
      this.listService.getLists(this.selectCategory.id)
        .subscribe((response: Array<ListModel>) => {
          this.lists = response
          this.lists.map((item: any) => {
            this.itemsService.getItems(item.categoryId, item.id)
              .subscribe((response: Array<ItemModel>) => {
                item.items = response
            })
          })
      })
    }
  }

  public getItens(): void {
    if(this.list) {
      this.itemsService.getItems(this.list.categoryId, this.list.id)
        .subscribe((response: Array<ItemModel>) => {
          this.lists.map((item: any) => {
            if(item.id === this.list.id) {
              this.list.items = response
            }
          })
      })
    }
  }

  public updateItemStatus($event): void{
    this.itemsService.ubpdateItems(this.selectCategory.id, $event.listId, $event)
    .subscribe()
  }

  public inputList(): void {
    const data = { id: this.lists.length + 1, name: this.listValue}
    this.listService.postLists(this.selectCategory.id, data).subscribe(() => {
      this.getLists()
    })
  }

  public insertItem(): void {
    const data = { id: this.list.items.length + 1, name: this.itemValue, done: false}
    this.itemsService.postItems(this.list.categoryId, this.list.id, data).subscribe(() => {
      this.getItens()
    })
  }
}
