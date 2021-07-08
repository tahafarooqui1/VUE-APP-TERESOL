<template>
    <div v-if='node'>
        <!-- <svg>>
            <p>{{node}}</p>    
            <text v-bind:x='cx' v-bind:y='cy' fill="red">{{node.name}}</text>
        </svg> -->
        <svg width=150 height=150>
            <!-- <p>{{node}}</p>     -->
            <circle @onCLick='$emit(print-data, node.name)' v-bind:cx='cx' v-bind:cy='cy' r="50" stroke="black" stroke-width="3" v-bind:fill='color' />
            <text v-bind:x='cx/2 + 10' v-bind:y='cy' fill="black">{{node.name}}</text>
        </svg> 
    </div>
</template>




<script>
export default {
    name:'Node', 
    props: {
        node:Object,
        color:String
    },
    data() {
        return {
            cx : 75,
            cy: 75
        }
    },  
    created() {
        // this.cx = floor(random() * 150)+1
        // this.cy = floor(random() * 150)+1
    }
}
</script>
