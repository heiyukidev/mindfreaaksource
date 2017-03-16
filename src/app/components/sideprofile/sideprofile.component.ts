import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sideprofile',
  templateUrl: './sideprofile.component.html',
  styleUrls: ['./sideprofile.component.css']
})
export class Sideprofile implements OnInit {

  @Input() data;
  
  constructor() { }

  ngOnInit() {
  }

}
