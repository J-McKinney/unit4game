$(document).ready(function () {
   /////////////////////////////////////////////////////////////////////////////////////////////////
   let compNum = Math.floor(Math.random() * 102) + 19;
   console.log(compNum);
   $("#matchNum").html(compNum);
   const newLocal = 0;
   //computer picks a number between 19 and 120, that number is sent to id=matchNum
   /////////////////////////////////////////////////////////////////////////////////////////////////////
   let arr = [];
   while (arr.length < 6) {
      var i = Math.floor(Math.random() * 11) + 1;
      if (arr.indexOf(i) === -1) arr.push(i);
   }
   console.log(arr);
   ///////////////////////////////////////////////////////////////////////////////////////////////////////
   let rup1 = arr[0];
   console.log(rup1);
   // $("#rup1").html("<img src=" + "assests/images/BotW_Green_Rupee_Icon.png" + " value=" + rup1 + ">");
   ////////////////////////////////////////////////////////////////////////////////////////////////////
   let rup2 = arr[1];
   console.log(rup2);
   // $("#rup2").html("<img src=" + "assests/images/redrupee.png" + " value=" + rup2 + ">");
   ///////////////////////////////////////////////////////////////////////////////////////////////////
   let rup3 = arr[2];
   console.log(rup3);
   // $("#rup3").html("<img src=" + "assests/images/bluerupee.png" + " value=" + rup3 + ">");
   ///////////////////////////////////////////////////////////////////////////////////////////////////
   let rup4 = arr[3];
   console.log(rup4);
   // $("#rup4").html("<img src=" + "assests/images/yellorupee.png" + " value=" + rup4 + ">");
   ////////////////////////////////////////////////////////////////////////////////////////////////////
   let bldgNum = 0;
   console.log("score: " + bldgNum);
   $("#bldgNum").html(bldgNum);
   //logging the score at the beginning of the game to zero
   ////////////////////////////////////////////////////////////////////////////////////////////////
   let wins = 0;
   console.log("wins: " + wins);
   //logging the total wins at the beginning of the game
   ////////////////////////////////////////////////////////////////////////////////////////////////
   let losses = 0;
   console.log("losses: " + losses);
   //logging the total losses at the beginning of the game
   //////////////////////////////////////////////////////////////////////////////////////////////////
$("#rup1").on("click", function() {
   bldgNum += rup1;
   $("#bldgNum").html(bldgNum);
})
//rupee1 has a value assigned from the while loop in the blank array, it will add to the bldgNum
//////////////////////////////////////////////////////////////////////////////////////////////////////
$("#rup2").on("click", function() {
   bldgNum += rup2;
   $("#bldgNum").html(bldgNum);
})
//rupee2 has a value assigned from the while loop in the blank array, it will add to the bldgNum
////////////////////////////////////////////////////////////////////////////////////////////////
$("#rup3").on("click", function() {
   bldgNum += rup3;
   $("#bldgNum").html(bldgNum);
})
//rupee3 has a value assigned from the while loop in the blank array, it will add to the bldgNum
/////////////////////////////////////////////////////////////////////////////////////////////////////
$("#rup4").on("click", function() {
   bldgNum += rup4;
   $("#bldgNum").html(bldgNum);
})
//rupee4 has a value assigned from the while loop in the blank array, it will add to the bldgNum
//////////////////////////////////////////////////////////////////////////////////////////////////////

})