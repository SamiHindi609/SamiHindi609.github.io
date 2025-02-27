$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    //TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - createPlatform(500, 0, 20, 290);
    createPlatform(50, 700, 50, 50, "aqua");
    createPlatform(150, 650, 10, 10, "black");
    createPlatform(300, 650, 10, 10, "red");
    createPlatform(400, 550, 10, 10, "green");
    createPlatform(350, 434, 3, 10, "purple");
    createPlatform(445, 350, 5, 50, "grey");
    createPlatform(550, 350, 5, 50, "red");
    createPlatform(600, 420, 3, 10, "green");
    createPlatform(700, 350, 10, 10, "red");
    createPlatform(850, 300, 10, 10, "red");
    createPlatform(1000, 400, 20, 10, "red");
    createPlatform(1110, 350, 3, 3, "red");
    createPlatform(1200, 250, 10, 10, "red");
    createPlatform(1300, 150, 300, 10, "red");


    // TODO 3 - createCollectable("steve", 1350, 50);
    createCollectable("diamond", 700, 170, 0.5, 0.7);
    createCollectable("diamond", 600, 170, 0.5, 0.7);
    createCollectable("diamond", 400, 170, 0.5, 0.7);

    // TODO 4 - createCannonn("top", 200, 100);
    createCannon("right", 300, 1000);
    createCannon("bottom", 210, 700);
    createCannon("right", 600, 2000);
    
   
    

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
