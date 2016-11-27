import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	user = {};
	items: FirebaseListObservable<any[]>;
	constructor(public af: AngularFire) {
		this.af.auth.subscribe(user => {
			if(user) {
				// Logged in
				console.log("Authenticate: Logged in");
				console.log(user);
				this.user = user;	
				this.items = af.database.list('/items');
			} else {
				// Not logged in
				console.log("Authenticate: Not");
				this.user = {}
			}	
		})
	}

	login() {
		console.log("Login");
		this.af.auth.login({
	    	provider: AuthProviders.Google
	  	});
	}
	 
	logout() {
		console.log("Logout");
	  	this.af.auth.logout();
	}

  	title = "It still works";
}
