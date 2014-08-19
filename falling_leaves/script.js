window.onload = draw;
	
	function draw(){
		var canvas = document.getElementById('myCanvas');
		if (canvas.getContext){
			var context = canvas.getContext('2d');
			drawFractalTree(context);
		}
		else{
			alert("HTML5 Canvas isn't supported by your browser!");
		}
	}
 
	//function to define the fractal tree
	function drawFractalTree(context){
		drawTree(context, 800, 800, -90, 11);
	}
 
	//function to draw a tree
	function drawTree(context, x1, y1, angle, depth){
 
		var BRANCH_LENGTH = random(0, 20);
 
		if (depth !== 0){
			var x2 = x1 + (cos(angle) * depth * BRANCH_LENGTH);
			var y2 = y1 + (sin(angle) * depth * BRANCH_LENGTH);
			
			drawLine(context, x1, y1, x2, y2, depth);
			drawTree(context, x2, y2, angle - random(15,20), depth - 1);
			drawTree(context, x2, y2, angle + random(15,20), depth - 1);
		}
	}
 
	function drawLine(context, x1, y1, x2, y2, thickness){
		context.fillStyle   = '#000';
		if(thickness > 6)
		context.strokeStyle = 'rgb(139,126, 102)'; //Brown		
		else
			context.strokeStyle = 'rgb(34,139,34)'; //Green
 
		context.lineWidth = thickness * 1.5;
		context.beginPath();
 
		context.moveTo(x1,y1);
		context.lineTo(x2, y2);
 
		context.closePath();
		context.stroke();
	}
 
 
	function cos (angle) {
		return Math.cos(deg_to_rad(angle));
	}
 
	function sin (angle) {
		return Math.sin(deg_to_rad(angle));
	}
 
	function deg_to_rad(angle){
		return angle*(Math.PI/180.0);
	}
 
	function random(min, max){
		return min + Math.floor(Math.random()*(max+1-min));
	}