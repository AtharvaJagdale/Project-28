class Paper{

constructor()
{
    var option={
   restitution:0.3,
   friction:0.5,
   density:1

    }
this.body=Bodies.circle(100,500,20,option)
World.add(world,this.body)
}
display(){
    push()
   translate(this.body.position.x,this.body.position.y)
  rotate(this.body.angle)
    fill("gold")
    ellipseMode(CENTER)
    ellipse(0,0,40,40)
  pop()

}

}








