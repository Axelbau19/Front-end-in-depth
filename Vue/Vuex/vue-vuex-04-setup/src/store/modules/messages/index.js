const module = {
    namespaced: true,
    state(){
        return{
            messages:[
                {
                    id: 1,
                    author: 1, 
                    text: 'La buena fai',
                    timestamp: new Date().toLocaleDateString(),
                    readMenssages: false,
                    idChannel: 1
                },
                {
                    id: 2,
                    author: 2, 
                    text: 'Concerga',
                    timestamp: new Date().toLocaleDateString(),
                    readMenssages: false,
                    idChannel: 2
                },
                {
                    id: 3,
                    author: 3, 
                    text: 'Kobe in LA',
                    timestamp: new Date().toLocaleDateString(),
                    readMenssages: false,
                    idChannel: 2
                },
                {
                    id: 4,
                    author: 1, 
                    text: 'Perro Negro',
                    timestamp: new Date().toLocaleDateString(),
                    readMenssages: false,
                    idChannel: 2
                },

            ]
        }
    },
    getters:{
        getMessages: (state) => (idChannel) =>{
            return state.messages.filter((messages)=> messages.idChannel === parseInt(idChannel))
        },
        getUnreadMessages: (state,getters,rootState,rootGetters) => (idChannel) => {

            return getters.getMessages(idChannel).filter((message) => message.readMenssages === false).length
        } 
    },
    mutations:{
        markAsRead(state,idChannel){
            state.messages.map((message) => {
                if(message.idChannel===idChannel){
                    message.readMenssages=true
                }
            })
        }
    }
}
export default module