import { AfterViewInit, Component, Input } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ActionProvider } from "./action.component";

@Component({
    selector: "app-submit",
    templateUrl: "./submit.component.html", 
    host: {
        "class": "class_form_button_container"
    }
})

export class SubmitComponent implements AfterViewInit {
    loading$!: Observable<boolean>;

    @Input("title")
    title!: string;

    constructor(private action: ActionProvider) {
    }

    public ngAfterViewInit(): void {
        this.loading$ = this.action.loading$;
    }
}