var wink = require("wink-js");
var config = require("./config");

wink.init(config, function(data) {
    console.log(data);
});
