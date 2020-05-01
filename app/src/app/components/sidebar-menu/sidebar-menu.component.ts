import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

import { CategoriesModel } from '../shared/categories.model';
import { rejects } from 'assert';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  providers: [ CategoriesService ]
})
export class SidebarMenuComponent implements OnInit {
  public categories: Array<CategoriesModel>
  public selectItem: CategoriesModel = { id: undefined, name: undefined }
  public categoryInsertValue: string = ''

  @Output() eventClicked = new EventEmitter<Event>();

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  public getCategories() {
    this.categoriesService.getCategories()
      .subscribe((response: Array<CategoriesModel>) => {
        this.categories = response
    })
  }

  public updateSelectCategory($event): void {
    this.eventClicked.emit($event);
    this.selectItem = $event;
  }

  public categoryNameBind($event): void {
    this.categoryInsertValue = $event.target.value
  }

  public insertCategory(): void {
    const data = { id: this.categories.length + 1, name: this.categoryInsertValue }
    this.categoriesService.postCategories(data).subscribe(() => {
      this.getCategories()
    })
  }
}
