import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
 myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
   ];
  constructor() { }

  ngOnInit() {
  }

}
