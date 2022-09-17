import ENDPOINT from '../queryEndpoint';
import { SAVE_PLAYER } from '../mutations';
import { request } from 'graphql-request';

function save(state) {
    let player = state.player;
    request(ENDPOINT, SAVE_PLAYER, { username: player.username, storySave: player.storySave, inventory: player.inventory }).then((response) => {
        console.log(response)
        return 'Game Saved'
    }).catch((err) => {
        console.log(err)
        return 'Unable to Save'
    })
};

export default save;