import { Component } from '@angular/core';
import { MeterGroupModule } from 'primeng/metergroup';

@Component({
    selector: 'barre',
    templateUrl: './barre.component.html',
    standalone: true,
    imports: [MeterGroupModule]
})
export class Barre {
    value = [
        { label: 'Weekly payement limit', value: 15, color: 'bleu' }
    ];
}
