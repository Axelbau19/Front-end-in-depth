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

<script setup>
import {ref, watch} from 'vue'
import {useRoute} from 'vue-router'
const chats = ref();
const route = useRoute()
watch(
    ()=> route.params,
    (val) => {

                console.log('actulizacion de params',val)
                chats.value = [
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
{
    immediate:true
}
)
</script>