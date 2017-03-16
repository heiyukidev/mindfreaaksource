import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'altcontent',
  templateUrl: './altcontent.component.html',
  styleUrls: ['./altcontent.component.css']
})
export class AltContent implements OnInit {
  @Input() title;
  @Input() text;
  @Input() icon;
  constructor() { }

  ngOnInit() {
  }

}
