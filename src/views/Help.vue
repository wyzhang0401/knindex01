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
      <el-collapse-item title="1. Overview" name="1">
        <p>
          The physicochemical properties of K-nucleotides are important
          parameters for encoding a DNA or RNA sequence with a discrete model or
          a vector, which play a vital role in bioinformatics. Here, we
          developed a database named KNIndex to collect and integrate 182
          physicochemical properties of mononucleotide, dinucleotide and
          trinucleotide from existing database and published literatures.
          KNIndex provides 182 properties including 1 of mononucleotide, 169 of
          dinucleotide (both for DNA and RNA) and 12 of trinucleotide.
        </p>
      </el-collapse-item>
      <!-- <el-collapse-item title="2. 'Home' page help" name="2">
        <div>
          home page 内容待修改
        </div>
        <img alt="home help" src="../assets/help/homehelp.png" />
      </el-collapse-item> -->
      <el-collapse-item
        title="2. Descriptions about 'Search' page and Fuzzy search"
        name="2"
      >
        <p>
          <strong>(1).</strong> The picture below is an introduction to the
          'Search' page.
        </p>
        <img alt="search help" src="../assets/help/searchhelp1.png" />
        <p>
          <strong>(2).</strong> When you don't choose the nucleotides and input
          physicochemical property name, you could click on search button to get
          all tables.
        </p>
        <img alt="search help" src="../assets/help/searchhelp2.png" />
        <p>
          <strong>(3).</strong> When you choose a certain nucleotide, you could
          click on search button to get a table and export it to Excel. If you
          want to query for a property, but have forgotten how to spell it, you
          can use “*” or “%” for a fuzzy search. And in the search results,
          users can find a link to original reference of each physicochemical
          property.
        </p>
        <img alt="search help" src="../assets/help/searchhelp3.png" />
      </el-collapse-item>
      <el-collapse-item title="3. Convert and Visualization" name="3">
        <p>
          In the 'Convert' page, users can convert a nucleotide sequence into
          numerical sequences according to selected physicochemical properties,
          with basic kmers of the sequence as intermediate result.
        </p>
        <p>
          <strong>(1).</strong> After the user select the first three
          parameters, the corresponding physicochemical properties will be
          displayed for the user to choose. What's more, users can set the
          maximum number of selectable physicochemical properties because of the
          limited computing resources and speed.
        </p>
        <img alt="convert help" src="../assets/help/converthelp1.png" />

        <p>
          <strong>(2).</strong> After the steps in (1), users could enter a DNA
          or RNA sequence or click on 'Example' button to get an example. When
          the user click on 'Getvalue', he can get kmers and numerical
          sequences. Click on 'Visualize' button to visualize the results on a
          new page.
        </p>
        <img alt="convert help" src="../assets/help/converthelp2.png" />
        <p>
          <strong>(3).</strong> This graph is a visualization of (1) (2). Users
          can download the graph locally.
        </p>
        <img alt="convert help" src="../assets/help/converthelp3.png" />
      </el-collapse-item>
      <el-collapse-item title="4. Download help" name="4">
        <p>
          <strong>(1).</strong> Users can download the files respectively and
          all.zip including all the above files. As we show in the picture
          below.
        </p>
        <img alt="download help" src="../assets/help/downloadhelp.png" />
      </el-collapse-item>
      <el-collapse-item title="5. Browse help" name="5">
        <p>
          <strong>(1).</strong> Users can browse information of physicochemical
          properties and their original references. The side navigation shows
          all the contents users can browse in the 'Browse' page.
        </p>
        <img alt="browse help" src="../assets/help/browsehelp.png" />
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
  border: 3px solid #b4ede7;
  border-radius: 10px;
  // background-color: #b4ede7;
}
img {
  width: 90%;
  height: auto;
}

/deep/ .el-collapse-item__header {
  font-size: 16px;
  padding-left: 20px;
}

/deep/ .el-collapse-item__content {
  border-top: 1px solid #b4ede7;
}

p {
  font-size: 16px;
  line-height: 1.5em;
  text-align: justify;
  padding: 0 30px;
}
</style>
