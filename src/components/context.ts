
export interface ScrollPos {
    x: number;
    y: number;
}

export class Context {
    static context: Context = new Context();
    onScroll: Array<(p: ScrollPos) => void> = new Array();
    scaleFactor = 1;

    constructor() {
        window.onscroll = (e: UIEvent) => {
            var doc = document.documentElement;
            var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
            var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
            // tslint:disable-next-line:no-console
            // console.log(left, top);
            this.onScroll.forEach(k => {
                k({x: left, y: top * this.scaleFactor});
            });
        };
    }
}