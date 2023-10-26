state = 50; //vychozi stav

onkeydown = (event) => {
  
  if(event.key == "a") {
  state -= 10;  
  }
  
  if(event.key == "l") {
  state += 10;  
  }
  
  if(state <= -10) {
    alert("Vyhrál hráč 👽");
    state = 50;
  }
  
  if(state >= 110) {
    alert("Vyhrál hráč 🤖");
    state = 50;
  }
  
  p1.style.top = state + "%"; //nemusím použít getElementById, když mám bezpečnoý název elementu
  p2.style.top = 100-state + "%";
};
