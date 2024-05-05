<template>
    <div>
        <button @click="toggle">Modal</button>
        <Teleport to="body">
            <div v-show="show" class="modal">
                <h1>Titulo</h1>
                <p>Lorem ipsum dolor</p>
                <button @click="toggle">Cerrar</button>
            </div>
        </Teleport>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show: false,
        }
    },
    methods:{
        toggle(){
            this.show = !this.show;
        }
    }
}
</script>