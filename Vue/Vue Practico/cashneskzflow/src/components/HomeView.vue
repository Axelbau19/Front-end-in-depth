<template>
    <Layout>
        <template #header>
            <Header></Header>
        </template>
        <template #resume>
            <Resume :totalLabel="'Ahorro Total'" :label="label" :amount="amount" :totalAmount="50000">
                <template #graphic>Graphic</template>
                <template #action>Action</template>
            </Resume>
        </template>
        <template #movements>
            <Movements :movements="movements"/>
        </template>
    </Layout>
</template>

<script>
import Layout from "./Layout.vue";
import Header from "./Header.vue";
import Resume from "./Resume/index.vue"
import Movements from "./Movements/index.vue"
export default{
    data(){
        return{
            amount:null,
            label: null,
            movements: [{
                id: 1,
                title:"Moviemiento 1",
                description:"Movimiento",
                amountEnter:1000
            },
            {
                id: 2,
                title:"Moviemiento 2",
                description:"Movimiento",
                amountEnter:1000
            },
            {
                id: 3,
                title:"Moviemiento 3",
                description:"Movimiento",
                amountEnter:1000
            },
            {
                id: 4,
                title:"Moviemiento 4",
                description:"Movimiento",
                amountEnter:1000
            }
            ]
        }
    },
    components:{
        Layout,
        Header,
        Resume,
        Movements
    }
}
</script>
