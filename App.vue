<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div id='container' height=100% width=65%>
    <!-- <Graph :nodes='nodes' :links='links' />  -->
    <Graph v-bind:nodes='nodes' /> 
    <div class='data_region'>
      <AddNode />
      <DisplayNodeData @onClick='getName($event)' />
    </div>
  </div>

</template>

<script>
  import Graph from './components/Graph'
  // import Node from './components/Node.vue'
// import PostService from './postservice';


  export default {
    name: 'App',
    components: {
      Graph
    },
    data(){
      return {
        nodes:[
                  // {name : "Usman"},
                  // {name : "Anas"},
                  // {name : "Farhan"}
                 // {name: null}

        ]
        // links:[
        //   {source:'Usman', target:'Anas'},
        //   {source:'Anas', target:'Farhan'}
        // ]
      }
    },
    methods: {
      storeData() {
        // this.nodes.push(this.$refs.createdNode.$data)
      }
    },
    async created(){
        const geturl = 'http://localhost:3000/api/accountinfo/get';
        try{
          fetch(geturl)
            .then(response => response.json())
            .then(data => this.nodes=data.result);
          // this.nodes=(PostService.getPosts());
        }catch(err){
          console.log(err);
        }
        // this.nodes.push(PostService.getData())
      
    }

  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#container {
  display:flex;
  border:2px solid black;
}
</style>
