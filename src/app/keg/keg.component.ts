import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})
export class KegComponent implements OnInit {
  volume: number = 128;
  constructor() { }

  ngOnInit() {

  }

  pullPint() {
    this.volume--;
  }
}
