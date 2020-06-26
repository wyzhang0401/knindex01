<template>
  <div>
    <el-row class="title" style="color: #606060;">
      <img
        src="../assets/download.png"
        style="height: 45px; width: auto;  vertical-align: middle; margin-right: 20px;"
      />
      Download files
    </el-row>
    <div class="files">
      <h3>Original values</h3>
      <div class="download-content">
        <p>
          <a :href="'/data/original/MonoDNA-original.xlsx'" download="">
            mononucleotide-DNA-original
          </a>
          : this file includes 1 set of physicochemical property of
          mononucleotide (DNA).
        </p>
        <p>
          <a :href="'/data/original/DiDNA-original.xlsx'" download="">
            dinucleotide-DNA-original
          </a>
          : this file includes 147 sets of physicochemical property of
          dinucleotide (DNA).
        </p>
        <p>
          <a :href="'/data/original/DiRNA-original.xlsx'" download="">
            dinucleotide-RNA-original
          </a>
          : this file includes 22 sets of physicochemical property of
          dinucleotide (RNA).
        </p>
        <p>
          <a :href="'/data/original/TriDNA-original.xlsx'" download="">
            trinucleotide-DNA-original
          </a>
          : this file includes 12 sets of physicochemical property of
          trinucleotide (DNA).
        </p>
      </div>
    </div>

    <div class="files">
      <h3>Standard values</h3>
      <div class="download-content">
        <p>
          <a :href="'/data/original/MonoDNA-standard.xlsx'" download="">
            mononucleotide-DNA-standard
          </a>
          : this file includes 1 set of physicochemical property of
          mononucleotide (DNA).
        </p>
        <p>
          <a :href="'/data/original/DiDNA-standard.xlsx'" download="">
            dinucleotide-DNA-standard
          </a>
          : this file includes 147 sets of physicochemical property of
          dinucleotide (DNA).
        </p>
        <p>
          <a :href="'/data/original/DiRNA-standard.xlsx'" download="">
            dinucleotide-RNA-standard
          </a>
          : this file includes 22 sets of physicochemical property of
          dinucleotide (RNA).
        </p>
        <p>
          <a :href="'/data/original/TriDNA-standard.xlsx'" download="">
            trinucleotide-DNA-standard
          </a>
          : this file includes 12 sets of physicochemical property of
          trinucleotide (DNA).
        </p>
      </div>
    </div>

    <div class="files">
      <h3>All files and a manual for users</h3>
      <div class="download-content">
        <p>
          <a href="/data/all.zip" download="">all.zip</a>
          : this zip file includes all the files above and a manual for users.
        </p>
      </div>
    </div>
  </div>
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

.download-content {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 20px;
  border: 1px solid rgb(115, 200, 200);
  border-radius: 10px;
}
/* 
a {
  color: #232324;
} */

h3 {
  text-align: left;
  padding: 10px;
  background-color: rgb(115, 200, 200);
  color: #e6f0ef;
  border-radius: 10px;
}

.files {
  width: 70%;
  margin: 0 auto;
}

p {
  text-align: justify;
  line-height: 1.5em;
}
</style>
