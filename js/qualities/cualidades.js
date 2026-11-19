// Sección 3 (evaluación): se escuchan los audios A y B y se completa la tabla en una hoja. No se responde en pantalla.
(function(){const M=window.Musica=window.Musica||{};M.secciones=M.secciones||{};
const Q=[['Timbre','Es la fuente sonora: nos dice qué instrumento u objeto produce el sonido.'],
 ['Intensidad','Qué tan fuerte o suave suena un sonido.'],
 ['Duración','Cuánto dura el sonido: más corto o más largo.'],
 ['Altura','Qué tan grave o agudo es un sonido.']];
const FIJAS=['Fuerte','Suave','Corto','Largo','Grave','Agudo'];

M.secciones.cualidades={titulo:'Cualidades del sonido',
 montar(raiz){
  const lista=(M.cualidadesEvaluacion||{}).ejercicios||[];
  let n=0,fin=false,jug=null,msg='';
  function pintar(){
   if(!lista.length){raiz.innerHTML='<p class="aviso">No hay ejercicios cargados.</p>';return;}
   if(fin){raiz.innerHTML=`<h2>¡Terminaste!</h2><p class="grande">Revisá que tu hoja tenga tu nombre y entregásela a tu docente.</p>
    <div class="barra"><button class="btn" data-acc="inicio">Volver al ejercicio 1</button></div>`;return;}
   const e=lista[n];
   const play=k=>`<button class="btn grande" data-play="${k}">${jug===k?'■ Detener':'▶ Audio '+k.toUpperCase()}</button>`;
   raiz.innerHTML=`<h2>Sección 3 · Cualidades del sonido</h2>
   <p class="aviso">🎧 Para una buena escucha, usá auriculares o un buen parlante.</p>
   <p class="aviso">✍️ En esta pantalla no se completa nada. Escuchá los audios A y B todas las veces que necesites y completá la tabla en una hoja en blanco, con tu nombre.</p>
   <p class="prog">Ejercicio ${n+1} de ${lista.length}</p>
   <table class="tabla"><thead><tr><th></th><th>${play('a')}</th><th>${play('b')}</th></tr></thead><tbody>${
    Q.map(([t,d])=>`<tr><th class="cual" scope="row">${t}<small>${d}</small></th><td><div class="hueco"></div></td><td><div class="hueco"></div></td></tr>`).join('')}</tbody></table>
   <p class="consigna">Palabras para completar la tabla:</p>
   <div class="banco">${[...e.palabras,...FIJAS].map(w=>`<span class="chip">${w}</span>`).join('')}</div>
   <p id="msg" class="msg" aria-live="polite">${msg}</p>
   <div class="barra"><button class="btn" data-acc="ant" ${n===0?'disabled':''}>⬅ Anterior</button>${n+1<lista.length?'<button class="btn grande" data-acc="sig">Siguiente ➜</button>':'<button class="btn grande" data-acc="fin">Terminé</button>'}</div>`;}
  raiz.onclick=ev=>{
   const p=ev.target.closest('[data-play]');
   if(p){const k=p.dataset.play;
    if(jug===k){M.audio.parar();jug=null;return pintar();}
    jug=k;msg='';pintar();
    return M.audio.reproducir({archivo:lista[n][k]},()=>{jug=null;pintar();},()=>{jug=null;msg='⚠️ No se pudo cargar el audio. Avisale a tu docente.';pintar();});}
   const a=ev.target.closest('[data-acc]');if(!a)return;
   M.audio.parar();jug=null;msg='';const k=a.dataset.acc;
   if(k==='ant')n--;if(k==='sig')n++;if(k==='fin')fin=true;if(k==='inicio'){fin=false;n=0;}
   pintar();window.scrollTo(0,0);};
  pintar();},
 destruir(){M.audio.parar();const a=document.getElementById('app');a.onclick=null;a.onchange=null;}};
})();
