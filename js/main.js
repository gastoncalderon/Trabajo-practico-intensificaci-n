// Navegación entre secciones (por la dirección #/ritmos, #/pentagrama, #/cualidades).
(function(){const M=window.Musica;
const SEC=[['ritmos','1 · Ritmo con partitura analógica','Escuchá cada ritmo y completá tu hoja.'],
 ['pentagrama','2 · Ritmo con figuras','Escuchá cada ritmo y escribilo en tu hoja.'],
 ['cualidades','3 · Cualidades del sonido','Escuchá los audios A y B y completá tu hoja.']];
const app=document.getElementById('app'),nav=document.getElementById('nav');
const inicio={montar(r){r.innerHTML=`<h2>Evaluación de música</h2>
 <p class="aviso">✍️ Tené a mano una hoja en blanco con tu nombre. En esta pantalla solo escuchás: las respuestas se completan en la hoja. Usá auriculares o un buen parlante.</p>
 <p class="aviso">📅 La entrega del trabajo es el 30/11, en clase.</p>
 <div class="niveles">${SEC.map(([id,t,d])=>`<a class="nivel" href="#/${id}"><b>${t}</b><span>${d}</span></a>`).join('')}</div>`;},destruir(){}};
let act=null;
function ir(){const id=location.hash.replace('#/','');
 if(act&&act.destruir)act.destruir();
 app.onclick=null;app.onchange=null;
 act=M.secciones[id]||inicio;act.montar(app);
 nav.innerHTML=`<a href="#/" class="${M.secciones[id]?'':'act'}">Inicio</a>`+SEC.map(([i,t])=>`<a href="#/${i}" class="${i===id?'act':''}">${t}</a>`).join('');
 window.scrollTo(0,0);}
window.addEventListener('hashchange',ir);ir();
})();
