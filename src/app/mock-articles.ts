import {Article} from './article';

export const Articles: Article[]=[
    {
       id:1 ,
       title:'HELLO WORLD',
       content:'',
       description:'This is my first article. It is great. Please read it.',
       key:'hello-world',
       date: new Date(),
       imageUrl:'https://images.unsplash.com/photo-1500576992153-0271099def59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVsbG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:2 ,
        title:'HAPPY HOLIDAYS',
        content:'',
        description:'It is that time of the year again, wishing you and your family a merry christmas and happy new year 2022',
        key:'happy-holidays',
        date: new Date(),
        imageUrl:'https://media.istockphoto.com/photos/happy-holidays-text-with-holiday-evergreen-branches-and-red-berries-picture-id1333471675?b=1&k=20&m=1333471675&s=170667a&w=0&h=-fAWvoftfODSPkd1TDUJ3EbF6zYajFavhdpxHW1xyb4='
     }
]