class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Start');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.greeting2 = createElement('h2');
    this.greeting2 = createElement('h3');
    this.greeting3 = createElement('h3');
    this.greeting4 = createElement('h3');

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.greeting2.hide();
    this.greeting3.hide();
    this.greeting4.hide();
    
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);
    
    this.greeting2.html("Up arrow to move forward");
    this.greeting3.html("Left and right arrow to knockdown other players");
    this.greeting4.html("Collect nitro whenever possible, use it for knockdowns")
    
    this.greeting2.position(displayWidth/2 - 180, 100);
    this.greeting3.position(displayWidth/2 - 180, 150);
    this.greeting4.position(displayWidth/2 - 180, 200);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
