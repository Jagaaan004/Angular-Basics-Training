import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { IProduct } from "./product";

// "Root" allows injectable to be used by any file in this project
@Injectable({
providedIn: "root"
})
// "Private" is a variable that will only be read in this file
// ProductService grabs the template of the list of products from the json file
// Json is kinda like a ZIP file for when people download projects off the web, it contains everything /
// a person needs to complete their project
export class ProductService {
private productUrl = "api/products/products.json";

// Constructors run the things in it before the webpage even finishes loading, a higher /
// priority version of NgOnInIt
// Made a private variable name of http, then telling it to use the HttpClient service to /
// be able to retrieve data from backend data base
constructor(private http: HttpClient) {}

// getProducts function, it's an observable(data), the data is the IProduct[]
// Returns the Product List from (this.productUrl), which is the Json of products
getProducts(): Observable<IProduct[]> {
// .Pipe takes the content on the left, and do something with it
  return this.http.get<IProduct[]>(this.productUrl).pipe(
// Tap returns an observable that is identical to the source. We took the data and stringify it/
// to make it readable for users
    tap(data => console.log("All", JSON.stringify(data))),
// catchError function, it catches an error. this.handleError tells catchError what to do with the error
    catchError(this.handleError)
  );
}


private handleError(err: HttpErrorResponse) {
// String is empty since we're gonna tell it what the error message is later
  let errorMessage = "";
// ErrorEvent looks for an error, and if it does, it goes into the if block, looks for "wrong/bad" events
  if (err.error instanceof ErrorEvent) {
    errorMessage = `An error occurred: ${err.error.message}`;
  } else {
    errorMessage = `Server returned ode: ${err.status}, error message is: ${err.message}`;
  }
  console.error(errorMessage);
  return throwError(()=>errorMessage);
  }
}
