import { Component, OnDestroy, OnInit, ɵisListLikeIterable } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./products.service";

@Component({
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})

// All the variables and functions under this are all part of the ProductListComponent export
// ProductListComponent uses NgOnInIt(Executes the code immediately), OnDestroy unsubscribes /
// from the observable
export class ProductListComponent implements OnInit, OnDestroy {
// PageTitle being used in the Product List HTMl as an interpolation
pageTitle = "Product List"
// Being used in the HTML for the products' width and margin
imageWidth = 50;
imageMargin = 2;
// Image won't show originally, think of false as showImage = "off"
showImage: boolean = false;
errorMessage: string = "";
sub!: Subscription;

// Private variable of _listFilter, a string type variable with an empty value
private _listFilter: string ='';
// GETS the value of listFilter
get listFilter(): string {
// Returns the value of listFilter
  return this._listFilter;
}

// SETS in a value for the GET to grab. The value comes from the performFilter function.
set listFilter(value:string) {
  this._listFilter = value;
  console.log("In setter:", value);
// Telling filteredProducts(IProduct array) = the value returned by the performFilter
  this.filteredProducts = this.performFilter(value);
}
// filteredProducts is an array of the products after filtering
filteredProducts: IProduct[] = [];
// Products just shows all of the products
products: IProduct[] = [];

// Private variable name of productService that grabs the ProductService service from product.service.ts
// It tells the page to load the products before the page even finishes loading
constructor(private productService: ProductService) {}

// Function that performs the actual filtering. filterBy = IProduct[]
// performFilter function, takes in a string(what we type in) known as filterBy, /
// then returns an array of products
performFilter(filterBy: string): IProduct[] {
// filterBy variable(basically IProduct[]) that turns all words into lowercase
  filterBy = filterBy.toLocaleLowerCase();
// Filter is an Angular function, does what the name saids. Returns the products after filter function /
// filter(product: IProduct), returns a filtered array
// Basically does filtering behind the scenes
  return this.products.filter((product: IProduct) =>
// Does string comparison to see does product name includes user entered string /
// Spits out the results
  product.productName.toLocaleLowerCase().includes(filterBy));
}

// toggleImage function. Void means when using = doesn't mean assigning a value to a variable /
// instead, it means something = something. In this case, showImage(false/off) = not showImage(true/on)
toggleImage(): void {
  this.showImage = !this.showImage;
}

// Void tells it not to actually return something
ngOnInit(): void {
  this.sub = this.productService.getProducts().subscribe({
    next: products => {
      this.products = products;
      this.filteredProducts = this.products;
    },
    error: err => this.errorMessage = err
  });

}
// Unsubscribes from the observable
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


onRatingClicked(message: string): void {
  this.pageTitle = "Product List: " + message;
}
}
