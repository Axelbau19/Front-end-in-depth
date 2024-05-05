<template>
    <div>{{ user }} </div>
</template>
<script>
export default{
    props:{
        user:{
            type: String,
            required: true,
        },
    },
    setup(props,ctx){
        return null
    },
    data(){
        return{
            repositories:[],
            filters: {},
            serachQueary:"",
        };
    },
    computed:{
        filteredRepositories(){
            return null
        },
        repositorieMatchingSearchQueary(){
            return null
        }
    }
}
</script>