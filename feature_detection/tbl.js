function findIndices(header){
    var offset = 0
    var indices = [0]
    do{
        var idx = header.search(/ [^ ]/)
        if (idx == -1) break
        else{
            indices.push(offset + idx + 1)
            header = header.substring(idx + 2)
            offset += idx + 2
        }
    }while(true)
    return indices
}
function pickValues(line, indices){
    var arrLen = indices.length
    return indices.map(function(idx, i){
        var endIdx = (i == (arrLen - 1))? line.length : indices[i + 1]
        return line.substring(idx, endIdx).trim()
    })
}
function tableMarkup(data, flipAxis){
    var markup = ['<table>']
    var numColumns = flipAxis ? data.length : data[0].length
    var numRows = flipAxis ? data[0].length : data.length
    for (var r = 0; r < numRows; r++){
        var isHeader = r == 0
        if (isHeader)
            markup.push('<thead><tr>')
        else
            markup.push('<tr>')
        for (var c = 0; c < numColumns; c++){
            var v = flipAxis ? data[c][r] : data[r][c]
            if (isHeader)
                markup.push('<th>' + v + '</th>')
            else
                markup.push('<td>' + v + '</td>')
        }
        markup.push('</tr>')
        if (isHeader)
            markup.push('</thead><tbody>')
    }
    markup.push('</tbody></table>')
    return markup.join('')
}
function tbl(text, flipAxis){
    var lines = text.split('\n')
        .filter(function(l){return l !== ''})
    var header = lines[0]
    var indices = findIndices(header)
    var data = lines.map(function(line){
        return pickValues(line, indices)
    })
    return tableMarkup(data, flipAxis)
}
if (typeof process == 'object'){
    // Run as a node script
    var args = process.argv
    if (args.length <= 2){
        console.log('Usage: node tbl.js <file>')
        process.exit(0)
    }
    var file = args[2]
    var fs = require('fs')
    var text = String(fs.readFileSync(file))
    console.log(tbl(text, true))
}