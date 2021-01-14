<template>
  <div class="home">
    <Region :obj="regionData" @sonSendData="getSonData" />
  </div>
</template>

<script>
// @ is an alias to /src
import Region from "@/components/region/region.vue";

export default {
  name: "Home",
  components: {
    Region
  },
  data() {
    return {
      regionData: { province: "1231", city: "1231", area: "123" }
    };
  },
  created() {
    console.log(this.regionData);
  },
  methods: {
    getSonData(val) {
      this.regionData = val;
      console.log(this.regionData);
    }
  }
};
</script>
