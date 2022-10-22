import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent implements OnInit {

  servicesData = [
    { heading : 'Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.', 
      tagline : 'Lorem ipsum dolor sit amet', 
    },
  ]
  servicesbox = [
    { heading : 'Lorem ipsum dolor sit amet', 
      tagline : 'Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.',
      img:  '../../../assets/images/c1.png' 
    },
    { heading : 'Lorem ipsum dolor sit amet', 
      tagline : 'Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.',
      img:  '../../../assets/images/c2.png' 
    },
    { heading : 'Lorem ipsum dolor sit amet', 
      tagline : 'Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.',
      img:  '../../../assets/images/c3.png' 
    },
  ]
  bigBanners = [
    { img1 : '../../../assets/images/ic1.png', 
      img2 : '../../../assets/images/ic2.png', 
      heading : 'Lorem ipsum dolor', 
      tagline : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh. Suspendisse lobortis lectus vel imperdiet ullamcorper.',
    },
  ]

  app = [
    { img1 : '../../../assets/images/app1.png', 
      img2 : '../../../assets/images/app2.png', 
      heading : 'Lorem ipsum dolor', 
      tagline : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh. Suspendisse lobortis lectus vel imperdiet ullamcorper.',
    },
  ]

  testi = [
    { img1 : '../../../assets/images/Snowflake.png', 
      img2 : '../../../assets/images/user-photo.png', 
      heading : 'emplate is awesome', 
      tagline : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh. Suspendisse lobortis lectus vel imperdiet ullamcorper.',
      name: 'John Doe',
      position: 'John Doe'
    },
  ]

  constructor() { }

  ngOnInit() {}

}
