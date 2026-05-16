import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AutoCompleteCompleteEvent, AutoCompleteModule} from 'primeng/autocomplete';

@Component({
    selector: 'app-formulaire',
    imports: [FormsModule, AutoCompleteModule],
    templateUrl: './formulaire.html',
    styleUrl: './formulaire.css',
})
export class Formulaire {
    items: any[] = [];
    value: any;

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
    }
}
