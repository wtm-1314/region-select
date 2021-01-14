<template>
  <div class="region-select">
    <!-- 省份 -->
    <el-select
      class="select-region"
      v-model="provinceValue"
      placeholder="请选择省份/市"
      @change="provinceChange"
      clearable
    >
      <el-option
        v-for="item in provinceOptions"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      >
      </el-option>
    </el-select>

    <!-- 市 -->
    <el-select
      class="select-region"
      v-model="cityValue"
      placeholder="请选择市区/州"
      @change="cityChange"
      clearable
    >
      <el-option
        v-for="item in cityOptions"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      >
      </el-option>
    </el-select>

    <!-- 区 -->
    <el-select
      class="select-region"
      v-model="areaValue"
      placeholder="请选择区/县"
      @change="areaChange"
      clearable
    >
      <el-option
        v-for="item in areaOptions"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { provinceList } from "./province";
import { city } from "./city";
import { area } from "./region";
export default {
  props: ["obj"],
  data() {
    return {
      provinceValue: "",
      provinceOptions: provinceList,
      cityValue: "",
      cityOptions: [],
      areaValue: "",
      areaOptions: [],
      //参数返回
      params: {
        province: "",
        city: "",
        area: ""
      }
    };
  },
  created() {
    this.provinceValue = this.obj.province;
    this.cityValue = this.obj.city;
    this.areaValue = this.obj.area;
  },
  methods: {
    // 省
    provinceChange(val) {
      this.cityValue = "";
      this.areaValue = "";
      this.areaOptions = [];
      this.params.city = "";
      this.params.area = "";
      if (val === "") {
        this.cityOptions = [];
      } else {
        this.cityOptions = city[val];
      }
      let pro = provinceList.find(obj => {
        return obj.id == val;
      });
      if (pro) {
        this.params.province = pro.name;
      } else {
        this.params.province = "";
      }
      this.$emit("sonSendData", this.params);
    },
    // 市
    cityChange(val) {
      this.areaValue = "";
      if (val === "") {
        this.areaValue = "";
        this.areaOptions = [];
      } else {
        this.areaOptions = area[val];
      }

      let c = city[this.provinceValue].find(item => {
        return item.id == val;
      });
      if (c) {
        this.params.city = c.name;
      } else {
        this.params.city = "";
        this.params.area = "";
      }
      this.$emit("sonSendData", this.params);
    },
    // 区
    areaChange(val) {
      let a = area[this.cityValue].find(item => {
        return item.id == val;
      });
      if (a) {
        this.params.area = a.name;
      } else {
        this.params.area = "";
      }
      this.$emit("sonSendData", this.params);
    }
  }
};
</script>

<style lang="less" scoped>
.region-select {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .select-region {
    margin-right: 12px;
  }
}
</style>