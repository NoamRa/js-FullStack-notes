import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/models/book.model';
import { BooksService } from '../shared/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  book: Book;

  constructor(private productService: BooksService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
      this.route.params.subscribe(params => 
          this.book = this.productService.getBooks())
          // this.book = this.productService.getBooks(params.id))
  }
  
  getBookInfo(i:number):Book {
      return this.getBooks()[i];
  }

  goBack(): void {
      this.router.navigate(["/products"])
  }

}
