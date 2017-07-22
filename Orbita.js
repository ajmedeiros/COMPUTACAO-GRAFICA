function terraLua () {
	var incremento = .0001;
	teta += incremento;
	if (teta == 2*Math.PI)
		teta = 0;

	//Rotação
	obj[2].rotateX (incremento);
	obj[2].rotateY (incremento);
	obj[2].rotateZ (10*incremento);
	obj[1].rotateY (2*incremento);

	obj[3].rotateX (incremento*2);
	obj[3].rotateY (incremento*2);
	obj[3].rotateZ (incremento*2);
	obj[4].rotateX (incremento*2);
	obj[4].rotateY (incremento*2);
	obj[4].rotateZ (incremento*2);
	obj[5].rotateX (incremento*2);
	obj[5].rotateY (incremento*2);
	obj[5].rotateZ (incremento*2);
	obj[6].rotateX (incremento*2);
	obj[6].rotateY (incremento*2);
	obj[6].rotateZ (incremento*2);
	
	//Lua orbita Terra
	obj[2].position.x = obj[1].position.x + 8000 * Math.sin (teta);
	obj[2].position.y = obj[1].position.y;
	obj[2].position.z = obj[1].position.z + 8000 * Math.cos (teta);
	
	//Astronauta "orbita" Lua
	obj[3].position.x = obj[2].position.x + 1200 * Math.cos (teta);
	obj[3].position.y = obj[2].position.y + 600 * Math.sin (teta) + 600 * Math.cos (teta);
	obj[3].position.z = obj[2].position.z + 1200 * Math.sin (teta);
	
	obj[4].position.x = obj[2].position.x;
	obj[4].position.y = obj[2].position.y + 1200 * Math.sin (teta);
	obj[4].position.z = obj[2].position.z + 1200 * Math.cos (teta);

	obj[5].position.x = obj[2].position.x + 1200 * Math.sin (teta);
	obj[5].position.y = obj[2].position.y;
	obj[5].position.z = obj[2].position.z + 1200 * Math.cos (teta);

	obj[6].position.x = obj[2].position.x + 1200 * Math.sin (teta);
	obj[6].position.y = obj[2].position.y + 1200 * Math.cos (teta);
	obj[6].position.z = obj[2].position.z;
}