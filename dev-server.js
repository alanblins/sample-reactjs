var liveServer = require("live-server");
 
var params = {
    port: 8182, 
    root: "src/client/app",
    mount: [['/public', './src/client/public']]
};
liveServer.start(params);
