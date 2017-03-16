import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class Skills implements OnInit {
  @Input() title;
  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
