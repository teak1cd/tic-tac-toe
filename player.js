var turn = 0;
var player = ["<h1>O</h1>","<h1>X</h1>"];
var comb = ["012","345","678","036","147","258","048","246"];
var rows = ["012","210","345","543","678","876","036","630","147","741","258","825","840","048","246","642","021","354","687","084","264","036","147","258"];
function getCell(n,m){
if(typeof m !== "undefined"){
  return getCell(Math.floor(n*3+m-1)); 
}
return document.getElementsByClassName("cell")[Math.floor(n)];
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
      var t = 0;
      switch(document.getElementById("difficulty").value){
        case "easy":
         t = Math.round(Math.random()*posible.length);
         cell(posible[t]);
        break;
        case "normal":
          t = Math.round(Math.random()*posible.length);
          for(var i = 0;i<rows.length;i++){
            if(getCell(rows[i][0]).innerHTML===player[0]&&getCell(rows[i][1]).innerHTML===player[0]&&getCell(rows[i][2]).innerHTML===""){
              t = rows[i][2];
              console.log(t);
              i = rows.length+1;
            }
          }
          cell(t);
        break;
        case "cheater":
          turn = 1;
          cell(0);
          turn = 1;
          cell(1);
          turn = 1;
          cell(2);
          turn = 1;
          cell(3);
          turn = 1;
          cell(4);
          turn = 1;
          cell(5);
          turn = 1;
          cell(6);
          turn = 1;
          cell(7);
          turn = 1;
          cell(8);
          t = 0;
        break;
      }
    }
  }
}
function reset(){
  for(var i = 0;i<9;i++){
    getCell(i).innerHTML="";
  }
  turn = 0;
}
