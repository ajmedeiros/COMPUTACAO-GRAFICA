function terraLua () {
	var incremento = .0001;
	teta += incremento;
	if (teta == 2*Math.PI)
		teta = 0;

	if (u == 500)
		dir = -1;
	if (u == 0)
		dir = 1;
	
	u += dir;
	
	//Rotação Planetas
	obj[1].rotateY (2*incremento);
	obj[7].rotateY (2*incremento);
	obj[8].rotateY (2*incremento);
	obj[8].rotateX (incremento/2);
	
	//Rotação Luas
	obj[2].rotateX (incremento);
	obj[2].rotateY (incremento);
	obj[2].rotateZ (incremento);

	obj[9].rotateX (2*incremento);
	obj[9].rotateY (2*incremento);
	obj[9].rotateZ (2*incremento);
	
	obj[10].rotateX (4*incremento);
	obj[10].rotateY (4*incremento);
	obj[10].rotateZ (4*incremento);
	
	//Rotação Astronautas
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
	
	//Lua orbita Magnus
	obj[9].position.x = obj[8].position.x + 4000 * Math.sin (2*teta);
	obj[9].position.y = obj[8].position.y;
	obj[9].position.z = obj[8].position.z + 4000 * Math.cos (2*teta);
	
	//Lua orbita Quom
	obj[10].position.x = obj[7].position.x + 10000 * Math.sin (4*teta);
	obj[10].position.y = obj[7].position.y + 5000 * Math.cos (4*teta);
	obj[10].position.z = obj[7].position.z + 5000 * Math.cos (4*teta);
	
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
	
	//Atualiza câmera de acordo com a curva de Bézier
	cameras[8].position.x = bezier.vertices[u].x;
	cameras[8].position.y = bezier.vertices[u].y;
	cameras[8].position.z = bezier.vertices[u].z;
	cameras[8].lookAt (new THREE.Vector3 (0, 0, -5000));
	
}