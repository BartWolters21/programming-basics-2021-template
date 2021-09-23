function drawDiamond() {
    var canvas = getElement();
    if (canvas.getContext){
      //Ruby's
      var x=100; var y=100;
      var w=200; var h=200;
      var ctx = canvas.getContext('2d');
      color=('#FF0000');
      sketch(x,y,w,h,ctx,color);
  
    }
  }

  function getElement() {
    return document.getElementById('myCanvas')
}
  
   function sketch(x,y,w,h,ctx,color){
      ctx.fillStyle=color;
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x+w/2,y+0.7*h);
      ctx.lineTo(x+w/2,y);
      ctx.fill();
      
      ctx.fillStyle=color;
      ctx.beginPath();
      ctx.moveTo(x+w/2, y);
      ctx.lineTo(x+w/2,y+0.7*h);
      ctx.lineTo(x+w,y);
      ctx.fill();
      
      // Upper left triangle
      ctx.beginPath();
      ctx.moveTo(x+w/4,y-0.3*h);
      ctx.lineTo(x,y);
      ctx.lineTo(x+w/2,y);
      ctx.fill();
      
      // centre inverted triangle
      ctx.fillStyle=color;
      ctx.beginPath();
      ctx.moveTo(x+w/4,y-0.3*h);
      ctx.lineTo(x+w/2,y);
      ctx.lineTo(x+0.75*w,y-0.3*h);
      ctx.fill();
      
      //Upper left triangle.
      ctx.fillStyle=color;
      ctx.beginPath();
      ctx.moveTo(x+0.75*w,y-0.3*h);
      ctx.lineTo(x+w/2,y);
      ctx.lineTo(x+w,y);
      ctx.fill();
    
      
   }