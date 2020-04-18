class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     };
     this.body = Bodies.rectangle(x, y, width, height, options);
     World.add(world,this.body);
     this.width = width;
     this.height = height;
    };

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      console.log(angle);
      if (keyIsDown(UP_ARROW) && angle >= -0.90){
        angle -= 0.02
        Matter.Body.setAngle(cannon.body,angle)
      }

      if (keyIsDown(DOWN_ARROW) && angle <= 0.55){
        angle += 0.03
        Matter.Body.setAngle(cannon.body,angle)
      }
      
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
      ellipse(220,270,75,75);
      rect(215,310,80,30);
      rectMode(CENTER);
      rect(220,340,160,40);
      ellipse(160,375,40,40);
      ellipse(280,375,40,40);
      
    };

                                                                                                                                                   
    

}