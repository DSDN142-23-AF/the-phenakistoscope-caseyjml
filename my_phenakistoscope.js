const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(STATIC_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

  pScope.load_image_sequence("rabbit", "png", 3);
  pScope.load_image("cloud", "png");
  pScope.load_image("grass1", "png");
}

function setup_layers(pScope){

  new PLayer(null, 220);  // circle background

  var layer1 = new PLayer(sky);
  layer1.mode( RING );
  layer1.set_boundary( 0, 2000 );

  var layer2 = new PLayer(dandelions);
  layer2.mode( SWIRL(10) );
  layer2.set_boundary( 0, 2000 );

  var layer3 = new PLayer(centre);
  layer3.mode( RING );
  layer3.set_boundary( 0, 2000 );

  var layer4 = new PLayer(rabbit);
  layer4.mode(RING);
  layer4.set_boundary( 0, 2000 );

  var layer5 = new PLayer(clouds);
  layer5.mode(RING);
  layer5.set_boundary(0, 2000);
}

function sky(x, y, animation, pScope){
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
  
  pScope.fill_background(198,213,226,255); // sky colour 1

  noStroke();
  fill(225,229,228,255); // sky colour 2
  arc(x,y,1800,1800,backgroundArcStart,backgroundArcEnd);

  noStroke();
  fill(255,226,202,255); // sky colour 3
  arc(x,y,1450,1450,backgroundArcStart,backgroundArcEnd);

  noStroke();
  fill(250,242,225,255); // sky colour 4
  arc(x,y,1200,1200,backgroundArcStart,backgroundArcEnd);

  
}


function dandelions(x, y, animation, pScope){
scale(animation.frame*2);
ellipse(0,0,100,100); // dandelion placeholder

}


function centre(x, y, animation, pScope){

  scale(.4)
  pScope.draw_image("grass1", 0, 0)

  scale(1)
  fill(255) // gatsby
  ellipse(-50,-300-animation.wave()*50,60,40) 
  fill(1)
  ellipse(-70,-300-animation.wave()*50,10,10)

  fill(150) // astro
  ellipse(50,-300-animation.wave()*50,60,40) 
  fill(1)
  ellipse(70,-300-animation.wave()*50,10,10)

}

function rabbit(x, y, animation, pScope){

  scale(.35);
  pScope.draw_image_from_sequence("rabbit", 0, -1800, animation.frame) // beef
}

function clouds(x, y, animation, pScope){
  scale(.2);
  pScope.draw_image("cloud", 0, -4350-animation.wave()*50,60,40)

}