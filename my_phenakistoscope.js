const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(STATIC_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

  pScope.load_image_sequence("rabbit", "png", 2);
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(sky);
  layer1.mode( RING );
  layer1.set_boundary( 0, 2000 );

  var layer2 = new PLayer(clouds);
  layer2.mode( SWIRL(5) );
  layer2.set_boundary( 0, 2000 );

  var layer3 = new PLayer(centre);
  layer3.mode( RING );
  layer3.set_boundary( 0, 400 );

  var layer4 = new PLayer(rabbit);
  layer4.mode(RING);
  layer4.set_boundary( 0, 2000 );
}

function sky(x, y, animation, pScope){
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
  
  pScope.fill_background(159, 198, 237); // sky colour 1

  noStroke();
  fill(137, 181, 224); // sky colour 2
  arc(x,y,1800,1800,backgroundArcStart,backgroundArcEnd);

  noStroke();
  fill(102, 142, 209); // sky colour 3
  arc(x,y,1600,1600,backgroundArcStart,backgroundArcEnd);
}


function clouds(x, y, animation, pScope){
scale(animation.frame*2);
ellipse(0,0,150,150); // cloud placeholder

}

function centre(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  scale(1.2);
  fill(145, 222, 135)
  arc(x,y,600,900,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255) // gatsby
  ellipse(-50,-300-animation.wave()*50,60,40) // .wave is a cosine wave btw
  fill(1)
  ellipse(-70,-300-animation.wave()*50,10,10)

  fill(150) // astro
  ellipse(50,-300-animation.wave()*50,60,40) // .wave is a cosine wave btw
  fill(1)
  ellipse(70,-300-animation.wave()*50,10,10)

}

function rabbit(x, y, animation, pScope){

  scale(.45);
  pScope.draw_image_from_sequence("rabbit", 0, -1500, animation.frame) // beef
}
