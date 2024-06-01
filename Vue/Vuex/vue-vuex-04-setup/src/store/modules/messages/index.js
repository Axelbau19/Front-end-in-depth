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

            ]
        }
    },
    getters:{
        getMessages: (state) =>(idChannel)=> {
            return state.messages.filter((msg)=>msg.idChannel == idChannel )
        }
    }
}
export default module