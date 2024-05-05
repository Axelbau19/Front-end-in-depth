<template>
    <div>Ciclo de vida de composition API</div>
</template>
<script>
import { onMounted} from "vue";
export default{
    setup(){
        onMounted(() => {
            console.log("Mounted!!");
        })
    }
};
</script>