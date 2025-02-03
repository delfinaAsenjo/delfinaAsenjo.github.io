import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi Portafolio - Delfina Asenjo';
  // constructor(private router: Router) { }

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.route.queryParams.subscribe(params => {
          const fragment = params['scrollTo'];
          if (fragment) {
            setTimeout(() => {
              document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        });
      }
    });
  }
}
