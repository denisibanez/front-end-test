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
  public listId: number
  public listValue: string = ''
  @Input() public selectCategory: CategoriesModel

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    this.getLists()
  }

  public listNameBind($event): void {
    this.listValue = $event
  }

  public insertIdList($event): void {
    this.listId = $event
  }

  public getLists(): void {
    if (this.selectCategory) {
      this.listService.getLists(this.selectCategory.id)
        .subscribe((response: Array<ListModel>) => {
          this.lists = response
      })
    }
  }

  public inputList(): void {
    const data = { id: this.lists.length + 1, name: this.listValue}
    this.listService.postLists(this.selectCategory.id, data).subscribe(() => {
      this.getLists()
    })
  }
}
