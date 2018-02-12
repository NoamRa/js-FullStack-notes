import { Component, OnInit, ElementRef, ViewChild, EventEmitter } from '@angular/core';
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
              private router: Router,
              private ElementRef:ElementRef) { }

  localEvent:EventEmitter<string> = new EventEmitter<string>();

  @ViewChild("bookFilterInput") bookFilterRef:ElementRef;

  ngOnInit() {
    this.abooksService.getBookList()
    .subscribe((res) => this.bookList=res.items);

    this.localEvent.subscribe( (x)=> {console.log(x)} ) // subscribe to my own event
  }

  searchBooks(query){
    // console.log(query);
    console.log(this.bookFilterRef.nativeElement.value)
    this.abooksService.getBookListQuery(query)
      .subscribe((res) => this.bookList=res.items);
    
    this.localEvent.emit(query); //send events
  }


  showFullDetails(pid:number) {
    this.router.navigate([`/products/${pid}`]);
  }

}