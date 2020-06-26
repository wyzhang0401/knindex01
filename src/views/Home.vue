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
          divided into six parts, namely home page, search page, download page,
          browse page, convert page and help page.
        </p>
        <p>
          <router-link to="/home">Home</router-link>
          page mainly describes the organization of the KNIndex server.
        </p>
        <p>
          In the
          <router-link to="/browse">Browse</router-link>
          page, we classify physicochemical properties according to references
          and k-tuple respectively. And we list all the values and references in
          this page.
        </p>
        <p>
          <router-link to="/search">Search</router-link>
          page provides the ability to search by name of physicochemical
          properties. If you want to query for a property, but have forgotten
          how to spell it, you can use '*' or '%' for a fuzzy search. The values
          of physicochemical properties will be showed in tables. And in the
          search results, users can find a link to original reference of each
          physicochemical property.
        </p>
        <p>
          <router-link to="/visualization">Visualization</router-link>
          page realizes the function of converting the input nucleic acid
          sequence into numerical sequences according to selected
          physicochemical properties.
        </p>
        <p>
          You can download all the data of the KNIndex from the
          <router-link to="/download">Download</router-link>
          page.
        </p>
        <p>
          You can learn how to use the web server from
          <router-link to="/help">Help</router-link>
          page.
        </p>
      </el-col>
      <el-col :span="12">
        <!-- <div id="myHeatmap" style="width: 600px;height:600px;"></div> -->
        <img
          alt="nucleotides"
          src="../assets/property.jpg"
          style="width: 600px; height:400px;"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script></script>

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
