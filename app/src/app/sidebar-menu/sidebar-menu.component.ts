import { Component, OnInit } from '@angular/core';

import { Categorys } from './categoty.mock'

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  public categorys: Array<Object> = Categorys

  constructor() { }

  ngOnInit(): void {
    console.log(this.categorys)
  }

}
