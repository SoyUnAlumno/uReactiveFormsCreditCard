import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
@Input() control: any;
  constructor() { }

  ngOnInit(): void {
    console.log("type of controls")
    console.log(this.control);
  }
}
