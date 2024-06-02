const module =  {
    namespaced: true,
    state(){
        return{
            contacts: [
                { id: 2, name: 'Jason', avatar: '/avatars/Person2.jpg' },
                { id: 3, name: 'Janet', avatar: '/avatars/Person1.jpg' }
            ]
        }
    },
    getters: {
        getContacts : (state)=>{
            return state.contacts
        },
        getContactId: (state,getter, rootState) => (idContact)=>{
            const idprofile = rootState.profile.id
            if(idContact === idprofile) return rootState.profile.details
            return  state.contacts.find((contact) => {
                console.log(contact)
                return contact.id === idContact 
            })
        }
    }
}

export default module