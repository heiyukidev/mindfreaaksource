import { Component, OnInit ,Input} from '@angular/core';
@Component({
  selector: 'block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class Block implements OnInit {
@Input() title;
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
