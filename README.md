# Random Card Generator 🃏

## Descripción
Este proyecto genera una **carta aleatoria** al recargar la página.  
Cada carta muestra:

- Un **número o figura** en el centro (A, 2–10, J, Q, K)  
- Un **símbolo** (♠, ♥, ♦, ♣) arriba a la izquierda y abajo a la derecha  
- Los símbolos y el número cambian de color automáticamente según el palo:  
  - ♥ y ♦ → rojo  
  - ♠ y ♣ → negro  

El diseño utiliza **HTML, CSS (flexbox y márgenes)** y **JavaScript** para la generación aleatoria.

---

## Tecnologías usadas
- **HTML5** para la estructura de la carta  
- **CSS3** para el estilo y posicionamiento  
- **JavaScript** para generar los valores y símbolos aleatorios y cambiar colores  

---

## Cómo funciona
1. Al cargar la página (`window.onload`), se ejecuta una función que:
   - Escoge un número aleatorio del array `numbers`  
   - Escoge un símbolo aleatorio del array `symbols`  
   - Inserta los valores en los elementos HTML correspondientes  
   - Ajusta el color según el palo  

2. Se usan variables `const` para enlazar los elementos HTML con JavaScript.  
3. La carta está diseñada con **flexbox y márgenes automáticos** para que los símbolos y número central estén siempre dentro de los límites de la carta.

---

## Estructura del proyecto
card-generator/
│
├─ index.html # Estructura de la carta
├─ style.css # Estilos de la carta y layout
└─ app.js # Lógica para generar la carta aleatoria
