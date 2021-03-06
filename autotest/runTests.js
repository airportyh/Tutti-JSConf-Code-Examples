require.paths.unshift(__dirname)
var log = console.log,
    sys = require('sys'),
    fs = require('fs'),
    Tutti = require('tutti').Tutti

function red(s){ return ["\033[31m", s, "\033[0m"].join('') }
function green(s){ return ["\033[32m", s, "\033[0m"].join('') }
function cyan(s){ return ["\033[36m", s, "\033[0m"].join('') }
function yellow(s){ return ["\033[33m", s, "\033[0m"].join('') }
function blue(s){ return ["\033[34m", s, "\033[0m"].join('') }

function indent(str){
    return str.split('\n').map(function(l){return '  ' + l}).join('\n')
}

function display(msg){
    if ('error' in msg){
        log(msg.browser)
        log(indent(msg.error))
    }else if ('console' in msg){
        log(msg.browser)
        log(indent(msg.console))
    }
}

var scripts = [
    'jasmine.js',
    'consoleJasmineReporter.js',
    'map.js',
    'testMap.js'
]

var tutti = Tutti('PASTE ROOM URL HERE')
tutti.on('message', display)
function run(){
    tutti
        .reset()
        .load(scripts)
        .eval(function(){
            jasmine.getEnv().addReporter(new ConsoleJasmineReporter())
            jasmine.getEnv().execute()
        })
}

scripts.forEach(function(script){
    fs.watchFile(script, function(curr, prev){
        if (curr.mtime.getTime() !== prev.mtime.getTime()){
            log(yellow(script + ' modified. Re-run tests.'))
            run()
        }
    })
})

run()
