import { Component, OnInit } from '@angular/core';
import { Book, BookList } from '../shared/models/book.model';
import { BooksService } from '../shared/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  book: Book;

  constructor(private aBookService: BooksService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(prms => 
        this.aBookService.getBookList()
          .subscribe((res)=>{this.book=res.items[prms.pid]})
      )
  }
  
  goBack(): void {
      this.router.navigate(["/products"])
  }

}
