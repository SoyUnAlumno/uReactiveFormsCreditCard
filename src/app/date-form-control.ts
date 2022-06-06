import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  // Overrides setter to run some custom logic on the value before it gets passed on and updates everythig in the form
  override setValue(value: string, options: any) {
    if (value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }
    // Disallows user of inputting more than needed
    if (value.length > 5) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }
    // Allows user to delete. Otherwise, since condition of 2 chars always true, user couldn't delte "12/"" for example
    if (value.length === 2 && this.value.length === 3) {
      // Sets the value of input to whatever the user is inputting
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
      return;
    }
    // Calls parent value since original function was overridden
    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
