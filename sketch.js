const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;
var ground, cannon, angle=0;

function setup() {
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    cannon = new Tanker(240,267,90,20);
    ground = new Ground(500,400,2000,10);
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

}

function draw() {
    background(255);
    Engine.update(engine);
    ground.display();
    cannon.display();
    
// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    // Call the shoot method for the cannon.
}