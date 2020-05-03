import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    ListCardComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
