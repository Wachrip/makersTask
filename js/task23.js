'use strict'
var curFloor =1;

var elevator = {
     toFloor: function(floor){
         if(floor>=1 && floor<=16) {
            this.printFloor();
             if(curFloor<floor) {
                for(curFloor; curFloor<floor;) {  
                    this.oneFloorUp();          
                    this.printFloor();                  
                }
            } else if(curFloor>floor) {
                for(curFloor; curFloor>floor;) {              
                    this.oneFloorDown();
                    this.printFloor();
                }
         }  
     }
    },

     printFloor: function() {
        console.log(`Elevator is on the floor ${curFloor}`);
     },

     oneFloorUp: function() {
        if(curFloor>=1 && curFloor<16) {
         curFloor++; 
        } else {console.log("Нельзя ехать вверх, вы на последнем этаже");}
     },

     oneFloorDown: function() {
        if(curFloor>1 && curFloor<=16) {
        curFloor--;
        } else {console.log("Нельзя ехать вниз, вы на первом этаже");}
     },
}

elevator.toFloor(1);

elevator.oneFloorDown();
elevator.printFloor();



