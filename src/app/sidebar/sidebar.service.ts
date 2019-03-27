import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class SidebarService {
  //Here or in constructor
  // isOpen = new BehaviorSubject<boolean>(false);
  isOpen: BehaviorSubject<boolean>;
  
  constructor() { 
    this.isOpen = new BehaviorSubject(false);
  }

  toggleSidebar() {
   this.isOpen.next(!this.isOpen.getValue());
  }

}