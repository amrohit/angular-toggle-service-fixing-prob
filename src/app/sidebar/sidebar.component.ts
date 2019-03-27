import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from './sidebar.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  @HostBinding('class.is-active') toggleState: boolean = false;
  ObsSubsription: Subscription;
  constructor(private sbarSrv: SidebarService) { }

  ngOnInit() {
    this.ObsSubsription = this.sbarSrv.isOpen.subscribe(
      (state: boolean) => {
        console.log(`Observate State is ${state}`)
        // alert(state);
        this.toggleState = state
      }
    )
  }
  ngOnDestroy() {
    this.ObsSubsription.unsubscribe();
  }

}