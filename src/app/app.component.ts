import { Component } from '@angular/core';

import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Stack Home';

  constructor(
    private firebaseService: FirebaseService
  ) {}
  
  onClick(e) {
    console.log(e);
  }

}