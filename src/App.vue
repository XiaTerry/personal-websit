<template>
  <div id="app">
    <NavigationHeader></NavigationHeader>
    <Container></Container>
    <WhatIdo></WhatIdo>
    <Project></Project>
    <Webobj></Webobj>
    <Contact></Contact>
    <CommonFooter></CommonFooter>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import NavigationHeader from '@/components/NavigationHeader.vue';
import CommonFooter from '@/components/CommonFooter.vue';
import Container from '@/views/Container.vue';
import WhatIdo from '@/views/WhatIdo.vue';
import Project from '@/views/project.vue';
import Contact from '@/views/Contact.vue';
import Webobj from '@/views/Webobj.vue';
export default {
  components:{
        NavigationHeader,
        Container,
        WhatIdo,
        Project,
        Contact,
        CommonFooter,
        Webobj,
    },
    beforeMount(){
      
    },
    mounted(){
      
    },
    methods:{
  
    }
}
</script>

<style lang="scss">
body{
  overflow-x: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@media (max-width: 1079px) {
  
}
</style>
