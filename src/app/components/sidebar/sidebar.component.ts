import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    standalone: true,
    imports: [MenuModule, BadgeModule, RippleModule, AvatarModule]
})
export class SidebarComponent implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                separator: true
            },
            {
                items: [
                    {
                        label: 'Overview',
                        icon:'pi-chart-line' ,
                        shortcut: '⌘+N'
                    },
                    {
                        label: 'Transaction',
                        icon: 'pi pi-search',
                        shortcut: '⌘+S'
                    },
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog',
                        shortcut: '⌘+O'
                    },
                    {
                        label: 'Cards',
                        icon: 'pi pi-inbox',
                        badge: '2'
                    },
                    {
                        label: 'Settings',
                        icon: 'pi pi-sign-out',
                        shortcut: '⌘+Q'
                    }
                ]
            },
            {
                separator: true
            }
        ];
    }
}
