import { Component, ElementRef, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';
// import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    // boolean to add dynamically the 'aria-hidden' by attribute binding.
    isMobile = window.innerWidth <= 1023

    constructor(public searchservice: GeneralService) {}
  
    ngOnInit() {}
  
    showMenu() {
      // removes the hidden class and adds the visibility class.
      let navbar = document.getElementById('navbar')
    }

}
