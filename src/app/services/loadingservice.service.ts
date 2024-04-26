import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingserviceService {

  private Loading: boolean = false;

  constructor() { }

  // Method to start loading
  startLoading(): void {
    this.Loading = true;
  }

  // Method to stop loading
  stopLoading(): void {
    this.Loading = false;
  }

  // Method to check if loading
  isLoading(): boolean {
    return this.Loading;
  }
}
