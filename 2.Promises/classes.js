class Rectangle{
    constructor(width, hight, color){
        this.hight= hight;
        this.width = width;
        this.color = color;
    }
    area(){
        const area = this.hight * this.width;
        return area;
    }

}
const rect = new Rectangle(2,4);
const area = rect.area();
console.log(area);
