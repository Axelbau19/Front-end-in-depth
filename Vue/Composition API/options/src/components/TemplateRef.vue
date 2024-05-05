<template>
    <div>
        {{ fullName }}
        <br>
        {{ username }}
        <button ref="btn">Click!</button>
    </div>
</template>
<script>
    import {ref,toRefs,computed, inject, watch} from 'vue';
    export default{
        props:{
            firstName: String,
            lastName: String
        },
        setup(props,{expose}){
            //console.log(ctxt)
            const {firstName, lastName} = toRefs(props);

         const fullName =computed(()=> {
                return `Full name :${firstName.value} ${lastName.value} `;
            });
            const username = inject("username");
            expose({fullName});
            const btn = ref(null)
            console.log(btn.value)
            watch(btn, (valor)=> {
                console.log(valor)
            });
            return{
                firstName,lastName, fullName,username
            };
        }
    }
</script>