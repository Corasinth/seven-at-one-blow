const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    interactions: {
        type: [String],
        required: true
    }
});

itemSchema.methods.useItem = async function (optionalItemTarget) {
    //Check story object for current progression, item fails to be used if we aren't in the right area
    
    //Check that the optionalItemTarget is correct for this command  

    //Render some text 
};

const Item = model('Item', itemSchema);

module.exports = Item;