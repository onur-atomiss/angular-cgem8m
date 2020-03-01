import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormBuilder} from "@angular/forms";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    name;
    loginForm;
    @Output() successNotify = new EventEmitter();
    @Output() unsuccessNotify = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder,
    ) {
        this.name = "please sign in";
        this.loginForm = this.formBuilder.group({
            username: "",
            password: ""
        });
    }

    ngOnInit() {
    }

    login() {
        console.warn("Yourr order has been submitted", this.loginForm);
        if (
            this.loginForm.get('username').value == "admin" &&
            this.loginForm.get('password').value == "admin"
        ) {
            this.successNotify.emit();
            this.name = "admin";
        } else {
            this.unsuccessNotify.emit();
            this.name = "unknown";
        }
        this.loginForm.reset();

    }
}