import { Component, Input } from '@angular/core';

@Component({
    selector: 'body-app',
    templateUrl: 'angular/app/body/index.html',
    styles: [
        `
            h4 {
                color: green;
            }

            .body-class {
                height: 100px;
                border: 1px solid red;
                background: yellow;
            }

            .background-red {
                height: 40px;
                border 1px solid black;
                background: red;
            }

            .margin-top-10 {
                margin-top: 10px;
            }

            .margin-botton-10 {
                margin-bottom: 10px;
            }
        `
    ]
})

export class BodyComponent {
    public imageUrl = "http://lorempixel.com/300/300";
    public isDisabled = true;
    public classes = "background-red";
    public marginTop10 = "margin-top-10";
    public marginBottom10 = "margin-botton-10";

    @Input() hero
}