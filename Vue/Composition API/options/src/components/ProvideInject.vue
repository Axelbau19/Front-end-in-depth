<template>
    <div>
        {{ fullName }}
        <br>
        {{ username }}
    </div>
</template>
<script>
    import {toRefs,computed, inject} from 'vue';
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
            return{
                firstName,lastName, fullName,username
            };
        }
    }
</script>