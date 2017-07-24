function inicializaCameras () {
	cameras.push (new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, .1, 1e7 ));
	cameras[0].position.set (0, 5, 25);
	
	cameras.push (new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, .1, 1e7 ));
	cameras[1].position.set (0, 7500, 15000);
	
	cameras.push (new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, .1, 1e7 ));
	cameras[2].position.set (0, 10000, -25000);
	cameras[2].lookAt (new THREE.Vector3 (0, 0, 0));
	
	cameras.push (new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, .1, 1e7 ));
	cameras[3].position.set (0, 20000, 0);
	cameras[3].lookAt (new THREE.Vector3 (0, 0,-7500));
	
	cameras.push (new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, .1, 1e7 ));
	cameras[4].position.set (0, tamanhoAstronauta, 0);
	
	cameras.push (new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, .1, 1e7 ));
	cameras[5].position.set (0, tamanhoAstronauta, 0);
	
	cameras.push (new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, .1, 1e7 ));
	cameras[6].position.set (0, tamanhoAstronauta, 0);
	
	cameras.push (new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, .1, 1e7 ));
	cameras[7].position.set (0, tamanhoAstronauta, 0);
	
	cameras.push (new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, .1, 1e7 ));
}

function alteraCamera () {
document.onkeydown = function(e) {
    switch (e.keyCode) {
		case 107:
			cameras[0].position.multiplyScalar (2);
			break;
		case 109:
			cameras[0].position.multiplyScalar (1/2);
			break;
        case 49:
			indiceCamera = 0;
            break;
        case 50:
			indiceCamera = 1;
            break;
        case 51:
			indiceCamera = 2;
            break;
        case 52:
			indiceCamera = 3;
            break;
		case 53:
			indiceCamera = 4;
			break;
		case 54:
			indiceCamera = 5;
			break;
		case 55:
			indiceCamera = 6;
			break;
		case 56:
			indiceCamera = 7;
			break;
		case 57:
			indiceCamera = 8;
			break;
		case 8:
			if (eixo == -1) {
				scene.add (eixo1); scene.add(eixo2);
			}
			else {
				scene.remove(eixo1); scene.remove(eixo2);
			}
			eixo *= -1;
			break;
    }
};
}