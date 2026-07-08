---
sidebar_position: 2
---

# 🔍 Yomitan (Diccionario Flotante)

Sin importar la etapa en la que te encuentres o la dificultad del contenido que estés consumiendo, tarde o temprano te verás en la obligación de usar un diccionario de japonés. Ya sea para conocer una lectura, entender el significado de una palabra o escuchar su pronunciación.

**Yomitan** (la continuación moderna y optimizada del clásico Yomichan) es una extensión de navegador indispensable para la inmersión. Te permite consultar varios diccionarios simultáneamente pasando el cursor sobre cualquier palabra en japonés mientras mantienes una tecla presionada:

<div className="text--center">
  <img class="round shadow" src="/img/yomitan_example.gif" alt="Demostración de Yomitan" width="650" style={{margin: '1rem 0'}} />
</div>

---

## 1. Instalación de la Extensión

Yomitan está disponible para navegadores basados en Chromium (Chrome, Brave, Edge) y Firefox. En dispositivos móviles (Android), puedes instalarlo utilizando un navegador compatible con extensiones como Kiwi Browser.

👉 **[Yomitan para Chrome / Brave / Edge](https://chromewebstore.google.com/detail/yomitan/ogmnaimimemjmbakcfefmnahgdfhfami)**  
👉 **[Yomitan para Firefox](https://addons.mozilla.org/es/firefox/addon/yomitan/)**  
👉 **[Kiwi Browser para Android](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser)**  

---

## 2. Descargar e Importar Diccionarios

Yomitan viene vacío al instalarse. Necesitas descargar y cargar los diccionarios en formato `.zip` (**no los descomprimas**):

1. Descarga los diccionarios que prefieras desde el paquete oficial:
   👉 **[Paquete de Diccionarios Recomendados](https://learnjapanese.link/dictionaries)**
   
   *Recomendación inicial de diccionarios:*
   * **Bilingüe:** `[Bilingual] JMdict (Recommended).zip` (Diccionario principal de japonés-inglés, usado por proyectos como Jisho.org).
   * **Gramática:** `[Grammar] Dictionary of Japanese Grammar.zip` (Esencial para buscar estructuras gramaticales y partículas).
   * **Bilingüe Avanzado:** `[Bilingual] 新和英.zip` (Excelente diccionario con cientos de ejemplos de frases y uso natural).
   * **Acento Tonal:** `[Pitch Accent] アクセント辞典v2.zip` (Indispensable para ver la entonación y pronunciación correcta).
   * **Kanji:** `[Kanji] KANJIDIC (English).zip` (Permite ver detalles, trazos y lecturas de Kanjis individuales al hacer clic sobre ellos).
   
2. Abre la configuración de Yomitan haciendo clic en su icono y luego en el engranaje **⚙️ Settings**.
3. Ve a la sección **Dictionaries** y haz clic en **Configure installed and enabled dictionaries...**.
4. Haz clic en el botón **Import** y selecciona los archivos `.zip` descargados. Espera a que finalice el proceso de importación.

:::tip Prioridad de Diccionarios
Una vez importados, puedes cambiar la prioridad (orden de aparición) asignando un número en la casilla de cada diccionario. A mayor número, más arriba aparecerá en tus búsquedas.
:::

---

## 3. Diccionarios de Frecuencia (CC100 / JPDB)

Los diccionarios de frecuencia te ayudan a saber qué tan común es una palabra en la inmersión real. Así puedes decidir si vale la pena minarla o si es un vocablo extremadamente raro que no necesitas recordar por ahora:

* **JPDB:** Lista de frecuencias generada a partir del análisis de miles de anime, novelas ligeras, mangas y dramas. Excelente para medir la utilidad de palabras en contenido de entretenimiento.
* **CC100:** Lista de frecuencias del corpus web japonés. Mide la formalidad o popularidad de la palabra en internet.

### ¿Cómo interpretar el rango de frecuencia?
Cuando busques una palabra, verás un número al lado (el puesto de popularidad). Utiliza esta guía rápida para decidir si minarla:

| Rango de Frecuencia | Tipo de Palabra | ¿Vale la pena minar? |
|---|---|---|
| **1 – 10,000** | **Muy común** | **¡Sí!** Es vocabulario esencial del día a día. |
| **10,001 – 20,000** | **Común** | **Sí.** Palabras frecuentes que verás a menudo. |
| **20,001 – 40,000** | **Poco común** | **Opcional.** Minar solo si la ves repetidamente. |
| **40,001 – 100,000** | **Rara** | **Generalmente no.** Palabras técnicas o literarias avanzadas. |
| **100,000+** | **Extremadamente rara** | **No.** Ni los propios nativos la usan habitualmente. |

---

## 4. Configuración y Ajustes Avanzados

Para sacarle el máximo partido a Yomitan, activa la casilla **Configure advanced settings** (en la esquina inferior izquierda del menú lateral de opciones) y ajusta los siguientes apartados:

### Popup (Ventana Emergente)
Habilita el escaneo dentro de las propias ventanas flotantes de Yomitan y elimina el límite de ventanas concurrentes (limpiando el valor o poniéndolo en ilimitado) para poder buscar palabras dentro de las definiciones:

<div className="text--center">
  <img class="round shadow" src="/img/yomitan_popup_settings.png" alt="Ajustes de Popup" width="650" style={{margin: '1rem 0'}} />
</div>

### Popup Appearance (Apariencia)
Personaliza la interfaz gráfica. Te sugerimos activar el modo nocturno (**Night theme**) y habilitar la opción de colapsar diccionarios (**Collapse dictionary entries**) para mantener las búsquedas limpias y organizadas:

<div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', margin: '1.5rem 0' }}>
  <div style={{ flex: '1 1 300px', minWidth: '250px', textAlign: 'center' }}>
    <img class="round shadow" src="/img/yomitan_appearance1.png" alt="Configuración de tema y visualización" style={{ width: '100%', maxWidth: '350px' }} />
  </div>
  <div style={{ flex: '1 1 300px', minWidth: '250px', textAlign: 'center' }}>
    <img class="round shadow" src="/img/yomitan_appearance2.png" alt="Colapsar diccionarios" style={{ width: '100%', maxWidth: '350px' }} />
  </div>
</div>

### Popup Position & Size (Tamaño de Ventana)
Incrementa el ancho y alto de la ventana emergente para que las definiciones (especialmente si usas diccionarios monolingües avanzados en el futuro) se lean de forma cómoda y clara:

<div className="text--center">
  <img class="round shadow" src="/img/yomitan_position_size.png" alt="Ajustes de tamaño de la ventana" width="650" style={{margin: '1rem 0'}} />
</div>

### Audio (Pronunciación Nativa)
Configura los servidores de audio para poder escuchar cómo se pronuncian las palabras reales grabadas por hablantes nativos:

<div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', margin: '1.5rem 0' }}>
  <div style={{ flex: '1 1 300px', minWidth: '250px', textAlign: 'center' }}>
    <img class="round shadow" src="/img/yomitan_audio1.png" alt="Configuración de fuentes de audio" style={{ width: '100%', maxWidth: '350px' }} />
  </div>
  <div style={{ flex: '1 1 300px', minWidth: '250px', textAlign: 'center' }}>
    <img class="round shadow" src="/img/yomitan_audio2.png" alt="Formatos de audio" style={{ width: '100%', maxWidth: '350px' }} />
  </div>
</div>

---

## 5. Conectar Yomitan con Anki

Asegúrate de tener **Anki abierto en segundo plano** antes de realizar estos pasos:

1. En la configuración de Yomitan (⚙️), ve a la pestaña **Anki**.
2. Activa la opción **Enable Anki integration**.
3. Haz clic en **Configure Anki flashcards...** y selecciona lo siguiente:
   * **Deck (Mazo):** Selecciona tu mazo `Minería`.
   * **Model (Plantilla/Tipo de Nota):** Selecciona `Lapis`.
4. **Mapeo de Campos:** Asigna los valores de Yomitan a los campos de la plantilla Lapis exactamente de esta manera:

| Campo de Tarjeta (Field) | Valor de Yomitan (Value) | Explicación |
|---|---|---|
| **Expression** | `{expression}` | La palabra objetivo en Kanji. |
| **ExpressionFurigana** | `{furigana-plain}` | La lectura de la palabra con furigana. |
| **ExpressionReading** | `{reading}` | La lectura de la palabra en kana. |
| **ExpressionAudio** | `{audio}` | El audio nativo de pronunciación. |
| **SelectionText** | `{popup-selection-text}` | El fragmento de texto seleccionado. |
| **MainDefinition** | *Selecciona tu diccionario* | Tu diccionario principal (ej: JMdict). |
| **Sentence** | `{cloze-prefix}<b>{cloze-body}</b>{cloze-suffix}` | La frase con la palabra objetivo en negrita. |
| **Glossary** | `{glossary}` | La definición completa de la palabra. |
| **PitchPosition** | `{pitch-accent-positions}` | Posición del acento tonal. |
| **PitchCategories** | `{pitch-accent-categories}` | Categorías del acento (Heiban, Odaka, etc.). |
| **Frequency** | `{frequencies}` | Frecuencia de uso de la palabra. |
| **FreqSort** | `{frequency-harmonic-rank}` | Rango para ordenar tarjetas por frecuencia. |
| *Resto de campos* | *Déjalos vacíos* | |

5. Haz clic en **Save** en la parte inferior para guardar los cambios.

---

## 6. Demostración y Métodos de Búsqueda

### Búsqueda Rápida en Pantalla
Para comprobar que la búsqueda rápida funciona correctamente:

1. Mantén presionada la tecla **Shift** y pasa el cursor sobre cualquier palabra de la siguiente oración de prueba:  
   👉 *みんな**恋愛**の話する de 好きだomな。*
2. Debería desplegarse una tarjeta flotante parecida a esta:

<div className="text--center">
  <img class="round shadow" src="/img/yomitan_demo_popup.png" alt="Ejemplo de búsqueda en Yomitan" width="600" style={{margin: '1rem 0'}} />
</div>

3. Haz clic en el botón verde con el símbolo **`+`** (esquina superior derecha).
4. La tarjeta se añadirá instantáneamente a tu mazo de `Minería` en Anki, incluyendo el audio, la definición y la frase exacta como contexto.

### Búsqueda Manual (Standalone Search)
Puedes usar Yomitan como un diccionario de escritorio convencional para buscar cualquier palabra que escribas o pegues:
* Abre el panel de búsqueda presionando **`Alt + Insert`** (o haz clic en el icono de Yomitan y presiona el icono de la lupa 🔍).

### Desglose y Consulta de Kanji
Cuando veas una palabra en el panel flotante de Yomitan, puedes hacer clic sobre cualquier carácter Kanji individual de su título principal. Esto abrirá de forma automática la vista detallada de ese Kanji (gracias a **KANJIDIC**), mostrándote su orden de trazos, radicales y lecturas.

---

## 7. Escanear en Archivos PDF

Por defecto, los navegadores bloquean el acceso de las extensiones a archivos locales. Si deseas utilizar Yomitan en novelas ligeras o mangas en formato PDF abiertos en tu navegador:

1. Ve a la página de extensiones de tu navegador (ej: `chrome://extensions`).
2. Busca la extensión **Yomitan** y haz clic en **Detalles**.
3. Activa la casilla **Permitir acceso a las URL de archivo** (o *Allow access to file URLs*).
4. Abre cualquier PDF local arrastrándolo a una pestaña del navegador y podrás usar Yomitan con normalidad. (Nota: en Chrome, si los PDFs locales por defecto no responden al escaneo, puedes abrirlos usando un lector web compatible como [PDF.js](https://mozilla.github.io/pdf.js/web/viewer.html)).

