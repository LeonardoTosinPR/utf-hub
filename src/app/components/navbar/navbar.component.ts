import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var M: any; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  ngAfterViewInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(elems, {
        coverTrigger: false 
      });
    });
  }
}