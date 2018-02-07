import { Component, Input } from '@angular/core';
import { Book } from '../shared/models/book.model'

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent {

  @Input("book") book:Book;

}
