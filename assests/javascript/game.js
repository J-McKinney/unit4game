var compNum;

$(document).ready(function () {
   compNum = Math.floor(Math.random() * 102) + 19;
   console.log(compNum);
   $("#matchNum").html("Thanos: " + compNum);
   //computer picks a number between 19 and 120, that number is sent to id=matchNum
///////////////////////////////////////////////////////////////////////////////////

   let rup1 = Math.floor(Math.random() * 12) + 1;
   console.log("rupee1: " + rup1);
   $("#rup1").html("<img src=" + "assests\images\green rupee.jpg" + " value=" + rup1 + ">");
   //User picks the crystal1 with an unknown number??? it is sent to crystal1 pic
/////////////////////////////////////////////////////////////////////////////////

   let rup2 = Math.floor(Math.random() * 12) + 1;
   console.log("rupee2: " + rup2);
   $("#rup2").html(rup2);
   //User picks the crystal2 with an unknown number??? it is sent to crystal2 pic
//////////////////////////////////////////////////////////////////////////////////

   let rup3 = Math.floor(Math.random() * 12) + 1;
   console.log("rupee3: " + rup3);
   $("#rup3").html(rup3);
   //User picks the crystal3 with an unknown number??? it is sent to crystal3 pic
/////////////////////////////////////////////////////////////////////////////////

   let rup4 = Math.floor(Math.random() * 12) + 1;
   console.log("rupee4: " + rup4);
   $("#rup4").html(rup4);
   //User picks the crystal4 with an unknown number??? it is sent to crystal4 pic
/////////////////////////////////////////////////////////////////////////////////

let score = 0;


});