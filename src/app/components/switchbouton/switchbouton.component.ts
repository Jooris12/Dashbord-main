import { Component } from '@angular/core';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'switch',
    templateUrl: './switchbouton.component.html',
    standalone: true,
    imports: [FormsModule, InputSwitchModule]
})
export class Switch {
    checked: boolean = false;
}
