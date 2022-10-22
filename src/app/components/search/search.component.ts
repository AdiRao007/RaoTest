import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public searchservice: GeneralService) { }

  ngOnInit(): void {
  }

}
