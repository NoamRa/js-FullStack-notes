import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { apiKeys } from '../global-config/apiKeys';
import { Book, BookRootObj, BookList} from '../models/book.model';



@Injectable()
export class BooksService {
    constructor(private httpClient: HttpClient){}

    googleBooksApi = "https://www.googleapis.com/books/v1/volumes"
    query = "a"
    qParams = {
      q: this.query,
      maxResults: 40,
      // fields: "items(saleInfo/listPrice,volumeInfo(authors,description,imageLinks(smallThumbnail,thumbnail),language,mainCategory,pageCount,publishedDate,publisher,subtitle,title))",
      key: apiKeys.google
    }
    qParamsStr = Object.keys(this.qParams)
    .map((key, i) => `${key}=${encodeURIComponent(this.qParams[key])}`)
    .join('&')

    getBookList():Observable<BookRootObj> {
      let reqString:string = `${this.googleBooksApi}?${this.qParamsStr}`;
      // console.log(`sending request to: reqString);
      return this.httpClient.get<BookRootObj>(reqString);
    }

    getBookListQuery(query: string = "a"):Observable<BookRootObj> {
      this.qParams.q = query;
      let reqString = `${this.googleBooksApi}?${this.qParamsStr}`;
      console.log(`sending request to: ${reqString}`);
      return this.httpClient.get<BookRootObj>(reqString);
    }
}