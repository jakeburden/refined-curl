#! /usr/bin/env node

var request = require('hyperquest')
var url = process.argv[2]
request(url).pipe(process.stdout)

