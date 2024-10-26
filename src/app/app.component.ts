import { Component, HostBinding, HostListener, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private isSelected = false;

  // Dynamically apply the 'active' class when isSelected is true
  @HostBinding('class.active') get activeClass() {
    return this.isSelected;
  }

  // Dynamically bind the background color style based on isSelected
  @HostBinding('style.backgroundColor') get backgroundColor() {
    return this.isSelected ? '#e8f5e9' : '#ffffff';
  }

  // Toggle isSelected on click
  @HostListener('click')
  toggleSelected() {
    this.isSelected = !this.isSelected;
  }
}
