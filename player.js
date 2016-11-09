var turn = 0;
var player = ["<h1>O</h1>","<h1>X</h1>"];
var comb = ["012","345","678","036","147","258","048","246"];
var rows =
["012","120","021","345","453","354","678","786","687","786","687","036","360","063","147","471","174","258","582","285","048","480","084","642","426","624"];
function getCell(n,m){
document.getElementById("debug").innerHTML+=n;
if(n>8||n<0 || typeof n === "undefined"){
  alert("ERROR:"+n);
  n=8;
}
return document.getElementsByClassName("cell")[Math.floor(n)];
}
function cell(n){
  try{
  document.getElementById("debug").innerHTML="";
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
        case "hard":
          var st = false;
          t = Math.floor(Math.random()*posible.length);
          if(posible.length === 8){
             if(getCell(1).innerHTML!==""){
               if(Math.random()>0.5){
                 t = 6;
               }else{
                 t = 8;
               }
             }
             if(getCell(3).innerHTML!==""){
               if(Math.random()>0.5){
                 t = 2;
               }else{
                 t = 8;
               }
             }
             if(getCell(5).innerHTML1==""){
               if(Math.random()>0.5){
                 t = 0;
               }else{
                 t = 6;
               }
             }
            if(getCell(7).innerHTML1==""){
               if(Math.random()>0.5){
                 t = 0;
               }else{
                 t = 2;
               }
             }
             if(getCell(0).innerHTML!=="" ||getCell(2).innerHTML!==""||getCell(6).innerHTML!==""||getCell(8).innerHTML!==""){
                  t = 4;
             }
          }
          for(var i = 0;i<rows.length;i++){
            if(getCell(rows[i][0]).innerHTML===player[1]&&getCell(rows[i][1]).innerHTML===player[1]&&getCell(rows[i][2]).innerHTML===""&&!st&&posible.includes(Math.floor(rows[i][2]))){
              t = rows[i][2];
              i = rows.length+1;
              st = true;
            }
          }
          for(var i = 0;i<rows.length;i++){
            if(getCell(rows[i][0]).innerHTML===player[0]&&getCell(rows[i][1]).innerHTML===player[0]&&getCell(rows[i][2]).innerHTML===""&&!st&&posible.includes(Math.floor(rows[i][2]))){
              t = rows[i][2];
              i = rows.length+1;
              st = true;
            }
          }
          console.log(t);
          console.log(posible);
          if(document.getElementById("debug").innerHTML.length===1)t = posible[Math.floor(Math.random()*posible.length)];
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
  }catch(e){
    cell(n);
  }
}
function reset(){
  for(var i = 0;i<9;i++){
    getCell(i).innerHTML="";
  }
  turn = 0;
}
