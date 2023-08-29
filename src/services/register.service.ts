import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable({
    providedIn: "root"
})

export class RegisterService {
    form!: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            "name": ["", [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(10)
            ]],
            "lastname": ["", [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(10)
            ]],
            "email": ["", [
                Validators.required,
                Validators.email,
                Validators.maxLength(50)
            ]],
            "password": ["", [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(30)
            ]],
            "repeatPassword": ["", [
                Validators.required,
                Validators.minLength(3)
            ]],
            "age": ["", [
                Validators.required,
                Validators.min(1),
                Validators.max(127)
            ]]
        })
    }
}