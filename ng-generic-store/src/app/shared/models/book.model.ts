export class Book {
      volumeInfo:{
        title:string,
        authors: string[],
        publisher: string,
        publishedDate: string,
        description: string,
        pageCount: number,
        imageLinks: {
          smallThumbnail: string,
          thumbnail: string
        },
        language: string
      }
}