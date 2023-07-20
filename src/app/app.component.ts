import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideBarOpen = true;
  @ViewChild('content', {static:false})el!:ElementRef;
  @ViewChild('scroller1') scroller: ElementRef | any;
  title = 'newPov';
  ngOnInit(): void {
    const div = this.scroller.nativeElement as HTMLDivElement;
    div.addEventListener('mouseover', e => {
      console.log('Mouse Over');
    });
    div.addEventListener('mouseout', e => {
      console.log('Mouse Out');
    });
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(private router: Router) {
    
   }
  shouldDisplaySidenav(): boolean {
    const currentRoute = this.router.url;
    return currentRoute !== '/landing';
  }
}
