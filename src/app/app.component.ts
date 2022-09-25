import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedFeature = 'recipe';
  isFalse = false;

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
