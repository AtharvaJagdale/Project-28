class Ground {

constructor()
{
var option={
 isStatic:true
   }
    this.body=Bodies.rectangle(400,680,800,20,option)
    World.add(world,this.body)


}
display()
{
    push()
    fill("brown")
 rectMode(CENTER)
 rect(this.body.position.x,this.body.position.y,800,20)
 pop ()
}



 
}