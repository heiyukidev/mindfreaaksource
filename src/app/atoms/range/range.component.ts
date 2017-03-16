import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class Range implements OnInit {
@Input() value;
@Input() title;
  constructor() { }

  ngOnInit() {
  }

}
