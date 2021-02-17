import { FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms"

export const validarQueSeanIguales: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const password = control.get("password")
  const passwordConfirm = control.get("passwordConfirm")

  return password.value === passwordConfirm.value
    ? null
    : { noSonIguales: true }
}
