const yesBtn=document.querySelector(".yes-btn");
const noBtn=document.querySelector(".no-btn");
const question=document.querySelector(".question");
const gif=document.querySelector(".gif");

// Cambia el texto y el gif cuando el boton de si aparece
yesBtn.addEventListener("click", () => {
  question.innerHTML="Yo tambien a ti, eres lo mejor que me ha pasado en la vida. Cree en ti como yo creo en ti";
  gif.src = "https://i.pinimg.com/originals/ef/d6/5d/efd65d33504c14316e540a075f92085b.gif";
});

// Hacer que el boton de No se mueva aleatoriamente al pasar el mouse sobre el
noBtn.addEventListener("mouseover", () => {
  const wrapper=document.querySelector(".wrapper");
  const wrapperRect=wrapper.getBoundingClientRect();
  const noBtnRect=noBtn.getBoundingClientRect();

// Calcular las posiciones maximas para garantizar que el boton permanezca dentro del contenedor
  const maxX=wrapperRect.width - noBtnRect.width;
  const maxY=wrapperRect.height - noBtnRect.height;

  const randomX=Math.floor(Math.random() * maxX);
  const randomY=Math.floor(Math.random() * maxY);

  noBtn.style.left=randomX + "px";
  noBtn.style.top=randomY + "px";
});