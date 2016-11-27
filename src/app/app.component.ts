import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	items: FirebaseListObservable<any[]>;
	console.log(af.database.list('/items'));
	constructor(af: AngularFire) {
		this.items = af.database.list('/items');
  	}
  	title = "It still works";
  //title = 'app works!';
}
