import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { ItemModel } from '../../shared/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [ ItemsService ]
})
export class ItemComponent implements OnInit {
  public items: Array<ItemModel> = []
  public itemValue: string = ''
  @Input() public list
  @Input() public listId
    
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.getItens()
  }

  public getItens(): void {
    if(this.list) {
      this.itemsService.getItems(this.list.categoryId, this.list.id)
        .subscribe((response: Array<ItemModel>) => {
          this.items = response
      })
    }
  }

  public updateItemStatus($event): void{
    this.itemsService.ubpdateItems(this.list.categoryId, $event.listId, $event)
    .subscribe()
  }

  public updateItemValue($event):void {
    this.itemValue = $event
  }

  public insertItem(): void {
    const data = { id: this.items.length + 1, name: this.itemValue, done: false}
    this.itemsService.postItems(this.list.categoryId, this.listId, data).subscribe(() => {
      this.getItens()
    })
  }
}
