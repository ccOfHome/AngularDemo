import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

// 选择器
@Directive({
    selector: '[appHighlight]', // .class #id tag [属性]
})
export class AppHighlightDirective { 

    @Input() appHighlight;

    // 注入ElementRef对象
    constructor(private el: ElementRef) {
        // el.nativeElement就是DOM节点
        // if (this.appHighlight == null) {
        //     el.nativeElement.style.background = 'yellow';
        // } else {
        //     el.nativeElement.style.background = this.appHighlight;
        // }
    }

    ngOnInit(): void {
        // el.nativeElement就是DOM节点
        // if (this.appHighlight == '') {
        //     this.el.nativeElement.style.background = 'yellow';
        // } else {
        //     this.el.nativeElement.style.background = this.appHighlight;
        // }
    }

    //事件控制颜色显示
    @HostListener('mouseover') onMouseover(){
        if (this.appHighlight == '') {
            this.el.nativeElement.style.background = 'yellow';
        } else {
            this.el.nativeElement.style.background = this.appHighlight;
        }
    }
    //事件控制颜色隐藏
    @HostListener('mouseout') onMouseout(){
        this.el.nativeElement.style.background = null;
    }
}