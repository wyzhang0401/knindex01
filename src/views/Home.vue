<template>
  <el-container class="app-main">
    <el-header>
      Description of KNIndex web server
    </el-header>
    <el-main>
      <p>
        KNIndex is the abbreviation of physicochemical property database. The
        data are physicochemical property values of k-mer(k=1, 2, 3), which
        contain original valus and standard values. This web server is divided
        into seven parts, namely home page, search page, download page, browse
        page, convert page, manual page and about page.
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
        page, we classify physicochemical properties according to references and
        k-tuple respectively. And we list all the values ang references in this
        page.
      </p>
      <p>
        <router-link to="/convert">Convert</router-link>
        page realizes the function of converting the input nucleic acid sequence
        into a sequence corresponding to a physicochemical property.
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
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.el-header {
  text-align: center;
  font-size: 1.5em;
  line-height: 60px;
}
.el-main {
  width: 70%;
  margin: 0 auto;
  text-align: left;
}
.el-main p {
  /* 行间距 */
  line-height: 1.5em;
  /* 首行缩进 */
  text-indent: 2em;
}
.el-main p a {
  color: #202122;
}
</style>
