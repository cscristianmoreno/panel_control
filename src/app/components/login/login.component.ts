import { AfterViewInit, Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpService } from "src/services/http.service";
import { ActionProvider } from "../submit/action.component";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html"
})

export class LoginComponent {

    form!: FormGroup;
    showPassword: boolean = false;

    constructor(private fb: FormBuilder, private http: HttpService, private action: ActionProvider) {
        this.form = this.fb.group({
            "email": ["", [
                Validators.required,
                Validators.email,
                Validators.minLength(2),
                Validators.maxLength(30)
            ]],
            "password": ["", [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(30)
            ]]
        });
    }

    public async sendData() {
        this.action.loading.next(true);
        await this.http.userLogin(this.form);
        this.action.loading.next(false);
    }
}