import { Component, OnInit } from '@angular/core';
import { BooksService } from '../shared/services/books.service';
import { Book } from '../shared/models/book.model'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  bookList:Book[];

  constructor(private booksService:BooksService) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe(
      (res)=> {this.bookList=res.items}
    );
  }

}