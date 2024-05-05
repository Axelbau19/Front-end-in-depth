<template>
    <div>{{ fullName }}</div>
</template>
<script>
    import {toRefs,computed} from 'vue';
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
            expose({fullName});
            return{
                firstName,lastName, fullName
            };
        }
    }
</script>