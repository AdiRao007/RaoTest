import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  footer = [
    { img1 : '../../../assets/images/footer-bg.png', 
      heading : 'Lorem ipsum dolor sit amet', 
      tagline : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttontext: 'SYMU.CO/FREEBIES',
    },
  ]

  constructor() { }

  ngOnInit() {}

}
