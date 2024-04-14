import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { createScene } from './createScene.js';

const { scene, camera, renderer } = createScene();

/*
 Where possible, we recommend using glTF (GL Transmission Format)
 Both .GLB and .GLTF versions of the format are well supported. 
 Because glTF is focused on runtime asset delivery, it is compact to transmit and fast to load.
 Features include meshes, materials, textures, skins, skeletons, morph targets, animations, lights, and cameras.
*/



// atm -> https://threejs.org/docs/#manual/en/introduction/Loading-3D-models
