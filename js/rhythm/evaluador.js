// Secciones 1 y 2 (evaluación): se escucha el ritmo y se completa en una hoja. No se responde en pantalla.
(function(){const M=window.Musica=window.Musica||{};M.secciones=M.secciones||{};
const conf={
 ritmos:{clave:'ritmos',titulo:'Sección 1 · Ritmo con partitura analógica',fig:M.figuras.analogica,
  nombres:{negra:'1 sonido',corcheas:'2 sonidos',semicorcheas:'4 sonidos',silencio:'Silencio'},
  consigna:'Escuchá el ritmo y completá en tu hoja los 8 tiempos con las fichas de abajo (1, 2 o 4 sonidos). Si en un tiempo no suena nada, dejalo vacío (silencio).'},
 pentagrama:{clave:'pentagrama',titulo:'Sección 2 · Ritmo con figuras',fig:M.figuras.pentagrama,
  nombres:{negra:'Negra',corcheas:'Corcheas',semicorcheas:'Semicorcheas',silencio:'Silencio de negra'},
  consigna:'Escuchá el ritmo y escribilo en tu hoja, sobre un pentagrama de una línea, usando las figuras de abajo.'}};

function crear(raiz,c){
 const lista=(M.ritmosEvaluacion||{})[c.clave]||[];
 let n=0,sonando=false,fin=false;
 const msg2=t=>{const m=raiz.querySelector('#msg');if(m)m.textContent=t;};
 const marcar=i=>raiz.querySelectorAll('.celda').forEach((x,j)=>x.classList.toggle('suena',j===i));
 const celda=()=>`<div class="celda">${c.fig.celda(null)}</div>`;
 const compas=()=>`<div class="compas">${[0,1,2,3].map(celda).join('')}</div>`;
 function pintar(){
  if(!lista.length){raiz.innerHTML='<p class="aviso">No hay ritmos cargados.</p>';return;}
  if(fin){raiz.innerHTML=`<h2>¡Terminaste!</h2><p class="grande">Revisá que tu hoja tenga tu nombre y entregásela a tu docente.</p>
   <div class="barra"><button class="btn" data-acc="inicio">Volver a escuchar desde el nivel 1</button></div>`;return;}
  const r=lista[n];
  raiz.innerHTML=`<h2>${c.titulo}</h2>
  <p class="aviso">✍️ En esta pantalla no se completa nada. ${c.consigna} Escribí tu nombre en la hoja.</p>
  <p class="prog">Nivel ${n+1} de ${lista.length}</p>
  <div class="barra"><button class="btn grande" data-acc="oir" ${sonando?'disabled':''}>${sonando?'♪ Sonando…':'▶ Escuchar el ritmo'}</button></div>
  ${c.fig.inicio?`<div class="pent-wrap"><div class="pent">${c.fig.inicio}${compas()}<div class="barra-c"></div>${compas()}<div class="final"></div></div></div>`:`<div class="tablero">${compas()}${compas()}</div>`}
  <p class="consigna">Figuras que vas a usar:</p>
  <div class="paleta">${r.figuras.map(t=>`<div class="ficha">${c.fig.ficha(t)}<span>${c.nombres[t]}</span></div>`).join('')}</div>
  <p id="msg" class="msg" aria-live="polite"></p>
  <div class="barra"><button class="btn" data-acc="ant" ${n===0?'disabled':''}>⬅ Anterior</button>${n+1<lista.length?'<button class="btn grande" data-acc="sig">Siguiente ➜</button>':'<button class="btn grande" data-acc="fin">Terminé</button>'}</div>`;}
 function oir(){const r=lista[n];sonando=true;pintar();
  M.audio.tocarRitmo(r.patron,{bpm:r.bpm,
   alBeat:i=>{if(i<0)msg2('Preparate… '+(i+5));else{msg2('Escuchá…');marcar(i);}},
   alFin:()=>{sonando=false;pintar();}});}
 raiz.onclick=e=>{const a=e.target.closest('[data-acc]');if(!a)return;const k=a.dataset.acc;
  if(k==='oir')return oir();
  M.audio.parar();sonando=false;
  if(k==='ant')n--;if(k==='sig')n++;if(k==='fin')fin=true;if(k==='inicio'){fin=false;n=0;}
  pintar();window.scrollTo(0,0);};
 pintar();
 return{destruir(){M.audio.parar();raiz.onclick=null;}};
}
Object.keys(conf).forEach(id=>{M.secciones[id]={titulo:conf[id].titulo,
 montar(r){this.t=crear(r,conf[id]);},
 destruir(){if(this.t)this.t.destruir();this.t=null;}};});
})();
