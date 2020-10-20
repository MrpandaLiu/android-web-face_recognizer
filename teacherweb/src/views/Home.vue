<!--
 * @LastEditors: panda_liu
 * @LastEditTime: 2020-10-20 10:40:14
 * @FilePath: \DIPproject\teacherweb\src\views\Home.vue
 * @Description: add some description
-->
<template>
  <div class="home">
    <el-container>
      <el-header>欢迎您！ {{ name }}老师</el-header>
      <div class="select-table">
        <el-row class="selector">
          <el-date-picker
            v-model="date"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
          <el-button type="primary" class="s-btn" @click="submit"
            >确认选择</el-button
          >
          <!-- <el-button type="success" @click="outExcel" round>打印表格</el-button> -->
          <download-excel
            class="excel"
            :data="tableData"
            :fields="json_fields"
            :name="excelName"
            ref="exporter"
          >
            <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
            <el-button type="success" round>导出EXCEL</el-button>
          </download-excel>
        </el-row>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" width="50"> </el-table-column>
          <el-table-column prop="studentName" label="姓名"> </el-table-column>
          <el-table-column prop="year" label="年"> </el-table-column>
          <el-table-column prop="month" label="月"> </el-table-column>
          <el-table-column prop="day" label="日"> </el-table-column>
          <el-table-column prop="time" label="时间"> </el-table-column>
        </el-table>
      </div>
    </el-container>
  </div>
</template>

<script>
import { getList } from "../api/teacher";

export default {
  name: "Home",
  data() {
    return {
      date: undefined,
      name: "",
      tableData: [],
      json_fields: {
        姓名: "studentName",
        年: "year",
        月: "month",
        日: "day",
        时间: "time",
      },
      excelName: "签到表.xls",
    };
  },
  created() {
    const name = localStorage.getItem("name");
    this.name = name;
  },
  methods: {
    getReceptionList(year, month, day) {
      const params = {
        year,
        month,
        day,
      };
      getList(params).then((res) => {
        this.tableData = res.data.data;
      });
    },
    submit() {
      const d = this.date.split("-");
      this.getReceptionList(d[0], d[1], d[2]);
      this.excelName = `${this.date}签到表.xls`;
    },
    outExcel() {
      console.log(this.$refs.exporter.click());
      //this.$refs.exporter.click();
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: right;
    line-height: 60px;
  }

  .select-table {
    width: 800px;
    margin: 0 auto;

    .selector {
      margin: 50px;

      .s-btn {
        margin-left: 20px;
      }

      .excel {
        display: inline-block;
        margin-left: 20px;
      }
    }
  }
}
</style>
