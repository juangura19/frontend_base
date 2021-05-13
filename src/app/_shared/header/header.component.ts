import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('drawer1') drawer1: MatDrawer;

  @Input('drawer') drawer: MatDrawer;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  drawerToogle(){
    this.drawer.toggle();
  }

  drawerToogle1(){
    this.drawer1.toggle();
  }

}
