---
sidebar_position: 1
---

# 🗂️ Guía de Anki

**Anki** es la herramienta central de tu aprendizaje. Es un software de memorización basado en el **Sistema de Repetición Espaciada (SRS)**. En lugar de repasar listas infinitas de vocabulario que olvidarás en días, Anki predice cuándo estás a punto de olvidar una palabra y te la muestra justo a tiempo para consolidarla en tu memoria a largo plazo.

<div className="text--center">
  <img class="round shadow" src="/img/srs-intervals.png" alt="Intervalos de Repetición Espaciada" width="600" style={{margin: '1.5rem 0'}} />
</div>

---

## 1. ¿Por qué usar Anki?

Aprender japonés requiere familiarizarse con miles de palabras y kanjis. El método tradicional de repetir y escribir palabras en papel es ineficiente a largo plazo.

El secreto de Anki está en la **Curva del Olvido**:
* Cuando aprendes una palabra, la retienes en la memoria a corto plazo.
* Si la repasas justo antes de olvidarla, el intervalo para el siguiente repaso se duplica o triplica.
* Eventualmente, la palabra pasa a tu **memoria a largo plazo**, requiriendo repasos espaciados por meses o incluso años.

<div className="text--center">
  <img class="round shadow" src="/img/forgetting-curve.png" alt="Curva del Olvido" width="500" style={{margin: '1.5rem 0'}} />
</div>

> **Regla de oro:** Dedica 15–20 minutos diarios a Anki. La constancia diaria es el único secreto.

---

## 2. Instalación

1. **Escritorio (Recomendado):** Descarga e instala la versión Qt6 (más moderna y estable):  
   👉 **[Descargar Anki para Escritorio](https://apps.ankiweb.net/)**
2. **Dispositivos móviles:**
   * **Android:** Descarga **AnkiDroid** de forma gratuita en la Play Store.
   * **iOS:** Puedes adquirir la app oficial **AnkiMobile** en la App Store (es de pago, pero ayuda a financiar el desarrollo del software libre de Anki).
3. **Sincronización:** Crea una cuenta gratuita en **AnkiWeb** desde la aplicación para sincronizar tus progresos entre tu ordenador y tu móvil.

---

## 3. Preparación: Plantilla Lapis y Mazo

Para estudiar de forma atractiva y organizada, usaremos una plantilla de tarjeta minimalista y optimizada para inmersión llamada **Lapis**:

1. Descarga el archivo de la plantilla:  
   👉 **[Descargar Plantilla Lapis (.apkg)](https://github.com/donkuri/lapis/releases/download/v1.6.0/Lapis.apkg)**
2. Abre Anki e importa el archivo descargado haciendo doble clic sobre él. Se creará automáticamente un mazo llamado `Lapis` con una tarjeta de ejemplo:
   <div className="text--center">
     <img class="round shadow" src="/img/anki_lapis_deck.png" alt="Mazo Lapis Importado" width="500" style={{margin: '1rem 0'}} />
   </div>
3. En la pantalla principal de Anki, haz clic en **Crear mazo** en la parte inferior y nómbralo `Minería`. Aquí guardaremos las palabras de tu inmersión. *(Puedes borrar de forma segura el mazo vacío de 'Lapis' que se importó en el paso anterior, ya que solo necesitamos conservar la plantilla interna).*

---

## 4. Conceptos Básicos

Al abrir Anki por primera vez, te encontrarás con la interfaz principal de la aplicación, donde verás tu lista de mazos (inicialmente solo el mazo "Predeterminado"):

<div className="text--center">
  <img class="round shadow" src="/img/anki_default_deck.png" alt="Interfaz Principal de Anki" width="550" style={{margin: '1.5rem 0'}} />
</div>

Para familiarizarte con el programa, estos son los conceptos fundamentales que debes conocer:

* **Mazos (Decks):** Grupos de tarjetas. Un mazo contiene tarjetas de estudio y tiene sus propios ajustes y límites diarios.
* **Tarjetas (Cards):** Tienen una cara frontal (donde ves la palabra en japonés) y una trasera (donde se revela la definición, audio, lectura y la frase de contexto):
  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', margin: '1.5rem 0' }}>
    <div style={{ flex: '1 1 300px', minWidth: '250px', textAlign: 'center' }}>
      <p><strong>Cara Frontal</strong></p>
      <img class="round shadow" src="/img/anki_card_front.png" alt="Cara frontal de tarjeta" style={{ width: '100%', maxWidth: '350px' }} />
    </div>
    <div style={{ flex: '1 1 300px', minWidth: '250px', textAlign: 'center' }}>
      <p><strong>Cara Trasera (Lapis)</strong></p>
      <img class="round shadow" src="/img/anki_card_back.png" alt="Cara trasera de tarjeta" style={{ width: '100%', maxWidth: '350px' }} />
    </div>
  </div>

* **Explorar (Browser):** La base de datos donde puedes buscar, editar o corregir cualquier tarjeta guardada y ver sus campos de datos:
  <div className="text--center">
    <img class="round shadow" src="/img/anki_browser_fields.png" alt="Explorador de tarjetas en Anki" width="600" style={{margin: '1rem 0'}} />
  </div>

* **Estadísticas (Stats):** Gráficos que muestran tu progreso, cuántas tarjetas tienes maduras (memorizadas a largo plazo) y el volumen de repasos futuros:
  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', margin: '1.5rem 0' }}>
    <div style={{ flex: '1 1 300px', minWidth: '250px', textAlign: 'center' }}>
      <p><strong>Pronóstico de repasos</strong></p>
      <img class="round shadow" src="/img/anki_forecast_stats.png" alt="Pronóstico de repasos futuros" style={{ width: '100%', maxWidth: '380px' }} />
    </div>
    <div style={{ flex: '1 1 300px', minWidth: '250px', textAlign: 'center' }}>
      <p><strong>Conteo de tarjetas</strong></p>
      <img class="round shadow" src="/img/anki_card_count_stats.png" alt="Conteo y estado de tarjetas" style={{ width: '100%', maxWidth: '380px' }} />
    </div>
  </div>

---

## 5. Preferencias Generales (Herramientas > Preferencias)

Antes de configurar el mazo de estudio, abre el panel de preferencias de Anki (ve a **Herramientas** → **Preferencias** o presiona `Ctrl + P`) y realiza estos ajustes recomendados:

* **Apariencia:** Puedes activar "Reducir el movimiento" para simplificar efectos visuales molestos.
* **Repasos:** Ajusta el "Límite del estudio por adelantado" a `20 mins` (o según tu preferencia de estudio).

<div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', margin: '1.5rem 0' }}>
  <div style={{ flex: '1 1 350px', minWidth: '300px', textAlign: 'center' }}>
    <p><strong>Pestaña Apariencia</strong></p>
    <img class="round shadow" src="/img/anki_preferences_appearance.png" alt="Preferencias Apariencia" style={{ width: '100%', maxWidth: '400px' }} />
  </div>
  <div style={{ flex: '1 1 350px', minWidth: '300px', textAlign: 'center' }}>
    <p><strong>Pestaña Repasos</strong></p>
    <img class="round shadow" src="/img/anki_preferences_reviews.png" alt="Preferencias Repasos" style={{ width: '100%', maxWidth: '400px' }} />
  </div>
</div>

---

## 6. Configuración Optimizada de Opciones de Mazo

Configura las opciones de tu mazo `Minería` (clic en el engranaje ⚙️ al lado del mazo → **Opciones**):

### Límites diarios
* **Tarjetas nuevas/día:** `10` a `20` (comienza con pocas; es mejor calidad que cantidad).
* **Repasos máximos/día:** `9999` (para asegurar que repases siempre todo lo que te toque cada día sin filtros).

<div className="text--center">
  <img class="round shadow" src="/img/anki_deck_limits.png" alt="Límites Diarios del Mazo" width="550" style={{margin: '1rem 0'}} />
</div>

### Pasos de Aprendizaje (Tarjetas Nuevas)
* **Pasos:** `38s 1m 5m 1h`  
  *Esto hará que repases la palabra nueva en esos intervalos durante la misma sesión de estudio antes de mandarla al día siguiente.*
* **Intervalo de graduación:** `1` (la tarjeta se programa para el día siguiente si la respondes bien al final de los pasos).

<div className="text--center">
  <img class="round shadow" src="/img/anki_new_cards_config.png" alt="Configuración de Tarjetas Nuevas" width="550" style={{margin: '1rem 0'}} />
</div>

Para entender mejor cómo funcionan estos pasos de aprendizaje y la transición de tarjeta nueva a tarjeta de repaso, mira este diagrama visual:

<div className="text--center">
  <img class="round shadow" src="/img/anki_steps_explanation.png" alt="Diagrama de los Pasos de Aprendizaje" width="600" style={{margin: '1rem 0'}} />
</div>

### Olvidos (Lapses)
* **Pasos de reaprendizaje:** `1m 5m 1h`  
  *Intervalos de repaso rápidos cuando fallas una palabra que ya conocías.*
* **Acción para sanguijuelas:** `Solo etiqueta` (para no suspender ni bloquear tarjetas difíciles de memorizar).

<div className="text--center">
  <img class="round shadow" src="/img/anki_lapses_config.png" alt="Configuración de Olvidos en Anki" width="550" style={{margin: '1rem 0'}} />
</div>

### Avanzado
* **Intervalo máximo:** `36500` (100 años).
* **Modificador de intervalo:** `1.00` (puedes subirlo a `1.05` o `1.10` si sientes que ves las tarjetas demasiado a menudo y quieres espaciar los repasos).

<div className="text--center">
  <img class="round shadow" src="/img/anki_advanced_config.png" alt="Configuración Avanzada del Mazo" width="550" style={{margin: '1rem 0'}} />
</div>

---

## 7. Complementos Esenciales (Addons)

En Anki ve a **Herramientas** → **Complementos** → **Obtener complementos...** e instala los siguientes códigos:

### 1. AnkiConnect (Código: `2055492159`)
Obligatorio para conectar Yomitan en tu navegador con tu base de datos de Anki.

### 2. PassFail2 (Código: `876946123`)
Simplifica la interfaz de respuesta de Anki, sustituyendo los 4 botones por defecto (Otra vez, Difícil, Bien, Fácil) por solo dos opciones limpias: **Fail** (Fallo) y **Pass** (Aprobado). Esto elimina la fatiga de decisión y agiliza radicalmente el tiempo de tus repasos:

<div className="text--center">
  <img class="round shadow" src="/img/anki_pass_fail_buttons.png" alt="Botones Simplificados Pass Fail" width="280" style={{margin: '1rem 0'}} />
</div>

### 3. Review Heatmap (Código: `1772066277`)
Agrega una cuadrícula visual de actividad estilo GitHub a la pantalla principal de Anki que registra tus días consecutivos de racha de estudio y tu promedio de repaso. Es una excelente herramienta visual de motivación:

<div className="text--center">
  <img class="round shadow" src="/img/anki_review_heatmap.png" alt="Calendario de Actividad Review Heatmap" width="550" style={{margin: '1rem 0'}} />
</div>

---

## 8. Personalización de la Tarjeta (Lapis)

Si deseas modificar visualmente tu tarjeta (por ejemplo, cambiar colores del acento tonal o mostrar la definición monolingüe primero):

1. En el menú principal de Anki, ve a **Herramientas** → **Administrar tipos de nota**.
2. Selecciona **Lapis** y haz clic en **Tarjetas...**.
3. En la parte de configuración (dentro de los scripts de la plantilla), puedes editar los valores directamente:
   * `showMonolingualDefinitionFirst = false;` (cámbialo a `true` si usas diccionarios monolingües).
   * `pitchAccentColoring = true;` (pinta los caracteres según su acento tonal para ayudarte con la pronunciación).
