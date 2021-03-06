import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buk-footer',
  templateUrl: './buk-footer.component.html',
  styleUrls: ['./buk-footer.component.css']
})
export class BukFooterComponent implements OnInit {

  todayDate: Date = new Date;
  todayYear: number;
  constructor() { }

  ngOnInit() {
    this.todayYear = this.todayDate.getUTCFullYear();
  }

}
