import { DialogRef } from "@angular/cdk/dialog";
import { Component, inject } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { RegisterService } from "src/services/register.service";
import { RegisterComponent } from "../../register/register.component";
import { HttpService } from "src/services/http.service";
import { ActionProvider } from "../../submit/action.component";
import { UserService } from "src/services/user.service";

@Component({
    selector: "app-dialog-register",
    templateUrl: "./dialog.register.component.html",
    styleUrls: [
        "./dialog.register.component.css"
    ]
})

export class DialogRegisterComponent { 

    form!: FormGroup;

    constructor(private register: RegisterService, private http: HttpService, private action: ActionProvider, private user: UserService) {
        this.form = this.register.form;
    }

    public async sendData() {
        this.action.loading.next(true);
        await this.http.userRegister(this.form);
        this.user.getAllUsers();
        this.action.loading.next(false);
    }
}