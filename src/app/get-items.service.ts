import { ErrorHandler, Injectable } from '@angular/core';
import { SearchItem } from './searchresult';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import {map, catchError, retry} from 'rxjs/operators';
import { throwError } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    
  })
};


@Injectable({
  providedIn: 'root'
})
export class GetItemsService {
   dataUrl:string="http://35.194.198.56:8000/handleUpload/";
   //dataUrl:string="http://localhost:4000/handleUpload/"
  constructor(private http: HttpClient) { 
    
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  

  getItems(image:File){
    let formData = new FormData();
    formData.append('file', image);
    return this.http.post(this.dataUrl, formData, httpOptions).pipe(retry(3),
      catchError(this.handleError)
    );
  }

  samplePost(){
    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .subscribe(
        res => {
          console.log("The response is : ")
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }
}
