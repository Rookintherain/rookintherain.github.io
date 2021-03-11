/** 
 * This function will serve as an entry point for our program. 
 * 
 */
 var mySquare;
 var myScore;
 var score;
 var myEnemy;
 var myEnemy2;
 var platform;
 
 function main() 
 {  
     myGameArea.start();
     score=0;
     var r = Math.floor(Math.random() * 256);
     var g = Math.floor(Math.random() * 256);
     var b = Math.floor(Math.random() * 256); 
 
     myGamePiece = new component(Math.floor(Math.random() *60), Math.floor(Math.random() *60), rgb(r,g,b), 210, 210);
     myScore = new component("30px", "Consolas", "black", 200, 40, "text");
     myScore.text="Welcome";

 } 
 
 /** 
 
  * Helper function that returns a string of the form 'rgb(r,g,b)' where 
 
  * r,g and b are numeric values. 
 
  * @param {Number} r assumed numeric value for red. 
 
  * @param {Number} g assumed numeric value for green. 
 
  * @param {Number} b assumed numeric value for blue. 
 
 * @return {String} a string of the form 'rgb(r,g,b)' where r,g and b are integers clamped between 0 and 255. 
  */ 
   
 var myGameArea = 
 {
     canvas : document.createElement("canvas"),
     start : function() 
     {
         this.canvas.width = 500;
         this.canvas.height = 100;
         this.context = this.canvas.getContext("2d");
         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
         this.interval = setInterval(update, 25);
         window.addEventListener('keydown', function (e) 
         {
             myGameArea.key = e.keyCode;
         })
         window.addEventListener('keyup', function (e) 
         {
             myGameArea.key = false;
         })
     }, 
 
     clear : function()
     {
         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
     },
     stop : function() {
         clearInterval(this.interval);
     }
 }
 
 /** 
 
  * Helper function that clamps value between min and max and returns value. 
 
  * Example: clamp(10, 1, 3) will return 3 
 
  * @param {Integer} value integer value to be clamped. 
 
  * @param {Integer} min lower range value. 
 
  * @param {Integer} max upper range value. 
 
 * @return {Integer} min if value is less than min, max if max is less than value, otherwise value. 
 
  */ 
 function clamp(value, min, max) 
 { 
     if(max<min)
     { 
         var temp = min; 
         min = max; 
         max = temp; 
     } 
     return Math.max(min, Math.min(value, max)); 
 } 
 
 function update() 
 {
     myGameArea.clear();
 
     //arrow keys
     if (myGameArea.key && myGameArea.key == 65) 
     {
         myGamePiece.speedX = -2; 
     }
     if (myGameArea.key && myGameArea.key == 68) 
     {
         myGamePiece.speedX = 2; 
     }
     if (myGameArea.key && myGameArea.key == 87) 
     {
         myGamePiece.speedY = -2; 
     }
     if (myGameArea.key && myGameArea.key == 83) 
     {
         myGamePiece.speedY = 2; 
     }

    //update both of them
    myGamePiece.update();
    myGamePiece.newPos();   
    myScore.update(); 

 }