class SlingShot{
    constructor(bodyA,bodyB){
        this.SlingShot = Constraint.create(options);  
        World.add(world,this.SlingShot); 

        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:'0.04',
            length:'10'
        }
    }

    display(){
        var pointA = this.SlingShot.bodyA.position; 
        var pointB = this.SlingShot.bodyB.position;      
        line(pointA.x,pointA.y,pointB.x,pointB.y)                  
    }
  }