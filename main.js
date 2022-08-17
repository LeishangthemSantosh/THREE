import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene()

// const geometry = new THREE.BoxGeometry(1,1,1)
// const material = new THREE.MeshBasicMaterial({color:0x00ffff})

// const mesh = new THREE.Mesh(geometry, material)
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
// mesh.position.set(0.7, -0.6, 1)

// mesh.scale.x = 1
// mesh.scale.x = 1
// mesh.scale.x = 1
// mesh.scale.set(2, 0.5, 0.5)
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25

// scene.add(mesh)

const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({color:0x00ffff})
)
cube1.position.x = -1.5
group.add(cube1)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({color:0x00ffff})
)
cube2.position.x = 0
group.add(cube2)
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({color:0x00ffff})
)
cube3.position.x = 1.5
group.add(cube3)
group.rotation.y = 1

// console.log(mesh.position.length())

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)

// camera.position.x = 1
// camera.position.y = 1
camera.position.z = 3

scene.add(camera)

// camera.lookAt(mesh.position)

// console.log(mesh.position.distanceTo(camera.position))

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
  canvas:canvas
})

const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)