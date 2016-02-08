
var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_editbarMenuLeft = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_markdown_editor/templates/editbarMenuLeft.ejs");
  return cb();
}

exports.eejsBlock_afterEditbar = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_markdown_editor/templates/afterEditbar.ejs");
  return cb();
}
