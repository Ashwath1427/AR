/* Texture images: Solar System Scope, CC BY 4.0. Load asynchronously so AR tracking starts promptly. */
window.makeWorldTexture = function(THREE, name) {
  const colors={Sun:'#ffb138',Mercury:'#99928b',Venus:'#d5ae7d',Earth:'#2870a0',Moon:'#aaa9a5',Mars:'#ba664b',Jupiter:'#c8a17c',Saturn:'#d9bd88',Uranus:'#81c6ce',Neptune:'#3c6fbe'};
  const canvas=document.createElement('canvas');canvas.width=512;canvas.height=256;
  const context=canvas.getContext('2d');context.fillStyle=colors[name]||'#aaa';context.fillRect(0,0,canvas.width,canvas.height);
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=4;
  const file=name.toLowerCase()+'.jpg';let triedRoot=false;const image=new Image();
  image.onload=()=>{context.drawImage(image,0,0,canvas.width,canvas.height);texture.needsUpdate=true};
  image.onerror=()=>{if(!triedRoot){triedRoot=true;image.src=file}};
  image.src='textures/'+file;
  return texture;
};
