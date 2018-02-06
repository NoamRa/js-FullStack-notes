import { Component, OnInit } from '@angular/core';
import { BooksService } from '../shared/services/books.service';
import { Book } from '../shared/models/book.model'


@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})

export class MainSectionComponent implements OnInit {

  bookList:Book[];

  constructor(private booksService:BooksService) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe(
      (res)=> {this.bookList=res.items}
    );
  }

}
