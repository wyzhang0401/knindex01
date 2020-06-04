<template>
  <el-container class="app-main">
    <el-header>
      Download
      <hr />
    </el-header>
    <el-main class="download">
      <el-row :gutter="40" type="flex" justify="center">
        <el-col :span="10">
          <div class="grid-content">
            <div class="download-title">
              original values
            </div>
            <div class="download-content">
              <ul>
                <li v-for="item in original" :key="item.id">
                  <!-- 文件在本地public中 -->
                  <a :href="'/data/original/' + item.url" download="">
                    {{ item.file }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content">
            <div class="download-title">
              standard values
            </div>
            <div class="download-content">
              <ul>
                <li v-for="item in standard" :key="item.id">
                  <a :href="'/data/standard/' + item.url" download="">
                    {{ item.file }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
      <div>
        <a href="/data/all_values.zip" download="">all_values.zip</a>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      original: [
        {
          id: 1,
          url: "MonoDNA-original.xlsx",
          file: "mononucleotide-DNA-original"
        },
        {
          id: 2,
          url: "DiDNA-original.xlsx",
          file: "dinucleotide-DNA-original"
        },
        {
          id: 3,
          url: "DiRNA-original.xlsx",
          file: "dinucleotide-RNA-original"
        },
        {
          id: 4,
          url: "TriDNA-original.xlsx",
          file: "trinucleotide-DNA-original"
        }
      ],
      standard: [
        {
          id: 1,
          url: "MonoDNA-standard.xlsx",
          file: "mononucleotide-DNA-standard"
        },
        {
          id: 2,
          url: "DiDNA-standard.xlsx",
          file: "dinucleotide-DNA-standard"
        },
        {
          id: 3,
          url: "DiRNA-standard.xlsx",
          file: "dinucleotide-RNA-standard"
        },
        {
          id: 4,
          url: "TriDNA-standard.xlsx",
          file: "trinucleotide-DNA-standard"
        }
      ]
    };
  }
};
</script>

<style scoped>
.el-header {
  font-size: 40px;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  background: #e5e9f2;
  border-radius: 60px;
  height: 300px;
}
.download-title {
  font-size: 25px;
  padding-top: 10px;
}
.download-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
li {
  margin: 20px;
}
</style>
