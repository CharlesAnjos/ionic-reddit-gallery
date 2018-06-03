import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  posts: any
  subReddit = "EarthPorn"

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get('https://www.reddit.com/r/'+this.subReddit+'/new/.json?limit=10').map(res => res.json()).subscribe(data => {
      this.posts = data.data.children;
    })
  }

}
