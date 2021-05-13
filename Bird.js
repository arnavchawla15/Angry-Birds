// class Bird
// {
//     constructor(x,y,)
//     {
//         var option={
//             'restitution' : 0.8,
//             'friction': 0.3,
//             'density': 0.1
//         }
//         this.body=Bodies.rectangle(x,y,50,50,option);
//         World.add(world,this.body);
//         this.width=50;
//         this.height=50;
//         this.image = loadImage("bird.png");
//     }

//     display()
//     {
//         var pos=this.body.position;
//         pos.x = mouseX;
//         pos.y = mouseY;
//         var angle=this.body.angle;

//         push();
//         translate(pos.x,pos.y);
//         rotate(angle);
//         //rectMode(CENTER);
//         //rect(0,0,this.width,this.height);
//         imageMode(CENTER);
//         image(this.image,0,0,this.width,this.height)
//         fill("red");
//         pop();     
//     }
// }

// extends -> used to refer to a file.
class Bird extends BaseClass {
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("bird.png")
    }

    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display();
    }
}