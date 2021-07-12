class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;

      if(this.body.speed < 3){
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
      }
      else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5;
        tint(255, this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,30,40);
        pop();
      }

     }
    }