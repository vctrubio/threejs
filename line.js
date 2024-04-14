import * as THREE from 'three';
import { createScene } from './createScene.js';

const { scene, camera, renderer } = createScene();

camera.position.set(1, 0, 5);
camera.lookAt(0, 0, 0);

const material = new THREE.LineBasicMaterial({ color: 0x00f1f1 });

const points = [];

function basico() {
    points.push(new THREE.Vector3(-2, 1, 0));
    points.push(new THREE.Vector3(1, 2, 0));
    points.push(new THREE.Vector3(-2, 1, 0));

    points.push(new THREE.Vector3(-4, 2, 0));
    points.push(new THREE.Vector3(1, 2, 0));
    points.push(new THREE.Vector3(1, -1, 0));
    points.push(new THREE.Vector3(-2, 1, 0));
}

basico();


const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);

scene.add(line);
renderer.render(scene, camera);
