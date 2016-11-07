var turn = 0;
var player = ["<h1>O</h1>","<h1>X</h1>"];
var comb = ["012","345","678","036","147","258","048","246"];
function getCell(n,m){
if(typeof m !== "undefined"){
  return getCell(n*3+m-1); 
}
return document.getElementsByClassName("cell")[n];
}
function cell(n){
  if(getCell(n).innerHTML === ""){
    getCell(n).innerHTML = player[turn];
    turn === 0 ? turn = 1 : turn = 0;
    for(var i = 0;i<comb.length;i++){
      var temp = getCell(comb[i][0]).innerHTML;
      if(getCell(comb[i][1]).innerHTML === temp && getCell(comb[i][2]).innerHTML === temp && getCell(comb[i][0]).innerHTML !== ""){
        if(temp === "<h1>O</h1>"){
          alert("Player1 Wins!");
        }else{
          alert("Player2 Wins!");
        }
        return;
      }
    }
    var most = 9;
    for(var i = 0;i<9;i++){
      if(getCell(i).innerHTML!=="")most--;
    }
    if(most === 0){
      alert("TIE!");
    }
    if(turn === 1 && document.getElementById("bot").value === "cpu"){
      var posible = [];
      for(var i = 0;i<9;i++){
        if(getCell(i).innerHTML===""){
          posible.push(i);
        }
      }
      var t = Math.round(Math.random()*posible.length);
      cell(posible[t]);
    }
  }
}
function reset(){
  for(var i = 0;i<9;i++){
    getCell(i).innerHTML="";
  }
  turn = 0;
}
