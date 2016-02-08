var $, jQuery;

var $ = require('ep_etherpad-lite/static/js/rjquery').$;

var editorInfo;
var init = false;

function setMarkdown()
{
  var padContent = editorInfo.ace_exportText();
  var markdown = marked(padContent);
  $('#rightpaneContent').html(markdown);
}

exports.aceInitialized = function (hook, context) {
  //alert("aceInitialized");
  editorInfo = context.editorInfo;
  $('.render-icon').click(function() {
    setMarkdown();
  });
}

exports.postAceInit = function(hook, context) {
  //alert("postAceInit");
  init = true;
  setMarkdown();
}

exports.collectContentPost = function(name, context) {
  //alert("collectContentPost");
}

exports.acePostWriteDomLineHTML = function(hook_name, args, cb) {
  if (editorInfo != null && init)
  {
    //alert("acePostWriteDomLineHTML");
    //setMarkdown();
  }
}
