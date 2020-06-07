<template>
  <div>
    <el-row class="title" style="color: #606060;">
      <img
        src="../assets/home.png"
        style="height: 45px; width: auto;  vertical-align: middle; margin-right: 20px;"
      />
      Welcome to KNIndex
    </el-row>
    <el-row class="content" type="flex" justify="space-between">
      <el-col :span="10">
        <i
          style="font-size: 20px; margin-right: 10px; color: #606060;"
          class="el-icon-info"
        >
          Introduction of KNIndex</i
        >
        <p>
          KNIndex is the abbreviation of K-Nucleotides index database. The data
          are physicochemical property values of k-mer (k=1, 2, 3), which
          contain original values and standard values. This web server is
          divided into seven parts, namely home page, search page, download
          page, browse page, convert page, manual page and about page.
        </p>
        <p>
          <router-link to="/home">Home</router-link>
          page mainly describes the organization of the KNIndex server. The
          details can be found in
          <router-link to="/manual.pdf">Manual</router-link>
          page.
        </p>
        <p>
          <router-link to="/search">Search</router-link>
          page provides the ability to search by name of physicochemical
          properties. The values of physicochemical properties will be showed in
          tables.
        </p>
        <p>
          You can download all the data of the KNIndex from the
          <router-link to="/download">Download</router-link>
          page.
        </p>
        <p>
          In the
          <router-link to="/browse">Browse</router-link>
          page, we classify physicochemical properties according to references
          and k-tuple respectively. And we list all the values ang references in
          this page.
        </p>
        <p>
          <router-link to="/convert">Convert</router-link>
          page realizes the function of converting the input nucleic acid
          sequence into a sequence corresponding to a physicochemical property.
        </p>
        <p>
          You can get the manual of the web server from
          <router-link to="/manual.pdf">Manual</router-link>
          page.
        </p>
        <p>
          <router-link to="/about">About</router-link>
          page ?
        </p>
      </el-col>
      <el-col :span="12">
        <div id="myHeatmap" style="width: 600px;height:600px;"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  data() {
    return {};
  },
  mounted() {
    this.toVisual();
  },
  methods: {
    toVisual() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myHeatmap"));
      let kmers = [
        "AA",
        "AC",
        "AG",
        "AT",
        "CA",
        "CC",
        "CG",
        "CT",
        "GA",
        "GC",
        "GG",
        "GT",
        "TA",
        "TC",
        "TG",
        "TT"
      ];
      let property = ["Twist", "Tilt", "Roll", "Shift", "Slide", "Rise"];
      // let data = [
      //   [0, 0, 0.063],
      //   [0, 1, 1.502],
      //   [0, 2, 0.783],
      //   [0, 3, 1.071],
      //   [0, 4, -1.376],
      //   [0, 5, 0.063],
      //   [0, 6, -1.664],
      //   [0, 7, 0.783],
      //   [0, 8, -0.081],
      //   [0, 9, -0.081],
      //   [0, 10, 0.063],
      //   [0, 11, 1.502],
      //   [0, 12, -1.233],
      //   [0, 13, -0.081],
      //   [0, 14, -1.376],
      //   [0, 15, 0.063],
      //   [1, 0, 0.502],
      //   [1, 1, 0.502],
      //   [1, 2, 0.359],
      //   [1, 3, 0.215],
      //   [1, 4, -1.364],
      //   [1, 5, 1.077],
      //   [1, 6, -1.22],
      //   [1, 7, 0.359],
      //   [1, 8, 0.502],
      //   [1, 9, 0.215],
      //   [1, 10, 1.077],
      //   [1, 11, 0.502],
      //   [1, 12, -2.368],
      //   [1, 13, 0.502],
      //   [1, 14, -1.364],
      //   [1, 15, 0.502],
      //   [2, 0, 0.09],
      //   [2, 1, 1.19],
      //   [2, 2, -0.28],
      //   [2, 3, 0.83],
      //   [2, 4, -1.01],
      //   [2, 5, -0.28],
      //   [2, 6, -1.38],
      //   [2, 7, -0.28],
      //   [2, 8, 0.09],
      //   [2, 9, 2.3],
      //   [2, 10, -0.28],
      //   [2, 11, 1.19],
      //   [2, 12, -1.38],
      //   [2, 13, 0.09],
      //   [2, 14, -1.01],
      //   [2, 15, 0.09],
      //   [3, 0, 1.587],
      //   [3, 1, 0.126],
      //   [3, 2, 0.679],
      //   [3, 3, -1.019],
      //   [3, 4, -0.861],
      //   [3, 5, 0.56],
      //   [3, 6, -0.822],
      //   [3, 7, 0.679],
      //   [3, 8, 0.126],
      //   [3, 9, -0.348],
      //   [3, 10, 0.56],
      //   [3, 11, 0.126],
      //   [3, 12, -2.243],
      //   [3, 13, 0.126],
      //   [3, 14, -0.861],
      //   [3, 15, 1.587],
      //   [4, 0, 0.111],
      //   [4, 1, 1.289],
      //   [4, 2, -0.241],
      //   [4, 3, 2.513],
      //   [4, 4, -0.623],
      //   [4, 5, -0.822],
      //   [4, 6, -0.287],
      //   [4, 7, -0.241],
      //   [4, 8, -0.394],
      //   [4, 9, 0.646],
      //   [4, 10, -0.822],
      //   [4, 11, 1.289],
      //   [4, 12, -1.511],
      //   [4, 13, -0.394],
      //   [4, 14, -0.623],
      //   [4, 15, 0.111],
      //   [5, 0, -0.109],
      //   [5, 1, 1.044],
      //   [5, 2, -0.623],
      //   [5, 3, 1.171],
      //   [5, 4, -1.254],
      //   [5, 5, 0.242],
      //   [5, 6, -1.389],
      //   [5, 7, -0.623],
      //   [5, 8, 0.711],
      //   [5, 9, 1.585],
      //   [5, 10, 0.242],
      //   [5, 11, 1.044],
      //   [5, 12, -1.389],
      //   [5, 13, 0.711],
      //   [5, 14, -1.254],
      //   [5, 15, -0.109]
      // ];
      let data = [
        [0, 0, 0.026],
        [0, 1, 0.036],
        [0, 2, 0.031],
        [0, 3, 0.033],
        [0, 4, 0.016],
        [0, 5, 0.026],
        [0, 6, 0.014],
        [0, 7, 0.031],
        [0, 8, 0.025],
        [0, 9, 0.025],
        [0, 10, 0.026],
        [0, 11, 0.036],
        [0, 12, 0.017],
        [0, 13, 0.025],
        [0, 14, 0.016],
        [0, 15, 0.026],
        [1, 0, 0.038],
        [1, 1, 0.038],
        [1, 2, 0.037],
        [1, 3, 0.036],
        [1, 4, 0.025],
        [1, 5, 0.042],
        [1, 6, 0.026],
        [1, 7, 0.037],
        [1, 8, 0.038],
        [1, 9, 0.036],
        [1, 10, 0.042],
        [1, 11, 0.038],
        [1, 12, 0.018],
        [1, 13, 0.038],
        [1, 14, 0.025],
        [1, 15, 0.038],
        [2, 0, 0.02],
        [2, 1, 0.023],
        [2, 2, 0.019],
        [2, 3, 0.022],
        [2, 4, 0.017],
        [2, 5, 0.019],
        [2, 6, 0.016],
        [2, 7, 0.019],
        [2, 8, 0.02],
        [2, 9, 0.026],
        [2, 10, 0.019],
        [2, 11, 0.023],
        [2, 12, 0.016],
        [2, 13, 0.02],
        [2, 14, 0.017],
        [2, 15, 0],
        [3, 0, 1.69],
        [3, 1, 1.32],
        [3, 2, 1.46],
        [3, 3, 1.03],
        [3, 4, 1.07],
        [3, 5, 1.43],
        [3, 6, 1.08],
        [3, 7, 1.46],
        [3, 8, 1.32],
        [3, 9, 1.2],
        [3, 10, 1.43],
        [3, 11, 1.32],
        [3, 12, 0.72],
        [3, 13, 1.32],
        [3, 14, 1.07],
        [3, 15, 1.69],
        [4, 0, 2.26],
        [4, 1, 3.03],
        [4, 2, 2.03],
        [4, 3, 3.83],
        [4, 4, 1.78],
        [4, 5, 1.65],
        [4, 6, 2],
        [4, 7, 2.03],
        [4, 8, 1.93],
        [4, 9, 2.61],
        [4, 10, 1.65],
        [4, 11, 3.03],
        [4, 12, 1.2],
        [4, 13, 1.93],
        [4, 14, 1.78],
        [4, 15, 2.26],
        [5, 0, 7.65],
        [5, 1, 8.93],
        [5, 2, 7.08],
        [5, 3, 9.07],
        [5, 4, 6.38],
        [5, 5, 8.04],
        [5, 6, 6.23],
        [5, 7, 7.08],
        [5, 8, 8.56],
        [5, 9, 9.53],
        [5, 10, 8.04],
        [5, 11, 8.93],
        [5, 12, 6.23],
        [5, 13, 8.56],
        [5, 14, 6.38],
        [5, 15, 7.56]
      ];

      data = data.map(function(item) {
        // console.log([item[1], item[0], item[2] || "-"]);
        return [item[1], item[0], item[2]];
      });

      let option = {
        title: {
          text: "Several Physicochemical Properties Values of Dinucleotides"
        },
        tooltip: {
          position: "top"
        },
        animation: false,
        grid: {
          height: "50%",
          top: "10%"
        },
        xAxis: {
          type: "category",
          data: kmers,
          splitArea: {
            show: true
          }
        },
        yAxis: {
          type: "category",
          data: property,
          splitArea: {
            show: true
          }
        },
        visualMap: {
          min: 0,
          max: 10,
          calculable: true,
          orient: "horizontal",
          left: "center",
          bottom: "20%"
        },
        series: [
          {
            name: "Original Values",
            type: "heatmap",
            data: data,
            label: {
              show: true
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped>
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
  padding: 20px 10%;
  margin: 0 auto;
  text-align: left;
}
.content p {
  /* 行间距 */
  line-height: 1.5em;
  /* 首行缩进 */
  /* text-indent: 2em; */
  text-align: justify;
}
.content p a {
  color: #202122;
}
</style>
