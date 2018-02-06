import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { apiKeys } from '../global-config/apiKeys';
import { Book } from '../models/book.model';



@Injectable()
export class BooksService {
    constructor(private httpClient: HttpClient){}

    googleBooksApi = "https://www.googleapis.com/books/v1/volumes"
    qParams = {
      q: "a",
      maxResults: 40,
      fields: "items(saleInfo/listPrice,volumeInfo(authors,description,imageLinks(smallThumbnail,thumbnail),language,mainCategory,pageCount,publishedDate,publisher,subtitle,title))",
      key: apiKeys.google
    }
    qParamsStr = Object.keys(this.qParams)
    .map((key, i) => `${key}=${encodeURIComponent(this.qParams[key])}`)
    .join('&')

    getBooks():Observable<any> {
      console.log(`sent request to: ${this.googleBooksApi}?${this.qParamsStr}`)
      return this.httpClient.get<any>(`${this.googleBooksApi}?${this.qParamsStr}`);
    }
}