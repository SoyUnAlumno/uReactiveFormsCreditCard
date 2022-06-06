import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
cardForm = new FormGroup({
  name: new FormControl('', [
    Validators.required, 
    Validators.minLength(3),
   /*  Validators.maxLength(5), // Not needed, just examples after required and minLength
    Validators.pattern(/\s/), // User can only add spaces */
  ]),  

});
  constructor() { 
    console.log(this.cardForm.controls['name']);    
  }

  ngOnInit(): void {
  }

}
