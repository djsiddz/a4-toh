// Importing default
import { Component } from '@angular/core';
import { HeroesComponent } from './heroes.component';

// Writing the @Component declaration that contains information about how this
// component can be imported, it properties and any other dependencies
@Component({
  selector: 'my-app',
	templateUrl: './app.component.html'
})
export class AppComponent {
  title = "Tour of Heroes";
}
