import { Octree, Box } from './Octree';

let octree = new Octree(new Box(0, 0, 0, 2, 2, 2), 5);
console.log(octree);
