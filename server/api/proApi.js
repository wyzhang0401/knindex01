var models = require("../data.base.conf");
var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var $sql = require("../sqlMap");

// 连接数据库
var connection = mysql.createConnection(models.mysql);
connection.connect();

// 将数据转换为json格式
var jsonWrite = function(res, ret) {
  if (typeof ret === "undefined") {
    res.json({
      code: "1",
      msg: "操作失败"
    });
  } else {
    res.json(ret);
  }
};

// 单元DNA测试显示接口
router.post("/monodnaoriginal", (req, res) => {
  var sql = $sql.property.selectmonooriginal;
  connection.query(sql, function(err, result) {
    if (err) {
      console.log("[SELECT FROM monodna-original ERROR]:", err.msg);
    }
    if (result) {
      // console.log(result)
      jsonWrite(res, result);
    }
  });
  // connection.end()
});

router.post("/monodnastandard", (req, res) => {
  var sql = $sql.property.selectmonostandard;
  connection.query(sql, function(err, result) {
    if (err) {
      console.log("[SELECT FROM monodna-standard ERROR]:", err.msg);
    }
    if (result) {
      // console.log(result)
      jsonWrite(res, result);
    }
  });
  // connection.end()
});

router.post("/didnaoriginal", (req, res) => {
  var sql = $sql.property.selectdidnaoriginal;
  // var params = req.body
  connection.query(sql, function(err, result) {
    if (err) {
      console.log("[SELECT FROM didna-original ERROR]:", err.msg);
    }
    if (result) {
      // console.log(result)
      jsonWrite(res, result);
    }
  });
  // connection.end()
});

router.post("/didnastandard", (req, res) => {
  var sql = $sql.property.selectdidnastandard;
  // var params = req.body
  connection.query(sql, function(err, result) {
    if (err) {
      console.log("[SELECT FROM didna-standard ERROR]:", err.msg);
    }
    if (result) {
      // console.log(result)
      jsonWrite(res, result);
    }
  });
  // connection.end()
});

router.post("/dirnaoriginal", (req, res) => {
  var sql = $sql.property.selectdirnaoriginal;
  // var params = req.body
  connection.query(sql, function(err, result) {
    if (err) {
      console.log("[SELECT FROM dirna-original ERROR]:", err.msg);
    }
    if (result) {
      // console.log(result)
      jsonWrite(res, result);
    }
  });
  // connection.end()
});

router.post("/dirnastandard", (req, res) => {
  var sql = $sql.property.selectdirnastandard;
  // var params = req.body
  connection.query(sql, function(err, result) {
    if (err) {
      console.log("[SELECT FROM dirna-standard ERROR]:", err.msg);
    }
    if (result) {
      // console.log(result)
      jsonWrite(res, result);
    }
  });
  // connection.end()
});

router.post("/tridnaoriginal", (req, res) => {
  var sql = $sql.property.selecttridnaoriginal;
  // var params = req.body
  connection.query(sql, function(err, result) {
    if (err) {
      console.log("[SELECT FROM tridna-original ERROR]:", err.msg);
    }
    if (result) {
      // console.log(result)
      jsonWrite(res, result);
    }
  });
  // connection.end()
});

router.post("/tridnastandard", (req, res) => {
  var sql = $sql.property.selecttridnastandard;
  // var params = req.body
  connection.query(sql, function(err, result) {
    if (err) {
      console.log("[SELECT FROM tridna-standard ERROR]:", err.msg);
    }
    if (result) {
      // console.log(result)
      jsonWrite(res, result);
    }
  });
  // connection.end()
});

// 直接通过sql语句进行搜索查询
router.post("/searchmonoori", (req, res) => {
  var sql = $sql.property.searchmonoori;
  var proname = req.body;
  connection.query(sql, [proname.propertyName], (err, result) => {
    if (err) {
      console.log("[SEARCH FROM monodna-original ERROR]:", err.msg);
    }
    if (result) {
      jsonWrite(res, result);
    }
  });
});

router.post("/searchmonostan", (req, res) => {
  var sql = $sql.property.searchmonostan;
  var proname = req.body;
  connection.query(sql, [proname.propertyName], (err, result) => {
    if (err) {
      console.log("[SEARCH FROM monodna-standard ERROR]:", err.msg);
    }
    if (result) {
      jsonWrite(res, result);
    }
  });
});

router.post("/searchdidnaori", (req, res) => {
  var sql = $sql.property.searchdidnaori;
  var pro = req.body;
  // console.log(pro.propertyName)
  connection.query(sql, [pro.propertyName], (err, result) => {
    if (err) {
      console.log("[SEARCH FROM didna-original ERROR]:", err.msg);
    }
    if (result) {
      jsonWrite(res, result);
    }
  });
});

router.post("/searchdidnastan", (req, res) => {
  var sql = $sql.property.searchdidnastan;
  var pro = req.body;
  // console.log(pro.propertyName)
  connection.query(sql, [pro.propertyName], (err, result) => {
    if (err) {
      console.log("[SEARCH FROM didna-standard ERROR]:", err.msg);
    }
    if (result) {
      jsonWrite(res, result);
    }
  });
});

router.post("/searchdirnaori", (req, res) => {
  var sql = $sql.property.searchdirnaori;
  var pro = req.body;
  // console.log(pro.propertyName)
  connection.query(sql, [pro.propertyName], (err, result) => {
    if (err) {
      console.log("[SEARCH FROM dirna-original ERROR]:", err.msg);
    }
    if (result) {
      jsonWrite(res, result);
    }
  });
});

router.post("/searchdirnastan", (req, res) => {
  var sql = $sql.property.searchdirnastan;
  var pro = req.body;
  // console.log(pro.propertyName)
  connection.query(sql, [pro.propertyName], (err, result) => {
    if (err) {
      console.log("[SEARCH FROM dirna-standard ERROR]:", err.msg);
    }
    if (result) {
      jsonWrite(res, result);
    }
  });
});

router.post("/searchtridnaori", (req, res) => {
  var sql = $sql.property.searchtridnaori;
  var pro = req.body;
  // console.log(pro.propertyName)
  connection.query(sql, [pro.propertyName], (err, result) => {
    if (err) {
      console.log("[SEARCH FROM tridna-original ERROR]:", err.msg);
    }
    if (result) {
      jsonWrite(res, result);
    }
  });
});

router.post("/searchtridnastan", (req, res) => {
  var sql = $sql.property.searchtridnastan;
  var pro = req.body;
  // console.log(pro.propertyName)
  connection.query(sql, [pro.propertyName], (err, result) => {
    if (err) {
      console.log("[SEARCH FROM tridna-standard ERROR]:", err.msg);
    }
    if (result) {
      jsonWrite(res, result);
    }
  });
});

router.post("/cluster_reference", (req, res) => {
  // var params = req.body
  var sql = $sql.property.cluster_reference;
  connection.query(sql, (err, result) => {
    if (err) {
      console.log("[SEARCH FROM cluster_reference ERROR]:", err.msg);
    }
    if (result) {
      jsonWrite(res, result);
    }
  });
});

router.post("/getproperty_mono", (req, res) => {
  var sql = $sql.property.monoproperty;
  connection.query(sql, (err, result) => {
    if (err) {
      console.log("[get propertyname from mono error]:", err.msg);
    }
    if (result) {
      jsonWrite(res, result);
    }
  });
});

router.post("/getproperty_didna", (req, res) => {
  var sql = $sql.property.didnaproperty;
  connection.query(sql, (err, result) => {
    if (err) {
      console.log("[get propertyname from didna error]:", err.msg);
    }
    if (result) {
      jsonWrite(res, result);
    }
  });
});

router.post("/getproperty_dirna", (req, res) => {
  var sql = $sql.property.dirnaproperty;
  connection.query(sql, (err, result) => {
    if (err) {
      console.log("[get propertyname from dirna error]:", err.msg);
    }
    if (result) {
      jsonWrite(res, result);
    }
  });
});

router.post("/getproperty_tri", (req, res) => {
  var sql = $sql.property.triproperty;
  connection.query(sql, (err, result) => {
    if (err) {
      console.log("[get propertyname from tridna error]:", err.msg);
    }
    if (result) {
      jsonWrite(res, result);
    }
  });
});

// 参考文献
router.post("/references", (req, res) => {
  var sql = $sql.property.references;
  connection.query(sql, (err, result) => {
    if (err) {
      console.log("[get references error]:", err.msg);
    }
    if (result) {
      jsonWrite(res, result);
    }
  });
});
module.exports = router;
