
const contenedorLuces = document.getElementById("luces");
const botonLuces = document.getElementById("boton-luces");

const colores = [
  "#ff3030",
  "#ffe033",
  "#36e5ff",
  "#ff66d9",
  "#ffffff",
  "#49ff75"
];

let lucesEncendidas = true;
const cantidadLuces = 36;

// Crear las luces
for (let i = 0; i < cantidadLuces; i++) {
  const luz = document.createElement("div");

  luz.classList.add("luz", "encendida");

  // Elegir una altura aleatoria dentro del árbol
  const y = Math.random() * 100;

  // Cuanto más abajo, más ancho es el árbol
  const ancho = 12 + (y / 100) * 76;

  // Distribuir cada luz dentro del ancho permitido
  const x = (100 - ancho) / 2
    + Math.random() * ancho;

  luz.style.left = x + "%";
  luz.style.top = y + "%";

  // Seleccionar un color aleatorio
  const indiceColor = Math.floor(
    Math.random() * colores.length
  );

  const color = colores[indiceColor];

  luz.style.color = color;
  luz.style.backgroundColor = color;

  // Cada luz tiene una velocidad diferente
  const duracion = 0.5 + Math.random() * 1.5;
  const retraso = Math.random() * 2;

  luz.style.setProperty(
    "--duracion",
    duracion + "s"
  );

  luz.style.setProperty(
    "--retraso",
    "-" + retraso + "s"
  );

  // Añadir la luz al árbol
  contenedorLuces.appendChild(luz);
}

// Botón para encender y apagar las luces
botonLuces.addEventListener("click", function () {
  lucesEncendidas = !lucesEncendidas;

  const luces = document.querySelectorAll(".luz");

  luces.forEach(function (luz) {
    luz.classList.toggle(
      "encendida",
      lucesEncendidas
    );
  });

  botonLuces.textContent = lucesEncendidas
    ? "Apagar luces"
    : "Encender luces";
});
