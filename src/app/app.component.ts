import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-login> Child Loading... </app-login>', // Calling Child using child selector.
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native,
})
export class AppComponent {
  title = 'app';
}
