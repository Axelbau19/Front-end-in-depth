const module = {
namespaced: true,
state(){
    return{
        channel: null,
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
    getChannels: (state,getters, rootState, rootGetters)=>(itemSearch)=>{
       return state.channels.filter((chanel) => chanel.nameChat.toLowerCase().includes(itemSearch.toLowerCase())).map((channel)=>{

        const messages = rootGetters['messages/getUnreadMessages'](channel.id);
        return{
            ...channel,
            messages
        }
       })
        } 
    },

mutations:{
    updateChatTitle(state,{idChannel,newTitle}){
        const channel = state.channels.find((ch) => ch.id === idChannel)
        if(channel){
            channel.nameChat = newTitle
        }
    }
}

}

export default module