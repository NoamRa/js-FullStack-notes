import { Directive , ElementRef , Renderer2 , HostListener} from '@angular/core';

@Directive({
    selector: '[app-hover]'
})

export class HoverDirective {

    constructor(private elRef:ElementRef , private renderer2: Renderer2){}

    @HostListener("mouseenter") enter(){
        this.renderer2.setStyle(this.elRef.nativeElement,'background-color' , "lightgrey");
    }

    @HostListener("mouseleave") leave(){
        this.renderer2.setStyle(this.elRef.nativeElement,'background-color' , "white");
    }
}