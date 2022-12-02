// JS File that uses Welcome HTML as Template, {{pageTitle}} in the HTML
import { Component } from '@angular/core';

@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
}
