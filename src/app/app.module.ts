import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TogglerComponent } from './toggler/toggler.component';
import { SidebarService } from './sidebar/sidebar.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SidebarComponent, TogglerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SidebarService]
})
export class AppModule { }
