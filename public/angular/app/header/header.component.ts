import { Component } from '@angular/core';

@Component({
    selector: 'header-app',
    templateUrl: 'angular/app/header/index.html'
})

export class HeaderComponent {
    public header = 'Header component';
    public color = '#4267b2';
    public active = true;

    public getStringHeader():string {
        return 'get String Header';
    }
}