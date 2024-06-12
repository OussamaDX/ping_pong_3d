
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


let scene, camera, renderer;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0xFEFEFE);

const gltfLoader = new GLTFLoader();

gltfLoader.load('./Users/OUShassan/Downloads/Dragon.gltf', function(gltf) {
    const model = gltf.scene;
    console.log("Model loaded:", model);
    scene.add(model);
    renderer.render(scene, camera);
});

const aLight = new THREE.AmbientLight(0xFFFFFF, 1);
scene.add(aLight);

const dLight = new THREE.DirectionalLight(0xFFFFFF, 10);
scene.add(dLight);
dLight.position.set(4, 10, 3);

// renderer.render(scene, camera);


// let scene, camera, renderer;
// let paddle1, paddle2;
// let paddleSpeed = 0.2;

// function init() {
//     scene = new THREE.Scene();

//     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     // Paddle 1
//     paddle1 = createPaddle();
//     paddle1.position.x = -1.5;
//     scene.add(paddle1);

//     // Paddle 2
    // paddle2 = createPaddle();
    // paddle2.position.x = 1.5;
    // scene.add(paddle2);

//     // Table
//     const tableGeometry = new THREE.PlaneGeometry(4, 2);
//     const tableMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
//     const table = new THREE.Mesh(tableGeometry, tableMaterial);
//     table.rotation.x = -Math.PI / 2;
//     scene.add(table);
//     // animate();
// }

// function createPaddle()
// {
//     const geometry = new THREE.BoxGeometry(0.2, 0.1, 1);
//     const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//     return new THREE.Mesh(geometry, material);
// }

// function animate() 
// {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }

// init();
