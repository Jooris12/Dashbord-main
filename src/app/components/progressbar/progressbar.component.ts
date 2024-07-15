import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
    selector: 'progressbar',
    templateUrl: './progressbar.component.html',
    standalone: true,
    imports: [ProgressBarModule]
})
export class ProgressBar {}
