const db = require('../config/connection');
const { Story, Script, Item} = require('../models');

const storyData = require('./story.json');
const scriptData = require('./script.json')
const itemData = require('./item.json');

db.once('open', async () => {
   await Story.deleteOne({default: true});
   await Script.deleteOne({});
   await Item.deleteMany({});

   await Story.create(storyData);
   await Script.create(scriptData);
   await Item.create(itemData);

   console.log('Finished Seeding') 
   process.exit(0)
})