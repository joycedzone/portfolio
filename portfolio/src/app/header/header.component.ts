import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  showMenu: boolean = false;

  headerItems = [
    {
      title: 'About',
      url: '/about',
      fragment: null,
      icon: '../../assets/about.svg'
    },
    {
      title: 'Portfolio',
      url: '/',
      fragment: 'portfolio',
      icon: '../../assets/portfolio.svg'
    },
    {
      title: 'Skills',
      url: '/about',
      fragment: 'skills',
      icon: '../../assets/skill.svg'
    },
    {
      title: 'Contact',
      url: '/',
      fragment: 'contact',
      icon: '../../assets/contact.svg'
    }
  ]

  ngOnInit(): void {
  }

  redirect(url: string, fragment?: string | null) {
    if (fragment) {
      this.route.navigate([url], { fragment: fragment })
    } else {
      this.route.navigate([url])
    }
    this.showMenu = false;
  }

}
