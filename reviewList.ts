import { getMaxListeners } from "process"
import { Review } from "./types/index"

const reviewList: Review[] = [
    {
        id: "1",
        author: 'Betty',
        date: 'April 21, 2022',
        locationID: 'ckb',
        rating: 2.0,
        recommend: false,
        pros: ['has air conditioning', 'dining hall'],
        cons: ['I hate the stench from library', 'loud neigbors'],
        text: 'We have an arsonist living here... Im scared for my life!',
        okToContact: true,
        email: 'bettycrocker@gmail.com'
    },
    {
        id: "2",
        author: 'Bob',
        date: 'April 10, 2022',
        locationID: 'ckb',
        rating: 5,
        recommend: true,
        pros: ['clean new dorms', 'dining hall nearby'],
        cons: [],
        text: 'Such a nice place to live, better than West campus!',
        okToContact: false,
        email: ''
    },
    {
        id: "3",
        author: 'Betty',
        date: 'April 21, 2022',
        locationID: 'morrison',
        rating: 2.0,
        recommend: false,
        pros: ['has air conditioning', 'dining hall'],
        cons: ['I hate the stench from library', 'loud neigbors'],
        text: 'We have an arsonist living here... Im scared for my life!',
        okToContact: false,
        email: ''
    },
    {
        id: "4",
        author: 'Bob',
        date: 'April 10, 2022',
        locationID: 'morrison',
        rating: 5,
        recommend: true,
        pros: ['clean new dorms', 'dining hall nearby'],
        cons: [],
        text: 'Such a nice place to live, better than West campus!',
        okToContact: true,
        email: 'bobsmith33@yahoo.com'
    }
]

export default reviewList