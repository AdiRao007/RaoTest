import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.scss']
})
export class DailogComponent implements OnInit {

  constructor(public modalservice: GeneralService){

  }
  
  ngOnInit(): void {
  }

}
