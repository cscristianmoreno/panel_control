import { AfterViewInit, Component } from "@angular/core";
import { SafeHtml } from "@angular/platform-browser";
import { menuItemsStruct, sectionItemsStruct, userStruct } from "src/app/interfaces/Interface";
import { HttpService } from "src/services/http.service";
import { SanitizerService } from "src/services/sanitizer.service";

import { CookieService } from "ngx-cookie-service";
import { UserInfo } from "src/app/info/user";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Router } from "@angular/router";
import { MENU_ITEMS } from "../menu/menu.component";

@Component({
    selector: "app-panel",
    templateUrl: "./panel.component.html",
    styleUrls: [
        "./panel.component.css"
    ]
})

export class PanelComponent implements AfterViewInit {

    userInfo$!: Observable<userStruct | null>;
    menu_items: menuItemsStruct[] = MENU_ITEMS;

    item!: number;
    section!: string;

    constructor(private user: UserInfo, private router: Router) {
        this.userInfo$ = this.user.user$;
    }
    
    public async ngAfterViewInit() {
        this.item = this.menu_items.findIndex((value) => value.path == this.router.url);
        this.section = MENU_ITEMS[this.item].item;
    }
}