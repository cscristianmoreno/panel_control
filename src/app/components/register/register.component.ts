import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject } from "rxjs";
import { HttpService } from "src/services/http.service";
import { SubmitComponent } from "../submit/submit.component";
import { ActionProvider } from "../submit/action.component";
import { RegisterService } from "src/services/register.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html"
})

export class RegisterComponent {
    form!: FormGroup;

    constructor(private register: RegisterService, private http: HttpService, private snackbar: MatSnackBar, private submit: ActionProvider) {
        this.form = this.register.form;
    }
    
    public async sendData() {
        this.submit.loading.next(true);
        await this.http.userRegister(this.form);
        this.submit.loading.next(false);
    }
}