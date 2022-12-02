import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <!-- "Welcome" is the name given to the path for Welcome Page. (Main Page) -->
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <!-- "Products" is the name given to path for Product List Component(Our Products List Page) -->
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  pageTitle: string = "Acme Product Management";
  // pageViewCount: number = Math.random();
}
