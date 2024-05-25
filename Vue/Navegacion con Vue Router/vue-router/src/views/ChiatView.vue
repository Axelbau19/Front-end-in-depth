<template>
<div>
    <div v-for="msg in msgsFiltered" :key="msg.id">
        {{msg.text}}
    </div>
</div>
</template>

<script>
export default{
    props:{
        chatId: {
            type: String,
            default : ''
        }
    },
    data(){
        return{
            messages : [
                {
                    id: 0,
                    text: "mensaje 1",
                    author:0
                },
                {
                    id: 1,
                    text: "mensaje 2",
                    author: 1
                },
                {
                    id: 2,
                    text: "mensaje 3",
                    author:2
                }   
            ]
        }
    },
    computed: {
        msgsFiltered() {
            return this.messages.filter((msg)=>{
                return `${msg.author}` === this.$route.params.chatId
            })
        }
    }
}
</script>
