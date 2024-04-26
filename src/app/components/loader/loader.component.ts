import { Component } from '@angular/core';
import { LoadingserviceService } from 'src/app/services/loadingservice.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  constructor(public loaderService: LoadingserviceService) { }
}
