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

            ]
        }
    },
    getters:{
        getMessages: (state) => (idChannel) =>{
            return state.messages.filter((messages)=> messages.idChannel === parseInt(idChannel))
        }
    }
}
export default module