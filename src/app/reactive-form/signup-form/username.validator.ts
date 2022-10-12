import { AbstractControl, ValidationErrors } from "@angular/forms";

const users = ['Phyo', 'Thiha', 'Kyaw'];
export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).includes(' '))
      return { cannotContainSpace: true };

    return null;
  }

  static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
    let isFound;
    for (let user of users) {
      if ((control.value as string) === user) {
        isFound = true;
        break;
      }

      else isFound = false;
    }

    if (isFound) return { shouldBeUnique: true };
    return null;
  }
}