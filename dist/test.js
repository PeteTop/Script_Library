const fs = require('fs')
const path = require('path')
const file = fs.readFileSync(path.join(__dirname, './bundle.js'),'utf-8')
const bin = '#!/usr/bin/env node\n'+file
fs.writeFileSync(path.join(__dirname, './bundle.js'),bin)