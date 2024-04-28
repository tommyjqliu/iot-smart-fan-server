import Pusher from "pusher"

if (!process.env.PUSHER_SECRET || !process.env.PUSHER_APP_ID || !process.env.PUSHER_KEY || !process.env.PUSHER_CLUSTER) {
    throw Error('PUSHER env has not been set')
}

export const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: process.env.PUSHER_CLUSTER
})
