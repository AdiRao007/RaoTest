import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMobile = window.innerWidth <= 1023

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.onCloseWhenClickingOnMobile()
  }

  onCloseOnMobile() {
    // removes the visibility class and adds the hidden class.
    this.el.nativeElement.classList.remove('show-menu')
    this.el.nativeElement.classList.add('hide-menu')
  }

  onCloseWhenClickingOnMobile() {
    // just on mobile devices.
    if (window.innerWidth <= 1023) {
      // when the menu or backdrop is clicked the menu is closed.
      this.el.nativeElement.addEventListener('click', () => {
        this.onCloseOnMobile()
      })
    }
  }

}
