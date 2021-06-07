class Bin{
 
    constructor(x,y,width,height,angle)
    {
        var option={
           isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        Matter.Body.setAngle(this.body,angle)
        this.width=width;
        this.height=height;
        this.angle=angle;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("blue")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();     
    }
}







