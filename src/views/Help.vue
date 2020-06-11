<template>
  <div>
    <el-row class="title" style="color: #606060;">
      <img
        src="../assets/help.png"
        style="height: 45px; width: auto;  vertical-align: middle; margin-right: 20px;"
      />
      Help
    </el-row>
    <el-collapse v-model="activeName" accordion class="content">
      <el-collapse-item title="1. Help Page" name="1">
        <div>
          help page 内容待修改
        </div>
      </el-collapse-item>
      <el-collapse-item title="2. Home Page" name="2">
        <div>
          home page 内容待修改
        </div>
        <img alt="home help" src="../assets/help/homehelp.png" />
      </el-collapse-item>
      <el-collapse-item title="3. Search Page" name="3">
        <div>
          search page 内容待添加
        </div>
        <img alt="search help" src="../assets/help/searchhelp1.png" />
        <img alt="search help" src="../assets/help/searchhelp2.png" />
        <img alt="search help" src="../assets/help/searchhelp3.png" />
        <img alt="search help" src="../assets/help/searchhelp4.png" />
      </el-collapse-item>
      <el-collapse-item title="4. Download Page" name="4">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <img alt="download help" src="../assets/help/downloadhelp.png" />
      </el-collapse-item>
      <el-collapse-item title="5. Browse Page" name="5">
        <div>
          用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
        </div>
        <img alt="browse help" src="../assets/help/browsehelp.png" />
      </el-collapse-item>
      <el-collapse-item title="6. Convert Page" name="6">
        <div>
          用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
        </div>
        <div>
          结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
        </div>
        <img alt="convert help" src="../assets/help/converthelp1.png" />
        <img alt="convert help" src="../assets/help/converthelp2.png" />
        <img alt="convert help" src="../assets/help/converthelp3.png" />
      </el-collapse-item>
      <el-collapse-item title="7. Manual Page" name="7">
        <div>
          用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
        </div>
        <div>
          结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messg: "this is help page, 到底写些啥呢",
      activeName: "1"
    };
  }
};
</script>

<style scoped lang="less">
.title {
  text-align: center;
  font-size: 1.5em;
  line-height: 80px;
  height: 80px;
  background: #e6f0ef; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #e6f0ef 45%,
    #b4ede7 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #e6f0ef 45%,
    #b4ede7 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #e6f0ef 45%,
    #b4ede7 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e6f0ef', endColorstr='#b4ede7',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.content {
  width: 90%;
  margin: 10px auto;
  padding: 20px;
  background-color: gainsboro;
}
img {
  width: 80%;
  height: auto;
}

/deep/ .el-collapse-item__header {
  font-size: 15px;
}
</style>
