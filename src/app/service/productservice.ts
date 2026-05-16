import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ProductInterface} from "../interfaces/product.interface";

@Injectable({
    providedIn: 'root',
})
class Productservice {
    getProducts(): Observable<ProductInterface[]> {
        return new BehaviorSubject<ProductInterface[]>(productsList);
    }
}

export default Productservice

const productsList: ProductInterface[] = [{
    id: 1,
    name: "One",
},
    {
        id: 2,
        name: "Two",
    }]