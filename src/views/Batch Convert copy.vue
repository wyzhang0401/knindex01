<template>
  <div>
    <el-row class="title" style="color: #606060;">
      <img
        style="margin-right: 20px; height: 55px; width: 55px; vertical-align: middle;"
        src="../assets/convert.png"
      />
      Batch Convert
    </el-row>
    <div class="myForm">
      <!-- Form 表单 -->
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        :inline-message="true"
        label-width="200px"
        label-position="left"
        label-suffix=":"
      >
        <el-form-item label="Kmer" prop="kmer">
          <el-radio-group v-model="form.kmer" @change="changeSequence">
            <el-radio label="mono">mononucleotide</el-radio>
            <el-radio label="di">dinucleotide</el-radio>
            <el-radio label="tri">trinucleotide</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="Sequence type" prop="nucleic">
          <el-radio-group v-model="form.nucleic">
            <el-radio label="dna">DNA</el-radio>
            <el-radio label="rna" :disabled="disable">RNA</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="Value type" prop="value">
          <el-radio-group v-model="form.value">
            <el-radio label="original">original</el-radio>
            <el-radio label="standard">standard</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="Maximum number of selectable properties">
          <!-- <span>Please set the maximum number of selectable properties:</span> -->
          <i class="el-icon-question" @click="question"></i>
          <!-- v-model 为默认选中 -->
          <el-select v-model="form.max" size="mini">
            <!-- 即使value值不是动态的，也要加冒号，这样获取的值就是Number类型，否则是String类型，在后续绑定max值是会有数据类型错误 -->
            <el-option label="5" :value="5"></el-option>
            <el-option label="10" :value="10"></el-option>
            <el-option label="15" :value="15"></el-option>
            <el-option label="20" :value="20"></el-option>
            <el-option label="25" :value="25"></el-option>
            <el-option label="30" :value="30"></el-option>
          </el-select>
        </el-form-item>
        <!-- 理化特性选择区 根据参数读取数据库，根据返回来的数值取理化性质-->

        <el-table
          :data="form.properties.propertyname"
          border
          stripe
          :show-header="status"
          empty-text="Select the above parameters to obtain the physicochemical properties first."
          style="width: 100%"
        >
          <el-table-column type="index" width="40"> </el-table-column>
          <el-table-column>
            <template slot-scope="props">
              <el-checkbox-group
                v-if="props.row.id0 != ''"
                v-model="form.propertyid"
                :max="form.max"
              >
                <el-checkbox :label="props.row.id0">
                  <span class="all_label">
                    {{ props.row.col0 }}
                  </span>
                </el-checkbox>
              </el-checkbox-group>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="props">
              <el-checkbox-group
                v-if="props.row.id1 != ''"
                v-model="form.propertyid"
                :max="form.max"
              >
                <el-checkbox :label="props.row.id1">
                  <span class="all_label">
                    {{ props.row.col1 }}
                  </span>
                </el-checkbox>
              </el-checkbox-group>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="props">
              <el-checkbox-group
                v-if="props.row.id2 != ''"
                v-model="form.propertyid"
                :max="form.max"
              >
                <el-checkbox :label="props.row.id2">
                  <span class="all_label">
                    {{ props.row.col2 }}
                  </span>
                </el-checkbox>
              </el-checkbox-group>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="props">
              <el-checkbox-group
                v-if="props.row.id3 != ''"
                v-model="form.propertyid"
                :max="form.max"
              >
                <el-checkbox :label="props.row.id3">
                  <span class="all_label">
                    {{ props.row.col3 }}
                  </span>
                </el-checkbox>
              </el-checkbox-group>
            </template>
          </el-table-column>
        </el-table>

        <el-form-item
          label="Batch convert DNA/RNA sequences of a fasta file"
          style="margin-top: 10px; border-top: 1px solid rgb(115, 200, 200); border-bottom: 1px solid #ebeef5;"
        >
          <!-- <a href="javascript:;"></a> -->
          <div style="display: flex;height: 80px;">
            <div class="upload">
              Select file
              <input
                @change="fileSelect"
                class="change"
                type="file"
                ref="file"
              />
            </div>
            <input
              type="button"
              value="Submit file"
              class="submit"
              @click="submit"
            />
            <input
              type="button"
              value="Batch convert"
              class="convert"
              @click="batchConvert('form')"
            />
          </div>
        </el-form-item>
      </el-form>
      <div class="progress-wrap">
        <p>
          Submit <i>{{ file.name }} </i>progress
        </p>
        <p class="progress"><span :style="style"></span></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        kmer: "",
        nucleic: "",
        value: "",
        properties: {
          //理化特性的显示
          property: [], // 是个对象数组[{},{},{},...] 数据库返回的数据
          propertyname: [], // 用于理化特性名称的显示
          length: 0,
          rows: 0 // 正好每行4个的总行数
        },
        propertyid: [], // 选中的理化特性的id,复选框,可以设置最多选几个
        max: 5
      },
      // 验证规则
      rules: {
        kmer: [
          { required: true, message: "Please choose kmer", trigger: "change" }
        ],
        nucleic: [
          {
            required: true,
            message: "Please choose sequence type",
            trigger: "change"
          }
        ],
        value: [
          {
            required: true,
            message: "Please choose a value type",
            trigger: "change"
          }
        ]
      },
      disable: false, // 设置DNA和RNA的可选状态
      status: false, // 设置理化特性的表格不显示表头
      file: "", // 加载的文件
      percentCompleted: 0, // 文件上传进度
      uploadStatus: false // 文件上传是否成功
    };
  },

  // computed和watch结合 监听前三个参数的值，然后显示对应的理化特性
  computed: {
    showProperty() {
      const { kmer, nucleic, value } = this.form;
      return { kmer, nucleic, value };
    },

    // 用于文件加载上传
    style() {
      return {
        width: this.percentCompleted + "%"
      };
    }
  },

  watch: {
    showProperty: {
      handler: function(val) {
        var _this = this;
        // 监听前3个参数，发生变化则清空下面的内容
        _this.form.propertyid = [];
        _this.form.inputSequence = "";
        _this.form.outputkmers = "";
        _this.form.outputValue = "";

        if (val.kmer != "" && val.nucleic != "" && val.value != "") {
          var myAPI = "/api/property/" + val.kmer + val.nucleic + val.value;
          axios.post(myAPI).then(respond => {
            _this.form.properties.property = respond.data;
            _this.form.properties.length = respond.data.length;
            // 截取对象数组中需要的字段，这里是理化特性的名称 PropertyName
            let property = respond.data.map(({ ID, PropertyName }) => ({
              ID,
              PropertyName
            }));
            // 每行4个理化性质
            _this.form.properties.rows = Math.ceil(
              _this.form.properties.length / 4
            );
            // 转换成表格中展示需要的数据格式
            _this.form.properties.propertyname = object2object(
              property,
              _this.form.properties.length,
              _this.form.properties.rows
            );
          });
        }
      }
    }
  },

  methods: {
    changeSequence() {
      // 当选择单元和三元核苷酸时，只能选择DNA，并且设为自动选择DNA，RNA设为不可选
      var _this = this;
      var kmer = _this.form.kmer;
      if (kmer == "mono" || kmer == "tri") {
        this.disable = true;
        this.form.nucleic = "dna";
      } else {
        this.disable = false;
      }
    },

    // 选择最大数量理化特性的问号提示
    question() {
      this.$alert(
        "You can set the maximum number of selectable physicochemical properties because of the limited computing resources and speed.",
        "tips",
        {
          confirmButtonText: "confirm"
        }
      );
    },

    // 选择fasta文件
    fileSelect() {
      let file = this.$refs.file.files[0];
      // 获取选择的文件名和大小
      let filename = file.name;
      // let size = file.size;
      // 截取文件名的后缀
      let index = filename.lastIndexOf(".");
      let suffix = filename.substr(index + 1);
      if (!this.isFastaFile(suffix)) {
        alert("Please select a fasta file (.fasta, .fas, .fa)!");
        return false;
      }
      this.file = file;
      this.percentCompleted = 0;
      this.uploadStatus = false;
    },

    // 判断文件是不是fasta文件
    isFastaFile(suffix) {
      return ["fasta", "fas", "fa"].indexOf(suffix.toLowerCase()) !== -1;
    },

    // 提交fasta文件
    async submit() {
      var _this = this;
      if (this.file == "") {
        alert("Please select a fasta file!");
        return false;
      }
      const formData = new FormData();
      formData.append("file", this.file); // 这里的“file”要和后端upload.single("file")的“file”同一个名称
      //   console.log(formData);
      // 随机生成一个id
      let id = Math.floor(Math.random() * Math.pow(2, 32) + 1);
      formData.append("id", id);
      await axios
        .post("/api/property/upload", formData, {
          onUploadProgress: progressEvent => {
            var percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            this.percentCompleted = percentCompleted;
          }
        })
        // eslint-disable-next-line no-unused-vars
        .then(function(respond) {
          if (respond.statusText == "OK") {
            _this.$message({
              message: "File submit successfully",
              type: "success"
            });
            _this.uploadStatus = true;
          }
        });
      // this.file = "";
      // this.percentCompleted = 0;
    },

    // 批量转换，点击该按钮，将前三个参数以及选择的理化特性传到node后端
    batchConvert(formName) {
      // console.log(formName.properties.property);
      let _this = this;
      this.percentCompleted = 0;
      this.$refs[formName].validate(valid => {
        // 验证前三个参数的有效性，如果有效表示都选择了
        if (valid) {
          console.log(valid);
          let property = _this.form.properties.property;
          // console.log(property);
          let propertyid = _this.form.propertyid;

          if (propertyid.length == 0) {
            alert("Please choose at least one physicochemical property!");
            return false;
          }
          if (_this.uploadStatus === false) {
            alert("Please select a fasta file and upload!");
            return false;
          }
          // console.log(property);
          // 截取propertyid对应的对象
          let i = 0;
          let j = 0;
          let tmpProperty = []; // [{},{},{},...]
          for (i = 0; i < propertyid.length; i++) {
            let t = propertyid[i];
            for (j = 0; j < property.length; j++) {
              if (property[j].ID == t) {
                break;
              }
            }
            tmpProperty.push(property[j]);
          }

          // 将转换所需要的数据传到node后端，可能后期会加个邮件地址
          axios
            .post("api/property/parameters", {
              kmer: _this.form.kmer,
              value: _this.form.value,
              tmpProperty: tmpProperty
            })
            .then(function(respond) {
              // 这里在后端返回转换结果的下载链接
              console.log(respond);
            });
        } else {
          alert("Please choose parameters first!");
          return false;
        }
      });
    }
  }
};

// 处理理化特性，使其分成4列
var object2object = function(objectArray, length, rows) {
  let i = 0;
  let tmp = [];
  // 如果理化特性只满足一行，每行放4个
  if (length <= 4) {
    let p = {
      col0: "",
      id0: "",
      col1: "",
      id1: "",
      col2: "",
      id2: "",
      col3: "",
      id3: ""
    };
    for (let j = 0; j < length; j++) {
      p["col" + j.toString()] = objectArray[j]["PropertyName"];
      p["id" + j.toString()] = objectArray[j]["ID"];
    }
    tmp.push(p);
    // console.log(tmp);
    return tmp;
  }
  // 处理满行，每行4个
  for (i = 0; i < rows - 1; i++) {
    let p = {
      col0: "",
      id0: "",
      col1: "",
      id1: "",
      col2: "",
      id2: "",
      col3: "",
      id3: ""
    };
    for (let j = 0; j < 4; j++) {
      p["col" + j.toString()] = objectArray[i * 4 + j]["PropertyName"];
      p["id" + j.toString()] = objectArray[i * 4 + j]["ID"];
    }
    tmp.push(p);
  }
  let pp = {
    col0: "",
    id0: "",
    col1: "",
    id1: "",
    col2: "",
    id2: "",
    col3: "",
    id3: ""
  };
  for (let j = 0; j < length - 4 * (rows - 1); j++) {
    pp["col" + j.toString()] = objectArray[4 * (rows - 1) + j]["PropertyName"];
    pp["id" + j.toString()] = objectArray[4 * (rows - 1) + j]["ID"];
  }
  tmp.push(pp);
  // console.log(tmp);
  return tmp;
};
</script>

<style scoped lang="less">
.myForm {
  margin: 10px auto; /* 表单居中设置 */
  padding: 40px 60px;
  width: 70%;
  border: 3px solid #b4ede7;
  border-radius: 10px;
}

.el-table {
  font-size: 15px;
  color: #232324;
}

/deep/ .el-form-item__label {
  font-size: 15px;
  color: #232324;
}

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

.el-form-item {
  border-top: 1px solid #ebeef5; // 表格线条颜色
  margin-bottom: 0;
}

.el-form-item /deep/ .el-form-item__label {
  border-right: 1px solid #ebeef5;
}

// .el-form-item:nth-child(6) /deep/ .el-form-item__label {
//   height: 53px;
// }

// /deep/ 相当于 >>>
/deep/ .el-checkbox__inner:hover {
  background-color: rgb(115, 200, 200) !important;
  border-color: rgb(115, 200, 200) !important;
}
/deep/ .el-radio__inner:hover {
  background-color: rgb(115, 200, 200) !important;
  border-color: rgb(115, 200, 200) !important;
}
// 单选框的标签可以换行了
/deep/ .all_label {
  display: inline-grid;
  white-space: pre-line;
  word-wrap: break-word;
  overflow: hidden;
  line-height: 20px;
}
/deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
  color: rgb(115, 200, 200) !important;
}
/deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: rgb(115, 200, 200) !important;
  border-color: rgb(115, 200, 200) !important;
}
/deep/ .el-checkbox__label {
  padding-left: 5px;
}
/deep/ .el-radio__input.is-checked + .el-radio__label {
  color: rgb(115, 200, 200) !important;
}
/deep/ .el-radio__input.is-checked .el-radio__inner {
  background-color: rgb(115, 200, 200) !important;
  border-color: rgb(115, 200, 200) !important;
}
/deep/ .el-radio__label {
  padding-left: 5px;
  font-size: 15px;
  color: #232324;
}
/deep/ .el-textarea__inner {
  border-color: rgb(115, 200, 200) !important;
  font-size: 15px;
  color: #232324;
}
/deep/ .el-select .el-input__inner:focus {
  border-color: rgb(115, 200, 200);
}

.el-select {
  margin-left: 10px;
}

.el-select-dropdown__item.selected {
  color: rgb(115, 200, 200);
}

// 遮盖原始按钮，以改变原始按钮的样式
.upload {
  height: 35px;
  line-height: 35px;
  //   position: relative;
  font-size: 15px;
  width: 100px;
  border-radius: 5px;
  color: #fff;
  background-color: #5cb85c;
  margin: auto 30px;
}

// 选择文件的原始按钮
.change {
  position: absolute;
  overflow: hidden;
  width: 100px;
  line-height: 35px;
  left: 30px;
  top: 20px;
  opacity: 0; // 设为透明
}

.submit {
  font-size: 15px;
  height: 35px;
  width: 100px;
  border-radius: 5px;
  color: #fff;
  background-color: #337ab7;
  border: #337ab7;
  margin: auto 10px; // 按钮居中
}

.convert {
  font-size: 15px;
  height: 35px;
  width: 100px;
  border-radius: 5px;
  color: #fff;
  background-color: #e6a23c;
  border: #e6a23c;
  margin: auto 30px; // 按钮居中
}

.progress-wrap {
  width: 400px;
  margin: 0 auto;
  p {
    width: 100%;
  }
  .progress {
    background-color: #c5c8ce;
    height: 15px;
    span {
      display: block;
      background-color: #19be6b;
      height: 100%;
      width: 0;
    }
  }
}
</style>
