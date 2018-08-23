<template>
  <div id="app">
    <NavigationHeader></NavigationHeader>
    <Container></Container>
    <WhatIdo></WhatIdo>
    <router-view/>
  </div>
</template>
<script>
import NavigationHeader from '@/components/NavigationHeader.vue';
import Container from '@/views/Container.vue';
import WhatIdo from '@/views/WhatIdo.vue';
export default {
  components:{
        NavigationHeader,
        Container,
        WhatIdo,
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
