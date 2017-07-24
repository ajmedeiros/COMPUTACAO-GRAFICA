function criaCometas (quantidade) {
	cometa.lenght = 0;
	for ( var i = 0; i < quantidade; i ++ ) {
		cometa.push(objLoader ('cometa/', 'cometa.mtl', 'cometa.obj'));
		
		cometa[i].position.x =  ( 2.0 * Math.random() - 1.0 );
		cometa[i].position.y = ( 2.0 * Math.random() - 1.0 );
		cometa[i].position.z =  ( 2.0 * Math.random() - 1.0 );

		cometa[i].position.normalize();
		cometa[i].position.multiplyScalar (Math.random() * 10000 + 1000);
		
		cometa[i].rotation.x = Math.random() * Math.PI;
		cometa[i].rotation.y = Math.random() * Math.PI;
		cometa[i].rotation.z = Math.random() * Math.PI;

		cometa[i].scale.multiplyScalar (20 + 80 * Math.random());
		
		cometa.lenght++;
		scene.add( cometa[i] );
	}
}

function atualizaCometas () {
	for (var i = 0; i < cometa.lenght; i++) {
		cometa[i].position.x += (Math.random()/2);
		cometa[i].position.y += (Math.random()/2);
		cometa[i].position.z += (Math.random()/2);
		cometa[i].rotateX (.001);
		cometa[i].rotateY (.001);
		cometa[i].rotateZ (.001);
	}
}