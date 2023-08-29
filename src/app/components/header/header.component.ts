import { Component, Input } from "@angular/core";
import { userStruct } from "src/app/interfaces/Interface";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: [
        "./header.component.css"
    ]
})

export class HeaderComponent {
    
    @Input("userInfo")
    user!: userStruct;

    @Input("path")
    path!: string;
}