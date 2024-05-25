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
                <router-view/> 
            </article>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            chats: []
        }
    },
    /*
    watch:{
        '$route.params': (val)=> {
            console.log('update params',val);
        }
    },*/
    created(){
        this.$watch(
            () => this.$route.params,
            (val) => {
                console.log('actulizacion de params',val)
                this.chats = [
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
            },
            //Configuracion del watcher
            {immediate: true}
        )
    }
}
</script>
