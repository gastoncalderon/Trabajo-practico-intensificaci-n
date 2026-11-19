# Evaluación de música

App web para evaluar en clase. Los alumnos **solo escuchan**: no se completa nada en la pantalla. Cada sección les indica que respondan en una hoja en blanco con su nombre.

## Secciones
1. **Ritmo con partitura analógica**: 3 niveles (1 ritmo por nivel). Se muestra el tablero vacío y las fichas de referencia.
2. **Ritmo con figuras**: 3 niveles, con pentagrama de una línea vacío y las figuras de referencia.
3. **Cualidades del sonido**: 4 ejercicios con un audio A y un audio B, iguales para todos. Se muestra la tabla vacía y las palabras de referencia.

En todas se puede escuchar las veces que haga falta y pasar al siguiente cuando se quiera (también volver al anterior).

## Dónde se cambia cada cosa
| Archivo | Para qué |
|---|---|
| `data/ritmos.js` | Los ritmos de las secciones 1 y 2 (editar las palabras del patrón) |
| `data/cualidades-config.js` | Los ejercicios de la Sección 3 |
| `assets/audio/cualidades/` | Los 8 audios de la Sección 3 (nombres en `LEEME.txt`) |
| `assets/audio/rim.wav` | Sonido de rim de los ritmos (opcional; si no está, suena uno sintetizado) |

## Publicar en GitHub (sin programar)
1. En github.com creá un repositorio nuevo, público.
2. **Add file → Upload files** y arrastrá todo el contenido de la carpeta. **Commit changes**.
3. **Settings → Pages**: *Branch* `main`, carpeta `/ (root)`, guardar.
4. GitHub te da el link para usar en clase.

> Importante: el repositorio es público, así que **no guardes la clave de respuestas dentro de los archivos**.
