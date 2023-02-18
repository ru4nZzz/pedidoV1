var btn = document.querySelector(".no");
var position

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    btn.addEventListener("touchstart", function() {
        position ? (position = 0) : (position = 150);
        btn.style.transform = `translate(${position}px,0px)`;
        btn.style.transition = "all 0.3s ease";
      });
      
      btn.addEventListener("touchend", function() {
        position ? (position = 0) : (position = 150);
        btn.style.transform = `translate(${position}px,0px)`;
        btn.style.transition = "all 0.3s ease";
      });
  } else {
    btn.addEventListener("mouseover", function() {
        position ? (position = 0) : (position = 150);
        btn.style.transform = `translate(${position}px,0px)`;
        btn.style.transition = "all 0.3s ease";
        });
  }

function tanks() {
alert("Eu também aceito namorar com vc, meu amor você é um raio de sol que ilumina a minnha vida e faz tudo ficar mais colorido e especial.")
}  

function not() {
alert("Você nem ta maluca de não aceitar, volte lá e clique no sim! :/")
}  
