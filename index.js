import * as THREE from 'three';

let scene, camera, renderer;
let paddle1, paddle2, ball;
let paddleSpeed = 0.2, ballSpeed = { x: 0.2, y: 0.2, z: 0.2 };

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Paddle 1
    paddle1 = createPaddle();
    paddle1.position.x = -1.5;
    scene.add(paddle1);

    // Paddle 2
    paddle2 = createPaddle();
    paddle2.position.x = 1.5;
    scene.add(paddle2);

    // Ball
    ball = createBall();
    scene.add(ball);

    // Table
    const tableGeometry = new THREE.PlaneGeometry(4, 2);
    const tableMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
    const table = new THREE.Mesh(tableGeometry, tableMaterial);
    table.rotation.x = -Math.PI / 2;
    scene.add(table);

    animate();
}

function createPaddle() {
    const geometry = new THREE.BoxGeometry(0.2, 0.1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    return new THREE.Mesh(geometry, material);
}

function createBall() {
    const geometry = new THREE.SphereGeometry(0.05, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    return new THREE.Mesh(geometry, material);
}

function animate() {
    requestAnimationFrame(animate);

    // Move ball
    ball.position.x += ballSpeed.x;
    ball.position.y += ballSpeed.y;
    ball.position.z += ballSpeed.z;

    // Ball collision with walls
    if (ball.position.x <= -2 || ball.position.x >= 2) ballSpeed.x = -ballSpeed.x;
    if (ball.position.y <= -1 || ball.position.y >= 1) ballSpeed.y = -ballSpeed.y;
    if (ball.position.z <= -0.5 || ball.position.z >= 0.5) ballSpeed.z = -ballSpeed.z;

    renderer.render(scene, camera);
}

init();

