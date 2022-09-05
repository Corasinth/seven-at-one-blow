const db = require('../config/connection');
const { Story, Script, Item} = require('../models');

const storyData = require('./story.json');
const itemData = require('./item.json');

db.once('open', async () => {
   await Story.deleteOne({});
   await Item.deleteMany({});

   await Story.create(storyData);
   await Item.create(itemData);

   console.log('Finished Seeding') 
   process.exit(0)
})