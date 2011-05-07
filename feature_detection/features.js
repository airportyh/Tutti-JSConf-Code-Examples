var Tutti = require('tutti').Tutti

var headerPrinted = false

String.prototype.pad = function(l, s, t){
    return s || (s = " "), (l -= this.length) > 0 ? (s = new Array(Math.ceil(l / s.length)
        + 1).join(s)).substr(0, t = !t ? l : t == 1 ? 0 : Math.ceil(l / 2))
        + this + s.substr(0, l - t) : this;
}

Tutti('PASTE ROOM URL HERE')
    .on('message', function(msg){
        if ('console' in msg){
            if (msg.console.match(/^applicationcache/)){
                if (!headerPrinted){
                    console.log('                ' + msg.console)
                    headerPrinted = true
                }
            }else
                console.log(msg.browser.pad(16, ' ', 1) + msg.console)   
        }
    })
    .reset()
    .wait(1000)
    .eval(function(){
        var script = document.createElement('script')
        script.src = 'https://github.com/Modernizr/Modernizr/raw/master/modernizr.js'
        document.body.appendChild(script)
        if (!Array.prototype.map){
            script = document.createElement('script')
            script.src = 'https://github.com/airportyh/ecma5array/raw/master/ecma5array.js'
            document.body.appendChild(script)
        }
        
        setTimeout(function(){
            function keys(o){
                var ret = []
                for (var k in o) ret.push(k)
                return ret
            }
            var feats = keys(Modernizr)
                .filter(function(a){
                    return a.charAt(0) != '_' && 
                        typeof Modernizr[a] != 'function' 
                }).sort()
            console.log(feats.join(' '))
            // pad courtesy of [jsfromhell.com](http://jsfromhell.com/string/pad)
            String.prototype.pad = function(l, s, t){
                return s || (s = " "), (l -= this.length) > 0 ? (s = new Array(Math.ceil(l / s.length)
                    + 1).join(s)).substr(0, t = !t ? l : t == 1 ? 0 : Math.ceil(l / 2))
                    + this + s.substr(0, l - t) : this;
            }
            console.log(feats.map(function(f){
                return (Modernizr[f] ? 'X' : '')
                    .pad(f.length, ' ', 1)
            }).join(' '))
        }, 1000)
        
    })
    .wait('console')
    .wait('console')
    .exit()