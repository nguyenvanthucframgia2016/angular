import { Component } from '@angular/core';

@Component({
    selector: 'my-form',
    templateUrl: 'angular/app/body/form/index.html'
})

export class FormComponent {
    public name = "Thuc po rao";
    public address = "Ha noi";
    public sex = 'Male';

    public onFocus() {
        console.log('1323');
    }
}