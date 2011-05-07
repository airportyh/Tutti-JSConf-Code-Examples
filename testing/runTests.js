var Tutti = require('tutti').Tutti

function indent(str){
    return str.split('\n').map(function(l){return '    ' + l}).join('\n')
}

function display(msg){
    if (msg.console){
        console.log(msg.browser + ':')
        console.log(indent(msg.console))
    }else if (msg.error){
        console.log(msg.browser + ':')
        console.log(indent(msg.error))
    }
}

Tutti('PASTE ROOM URL HERE')
    .on('message', display)
    .reset()
    .load('jasmine.js')
    .load('consoleJasmineReporter.js')
    .load('hello.js')
    .load('testHello.js')
    .eval(function(){
        jasmine.getEnv().addReporter(new ConsoleJasmineReporter)
        jasmine.getEnv().execute()
    })
    .wait('console', 10000)
    .exit()
