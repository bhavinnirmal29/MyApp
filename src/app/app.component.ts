import { Component } from '@angular/core';
import { LoadingserviceService } from './services/loadingservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';

  constructor(private loaderService: LoadingserviceService) { }

  fetchData(): void {
    // Start loading
    this.loaderService.startLoading();

    // Simulate fetching data
    setTimeout(() => {
      // Stop loading after data is fetched
      this.loaderService.stopLoading();
    }, 2000);
  }
}
