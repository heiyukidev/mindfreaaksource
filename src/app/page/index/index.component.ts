import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info/info.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [InfoService]
})
export class IndexPage implements OnInit {
  serivce;
  info;
  constructor(private service: InfoService) {

  }

  ngOnInit() {
    this.info = this.service.getInfo();
  }

}
