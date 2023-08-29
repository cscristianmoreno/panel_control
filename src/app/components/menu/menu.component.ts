import { Component, Input } from "@angular/core";
import { SafeHtml } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { menuItemsStruct, userStruct } from "src/app/interfaces/Interface";
import { HttpService } from "src/services/http.service";
import { IconService } from "src/services/icon.service";
import { SanitizerService } from "src/services/sanitizer.service";

export const MENU_ITEMS: menuItemsStruct[] = [
    { item: "Inicio", icon: "home", path: "/" },
    { item: "Usuarios", icon: "people", path: "/users" },
    { item: "Mi cuenta", icon: "settings_outline", path: "/account" },
    { item: "Cerrar sesión", icon: "vpn_key_outline", path: "/login" },
]

@Component({
    selector: "app-menu",
    templateUrl: "./menu.component.html",
    styleUrls: [
        "./menu.component.css"
    ]
})

export class MenuComponent {
    icon!: SafeHtml;

    @Input("userInfo") 
    user!: userStruct;

    menu_items: menuItemsStruct[] = MENU_ITEMS;

    constructor(private iconService: IconService, private cookies: CookieService, private router: Router) {
    }

    public async ngAfterViewInit() {
        this.icon = await this.iconService.getIcon("menu/menu.svg");
    }

    public closeSession() {
        this.cookies.deleteAll();
        this.router.navigate(["/login"]);
    }
}