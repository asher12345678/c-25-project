class Paper {

constructor(x,y,r)
{
    var options=
    {
     isStatic:false,
     restitution:0.3,
     density:1.2,
     friction:0
    }

 this.body = Bodies.circle(x,y,r,options);
 World.add(world,this.body);
 this.image = loadImage("paper.png");
this.r = r;
}

display()
	{
			
			var Pos=this.body.position;		

			push()
			translate(Pos.x,Pos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill("black")
			image(this.image,0,0,this.r);
			pop()
			
	}

}