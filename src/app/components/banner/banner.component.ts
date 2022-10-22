import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})


export class BannerComponent implements OnInit {
  
  bannerData = [
    { heading : 'Simple PSD template with cool stuff', 
      tagline : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
      thankyou : 'Thanks for downloading our template!',
      hopetext : 'Hope that you enjoy it well! Check also our site',
      sitelinkbutton: 'www.symu.co',
      explorebutton: 'EXPLORE TEMPLATE',
   },
  ]

  constructor(public modalservice: GeneralService){

  }


  ngOnInit() {
    
  }

}
