import { Component } from '@angular/core';

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
        `
    ]
})

export class BodyComponent {}