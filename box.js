import * as THREE from 'three';
import { createScene } from './createScene.js';

const { scene, camera, renderer } = createScene();

const geometry = new THREE.BoxGeometry(1.2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x00f1f1 });

// @param geometry — An instance of THREE.BufferGeometry BufferGeometry. Default THREE.BufferGeometry `new THREE.BufferGeometry()`.
// @param material — A single or an array of THREE.Material Material. Default THREE.MeshBasicMaterial `new THREE.MeshBasicMaterial()`.
const cube = new THREE.Mesh(geometry, material);

const position_z = 5;
scene.add(cube);
camera.position.z = position_z;

function loop() {
    requestAnimationFrame(loop);
    cube.rotation.z += 0.014;
    renderer.render(scene, camera);
}

loop();

/*
loop : renderer to draw the scene every time the screen is refreshed (60 times per second).
requestAnimationFrame has a number of advantages. Perhaps the most important one is that it pauses when the user navigates to another browser tab,

*/