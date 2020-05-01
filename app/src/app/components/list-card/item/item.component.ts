import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { ItemModel } from '../../shared/item.model';
import { CategoriesModel } from '../../shared/categories.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [ ItemsService ]
})
export class ItemComponent implements OnInit {
  public listSelect = ''
  public oldValue
  public items: Array<ItemModel> = []

  @Input() public selectCategory: CategoriesModel
  @Input() public listId: number
  
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.oldValue
    const changeList = (this.listId !==  this.oldValue &&  this.oldValue !== '')
    if(changeList) {
      if (this.selectCategory && this.listId) {
        this.itemsService.getItems(this.selectCategory.id, this.listId)
          .subscribe((response: Array<ItemModel>) => {
            this.items = response
        })
      }
    }

    this.oldValue = this.listId
  }

  public updateItemStatus($event) {
    this.itemsService.ubpdateItems(this.selectCategory.id, this.listId, $event)
      .subscribe((response: Array<ItemModel>) => {
        // console.log('res', response)
    })
  }

  public saveListSelect($event): void {
    console.log($event)
    this.listSelect = $event
  }

}
