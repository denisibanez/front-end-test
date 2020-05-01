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
  public items: Array<ItemModel>

  @Input() public selectCategory: CategoriesModel
  @Input() public listId: number
  
  constructor(private listService: ItemsService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.selectCategory && this.listId) {
      this.listService.getItems(this.selectCategory.id, this.listId)
        .subscribe((response: Array<ItemModel>) => {
          this.items = response
      })
    }
  }

  public updateItemStatus($event) {
    console.log($event)
  }

  public saveListSelect($event): void {
    console.log($event)
    this.listSelect = $event
  }

}
