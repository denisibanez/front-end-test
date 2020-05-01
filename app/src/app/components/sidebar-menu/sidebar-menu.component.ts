import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

import { CategoriesModel } from '../shared/categories.model';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  providers: [ CategoriesService ]
})
export class SidebarMenuComponent implements OnInit {
  public categories: Array<CategoriesModel>
  public selectItem: CategoriesModel = { id: undefined, name: undefined }

  @Output() eventClicked = new EventEmitter<Event>();

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe((response: Array<CategoriesModel>) => {
        this.categories = response
    })
  }

  updateSelectCategory($event): void {
    this.eventClicked.emit($event);
    this.selectItem = $event;
  }
}
