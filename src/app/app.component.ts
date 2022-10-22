import { Component } from '@angular/core';
import { GeneralService } from './shared/services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public modalservice: GeneralService, public searchservice: GeneralService){

  }
}
