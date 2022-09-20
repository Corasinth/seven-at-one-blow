import ENDPOINT from '../queryEndpoint';
import { SAVE_PLAYER } from '../mutations';
import { request } from 'graphql-request';

function save(state, print) {
    let player = state.player;
    request(ENDPOINT, SAVE_PLAYER, { username: player.username, storySave: player.storySave, inventory: player.inventory }).then(() => {
        print('Game Saved')
    }).catch((err) => {
        console.log(err)
        print(err["response"]["errors"][0]["message"])
    })
};

export default save;