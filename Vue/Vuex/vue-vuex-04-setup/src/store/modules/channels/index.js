const module = {
namespaced: true,
state(){
    return{
        channels: [
            {id: 1,nameChat: 'General',messages:[]},
            {id: 2  ,nameChat: 'Escuela',messages:[]},
            {id: 3,nameChat: 'Bolsa de trabajo',messages:[]},
            {id: 4,nameChat: 'Proyectos',messages:[]},
            {id: 5,nameChat: 'Personal',messages:[]},
        ]
    }
},
getters:{
    getChannels: (state)=>(itemSearch)=>{
       return state.channels.filter((chanel) => chanel.nameChat.toLowerCase().includes(itemSearch.toLowerCase()))
        } 
    }
}

export default module