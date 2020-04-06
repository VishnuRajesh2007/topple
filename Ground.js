class Ground{
//Properties
constructor(x,y,height){

var option={
isStatic:true

}
this.body=Bodies.rectangle(x,y,400,height,option)
World.add(world,this.body)
this.height=height;
}






//functions
display(){
var pos=this.body.position;
rectMode(CENTER)
fill(180);
rect(pos.x,pos.y,400,this.height)
}


}