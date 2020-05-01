import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ListService } from 'src/app/services/list.service';

import { CategoriesModel } from '../shared/categories.model';
import { ListModel } from '../shared/list.model'

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
  providers: [ ListService ]
})
export class ListCardComponent implements OnInit {
  public lists: Array<ListModel>
  public itemValue: string

  @Input() public selectCategory: CategoriesModel

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    if (this.selectCategory) {
      this.listService.getLists(this.selectCategory.id)
        .subscribe((response: Array<ListModel>) => {
          this.lists = response
      })
    }
  }

  public updateItemValue($event) {
    console.log($event)
  }

  public inputItemList() {

  }
}
