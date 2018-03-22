var fs = require('fs')
var resolve = require('path').resolve
var join = require('path').join
var cp = require('child_process')
var os = require('os')

console.log("start install packages...")
console.log("project path:" + __dirname)

fs.readdirSync(__dirname).forEach(function (dirName) {
    if(dirName.indexOf('.') < 0){
    	var dirPath = join(__dirname, dirName)
    	if (!fs.existsSync(join(dirPath, 'package.json'))) return
    	console.log("installing subFolder:" + dirName)
    	var npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm'

		// install folder
		cp.spawn(npmCmd, ['i'], { env: process.env, cwd: dirPath, stdio: 'inherit' })
    }
});