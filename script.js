const texto = [
  "Rossy, mi amorcito…",
  "Desde que llegaste a mi vida todo cambió.",
  "En solo tres meses lograste algo increíble:",
  "hacerme sentir amado de verdad.",
  "Amo todo de ti, mi coshita peshosha.",
  "Pero amo aún más la forma tan bonita en la que me demuestras tu amor.",
  "Pasar este San Valentín contigo me parece algo hermoso.",
  "Porque esta fecha es importante.",
  "Y tú eres la única con la que quiero compartir mi vida y todas las fechas especiales."
];

const mensajeFinal =
"Prometo amarte y elegirte cada día de nuestras vidas. " +
"Te amo como no tienes idea ❤️\n\n" +
"Siempre tú, mi Rossy 💖";

let frase = 0;
let letra = 0;

const textoEl = document.getElementById("texto");
const galeria = document.querySelector(".galeria");
const latido = document.getElementById("latido");

function escribir() {
  if (letra < texto[frase].length) {
    textoEl.innerHTML += texto[frase].charAt(letra);
    latido.currentTime = 0;
    latido.play();
    letra++;
    setTimeout(escribir, 45);
  } else {
    textoEl.innerHTML += "<br><br>";
    mostrarFotos();
    frase++;
    letra = 0;

    if (frase < texto.length) {
      setTimeout(escribir, 800);
    } else {
      setTimeout(mensajeFinalAnimado, 1500);
    }
  }
}

function mostrarFotos() {
  galeria.innerHTML = `
    <img src="img/foto${Math.floor(Math.random()*5)+1}.jpg">
    <img src="img/foto${Math.floor(Math.random()*5)+1}.jpg">
  `;
}

function mensajeFinalAnimado() {
  const final = document.getElementById("mensajeFinal");
  final.classList.add("brillo");
  let i = 0;

  function escribirFinal() {
    if (i < mensajeFinal.length) {
      final.innerHTML += mensajeFinal.charAt(i);
      i++;
      setTimeout(escribirFinal, 60);
    }
  }
  escribirFinal();
}

// Corazones y estrellas
function flotar(simbolo) {
  const el = document.createElement("div");
  el.innerHTML = simbolo;
  el.style.position = "fixed";
  el.style.left = Math.random() * 100 + "vw";
  el.style.top = "100vh";
  el.style.fontSize = "20px";
  el.style.opacity = 0.8;
  document.body.appendChild(el);

  let pos = 100;
  const anim = setInterval(() => {
    pos -= 0.3;
    el.style.top = pos + "vh";
    if (pos < -10) {
      clearInterval(anim);
      el.remove();
    }
  }, 20);
}

setInterval(() => flotar("❤️"), 700);
setInterval(() => flotar("✨"), 1400);

// Mensaje al tocar pantalla
document.body.addEventListener("click", () => {
  const msg = document.createElement("div");
  msg.innerHTML = "Te amo mi piciosa ❤️";
  msg.className = "toque";
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 2000);
});

window.onload = escribir;