import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class Content implements OnInit {

  @Input() title;
  @Input() text;
  @Input() date;
  constructor() { }

  ngOnInit() {
  }

}
