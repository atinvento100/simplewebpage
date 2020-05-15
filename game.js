var player1 = prompt("Player1: Enter your Name, you will be \'X\'");
var p1sign='X';

var player2 = prompt("Player2: Enter your Name, you will be \'O\'");
var p2sign='O';

var game_on = true;
var table = $('table tr');
var sqr = document.querySelectorAll("td");
var num=0;


function change(r,c,sign)
{
  return table.eq(r).find('td').eq(c).text(sign);
}

function returnsign(r,c)
{
  return table.eq(r).find('td').eq(c).text();
}

function Match(one,two,three){
  return (one===two && one===three  && one !== '' && one !== undefined);
}


function horz()
{
  for(var i=0;i<3;i++)
  {
    if(Match(returnsign(i,0),returnsign(i,1),returnsign(i,2)))
    {
      return true;
    }
    else {
      continue;
    }
  }
}
//
//
function VERT()
{
for(var i=0;i<3;i++)
{
 if(Match(returnsign(0,i),returnsign(1,i),returnsign(2,i)))
 {
   return true;
 }
 else {
         continue;
 }
}
}
//
//
function diag()
{
//
    if(Match(returnsign(0,0),returnsign(1,1),returnsign(2,2)))
    {
     return true;
    }
    if (Match(returnsign(0,2),returnsign(1,1),returnsign(2,0)))
    {
     return true;
   }


}



function gameEnd(winningPlayer) {
      $('h3').text(winningPlayer+" has won! Refresh your browser to play again!").css("fontSize", "50px");
}


var currentp = 1;
var currentn = player1;
var currentsign = p1sign;

$('h3').text(player1+" it is your turn");

$("#res").on('click',function(){
  for (var i = 0; i < sqr.length; i++) {
    sqr[i].textContent = '';
}
})

$('table td').on('click',function(){
  num = num+1;
  var col = $(this).closest("td").index();
  var row = $(this).closest("tr").index();

  change(row,col,currentsign);

if(horz())
{
  gameEnd(currentn);
  console.log("won");
  game_on=false;
}
else if(VERT())
{
  gameEnd(currentn);
  console.log("won");
  game_on=false;
}
else if(diag())
{
  gameEnd(currentn);
  console.log("won");
  game_on=false;
}

else if(num===9 && game_on=== true)
{
  $('h3').text(" It's a Draw.. Refresh your browser to restart.....");
}


else {

    currentp = currentp* -1;

    if (currentp === 1) {
    currentn = player1;
    $('h3').text(currentn+": it is your turn");
    currentsign = p1sign;
  }else {
    currentn = player2;
    $('h3').text(currentn+": it is your turn");
    currentsign = p2sign;
  }

}
})


function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

// Simple function for clarity
function changeHeaderColor(){
  colorInput = getRandomColor()
  document.querySelector('h1').style.color = colorInput;
}

setInterval("changeHeaderColor()",500);
