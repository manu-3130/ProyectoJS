//ESCENARIO

let scene;

function init(){
	const scene = new THREE.Scene();
	var loader = new THREE.TextureLoader();
	
	loader.load("../IMG/Fondoexterior.png", function(texture){
		scene.background = texture;
	});
	
	//CAMARA
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1 );
	
	//RENDER
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	
	const luz = new THREE.DirectionalLight(0xffffff, 6);
	luz.position.set(4, 8, 4);
	scene.add(luz)
	
	//3D
	const loader1 = new THREE.GLTFLoader();
	loader1.load("../IMG/SETH1/scene.gltf", function(gltf){
		car = gltf.scene.children[0];
		car.scale.set(0.3, 0.3, 0.3);
		scene.add(gltf.scene)
		renderer.render(scene, camera);
		car.position.x = -200
		car.position.y = 50
	})

	const loader5 = new THREE.GLTFLoader();
	loader5.load("../IMG/TATENEN1/scene.gltf", function(gltf){
		car = gltf.scene.children[0];
		car.scale.set(0.002, 0.002, 0.002);
		scene.add(gltf.scene)
		renderer.render(scene, camera);
		car.position.x = 25
		car.position.y = 8
	})

	//CONTROLADORES
/*  	const flycontrols = new THREE.FlyControls(camera, renderer.domElement)
	flycontrols.movementSpeed = 50;
	flycontrols.reollSpeed = 0.01
	flycontrols.autoForward =false
	flycontrols.dragToLock = false; */
	
	camera.position.z = 20;
	
	//FUNCION
	function animate() {
		requestAnimationFrame( animate );
		renderer.render( scene, camera );
		//flycontrols.update(0.5)
	}
	animate();
}

init();