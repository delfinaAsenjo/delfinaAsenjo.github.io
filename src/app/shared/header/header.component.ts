import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  scrollToContact() {
    const fragment = 'contact';
    
    // If already on the page, just scroll
    if (this.router.url.includes(`#${fragment}`) || document.getElementById(fragment)) {
      document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Update the URL with the fragment without reloading
      this.router.navigate([], { fragment });
    }
  }

}
