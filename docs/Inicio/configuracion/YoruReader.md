---
sidebar_position: 1
---

# 🌸 Yoru Reader

**Yoru Reader** es nuestro lector nativo de novelas ligeras y novelas web, diseñado específicamente para estudiantes de japonés que utilizan el método de inmersión. 

Facilita la lectura fluida en japonés integrando de forma nativa tus diccionarios flotantes y permitiendo crear tarjetas de repaso en Anki sin interrumpir tu lectura.

<div className="text--center" style={{ margin: '2rem 0' }}>
  <img src="/img/logo.png" alt="Yoru Reader Logo" width="120" style={{ filter: 'drop-shadow(0 0 15px rgba(255, 224, 0, 0.2))' }} />
</div>

---

## Descargar Yoru Reader

<div style={{ margin: '2.5rem 0 2rem' }}>
  <h2 style={{ fontSize: '2.2rem', fontWeight: '800', lineHeight: '1.2', margin: '0 0 0.75rem' }}>
    Lee en japonés de forma nativa con <span style={{ color: 'var(--yc-yellow)' }}>Yoru Reader</span>
  </h2>
  <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 0 1.5rem' }}>
    Consulta diccionarios, mina vocabulario a Anki y registra tu progreso — sin interrumpir tu lectura.
  </p>
  <a href="#descargas"
     style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--yc-yellow)', color: '#000', fontWeight: '700', fontSize: '1rem', padding: '0.65rem 1.6rem', borderRadius: '999px', textDecoration: 'none', transition: 'opacity 0.15s' }}>
    Descargar Yoru Reader →
  </a>
</div>


---





## Guía Completa de Usuario

Bienvenido a la guía oficial de **Yoru Reader**. Aquí aprenderás a fondo todas las funcionalidades, configuraciones y flujos del programa para sacarle el máximo provecho en tu inmersión.

### 1. Introducción y Filosofía
Yoru Reader está diseñado bajo los principios del **Immersion Learning** (Aprendizaje por Inmersión). Leer contenido nativo japonés puede ser frustrante debido a la barrera de los Kanji y el vocabulario desconocido. Yoru Reader rompe esta barrera permitiéndote consultar palabras de forma instantánea, escuchar pronunciaciones realistas y enviar palabras directamente a tu mazo de Anki con un solo clic.

### 2. Gestión de Perfiles y Biblioteca

#### Gestión de Perfiles
Al iniciar Yoru Reader, se te presentará la pantalla de bienvenida y configuración de perfiles:

* **Crear perfil rápido:** Puedes registrar tu nombre y elegir al instante uno de los avatares integrados.
* **Subir foto personalizada:** Permite personalizar tu perfil subiendo una imagen desde tu dispositivo.
* **Selector de idioma:** Soporta de manera nativa tanto **Inglés** como **Español** (modificable desde el menú desplegable superior).
* **Restauración de respaldos:** Si ya tienes una biblioteca previa, puedes restaurar tus datos directamente en esta pantalla mediante un respaldo **Local** o sincronizando con **Google Drive**.

<div className="text--center" style={{ margin: '1.5rem 0' }}>
  <img src="/img/yorureader_profile.png" alt="Pantalla de inicio y creación de perfil en Yoru Reader" width="380" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }} />
</div>

* **Avatares personalizados:** Cada perfil puede configurarse con una inicial, un emoji con fondo degradado o un avatar personalizado (imagen local o URL).
* **Progreso individual:** Cada perfil mantiene su propio registro de libros leídos, su historial de palabras aprendidas/desconocidas y estadísticas de lectura (tiempo invertido, racha de lectura, etc.).

#### Importación de Libros
Puedes importar libros usando el botón **+** (o el botón de **Importar / Add from file**) en la biblioteca. La aplicación es compatible con varios formatos comunes:

<div className="text--center" style={{ margin: '1.5rem 0' }}>
  <img src="/img/yorureader_empty_library.png" alt="Biblioteca vacía en Yoru Reader lista para importar archivos" width="650" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }} />
</div>

* **EPUB (.epub):** El formato ideal. Se importan los capítulos, imágenes y estilos internos, preservando el etiquetado de lectura Furigana (`<ruby>`) nativo si lo incluye.
* **Archivos de texto (.txt, .md):** Archivos planos. Se procesan de forma eficiente dividiéndolos en capítulos de tamaño cómodo para el rendimiento del navegador.
* **HTML / XHTML (.html, .xhtml):** Analizador estructurado que extrae el contenido eliminando código no visible.
* **RTF (.rtf):** Formato de texto enriquecido.

#### Organización y Personalización de Tarjetas
En el panel de **Ajustes de Visualización de Biblioteca** (el icono de filtros en la barra superior), puedes adaptar detalladamente la presentación de tus libros en tu biblioteca principal:

<div style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '1.5rem 0', flexWrap: 'wrap', alignItems: 'center' }}>
  <img src="/img/yorureader_library.png" alt="Libros importados y organizados en la biblioteca" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', height: '280px', width: 'auto' }} />
  <img src="/img/yorureader_display_settings.png" alt="Panel de ajustes de visualización de la biblioteca" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', height: '280px', width: 'auto' }} />
</div>

* **Detalles a mostrar:** Activa o desactiva qué campos quieres ver en la tarjeta principal (Título, Autor, Serie, Etiquetas, Progreso en porcentaje y Estado de lectura).
* **Ajuste de Imagen de Portada:** Elige entre recortar y rellenar el espacio (**Fill**) o ajustar la imagen completa (**Fit**).
* **Tamaño de Tarjetas:** Ajusta el ancho físico de las tarjetas del libro de forma dinámica mediante una barra deslizadora en píxeles.
* **Agrupación (Group By):** Agrupa tus novelas visualmente según su **Serie** o **Autor** para un acceso más ordenado.
* **Ordenamiento (Sorting):** Clasifica tus novelas por Fecha de adición, Título, Progreso, Última lectura o Serie, ya sea en orden **Ascendente** o **Descendente**.

#### Menú de Opciones del Libro
Al hacer clic derecho sobre la portada de cualquier novela (o al presionar el botón de tres puntos en la esquina superior derecha), se despliega un menú contextual con opciones de administración directa:

<div className="text--center" style={{ margin: '1.5rem 0' }}>
  <img src="/img/yorureader_book_context_menu.png" alt="Menú contextual de opciones del libro en Yoru Reader" width="600" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }} />
</div>

* **Ver detalles:** Muestra la ficha bibliográfica del libro (título, autor, formato, etc.).
* **Editar título:** Permite renombrar el título del volumen para organizar mejor tu biblioteca.
* **Cambio de Estado de Lectura:** Modifica el estado del libro de forma manual (*En progreso*, *Completado*, *Pausado*, *Planeado*, *Dropeado* o *Sin iniciar*).
* **Buscar en Jiten:** Realiza una búsqueda directa del título en el diccionario de términos.
* **Eliminar:** Elimina la novela de tu biblioteca local permanentemente.

### 3. Panel de Ajustes y Personalización

Yoru Reader cuenta con un panel centralizado de **Configuración** desde el cual puedes adaptar todos los aspectos del lector y de tu experiencia de inmersión:

<div className="text--center" style={{ margin: '1.5rem 0' }}>
  <img src="/img/yorureader_settings.png" alt="Panel de Configuración de Yoru Reader" width="650" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }} />
</div>

El menú de configuración se divide en las siguientes áreas de control:
* **General:** 
  * **Tema:** Cambia la apariencia de la interfaz para reducir la fatiga visual (ej. tema **Oscuro / Dark** o claro).
  * **Idioma e Interfaz:** Cambia el idioma de la aplicación (Español o Inglés).
  * **Diccionarios:** Administra tus diccionarios Yomitan locales.
* **Lector:** 
  * **Estilo de texto:** Personaliza fuentes, interlineado y formato de lectura.
* **Integración:**
  * **Integración con Anki:** Configura AnkiConnect y mapea los campos de tus tarjetas.
  * **Sincronización Cloud:** Vincula tu cuenta de Google Drive para la sincronización en la nube.
* **Seguimiento:**
  * **Estadísticas / Día de lectura:** Ajusta el rango de metas y rachas diarias.
* **Datos:**
  * **Copias de seguridad:** Exporta o importa archivos `.zip` de respaldo.
  * **Zona de peligro:** Opciones para borrar la base de datos o restablecer de fábrica.

### 4. Seguimiento y Estadísticas de Lectura

Para mantener tu motivación y medir tu progreso, Yoru Reader registra automáticamente tus hábitos de inmersión en la pestaña **Estadísticas**, la cual se divide en tres vistas detalladas:

<div style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '1.5rem 0', flexWrap: 'wrap', alignItems: 'flex-start' }}>
  <div style={{ flex: '1', minWidth: '220px', maxWidth: '280px' }}>
    <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '8px' }}>Resumen (Heatmap)</p>
    <img src="/img/yorureader_stats_summary.png" alt="Resumen de estadísticas en Yoru Reader" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }} />
  </div>
  <div style={{ flex: '1', minWidth: '220px', maxWidth: '280px' }}>
    <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '8px' }}>Desglose de Sesiones</p>
    <img src="/img/yorureader_stats_breakdown.png" alt="Desglose de lectura por sesión" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }} />
  </div>
  <div style={{ flex: '1', minWidth: '220px', maxWidth: '280px' }}>
    <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '8px' }}>Filtros de Rango y Título</p>
    <img src="/img/yorureader_stats_filters.png" alt="Filtros estadísticos en Yoru Reader" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }} />
  </div>
</div>

* **Resumen (Mapa de Calor):** 
  * Muestra métricas agregadas como la ventana de **Rango**, la cantidad de **Títulos** leídos, el **Tiempo de lectura**, los **Caracteres leídos** y tus **Rachas de lectura** actual y máxima.
  * Incluye un mapa de calor anual (heatmap) estilo GitHub que colorea los días en verde según la cantidad de inmersión lograda cada día.
* **Desglose:** 
  * Muestra la tabla cronológica de tus sesiones de lectura.
  * Registra con precisión la cantidad de caracteres inmersos y los minutos dedicados a cada volumen específico.
* **Filtros:**
  * Te permite segmentar tus métricas eligiendo rangos de fechas de lectura y seleccionando títulos específicos de tu colección para ver estadísticas detalladas.

#### Configuración de Estadísticas y Día de Lectura

Desde **Ajustes** puedes personalizar cómo se registra y calcula tu historial:

<div style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '1.5rem 0', flexWrap: 'wrap', alignItems: 'flex-start' }}>
  <div style={{ flex: '1', minWidth: '260px', maxWidth: '480px' }}>
    <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '8px' }}>Día de Lectura</p>
    <img src="/img/yorureader_reading_day.png" alt="Configuración del día de lectura" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }} />
  </div>
  <div style={{ flex: '1', minWidth: '260px', maxWidth: '480px' }}>
    <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '8px' }}>Estadísticas</p>
    <img src="/img/yorureader_stats_settings.png" alt="Configuración de estadísticas" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }} />
  </div>
</div>

* **Día de lectura — Hora de inicio del día:** Ajusta a qué hora comienza un nuevo día de lectura. Útil si lees después de medianoche y deseas que se contabilice en el día anterior.
* **Activar estadísticas de lectura:** Habilita o deshabilita el registro automático de tu historial.
* **Conservar estadísticas al eliminar libro:** Mantiene el historial de lectura de un libro aunque lo elimines de tu biblioteca.
* **Estadísticas de libros eliminados:** Botón para consultar o limpiar el historial de títulos que ya no tienes en tu biblioteca.

### 5. El Lector Avanzado

El visor de lectura es el núcleo de la aplicación. Cuenta con procesamiento lingüístico inteligente:

#### Tokenización y Segmentación
El lector divide los textos en japonés mediante una segmentación de palabras inteligente. Al pasar el cursor por encima de una palabra, el programa detecta automáticamente sus límites, permitiendo su selección precisa sin arrastrar el mouse.

#### Ajustes Visuales de Lectura
Haz clic en el icono de engranaje (Ajustes) dentro del lector para modificar:
* **Zoom de Lectura (Tamaño de fuente):** Configura el texto desde **75%** (18px) hasta **200%** (48px).
* **Furigana inteligente:**
  * **Todo:** Muestra la lectura sobre cada kanji.
  * **Palabras desconocidas:** (Recomendado) Solo muestra la lectura encima de palabras que no has marcado como "conocidas" (`Learning Status`), ayudando a que no dependas visualmente del furigana.
  * **Ninguno:** Oculta todas las lecturas de kanji para desafiar tu lectura.
* **Acento Tonal por Color (Pitch Accent):** Si tu diccionario incluye información de acento tonal, Yoru Reader puede colorear las palabras según su patrón de entonación (plano, caída inicial, etc.), ideal para mejorar tu pronunciación oral.



### 6. Sistema de Diccionarios (Yomitan)

Yoru Reader posee una base de datos indexada ultrarrápida (IndexedDB) para leer diccionarios en formato Yomitan/Yomichan (.zip).

<div className="text--center" style={{ margin: '1.5rem 0' }}>
  <img src="/img/yorureader_settings_dicts.png" alt="Panel de Diccionarios de Yoru Reader" width="650" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }} />
</div>

<div style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '1.5rem 0', flexWrap: 'wrap', alignItems: 'center' }}>
  <img src="/img/yorureader_settings_dicts_library.png" alt="Biblioteca de diccionarios de traducción" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', height: '250px', width: 'auto' }} />
  <img src="/img/yorureader_settings_freq_library.png" alt="Listas de palabras frecuentes de la comunidad" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', height: '250px', width: 'auto' }} />
</div>

#### Cómo instalar diccionarios y listas de frecuencia
Tienes dos métodos para añadir diccionarios y listas de frecuencia a tu lector:

* **Método 1: Instalar desde nuestra biblioteca (Recomendado)**
  1. Ve a **Ajustes** > **Diccionarios**.
  2. Haz clic en el botón **Instalar desde nuestra biblioteca** en la sección correspondiente.
  3. En el modal flotante, podrás instalar directamente diccionarios de traducción recomendados (como *JMdict Spanish* para traducción a español) o listas de frecuencia de la comunidad (*Netflix*, *JPDB*, *Jiten Anime*, *BCCWJ*, *Novelas*, *Novelas Visuales*, *Wikipedia* y *YouTube*) con un solo clic.

* **Método 2: Instalar desde archivo local (.zip)**
  1. Descarga cualquier diccionario compatible en formato `.zip`.
  2. Haz clic en **Instalar desde archivo** en el panel de Ajustes.
  3. Selecciona el archivo `.zip` en tu dispositivo y el lector lo indexará automáticamente de forma local.

:::tip Prioridad de Diccionarios
Puedes arrastrar y ordenar tus diccionarios en la lista de ajustes para determinar cuál aparece primero al buscar una palabra. También puedes desactivar temporalmente ciertos diccionarios sin borrarlos.
:::

#### Consulta rápida en lectura
* **PC:** Pasa el cursor y haz **Shift + Clic** o simplemente **haz clic** sobre la palabra en el texto.
* **Móvil / Tablet:** Haz un toque sobre la palabra.
* **Ventana de Diccionario:** Se abrirá una tarjeta emergente flotante que te mostrará:
  * Las lecturas (kana/furigana).
  * Significado en el idioma de tu diccionario instalado (español si tienes *JMdict Spanish*, inglés si tienes *JMdict English*, etc.).
  * Índices de frecuencia (si tienes diccionarios de frecuencia instalados).
  * El patrón de acento tonal (pitch accent).

### 7. Integración con Anki (Minado de Vocabulario)

Puedes crear tarjetas de estudio en Anki al instante directamente desde el lector ("minar" vocabulario).

<div style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '1.5rem 0', flexWrap: 'wrap', alignItems: 'center' }}>
  <img src="/img/yorureader_settings_anki_main.png" alt="Acceso a la integración con Anki" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', height: '180px', width: 'auto' }} />
  <img src="/img/yorureader_settings_anki_config.png" alt="Panel de Configuración de Anki en Yoru Reader" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', height: '360px', width: 'auto' }} />
</div>

#### Configuración inicial (AnkiConnect)
1. Abre tu aplicación **Anki** en la computadora.
2. Ve a **Herramientas (Tools)** > **Complementos (Add-ons)**.
3. Busca o instala **AnkiConnect** (código de complemento: `2055492159`).
4. En Yoru Reader, ve a **Ajustes** > **Integración con Anki** > **Abrir Configuración de Anki**.
5. Modifica los parámetros de conexión en la ventana emergente:
   * **Habilitar integración con Anki:** Activa o desactiva la conexión directa. Mostrará el estado actual de la conexión (ej. `Conectado` en verde).
   * **Dirección del servidor AnkiConnect:** Configura la dirección IP local del servidor (por defecto `http://127.0.0.1:8765`).
   * **Etiquetas de tarjeta:** Asigna etiquetas por defecto a las tarjetas que mines (ej. `yomitan`).
   * **Mazo de Anki para Vocabulario:** Selecciona de tu lista de mazos de Anki en cuál deseas almacenar las palabras minadas (ej. `Core 2k/6k Optimized Japanese Vocabulary`).
   * **Marcar como madura en Anki:** Activa para que, al marcar palabras como "Conocido" en Yoru Reader, se busquen automáticamente en Anki y se marquen como maduras (intervalo de 30 días).
   * **Importar palabras conocidas de Anki:** Sincroniza y descarga tu historial de tarjetas maduras de Anki para actualizar tu estado de vocabulario en Yoru Reader.

#### Configuración del Mapeo de Campos

Para configurar los campos, haz clic en **Configurar campos de tarjetas...** dentro del panel de Anki:

<div className="text--center" style={{ margin: '1rem 0' }}>
  <img src="/img/yorureader_anki_card_fields_btn.png" alt="Botón Configurar campos de tarjetas" width="420" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }} />
</div>

Se abrirá el panel **Campos de tarjeta de Anki**, organizado en tres pestañas según el tipo de tarjeta:

<div style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '1.5rem 0', flexWrap: 'wrap', alignItems: 'flex-start' }}>
  <div style={{ flex: '1', minWidth: '200px', maxWidth: '260px' }}>
    <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '8px' }}>Expresión</p>
    <img src="/img/yorureader_anki_fields_expresion.png" alt="Campos de tarjeta — pestaña Expresión" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }} />
  </div>
  <div style={{ flex: '1', minWidth: '200px', maxWidth: '260px' }}>
    <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '8px' }}>Lectura</p>
    <img src="/img/yorureader_anki_fields_lectura.png" alt="Campos de tarjeta — pestaña Lectura" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }} />
  </div>
  <div style={{ flex: '1', minWidth: '200px', maxWidth: '260px' }}>
    <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '8px' }}>Kanji</p>
    <img src="/img/yorureader_anki_fields_kanji.png" alt="Campos de tarjeta — pestaña Kanji" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }} />
  </div>
</div>

En cada pestaña puedes configurar:
* **Mazo:** El mazo de Anki donde se crearán las tarjetas (ej. *Core 2k/6k Optimized Japanese Vocabulary*).
* **Modelo:** El tipo de nota de Anki a usar (ej. *Lapis*, *Basic*, etc.).
* **Campo → Valor:** Asigna una variable dinámica a cada campo de tu nota:
  * `{expression}` — La palabra tal como aparece en el texto.
  * `{furigana}` — La palabra con furigana generado automáticamente.
  * `{reading}` — La lectura en kana de la palabra.
  * `{audio}` — El audio de pronunciación generado por TTS.
  * `{sentence}` — La oración completa del libro donde encontraste la palabra.
  * `{sentence-furigana}` — La oración con furigana.
  * `{popup-selection-text}` — El texto seleccionado manualmente en el popup del diccionario.


### 8. Panel de Vocabulario

La pestaña **Vocabulario** de Yoru Reader es tu base de datos personal de palabras japonesas. Aquí puedes gestionar todo el vocabulario que has encontrado durante tu inmersión.

<div className="text--center" style={{ margin: '1.5rem 0' }}>
  <img src="/img/yorureader_vocabulary.png" alt="Panel de Vocabulario de Yoru Reader" width="650" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }} />
</div>

#### ¿Qué muestra el panel?
* **Contador de palabras:** En la parte superior verás el total de tus **palabras conocidas**, junto a un desglose de cuántas están en estado *aprendiendo*, *destacadas* e *ignoradas*.
* **Tarjetas de vocabulario:** Cada palabra ocupa una tarjeta con su estado actual (`CONOCIDO`, `APRENDIENDO`, etc.) y un botón para eliminarla.

#### Herramientas de organización
* **Ordenar por:** Alfabético (A-Z / Z-A) o por otros criterios para explorar tu lista fácilmente.
* **Filtrar por:** Muestra solo las palabras con un estado específico (Todos, Conocido, Aprendiendo, Destacado, Ignorado).
* **Buscar palabra:** Campo de texto para localizar una palabra específica directamente en tu lista.

### 9. Copias de Seguridad y Sincronización en la Nube

Para proteger tu progreso de lectura y biblioteca, Yoru Reader ofrece dos métodos de respaldo:

#### Sincronización con Google Drive ☁️
Puedes conectar tu cuenta de Google para respaldar tus datos en la nube de forma transparente y sincronizar tu lectura entre tu teléfono Android y tu computadora de escritorio:

<div style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '2rem 0', flexWrap: 'wrap', alignItems: 'flex-start' }}>
  <div style={{ flex: '1', minWidth: '280px', maxWidth: '400px' }}>
    <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>Paso 1: Vincular Cuenta</p>
    <video controls width="100%" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
      <source src="/img/yoruexample.mp4" type="video/mp4" />
      Tu navegador no soporta la reproducción de video.
    </video>
  </div>
  <div style={{ flex: '1', minWidth: '280px', maxWidth: '400px' }}>
    <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>Paso 2: Conexión y Restauración de Copias</p>
    <video controls width="100%" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
      <source src="/img/yoruexample2.mp4" type="video/mp4" />
      Tu navegador no soporta la reproducción de video.
    </video>
  </div>
</div>

* Ve a **Ajustes** > **Copias de seguridad** > **Configurar Google Drive**.
* **Credenciales de API:** Ingresa tu **Client ID** y **Client Secret (Opcional)** para conectar con la API oficial de Google Drive.
* Haz clic en **Connect account** para iniciar la autenticación y autorizar el acceso a tu cuenta.
* Una vez vinculado, los perfiles, libros, estados de vocabulario y ajustes se sincronizarán periódicamente.


#### Copias de Seguridad Locales 📂
Puedes exportar un archivo `.zip` que contiene todas tus novelas, progreso y configuraciones:

<div className="text--center" style={{ margin: '1rem 0' }}>
  <img src="/img/yorureader_backup_local.png" alt="Panel de Copias de seguridad locales" width="680" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }} />
</div>

* **Exportar Biblioteca:** Descarga un único archivo comprimido con todo tu catálogo, historial de lectura, perfiles y configuraciones de Anki (los diccionarios **no** se incluyen para mantener el archivo ligero).
* **Importar Respaldo:** Carga el archivo `.zip` para restaurar o migrar toda tu biblioteca a una nueva instalación del programa.

#### ⚠️ Zona de Peligro

<div className="text--center" style={{ margin: '1rem 0' }}>
  <img src="/img/yorureader_danger_zone.png" alt="Zona de peligro — Eliminar todos los datos" width="680" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }} />
</div>

> **Advertencia:** Esta sección contiene acciones **destructivas e irreversibles**. El botón **Eliminar todos los datos** borrará permanentemente toda tu biblioteca, progreso, estadísticas y configuraciones.

### 10. Atajos de Teclado y Menú de Opciones

Si estás leyendo en una computadora, puedes manejar la lectura cómodamente desde el teclado. También puedes acceder a opciones adicionales desde el menú de tres puntos (**⋮**) en la barra superior:

<div style={{ display: 'flex', justifyContent: 'center', gap: '24px', margin: '1.5rem 0', flexWrap: 'wrap', alignItems: 'flex-start' }}>
  <div style={{ flex: '0 0 auto' }}>
    <img src="/img/yorureader_menu_dots.png" alt="Menú de opciones con tres puntos" style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', height: '220px', width: 'auto' }} />
  </div>
  <div style={{ flex: '1', minWidth: '260px' }}>
    <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Opciones del menú ⋮</p>
    <ul>
      <li><strong>Seleccionar libros:</strong> Activa el modo de selección múltiple en la biblioteca.</li>
      <li><strong>Obtener copia de seguridad:</strong> Exporta un respaldo local al instante desde cualquier pantalla.</li>
      <li><strong>Alternar pantalla completa</strong> <kbd>F</kbd>: Cambia entre modo ventana y pantalla completa.</li>
      <li><strong>Atajos de teclado:</strong> Muestra un resumen de todos los atajos disponibles.</li>
      <li><strong>Reportar un error:</strong> Abre un formulario para enviar reportes de bugs directamente al equipo.</li>
      <li><strong>Acerca de:</strong> Muestra la versión actual de Yoru Reader.</li>
    </ul>
  </div>
</div>

| Tecla | Acción |
| :--- | :--- |
| <kbd>Flecha Izquierda</kbd> / <kbd>A</kbd> | Ir a la página anterior |
| <kbd>Flecha Derecha</kbd> / <kbd>D</kbd> | Ir a la página siguiente |
| <kbd>Esc</kbd> | Cerrar modales emergentes o ventanas de diccionarios |
| <kbd>V</kbd> | Reproducir/Pausar el audio de la oración mediante Text-to-Speech (TTS) |
| <kbd>M</kbd> | Enviar la palabra seleccionada directamente a Anki (Minar) |
| <kbd>Q</kbd> | Abrir/Cerrar panel de Ajustes de Lectura y Visualización |
| <kbd>F</kbd> | Activar/Desactivar pantalla completa |

---

## Descargas

<div id="descargas" style={{ display: 'flex', gap: '3rem', margin: '2.5rem 0', flexWrap: 'wrap' }}>

  {/* Columna izquierda: Desktop */}
  <div style={{ flex: '0 0 220px' }}>
    <h3 style={{ fontSize: '1.5rem', fontWeight: '800', margin: '0 0 0.4rem' }}>Desktop</h3>
    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', margin: '0', lineHeight: '1.5' }}>La versión gratuita para PC está disponible para Windows.</p>
  </div>

  {/* Columna derecha: filas de plataforma */}
  <div style={{ flex: '1', minWidth: '260px' }}>

    {/* Windows */}
    <div style={{ padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.3rem' }}>🪟</span>
          <span style={{ fontWeight: '700', fontSize: '1rem' }}>Windows</span>
        </div>
        <a href="https://github.com/zams0527-eng/Yoru-Reader/raw/main/downloads/Yoru-Reader%20Setup%201.0.1.exe"
           target="_blank" rel="noopener noreferrer"
           style={{ color: 'var(--yc-yellow)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>
          ↓ Windows 10+ (x64)
        </a>
      </div>
      <ol style={{ margin: '0', paddingLeft: '1.25rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: '1.7' }}>
        <li>Descarga el instalador ejecutable (<code>Yoru-Reader Setup 1.0.1.exe</code>).</li>
        <li>Haz doble clic en el archivo descargado para iniciar el asistente de instalación.</li>
        <li>Sigue los pasos en pantalla para crear un acceso directo en tu escritorio.</li>
        <li>Abre la aplicación, arrastra tu primera novela en formato <code>.txt</code> o <code>.epub</code> y listo.</li>
      </ol>
    </div>

  </div>
</div>

<div style={{ display: 'flex', gap: '3rem', margin: '0 0 2.5rem', flexWrap: 'wrap' }}>

  {/* Columna izquierda: Móvil */}
  <div style={{ flex: '0 0 220px' }}>
    <h3 style={{ fontSize: '1.5rem', fontWeight: '800', margin: '0 0 0.4rem' }}>Móvil</h3>
    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', margin: '0', lineHeight: '1.5' }}>Versión gratuita para Android. Importa tus novelas directamente desde tu teléfono.</p>
  </div>

  {/* Columna derecha: filas de plataforma */}
  <div style={{ flex: '1', minWidth: '260px' }}>

    {/* Android */}
    <div style={{ padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.3rem' }}>🤖</span>
          <span style={{ fontWeight: '700', fontSize: '1rem' }}>Android</span>
        </div>
        <a href="https://github.com/zams0527-eng/Yoru-Reader/raw/main/downloads/Yoru-Reader-1.0.1.apk"
           target="_blank" rel="noopener noreferrer"
           style={{ color: 'var(--yc-yellow)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>
          ↓ Yoru Reader (.apk)
        </a>
      </div>
      <ol style={{ margin: '0', paddingLeft: '1.25rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: '1.7' }}>
        <li>Descarga el archivo <code>.apk</code> (<code>Yoru-Reader-1.0.1.apk</code>) en tu móvil.</li>
        <li>Si es necesario, habilita "Instalar aplicaciones de fuentes desconocidas" en los ajustes de seguridad.</li>
        <li>Ejecuta el archivo descargado y confirma la instalación.</li>
        <li>Abre la aplicación, crea tu perfil e importa tus novelas desde el almacenamiento interno.</li>
      </ol>
    </div>

  </div>
</div>
