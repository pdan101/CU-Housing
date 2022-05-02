import { Review } from "./types/index"

const reviewList : Review[] = [
    {
        id:"1",
        author: 'Betty',
        date: 'April 21, 2022',
        locationID: 'ckb',
        rating: 2.0,
        recommend: false,
        pros:['has air conditioning', 'dining hall'],
        cons:['I hate the stench from library', 'loud neigbors'],
        text: 'We have an arsonist living here... Im scared for my life!'
    },
    {
        id:"2",
        author: 'Bob',
        date: 'April 10, 2022',
        locationID: 'ckb',
        rating: 5,
        recommend: true,
        pros:['clean new dorms', 'dining hall nearby'],
        cons:[],
        text: 'Such a nice place to live, better than West campus!'
    },
    {
        id:"3",
        author: 'Betty',
        date: 'April 21, 2022',
        locationID: 'morrison',
        rating: 2.0,
        recommend: false,
        pros:['has air conditioning', 'dining hall'],
        cons:['I hate the stench from library', 'loud neigbors'],
        text: 'We have an arsonist living here... Im scared for my life!'
    },
    {
        id:"4",
        author: 'Bob',
        date: 'April 10, 2022',
        locationID: 'morrison',
        rating: 5,
        recommend: true,
        pros:['clean new dorms', 'dining hall nearby'],
        cons:[],
        text: 'Such a nice place to live, better than West campus!'
    }
]

export default reviewList