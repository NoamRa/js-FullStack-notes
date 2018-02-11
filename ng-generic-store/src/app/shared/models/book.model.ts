export interface VolumeInfo {
  title:string,
  authors?: string[],
  publisher?: string,
  publishedDate?: string,
  description?: string,
  pageCount?: number,
  imageLinks?: {
    smallThumbnail?: string,
    thumbnail?: string
  },
  language?: string
}

export interface Book {
  volumeInfo: VolumeInfo;
}

export interface BookList {
  bookList: Book[];
}

export interface BookRootObj {
  items: BookList;
}