import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  burger = false
  ngOnInit(): void {
  }

  closeOpenMenu() {
    this.burger = !this.burger
  }
  onClickOutside() {
    this.burger = false
  }

  hideMenu1s() {
    setTimeout(() => {
      this.burger = false
    }, 100);
  }

}
