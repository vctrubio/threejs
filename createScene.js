import * as THREE from 'three';

// @param fov (DEGREES) — Camera frustum vertical field of view. Default 50.
const fov = 75;
// @param aspect — Camera frustum aspect ratio. Default 1.
const aspect = window.innerWidth / window.innerHeight;
//@param near — Camera frustum near plane. Default 0.1.
const near = 0.1;
// @param far — Camer
const far = 1000;
// @param color — Background color.
const color = 0x000000;

export function createScene() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    scene.background = new THREE.Color(color);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    return { scene, camera, renderer };
}

/*
Let's take a moment to explain what's going on here. We have now set up the scene, our camera and the renderer.
There are a few different cameras in three.js. For now, let's use a PerspectiveCamera.

far-near :  objects further away from the camera than the value of far or closer than near won't be rendered.
*/