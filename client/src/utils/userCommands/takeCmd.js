function onTake (arg1, arg2) {
    // arg1 = 
    // arg2 = 
    
 
    let coordinates 

    for (name in [1]) {
         if (name === arg1) {
             coordinates = keyObj[name].deliverScript(arg3)
         }
     }
     if (coordinates === false){
        return 'error with take cmd'
     }
 }

//Some kind of query returns an array of item objects, a player object, and our one story object (see models)

function populateKeyObj (itemArray) {
    for (let item of itemArray) {
        keyObj[item.name] = item
    }
}

keyObj = {
    needle: {
        "name":"needle",
        "relevantStages":[
            [0, 1],
            [0, 3]
        ],
        "scriptCoordinates":[
            [0, 4]
        ],
        "requiredInInventoryStages":[
            [4, 0]
        ],
        "inventoryScriptCoordinates":[
            [4, 1]
        ]
    },
    jam: {
        "name":"jam",
        "relevantStages":[
            [0, 0]
        ],
        "scriptCoordinates":[
            [0, 1]
        ],
        "requiredInInventoryStages":[],
        "inventoryScriptCoordinates":[]
    },
    cheese: {
        "name":"cheese",
        "relevantStages":[
            [0, 5],
            [0, 6]
        ],
        "scriptCoordinates":[
            [0, 5],
            [0, 5]
        ],
        "requiredInInventoryStages":[
            [1, 1]
        ],
        "inventoryScriptCoordinates":[
            [1, 2]
        ]
    },
    bird: {
        "name":"bird",
        "relevantStages":[
            [0, 5],
            [0, 6]
        ],
        "scriptCoordinates":[
            [0, 6],
            [0, 6]
        ],
        "requiredInInventoryStages":[
            [1, 2]
        ],
        "inventoryScriptCoordinates":[
            [1, 3]
        ]
    },
    bones: {
        "name":"bones",
        "relevantStages":[
            [2, 1],
            [2, 2],
            [2, 3],
            [2, 4],
            [2, 5]
        ],
        "scriptCoordinates":[
            [2, 2],
            [2, 3],
            [2, 4],
            [2, 5],
            [2, 6]
        ],
        "requiredInInventoryStages":[],
        "inventoryScriptCoordinates":[]
    }
    //add others
}

// const player = playerData
// const story = storyData 

// function takeItemInteraction(args){
//     let currentStoryCoordinates = player.storySave 
//     let inInventory = player.inventory.includes(args[1]) //where args[1] is 'needle' or whatever the object is 
// }



// function takeItemInteraction(args) {
//     for (name in keyObj) {
//         if (name === arg1) {
//             coordinates = keyObj[name].deliverScript(arg3)
//         }
//     }
//     if (coordinates === false){
//        return 'error'
//     }
// }

export default takeItemInteraction;
  