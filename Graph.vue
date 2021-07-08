<template>
    <!-- <div> {{nodes}}</div> -->
    <div v-for:="node in nodes">
        <div>{{nodes}}</div>
        <!-- <div> {{node}} </div> -->
        <Node v-bind:node='node' color='purple' />
    </div>
</template>


<script>
    import Node from './Node.vue'

    export default {
        name:'Graph',
        components: {
            Node
        },
        props: {
            nodes:Array
        }
        // data(){
        //     return {
                
        //     }
        // }
    }
</script>

<style scoped>
    /* .nodes {
        display: flex;
        border: 2px solid red;
    } */
</style>

