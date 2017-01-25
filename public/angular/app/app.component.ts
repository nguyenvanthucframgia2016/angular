import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'angular/app/layout.html'
})

export class AppComponent {
    public hero = { id: 1, name: 'Nguyen Sa', sex: 'Male' };
}