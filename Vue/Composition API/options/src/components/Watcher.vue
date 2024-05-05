<template>
    <div>
        Watcher
        {{ obj.counter }}
    </div>
</template>
<script>
    import {ref,reactive, watch} from 'vue';
    export default{
        //Utilizamos opciones que nos provee vue
        setup(){
            const obj = reactive({counter: 0});
         // setInterval(()=>obj.counter++,500);
         watch(() => obj.counter,(valueOld,valueNew)=>{
                console.log("Value old:" + valueOld);
                console.log("Value new:" + valueNew)
         })
            return{
                obj
            }
        }
    };
</script>