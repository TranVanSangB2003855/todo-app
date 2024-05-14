import { AbstractControl, ValidationErrors } from '@angular/forms';

export class NameWhiteSpace {
    static noSpaceAllowed(control: AbstractControl) : ValidationErrors | null {
        if(control.value.trim().length === 0){
            return {noSpaceAllowed: true}
        }

        return null;
    }
}
