<template>
    <div>
        <div>
            <aside>
                <div v-for="chat in chats" :key="chat.id">
                    <router-link :to="`/chats/${chat.id}`">
                    {{chat.name}}
                    </router-link>
                </div>
            </aside>
            <article>
                {{this.$route.params.chatId}}
            </article>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            chats: [
                {
                    id:0,
                    name: "Axel"
                },
                {
                    id:1,
                    name: "Alexis"
                },
                 {
                    id:2,
                    name: "Scott"
                },               
            ]
        }
    }
}
</script>
