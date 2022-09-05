const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    interactions: {
        type: [String],
        required: true
    },
    text: {
        type: [String],
    }
});

itemSchema.methods.useItem = async function (optionalItemTarget) {
    // const targetItem = optionalItemTarget.toLowerCase()
    //Check story object for current progression, item fails to be used if we aren't in the right area
    
    //Check that the optionalItemTarget is correct for this command  
    // if (this.interactions.includes(targetItem)) {
    //     return true
    // } 
    
    //Render some text 
};

itemSchema.methods.takeItem = async function () {
    //Check story object for current progression, item fails to be taken if we aren't in the right area
   
    
    //Check player inventory, if object already exists you can't take another one 

    //Check that the optionalItemTarget is correct for this command  

    console.log('test success')
    return 'test success'
    //Render some text 
};

const Item = model('Item', itemSchema);

module.exports = Item;