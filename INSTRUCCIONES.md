# ❤️ Instrucciones para Personalizar tu Página

¡Hola! He creado una página web hermosa y animada para tu pareja.
Aquí tienes los pasos para personalizarla con tus propias fotos y canción.

## 1. Agregar tus Fotos
1. Ve a la carpeta `src/assets`.
2. Pega tus dos fotos ahí y llámalas `foto1.jpg` y `foto2.jpg` (o `.png`).
3. Abre el archivo `src/components/Gallery.jsx`.
4. Descomenta las líneas de importación al inicio y cambia las etiquetas `<img>` para usar tus fotos importadas en lugar de los enlaces de ejemplo.

Ejemplo en `Gallery.jsx`:
```javascript
import photo1 from '../assets/foto1.jpg'; // Asegúrate de que el nombre coincida
// ...
<img src={photo1} alt="Nosotros" />
```

## 2. Agregar la Canción
1. Busca tu archivo de música favorito en `.mp3`.
2. Renómbralo a `song.mp3`.
3. Pégalo dentro de la carpeta `public` (está en la raíz del proyecto).
4. ¡Listo! El reproductor la detectará automáticamente.

## 3. Cambiar la Fecha del Contador
1. Abre `src/App.jsx`.
2. Busca la línea `<Timer targetDate="2026-02-14T00:00:00" />`.
3. ¡Cambia la fecha a cuando se vayan a ver! (Formato: AAAA-MM-DD).

## 4. Escribir tu Carta
1. Abre `src/components/Letter.jsx`.
2. Busca el texto dentro de `<div className="letter-text">`.
3. Escribe tu propio mensaje de amor.

## 6. Dedicar Canciones Diarias (¡NUEVO!)
1. Abre `src/components/SongDedications.jsx`.
2. Al principio del archivo verás una lista llamada `songs`.
3. Simplemente agrega una nueva canción al **principio** de la lista siguiendo el formato:
```javascript
{
  id: "ID_DE_YOUTUBE", // Lo que sale después de v= en la URL
  title: "Nombre de la Canción",
  date: "Fecha de Hoy",
  message: "Tu mensaje bonito aquí"
},
```
¡La primera canción de la lista será la "Destacada" del día!

## 7. Correr la página
Si cerraste la terminal, simplemente corre:
```bash
npm run dev
```
Y abre el link que aparece (usualmente `http://localhost:5173`).

¡Mucha suerte! Espero que le encante. ❤️
