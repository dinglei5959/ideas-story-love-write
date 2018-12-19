let fs = require("fs");
let join = require("path").join;
const reg = /(?<=(\w+\\)+)([a-z\-]+?).md/g;
/**
 *
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findSync(startPath) {
  let result = [];
  function finder(path) {
    let files = fs.readdirSync(path);
    files.forEach((val, index) => {
      let fPath = join(path, val);
      let stats = fs.statSync(fPath);
      if (stats.isDirectory()) finder(fPath);
      if (stats.isFile()) result.push(fPath);
    });
  }
  finder(startPath);
  return result;
}




module.exports = function (pathname,callback){
  let fileNamesList = findSync(pathname);

  fileNamesList = fileNamesList.map((item)=>{
    return  (item.match(reg) && item.match(reg)[0] ) ? item.match(reg)[0] : '';
  }).filter(item=>(!!item));

  console.log(fileNamesList);

  var content = JSON.stringify({fileNamesList}); 
  console.log(content);
  var file = join(__dirname, '../' + pathname + '/list.json');

  //写入文件
  fs.writeFile(file, content, function(err) {
    if (err) {
        return console.log(err);
    }
    callback instanceof Function && callback(); // 成功执行。。
  });
}