import { AfterViewInit, Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject, Observable, Subject, lastValueFrom } from "rxjs";
import { userStruct } from "src/app/interfaces/Interface";
import { HttpService } from "src/services/http.service";
import { DialogRegisterComponent } from "../../dialog/register/dialog.register.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterService } from "src/services/register.service";
import { IconService } from "src/services/icon.service";
import { SafeHtml } from "@angular/platform-browser";
import { UserService } from "src/services/user.service";
import { DialogConfirmationComponent } from "../../dialog/confirmation/dialog.confirmation.component";
import { DialogRef } from "@angular/cdk/dialog";
import { UserInfo } from "src/app/info/user";

@Component({
    selector: "app-section-users",
    templateUrl: "./users.component.html",
    styleUrls: [
        "./users.component.css"
    ]
})

export class SectionUsers implements AfterViewInit {

    dataSource!: userStruct[];

    displayColumns: string[] = [
        "avatar",
        "fullname",
        "email",
        "register",
        "lastsession",
        "actions"
    ]

    avatar!: SafeHtml;

    userInfo$!: Observable<userStruct | null>;
    
    constructor(private icon: IconService, private http: HttpService, private dialog: MatDialog, private userService: UserService, private user: UserInfo) {
        this.userInfo$ = this.user.user$;
    }

    public async ngAfterViewInit() {
        this.avatar = await this.icon.getIcon("users/users.svg");    

        this.userService.getAllUsers();

        this.userService.users$.subscribe((res: userStruct[]) => {
            this.dataSource = res;
        })
    } 

    public deleteById(id: string) {
        const dialog = this.dialog.open(DialogConfirmationComponent);

        dialog.afterClosed().subscribe(async (res) => {
            if (!res) {
                return;
            }

            await this.http.deleteUser(id);
            this.userService.getAllUsers();
        })
    }

    public transformDate(date: string) {
        return new Date(date).toLocaleString();
    }

    public showDialog() {
        this.dialog.open(DialogRegisterComponent);
    }
}