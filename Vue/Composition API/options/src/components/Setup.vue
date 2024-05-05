<template>
    <div>
        {{ fullName }}
        <br>
        {{ username }}
        <button ref="btn">Click!</button>
    </div>
</template>
<script setup>
    import {defineProps, defineExpose,ref,toRefs,computed, inject, watch} from 'vue';
    const props = defineProps({
        firstName: String,
        lastName: String
    });
    //console.log(ctxt)
    const {firstName, lastName} = toRefs(props);

    const fullName =computed(()=> {
       return `Full name :${firstName.value} ${lastName.value} `;
    });
   const username = inject("username");
   defineExpose({fullName});
   const btn = ref(null)
   console.log(btn.value)
   watch(btn, (valor)=> {
       console.log(valor)
   });
</script>