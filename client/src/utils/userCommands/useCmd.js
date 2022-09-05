//User inputs a command 'use cloth on flies'

//terminal package runs function 

function onUse (arg1, arg2, arg3) {
    //arg1 = cloth
    //arg2 = on
    //arg3 = flies
 
    for (key in keyObj) {
         if (key === arg1) {
             keyObj[key].use(arg3)
         }
     }
 }
 
 //Then the object the client has that's just our cloth Item runs its use method
 
 function itemUse (optionalItemTarget) {
    //Checks the story object to see what chapter we're in
 
    //Checks to see if there's an optionalItemTarget, and if so if that target is one of the valid interactions stored on the item object
    
    // Returns a string/calls a function that prints the appropriate text to the console
 
    //If the function is called and we're in the wrong area or using the object on the wrong target, return a string/call a function that prints an error message to the terminal like 'those objects can't be used together'
 }