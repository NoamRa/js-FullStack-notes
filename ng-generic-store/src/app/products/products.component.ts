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

  constructor(private abooksService:BooksService,
              private router: Router) { }

  ngOnInit() {
    this.abooksService.getBookList().subscribe(
      (res) => this.bookList=res.items
    );
  }

  showFullDetails(pid:number) {
    this.router.navigate([`/products/${pid}`]);
  }

}