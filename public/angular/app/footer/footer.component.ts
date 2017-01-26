import { Component } from '@angular/core';

@Component({
    selector: 'footer-app',
    templateUrl: 'angular/app/footer/index.html',
    styleUrls: [
        'css/footer/footer.css',
        'css/header/header.css',
    ]
})

export class FooterComponent {
    public colspan = 2;
    public height = 200;
    public width = 600;
    public border = 1;
    public r = 100;
    public dangerButton = true;
    public isColor = false;

    public onClick(value) {
        console.log(value);
    }
}