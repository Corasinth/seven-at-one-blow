const db = require('../config/connection');
const { Story, Item, Npc, Monster } = require('../models');

const storyData = require('./story.json');
const itemData = require('./item.json');
const npcData = require('./npc.json');
const monsterData = require('./monsters.json');

db.once('open', async () => {
   await Story.deleteOne({default: true});
   await Item.deleteMany({default: true});
   await Npc.deleteMany({default: true});
   await Monster.deleteMany({default: true});

   await Story.create(storyData);
   await Item.create(itemData);
   await Npc.create(npcData);
   await Monster.create(monsterData);

   console.log('Finished Seeding') 
   process.exit(0)
})