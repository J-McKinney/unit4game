var compNum;

$(document).ready(function () {
   compNum = Math.floor(Math.random() * 102) + 19;
   console.log(compNum);
   $("#matchNum").html(compNum);
   //computer picks a number between 19 and 120, that number is sent to id=matchNum
   ///////////////////////////////////////////////////////////////////////////////////

   let rup1 = Math.floor(Math.random() * 12) + 1;
   console.log("rupee1: " + rup1);
   $("#rup1").html("<img src=" + "assests\images\green rupee.jpg" + " value=" + rup1 + ">");
   //User picks the rupee1 with an unknown number??? it is sent to rupee1 pic as a defined value
   /////////////////////////////////////////////////////////////////////////////////

   let rup2 = Math.floor(Math.random() * 12) + 1;
   console.log("rupee2: " + rup2);
   $("#rup2").html(rup2);
   //User picks the rupee2 with an unknown number??? it is sent to rupee2 pic as a defined value
   //////////////////////////////////////////////////////////////////////////////////

   let rup3 = Math.floor(Math.random() * 12) + 1;
   console.log("rupee3: " + rup3);
   $("#rup3").html(rup3);
   //User picks the rupee3 with an unknown number??? it is sent to rupee3 pic as a defined value
   /////////////////////////////////////////////////////////////////////////////////

   let rup4 = Math.floor(Math.random() * 12) + 1;
   console.log("rupee4: " + rup4);
   $("#rup4").html(rup4);
   //User picks the rupee3 with an unknown number??? it is sent to rupee3 pic as a defined value
   /////////////////////////////////////////////////////////////////////////////////
   let score = 0;
   console.log("score: " + score);
   //logging the score at the beginning of the game to zero
   /////////////////////////////////////////////////////////////

   let wins = 0;
   console.log("wins: " + wins);
   //logging the total wins at the beginning of the game
   ////////////////////////////////////////////////////////////

   let losses = 0;
   console.log("losses: " + losses);
   //logging the total losses at the beginning of the game
   //////////////////////////////////////////////////////////////////////////////////////////////////
   //////////////////////////////////////////////////////////////////////////////////////////////////
   //////////////////////////////////////////////////////////////////////////////////////////////////

   function rst() {
      compNum = Math.floor(Math.random() * 102) + 19;
      console.log("compNum: " + compNum);
      $("#matchNum").html(compNum);
      //reset function
      /////////////////////////////////////////////////////////

      score = 0;
      $("#bldgNum").html(score);
      //your starting number is equal to zero again with the reset
      ////////////////////////////////////////////////////////

      rup1 = Math.floor(Math.random() * 12) + 1;
      console.log("rupee1: " + rup1);
      $("#rup1").html(rup1);
      //crystals are reset again with the game reset with different values
      ////////////////////////////////////////////////////////////////////
      rup2 = Math.floor(Math.random() * 12) + 1;
      console.log("rupee2: " + rup2);
      $("#rup2").html(rup2);
      //crystals are reset again with the game reset with different values
      ////////////////////////////////////////////////////////////////////
      rup3 = Math.floor(Math.random() * 12) + 1;
      console.log("rupee3: " + rup3);
      $("#rup3").html(rup3);
      //crystals are reset again with the game reset with different values
      ////////////////////////////////////////////////////////////////////
      rup4 = Math.floor(Math.random() * 12) + 1;
      console.log("rupee4: " + rup4);
      $("#rup4").html(rup4);
      //crystals are reset again with the game reset with different values
      ////////////////////////////////////////////////////////////////////
      $("img").on("click", function () {
         let newScore = score += parseInt($(this).attr("value"));
         $("#bldgNum").html(newScore);
         //click function is set to add values based on which crystal user clicks on and adds 
         //it the building number to try and match the matching number
         /////////////////////////////////////////////////////////////////////////////////////
         if (newScore === compNum) {
            wins++;
            $("#wins").html("wins: " + wins);
            console.log("wins: " + wins);
            rst();

         } else if (newScore > compNum) {
            losses++;
         };

      });


   }
});