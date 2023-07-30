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

  ngOnInit(): void {
  }

  redirect(url: string) {
    this.route.navigate([url])
    this.showMenu = false;
  }

}
