//Normalizar los datos
const store = {
    profile:{
        username:'',
    },
    contacts:[
        {
            id:1,
            username: 'Axelbau', 
        },
        {
            id:2,
            username: 'Alvaro', 
        },
        {
            id:3,
            username: 'Quevedo', 
        }
    ],
    messages: [
        {
            id: 1,
            text: '1000Canciones',
            author: 1
        },
        {
            id: 2,
            text: 'SUPRA 94STRO',
            author: 2
        },
        {
            id: 3,
            text: 'Quizas si, Quizas no',
            author: 3
        },
        {
            id: 4,
            text: 'Concerga',
            author: 1
        }
    ],
    channels:[
        {
            id: 1,
            nameChat: 'General',
            mgs:[1,2]
        },
        {
            id : 2,
            nameChat:'Anuncios',
            messages : [3,4]          
        }
    ]
}