<template>
 
    <div v-if="this.page == 'leftSidePage'">
      <LeftPage></LeftPage>
    </div>
    <div v-if="this.page == 'rightSidePage'">
      <RightPage></RightPage>
    </div>

</template>

<script>
import RightPage from "../components/RightPage";
import LeftPage from "../components/LeftPage";
export default {
  props: ["page"],
  components: {
    RightPage,
    LeftPage,
  },
};
</script>

<style>

</style>