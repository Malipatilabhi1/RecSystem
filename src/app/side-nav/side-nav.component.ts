import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  currentRoute: string;
  constructor(private router: Router) {
    this.currentRoute = "";
    this.getEndPoint()
   }
  dashboard: boolean = false;
  landing: boolean = false;
  selection: boolean = false;
  analysis: boolean = false;
  selectedOption:string='';
selectOption(option:string){
this.selectedOption =option;
}
  ngOnInit(): void {
  }
  getEndPoint() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.currentRoute = event.url;
        console.log(this.currentRoute);
        if ( this.currentRoute === "/dashboard") {
          this.dashboard = true;
          this.landing = false;
          this.selection=false;
          this.analysis=false;
        }
        if ( this.currentRoute === "/selection") {
          this.dashboard = false;
          this.landing = false;
          this.selection=true;
          this.analysis=false;
        } if ( this.currentRoute === "/analysis") {
          this.dashboard = false;
          this.landing = false;
          this.selection=false;
          this.analysis=true;
        }
      }
    });
  }
}
