import ENDPOINT from '../queryEndpoint';
import { LOAD_SAVE } from '../mutations';
import { request } from 'graphql-request';

function load(player) {
    request(ENDPOINT, LOAD_SAVE, { username: player.username }).then((response) => {
        console.log(response)
        return response
    }).catch((err) => {
        console.log(err)
        return false
    })
}
export default load