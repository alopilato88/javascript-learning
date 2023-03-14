$(document).ready(function() {
    
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

   // For loop example with a starting value, ending value (parameter), and increment
    /* var c;
    for(var x=25; x<400; x+=50) {
        for(var y=25; y<400; y+=50) {
            c = Shape.Circle(x, y, 20);
            c.fillColor = "red"
        }
    }
    paper.view.draw();*/

    // User interaction
    var tool = new Tool();
    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = "green";
    };
});