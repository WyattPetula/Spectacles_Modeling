// Attach this script to the bin
script.createEvent("CollisionEnterEvent").bind(function(eventData) {
    var collidedObject = eventData.otherObject;
    
    // Check if the collided object is the one you want to score
    if (collidedObject.name === "Trash") {
        updateScore(1); // Earn a point
    } else {
        updateScore(-1); // Lose a point
    }
});