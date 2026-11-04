/* Planet textures: Solar System Scope, CC BY 4.0. Procedural maps are loading fallbacks. */
window.makeWorldTexture = function(THREE, name) {
 const w=512,h=256,c=document.createElement('canvas'); c.width=w;c.height=h;const ctx=c.getContext('2d');
 let seed=Array.from(name).reduce((a,ch)=>a*31+ch.charCodeAt(0),17)>>>0;
 const rand=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
 const grids=[8,16,32,64].map(n=>({n,a:Float32Array.from({length:n*(n/2+1)},rand)}));
 function noise(x,y,g){const n=g.n,rows=n/2;const X=x*n/w,Y=y*rows/h,xi=Math.floor(X),yi=Math.min(rows-1,Math.floor(Y)),u=X-xi,v=Y-yi;const smooth=t=>t*t*(3-2*t);const sx=smooth(u),sy=smooth(v),at=(xx,yy)=>g.a[yy*n+(xx+n)%n];return (at(xi,yi)*(1-sx)+at(xi+1,yi)*sx)*(1-sy)+(at(xi,yi+1)*(1-sx)+at(xi+1,yi+1)*sx)*sy}
 const colors={Sun:[255,151,31],Mercury:[147,139,128],Venus:[220,178,116],Earth:[24,87,147],Moon:[155,157,155],Mars:[185,91,60],Jupiter:[202,164,130],Saturn:[214,190,145],Uranus:[131,204,208],Neptune:[48,100,190]};
 const base=colors[name]||[170,170,170],img=ctx.createImageData(w,h);
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){const i=(y*w+x)*4,n=noise(x,y,grids[0])*.5+noise(x,y,grids[1])*.27+noise(x,y,grids[2])*.15+noise(x,y,grids[3])*.08;let shade=.67+n*.62;
  if(name==='Jupiter'||name==='Saturn'){const bands=Math.sin(y*.15+Math.sin(x*.018+y*.025)*1.2+noise(x,y,grids[1])*2)*.13+Math.sin(y*.38)*.035;shade=.88+bands+(n-.5)*.22}
  if(name==='Uranus'||name==='Neptune'||name==='Venus')shade=.88+(n-.5)*.28+Math.sin(y*.13+noise(x,y,grids[0])*2)*.025;
  if(name==='Earth')shade=.78+n*.38;
  if(name==='Sun')shade=.75+n*.52;
  img.data[i]=base[0]*shade;img.data[i+1]=base[1]*shade;img.data[i+2]=base[2]*shade;img.data[i+3]=255;
 }
 ctx.putImageData(img,0,0);
 if(name==='Earth'){
  // Simplified continents give the globe a recognisable educational silhouette.
  const shapes=[[[.06,.24],[.12,.17],[.21,.19],[.25,.28],[.22,.34],[.19,.36],[.17,.47],[.13,.42],[.11,.34],[.06,.32]],[[.22,.44],[.27,.47],[.30,.56],[.28,.68],[.25,.80],[.22,.69],[.20,.56]],[[.43,.22],[.49,.17],[.54,.22],[.58,.19],[.65,.22],[.71,.19],[.79,.24],[.87,.26],[.91,.32],[.84,.36],[.77,.34],[.72,.39],[.65,.34],[.62,.40],[.56,.35],[.52,.32],[.47,.34],[.44,.29]],[[.47,.35],[.54,.34],[.58,.40],[.56,.52],[.52,.64],[.48,.59],[.44,.47]],[[.76,.64],[.82,.61],[.86,.66],[.85,.74],[.79,.75],[.75,.70]],[[.31,.13],[.34,.09],[.37,.13],[.35,.24],[.32,.25]]];
  ctx.fillStyle='#809b62';shapes.forEach(poly=>{ctx.beginPath();poly.forEach(([x,y],i)=>i?ctx.lineTo(x*w,y*h):ctx.moveTo(x*w,y*h));ctx.closePath();ctx.fill()});
  ctx.strokeStyle='rgba(232,245,250,.36)';ctx.lineWidth=3;for(let j=0;j<42;j++){let x=rand()*w,y=rand()*h;ctx.beginPath();ctx.moveTo(x,y);ctx.bezierCurveTo(x+10,y-5,x+25,y+4,x+40+rand()*18,y-3);ctx.stroke()}
 }
 if(name==='Mercury'||name==='Moon'||name==='Mars'){for(let j=0;j<(name==='Mars'?45:95);j++){const x=rand()*w,y=rand()*h,r=1+rand()*(name==='Mars'?5:7);ctx.beginPath();ctx.ellipse(x,y,r,r*.65,0,0,Math.PI*2);ctx.strokeStyle='rgba(40,30,24,.20)';ctx.lineWidth=1;ctx.stroke();ctx.beginPath();ctx.arc(x-r*.18,y-r*.1,r*.55,0,Math.PI*2);ctx.fillStyle='rgba(40,30,24,.07)';ctx.fill()}}
 if(name==='Jupiter'){ctx.beginPath();ctx.ellipse(w*.66,h*.65,19,7,-.1,0,Math.PI*2);ctx.fillStyle='rgba(169,82,53,.7)';ctx.fill();ctx.strokeStyle='rgba(244,208,177,.7)';ctx.lineWidth=3;ctx.stroke()}
 if(name==='Earth'||name==='Mars'){const g=ctx.createLinearGradient(0,0,0,h);g.addColorStop(0,'rgba(239,247,250,.9)');g.addColorStop(.045,'rgba(239,247,250,0)');g.addColorStop(.95,'rgba(239,247,250,0)');g.addColorStop(1,'rgba(239,247,250,.9)');ctx.fillStyle=g;ctx.fillRect(0,0,w,h)}
 const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=4;const image=new Image();image.onload=()=>{ctx.clearRect(0,0,w,h);ctx.drawImage(image,0,0,w,h);tex.needsUpdate=true};image.src='textures/'+name.toLowerCase()+'.jpg';return tex;
};
