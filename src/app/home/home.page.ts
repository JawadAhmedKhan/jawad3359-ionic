import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = {
    name: 'Jawad Khan',
    city: 'Islamabad',
    interests: ['Cricket', 'Reading', 'Cricket', 'Games']
  };

  constructor() {}

}
