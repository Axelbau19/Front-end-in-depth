<template>
    <div>
        {{ text }}
        {{ obj.counter }}
    </div>
</template>
<script>
import {ref,reactive} from 'vue';
export default{
    //Utilizamos opciones que nos provee vue
    setup(){
        const text = ref("Soy ref");
        const obj = reactive({counter: 0})
       // setInterval(()=>obj.counter++,500)
        return{
            text,obj
        }
    }
};
</script>