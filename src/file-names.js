const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

//=>["file" , "file"   , "image" , "file(1)"   , "file"   ]
//=>["file" , "file(1)", "image" , "file(1)(1)", "file(2)"]
function renameFiles(names) {
  let nameObjCount = {};
  let resultArr = [];

  for (let name of names) {
    let count = nameObjCount[name] || 0;
    let newName = name;

    if (resultArr.indexOf(name) !== -1) {
      count++;
      newName = `${name}(${count})`;
    }

    nameObjCount[name] = count;
    resultArr.push(newName);
  }

  return resultArr;
}
renameFiles(['file', 'file', 'image', 'file(1)', 'file']);
module.exports = {
  renameFiles,
};
