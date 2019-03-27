import { Component, OnInit, HostListener } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css']
})
export class TogglerComponent implements OnInit {
 @HostListener('click') onToggle() {

   this.sbarSrv.toggleSidebar();
 }
  constructor(private sbarSrv: SidebarService) { }

  ngOnInit() {
  }

  

}