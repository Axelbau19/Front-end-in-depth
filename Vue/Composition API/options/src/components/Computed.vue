<template>
    <div>{{ fullName }}</div>
</template>
<script>
    import {ref,computed} from 'vue';
    export default{
        setup(){
            const firstName = ref("Axel");
            const lastName = ref("Bau");

         const fullName =computed(()=> {
                return `Full name :${firstName.value} ${lastName.value} `;
            });
            return{
                firstName,lastName, fullName
            };
        }
    }
</script>