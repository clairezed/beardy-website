// console.log("Organization Model")


// var Model = require("./base"),
//   model = new Model();
// console.log(model);
//   // crypto = require("crypto"),
// var organizationModel = model.extend({
//   insert: function(data, callback) {
//     // data.ID = crypto.randomBytes(20).toString('hex');
//     this.collection().insert(data, {}, callback || function(){ });
//   },
//   update: function(data, callback) {
//     this.collection().update({ID: data.ID}, data, {}, callback || function(){ });
//   },
//   getList: function(callback, query) {
//     this.collection().find(query || {}).toArray(callback);
//   },
//   remove: function(ID, callback) {
//     this.collection().findAndModify({ID: ID}, [], {}, {remove: true}, callback);
//   }
// });
// // console.log(organizationModel.getList());
// module.exports = organizationModel;