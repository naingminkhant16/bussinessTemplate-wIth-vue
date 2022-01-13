<template>
  
   <div class="home">
     <Banner></Banner>
     <Reasons></Reasons>
     <FAQ></FAQ>
    
   </div>
 
</template>

<script>
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import Reasons from '../components/Reasons'
import Banner from '../components/Banner'
// @ is an alias to /src


export default {
  
  components: {
    Footer,
    Contact,
    FAQ,
    Reasons,
    Banner,
    
  }
}
</script>
<style scoped>

</style>