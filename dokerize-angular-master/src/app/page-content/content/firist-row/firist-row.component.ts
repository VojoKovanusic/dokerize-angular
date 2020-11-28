import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-firist-row',
  templateUrl: './firist-row.component.html',
  styleUrls: ['./firist-row.component.scss']
})
export class FiristRowComponent {

  constructor(private router: Router) {
  }

  redirectToActiveCourse() {
    this.router.navigate(['/dogadjaji']);

  }
}
