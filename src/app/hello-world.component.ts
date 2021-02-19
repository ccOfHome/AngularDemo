import { Component } from '@angular/core';

@Component({
    selector: 'hello-world',
    template: `<h3>{{text}}</h3>`,
})
export class HelloWorldComponent {
    constructor() { }
    text = "123321";
}
