---
title: Historial de cambios
sidebar_label: Historial de cambios
---

# Historial de cambios

### Versión 1.0.3
* **Ajuste Inteligente del Popup**: Ahora la ventana flotante del diccionario se abre automáticamente **arriba** de la palabra si se hace clic en la mitad inferior de la pantalla, previniendo recortes e incomodidades visuales.
* **Detección Dinámica de Colisiones**: Si el popup sobrepasa la pantalla por debajo debido al tamaño de la ventana, sube de inmediato para quedar visible con scroll interno integrado.
* **Solución de Animación CSS**: Corregido un conflicto en las transiciones que forzaba al popup a permanecer debajo de la palabra.
* **Cero Saltos de Texto en Hover**: Eliminado el desplazamiento involuntario de las líneas de texto al pasar el cursor sobre palabras (provocado por el pseudo-elemento del checkmark).
* **Diseño Yoru Café en Diálogos**: Reemplazadas todas las alertas nativas del navegador (`alert` y `confirm`) por elegantes modales premium personalizados con estilo cyberpunk oscuro, y añadidas notificaciones tipo *toast* en biblioteca.
* **Anki Inteligente sin Duplicados**: Al marcar palabras como "Conocido", Yoru realiza una búsqueda profunda en todos tus mazos probando múltiples nombres de campos comunes (`Vocabulary-Kanji`, `Expression`, etc.) para evitar duplicados. Si la tarjeta no existe, la crea en tu mazo y la madura automáticamente (intervalo de 30 días) en silencio.
* **Persistencia del Idioma**: El idioma de la interfaz seleccionado se almacena en los archivos de respaldo y se restaura automáticamente en las importaciones.
* **Optimización Extrema**: Añadido caché en memoria para las búsquedas de diccionarios en Yomitan y eliminados renders innecesarios al pasar páginas, logrando una transición instantánea y fluida.

### Versión 1.0.2
* **Búsqueda Rápida:** Se agregó el botón del librito (`BookOpen`) al menú de acciones de la ventana flotante del diccionario para permitir la búsqueda directa y rápida de la palabra en **Jisho.org**.
* **Distribución:** Se compilaron y actualizaron los ejecutables para Windows y Android correspondientes a la versión `1.0.2` en la sección de descargas.

### Versión 1.0.1
* **Corrección en Anki:** Se solucionó el problema de la clausura obsoleta (*stale closure*) en el atajo de teclado para minar palabras (`m`), de modo que las definiciones ahora se envían correctamente a Anki.
* **Ajustes:** Se agregó la pestaña "Acerca de / Versión" dentro de la configuración para visualizar la versión y su registro de cambios.
* **Automatización:** Se implementó un script de sincronización de versiones (`versionName` y `versionCode`) para Android al actualizar con `npm version`.
* **Distribución:** Se compilaron y actualizaron las versiones `1.0.1` del instalador de Windows (`.exe`) y el APK de Android en la carpeta de descargas.

### Versión 1.0.0 (Lanzamiento)
* Lanzamiento oficial del portal de documentación de **Yoru Cafe**.
* Agregada guía detallada de configuración para **Yoru Reader** (versión 1.0) con capturas de pantalla integradas.
* Guías de inmersión inicial completadas (Ruta, Kana, Gramática, Vocabulario, Mining).
* Integración del sistema de imágenes zoomables (Lightbox) en toda la documentación para una lectura más cómoda.
