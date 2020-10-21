(()=>{"use strict";var t;!function(t){t[t.UP_FRONT_LEFT=0]="UP_FRONT_LEFT",t[t.UP_FRONT_RIGHT=1]="UP_FRONT_RIGHT",t[t.UP_BACK_LEFT=2]="UP_BACK_LEFT",t[t.UP_BACK_RIGHT=3]="UP_BACK_RIGHT",t[t.DOWN_FRONT_LEFT=4]="DOWN_FRONT_LEFT",t[t.DOWN_FRONT_RIGHT=5]="DOWN_FRONT_RIGHT",t[t.DOWN_BACK_LEFT=6]="DOWN_BACK_LEFT",t[t.DOWN_BACK_RIGHT=7]="DOWN_BACK_RIGHT",t[t.ERROR=-1]="ERROR"}(t||(t={}));class e{constructor(t,e,i,s,n,h){this.center={x:t,y:e,z:i},this.dimension={width:s,height:n,depth:h},this.minPos={x:t-s/2,y:e-n/2,z:i-h/2},this.maxPos={x:t+s/2,y:e+n/2,z:i+h/2}}contains(t){return this.center.x-t.x>=this.center.x-this.dimension.width/2&&this.center.x+t.x<=this.center.x+this.dimension.width/2&&this.center.y-t.y>=this.center.y-this.dimension.height/2&&this.center.y+t.y<=this.center.y+this.dimension.height/2&&this.center.z-t.z>=this.center.z-this.dimension.depth/2&&this.center.z+t.z<=this.center.z+this.dimension.depth/2}intersect(t){return this.minPos.x<=t.maxPos.x&&this.maxPos.x>=t.minPos.x&&this.minPos.y<=t.maxPos.y&&this.maxPos.y>=t.minPos.y&&this.minPos.z<=t.maxPos.z&&this.maxPos.z>=t.minPos.z}findOctant(e){return this.center.x-this.dimension.width/2<=e.x&&this.center.x>=e.x&&this.center.y+this.dimension.height/2>=e.y&&this.center.y<=e.y&&this.center.z+this.dimension.depth/2>=e.z&&this.center.z<=e.z?(console.log("UP FRONT LEFT"),t.UP_FRONT_LEFT):this.center.x+this.dimension.width/2>=e.x&&this.center.x<=e.x&&this.center.y+this.dimension.height/2>=e.y&&this.center.y<=e.y&&this.center.z+this.dimension.depth/2>=e.z&&this.center.z<=e.z?(console.log("UP FRONT RIGHT"),t.UP_FRONT_RIGHT):this.center.x-this.dimension.width/2<=e.x&&this.center.x>=e.x&&this.center.y+this.dimension.height/2>=e.y&&this.center.y<=e.y&&this.center.z-this.dimension.depth/2<=e.z&&this.center.z>=e.z?(console.log("UP BACK LEFT"),t.UP_BACK_LEFT):this.center.x+this.dimension.width/2>=e.x&&this.center.x<=e.x&&this.center.y+this.dimension.height/2>=e.y&&this.center.y<=e.y&&this.center.z-this.dimension.depth/2<=e.z&&this.center.z>=e.z?(console.log("UP BACK RIGHT"),t.UP_BACK_RIGHT):this.center.x-this.dimension.width/2<=e.x&&this.center.x>=e.x&&this.center.y-this.dimension.height/2<=e.y&&this.center.y>=e.y&&this.center.z+this.dimension.depth/2>=e.z&&this.center.z<=e.z?(console.log("DOWN FRONT LEFT"),t.DOWN_FRONT_LEFT):this.center.x+this.dimension.width/2>=e.x&&this.center.x<=e.x&&this.center.y-this.dimension.height/2<=e.y&&this.center.y>=e.y&&this.center.z+this.dimension.depth/2>=e.z&&this.center.z<=e.z?(console.log("DOWN FRONT RIGHT"),t.DOWN_FRONT_RIGHT):this.center.x-this.dimension.width/2<=e.x&&this.center.x>=e.x&&this.center.y-this.dimension.height/2<=e.y&&this.center.y>=e.y&&this.center.z-this.dimension.depth/2<=e.z&&this.center.z>=e.z?(console.log("DOWN BACK LEFT"),t.DOWN_BACK_LEFT):this.center.x+this.dimension.width/2>=e.x&&this.center.x<=e.x&&this.center.y-this.dimension.height/2<=e.y&&this.center.y>=e.y&&this.center.z-this.dimension.depth/2<=e.z&&this.center.z>=e.z?(console.log("DOWN BACK RIGHT"),t.DOWN_BACK_RIGHT):(console.log("NOT IN BOX"),t.ERROR)}}class i{constructor(t,e){this.nodes=new Array(8),this.values=new Array(e),this.boundary=t,this.divided=!1,this.size=0}subdivide(){this.divided=!0;let s=this.boundary.dimension.width/2,n=this.boundary.dimension.height/2,h=this.boundary.dimension.depth/2,o=this.boundary.center.x,d=this.boundary.center.y,c=this.boundary.center.z,r=this.values.length;this.nodes[t.UP_FRONT_LEFT]=new i(new e(o-s/2,d+n/2,c+h/2,s,n,h),r),this.nodes[t.UP_FRONT_RIGHT]=new i(new e(o+s/2,d+n/2,c+h/2,s,n,h),r),this.nodes[t.UP_BACK_LEFT]=new i(new e(o-s/2,d+n/2,c-h/2,s,n,h),r),this.nodes[t.UP_BACK_RIGHT]=new i(new e(o+s/2,d+n/2,c-h/2,s,n,h),r),this.nodes[t.DOWN_FRONT_LEFT]=new i(new e(o-s/2,d-n/2,c+h/2,s,n,h),r),this.nodes[t.DOWN_FRONT_RIGHT]=new i(new e(o+s/2,d-n/2,c+h/2,s,n,h),r),this.nodes[t.DOWN_BACK_LEFT]=new i(new e(o-s/2,d-n/2,c-h/2,s,n,h),r),this.nodes[t.DOWN_BACK_RIGHT]=new i(new e(o+s/2,d-n/2,c-h/2,s,n,h),r)}}let s=new class{constructor(t,e){this.root=new i(t,e),this.capacity=e}_add(e,i){if(!1!==i.boundary.contains(e))if(i.size<this.capacity)i.values[i.size++]=e;else{i.subdivide();let s=i.boundary.findOctant(e);s!==t.ERROR?(i=i.nodes[s],this._add(e,i)):console.log("No OCTANT Found for",e)}}add(t){this._add(t,this.root)}}(new e(0,0,0,2,2,2),5);console.log(s)})();