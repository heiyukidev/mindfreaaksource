import { Injectable, OnInit } from '@angular/core';


@Injectable()
export class InfoService {
  public profile = {
    "firstName": "Mahdi",
    "lastName": "Kahia",
    "nickName": "Unity Expert",
    "data": [
      {
        "icon": "contacts",
        "title": "anything",
        "text": "just say what you want i love you"
      },
      {
        "icon": "contacts",
        "title": "Adress",
        "text": "Dhabbout el guerda"
      }
    ],
    "skills":[{
      "title":"Unity",
      "value":"100"
    },{
      "title":"VR",
      "value":"80"
    }]
  };
  public work = [{
    "title": "hello",
    "date": "19/10/1993",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae facere, aliquam, quis, eligendi inventore, fugiat natus reprehenderit magni quia ipsum sequi eveniet cupiditate. Quidem eos cumque delectus molestiae voluptatum."
  }, {
    "title": "hello",
    "date": "19/10/1993",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae facere, aliquam, quis, eligendi inventore, fugiat natus reprehenderit magni quia ipsum sequi eveniet cupiditate. Quidem eos cumque delectus molestiae voluptatum."
  }, {
    "title": "hello",
    "date": "19/10/1993",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae facere, aliquam, quis, eligendi inventore, fugiat natus reprehenderit magni quia ipsum sequi eveniet cupiditate. Quidem eos cumque delectus molestiae voluptatum."
  }, {
    "title": "hello",
    "date": "19/10/1993",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae facere, aliquam, quis, eligendi inventore, fugiat natus reprehenderit magni quia ipsum sequi eveniet cupiditate. Quidem eos cumque delectus molestiae voluptatum."
  }];

  public Education = [{
    "title": "hello",
    "date": "19/10/1993",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae facere, aliquam, quis, eligendi inventore, fugiat natus reprehenderit magni quia ipsum sequi eveniet cupiditate. Quidem eos cumque delectus molestiae voluptatum."
  }, {
    "title": "hello",
    "date": "19/10/1993",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae facere, aliquam, quis, eligendi inventore, fugiat natus reprehenderit magni quia ipsum sequi eveniet cupiditate. Quidem eos cumque delectus molestiae voluptatum."
  }, {
    "title": "hello",
    "date": "19/10/1993",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae facere, aliquam, quis, eligendi inventore, fugiat natus reprehenderit magni quia ipsum sequi eveniet cupiditate. Quidem eos cumque delectus molestiae voluptatum."
  }, {
    "title": "hello",
    "date": "19/10/1993",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae facere, aliquam, quis, eligendi inventore, fugiat natus reprehenderit magni quia ipsum sequi eveniet cupiditate. Quidem eos cumque delectus molestiae voluptatum."
  }];
  public interesets = [{
    "title": "hello",
    "date": "19/10/1993",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae facere, aliquam, quis, eligendi inventore, fugiat natus reprehenderit magni quia ipsum sequi eveniet cupiditate. Quidem eos cumque delectus molestiae voluptatum."
  }, {
    "title": "hello",
    "date": "19/10/1993",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae facere, aliquam, quis, eligendi inventore, fugiat natus reprehenderit magni quia ipsum sequi eveniet cupiditate. Quidem eos cumque delectus molestiae voluptatum."
  }, {
    "title": "hello",
    "date": "19/10/1993",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae facere, aliquam, quis, eligendi inventore, fugiat natus reprehenderit magni quia ipsum sequi eveniet cupiditate. Quidem eos cumque delectus molestiae voluptatum."
  }, {
    "title": "hello",
    "date": "19/10/1993",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repudiandae facere, aliquam, quis, eligendi inventore, fugiat natus reprehenderit magni quia ipsum sequi eveniet cupiditate. Quidem eos cumque delectus molestiae voluptatum."
  }];

  getInfo() {
    return {
      "profile": this.profile,
      "work": this.work,
      "Education": this.Education,
      "interesets": this.interesets
    }
  }

}
