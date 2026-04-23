# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** <!-- Daina Paucar -->
**Fecha:** <!-- 23-04-2026 -->

---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

> **Ejemplo de análisis insuficiente** ❌
> _"La IA generó el código y funcionó bien."_
>
> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

### Momento del proceso

```
<!--
Cuando ya había terminado el HTML y separé los estilos en un archivo CSS externo, pero al aplicar estilos no se reflejaban cambios en el navegador.
-->
```

### Lo que le pedí a la IA

```
<!-- Tengo un archivo HTML y moví todos los estilos que estaban dentro de la etiqueta <style> a un archivo externo styles.css.
El problema es que los cambios de CSS no se aplican en el navegador.
¿Podés revisar conceptualmente qué cosas debería verificar en el HTML para asegurar que el archivo CSS esté correctamente vinculado?
Indicame errores comunes y cómo detectarlos usando el navegador. -->
```

### Análisis del resultado obtenido

```
<!--
La IA respondió listando los pasos básicos para vincular correctamente un archivo CSS externo, haciendo foco en la etiqueta <link> dentro del <head>.
Explicó que sin esa referencia el navegador no puede interpretar los estilos, aunque el archivo CSS esté bien escrito.
El enfoque fue correcto porque no se centró en el CSS en sí, sino en la relación entre HTML y CSS, lo cual era el origen real del problema.
Me resultó útil como guía para revisar la estructura general del documento y entender por qué visualmente no había ningún cambio.
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
El error concreto era de tipo lógico y estructural: el archivo CSS no estaba vinculado al HTML mediante una etiqueta <link>.
Lo detecté al revisar el <head> del HTML y comprobar que no existía ninguna referencia al archivo styles.css.
Técnicamente era incorrecto porque el navegador no carga hojas de estilo externas de forma automática; siempre deben declararse explícitamente.
Corregí el problema agregando la etiqueta styles.css en el <head>, y a partir de eso los estilos comenzaron a aplicarse correctamente.
-->
```

---

## Prompt 2

### Momento del proceso

```
<!--
Cuando ya tenía la navegación armada y quería que la navbar quedara visible al hacer scroll, pero la IA insistía en soluciones con JavaScript cuando yo sabía que podía resolverse solo con CSS.
-->
```

### Lo que le pedí a la IA

```
<!--Quiero que la barra de navegación quede fija en la parte superior de la pantalla al hacer scroll.
¿Podés decirme qué opciones existen para lograrlo y si es necesario usar JavaScript,
o si puede resolverse únicamente con CSS?-->
```

### Análisis del resultado obtenido

```
<!--
La IA propuso soluciones basadas principalmente en JavaScript, como detectar el scroll de la página y aplicar clases dinámicamente a la navegación.
El enfoque no era el que esperaba porque el problema era puramente visual y de posicionamiento, algo que CSS puede resolver sin lógica adicional.
Si bien la explicación técnica era válida, resultaba innecesariamente compleja para el objetivo del ejercicio.
Lo útil fue confirmar que el comportamiento buscado estaba bien definido, aunque la herramienta no eligió la solución más simple.
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
El error principal fue conceptual: la IA asumió que era obligatorio usar JavaScript para fijar la barra de navegación.
Detecté esto porque ya había implementado comportamientos similares anteriormente solo con CSS, y además la consigna no requería interacción dinámica.
Desde el punto de vista técnico, usar JS era innecesario y aumentaba la complejidad del código sin aportar beneficios reales.
Corregí esto investigando por mi cuenta y apliqué position: sticky junto con top: 0 en la navbar, logrando que se mantuviera visible durante el scroll de forma simple y correcta.
-->
```

---

## Reflexión final

```
<!--
El error principal fue conceptual: la IA asumió que era obligatorio usar JavaScript para fijar la barra de navegación.
Detecté esto porque ya había implementado comportamientos similares anteriormente solo con CSS, y además la consigna no requería interacción dinámica.
Desde el punto de vista técnico, usar JS era innecesario y aumentaba la complejidad del código sin aportar beneficios reales.
Corregí esto investigando por mi cuenta y apliqué position: sticky junto con top: 0 en la navbar, logrando que se mantuviera visible durante el scroll de forma simple y correcta.
-->
```
