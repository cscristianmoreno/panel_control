import { Component, Input } from "@angular/core";
import { sectionItemsStruct, userStruct } from "src/app/interfaces/Interface";

const SECTION_ITEMS: sectionItemsStruct[] = [
    { title: "Usuarios", color: "#59ceb2", icon: "people" },
    { title: "Mi cuenta", color: "#d7508d", icon: "settings" },
];

@Component({
    selector: "app-section-home",
    templateUrl: "./home.component.html",
    styleUrls: [
        "./home.component.css"
    ]
})

export class SectionHome {
    section_items: sectionItemsStruct[] = SECTION_ITEMS;

    @Input("userInfo")
    user!: userStruct;
}