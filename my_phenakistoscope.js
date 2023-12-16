const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(faces);
  layer1.mode( SWIRL(5) );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
}

function faces(x, y, animation, pScope){
  
  //scale(animation.frame*2);

  //ellipse(0,0,50,50); // draw head
  //fill(30);
  //ellipse(-10,-10,10,10); //draw eye
  //ellipse(10,-10,10,10); // draw eye
  //arc(0,10,20,10,0,180); // draw mouth

}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(145, 222, 135)
  arc(x,y,600,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255) // gatsby
  ellipse(-50,-300-animation.wave()*50,60,40) // .wave is a cosine wave btw
  fill(1)
  ellipse(-70,-300-animation.wave()*50,10,10)

  fill(150) // astro
  ellipse(50,-300-animation.wave()*50,60,40) // .wave is a cosine wave btw
  fill(1)
  ellipse(70,-300-animation.wave()*50,10,10)

  strokeWeight(2)
  stroke(201, 144, 46)
  fill(240, 220, 141) // beef
  ellipse(50,-800-animation.wave()*50,250,170) // .wave is a cosine wave btw
}
