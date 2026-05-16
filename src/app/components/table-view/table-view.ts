import {Component, inject, OnInit,} from '@angular/core';
import {TableModule} from 'primeng/table';
import Productservice from '../../service/productservice';
import {ProductInterface} from '../../interfaces/product.interface';


@Component({
    selector: 'app-table-view',
    imports: [
        TableModule
    ],
    templateUrl: './table-view.html',
    styleUrl: './table-view.css',
})
export class TableView implements OnInit {
    products!: ProductInterface[];
    private productService = inject(Productservice);

    ngOnInit() {
        this.productService.getProducts().subscribe((data) => {
            this.products = data;
        });
    }
}
