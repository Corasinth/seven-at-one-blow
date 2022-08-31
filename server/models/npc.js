const { Schema, model } = require('mongoose');

const npcSchema = new Schema ({ 
    default: {
        type: Boolean,
        required: true
    },
    name: {
        type: String,
        required:true
    },
    dialogue: {
        type: Map,
        of: String
    }
});

const Npc = model('Npc', npcSchema);

module.exports = Npc;