const fs = require('fs');
const path = require('path')
const filePath = path.join(__dirname, './test.json');

//If you want to run this editor as a script (and have the resulting json file auto format) paste this into your console with the appropriate arguments filled out: 
//'npm run itemEditor --ch=<your chapter number> --pi=<your insertion/deletion point> --iod=<increment of decrement, depending on whether you added or deleted text>
// "editItemSeed": "node server/seeds/seedUpdater.js && npx prettier --write server/seeds/test.json"
const editedChapter = parseInt(process.env.npm_config_chapt);
const indexOfEditedText = parseInt(process.env.npm_config_pi);
const addedOrDeleted = process.env.npm_config_iod;

/**
 * This function is meant to help edit the multiple refrences to the story object contained in the script file. While not a particularly smart function, based on the inputted paramters it can update the refrences on all the items to stay matched to their initial text string. You should call the function after every insertion or deletion, or modify it for your own editing style. This is a simple function to save some legwork - it cannot replace careful consideration of the flow of the story. In particular, it is reccomended that you simply revise the 0th element of each chapter and the associated coordinate pointers rather than wholesale deletion or addition.  
 * @param {The chapter you've decided to add or delete text} chapter 
 * @param {The index of the entry that you've deleted, or at which you've inserted} pivotStage 
 * @param {A string that can be 'increment' or 'decrement' depending on whether you've added or deleted text} incrementOrDecrement 
 */
async function itemSeedEditor (chapter, pivotStage, incrementOrDecrement) {
    const itemJSONData = fs.readFileSync (filePath);
    const items = JSON.parse(itemJSONData);
    const editor = (num) => {
            if (num >= pivotStage) {
                if (incrementOrDecrement === 'increment') {
                    return ++num;
                } else {
                    return --num;
                }
            }
            return num
        }
    for (let item of items) {
        for (let key in item) {
            if (key === 'name') {
                continue;
            }
            
            for (let coordinate of item[key]) {
                if (coordinate[0] === chapter) {
                    coordinate[1] = editor(coordinate[1]);
                }
            }
        }
    }
    fs.writeFileSync(filePath, JSON.stringify(items))
    console.log('Item seeds edited')
}

(function main(){
    if(editedChapter && indexOfEditedText && addedOrDeleted) {
        itemSeedEditor(editedChapter, indexOfEditedText, addedOrDeleted);
    } else {
        console.log('Please ensure you pass all nessecary arguments when running this file')
    }
})()
