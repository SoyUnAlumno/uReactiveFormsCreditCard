import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl {
    // Overrides setter to run some custom logic on the value before it gets passed on and updates everythig in the form
    override setValue(value: string, options: any){
        console.log(value);
        // Calls parent value since original function was overridden
        super.setValue(value + '*',options);
    }
}
