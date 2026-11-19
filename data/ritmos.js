// ============================================================
//  RITMOS DE LA EVALUACIÓN (iguales para todos los alumnos)
//  Cada ritmo = un nivel. Tiene 8 tiempos (2 compases de 4).
//  Figuras posibles: 'negra', 'corcheas', 'semicorcheas', 'silencio'
//   - bpm: velocidad
//   - figuras: las que se le muestran al alumno como referencia
//   - patron: los 8 tiempos, en orden
//  Para cambiar un ritmo, cambiá solamente las palabras del patrón.
// ============================================================
window.Musica=window.Musica||{};
window.Musica.ritmosEvaluacion={
 // Sección 1: Ritmo con partitura analógica
 ritmos:[
  {bpm:70,figuras:['negra','silencio'],
   patron:['negra','negra','silencio','negra','negra','silencio','negra','negra']},
  {bpm:76,figuras:['negra','corcheas','silencio'],
   patron:['negra','corcheas','silencio','negra','corcheas','corcheas','negra','silencio']},
  {bpm:80,figuras:['negra','corcheas','semicorcheas','silencio'],
   patron:['semicorcheas','negra','corcheas','silencio','negra','semicorcheas','silencio','corcheas']}
 ],
 // Sección 2: Ritmo con figuras (pentagrama de una línea)
 pentagrama:[
  {bpm:70,figuras:['negra','silencio'],
   patron:['negra','silencio','negra','negra','silencio','negra','negra','negra']},
  {bpm:76,figuras:['negra','corcheas','silencio'],
   patron:['corcheas','negra','negra','silencio','negra','corcheas','silencio','corcheas']},
  {bpm:80,figuras:['negra','corcheas','semicorcheas','silencio'],
   patron:['negra','semicorcheas','silencio','corcheas','corcheas','negra','semicorcheas','silencio']}
 ]
};
