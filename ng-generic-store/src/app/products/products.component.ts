import { Component, OnInit } from '@angular/core';
import { BooksService } from '../shared/services/books.service';
import { Book, BookList } from '../shared/models/book.model'
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  bookList: BookList;

  constructor(private booksService:BooksService,
              private router: Router) { }

  ngOnInit() {
    this.booksService.getBookList().subscribe(
      (res)=> {this.bookList=res.items}
    );
  }

  showFullDetails(i:number) {
    this.router.navigate([`/products/${i}`])
  }

}