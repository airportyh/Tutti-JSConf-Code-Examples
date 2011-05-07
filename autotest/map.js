if (!Array.prototype.map){
    Array.prototype.map = function map(func){
        var ret = [],
            len = this.length
        for (var i = 0; i < len; i++)
            ret.push(func(this[i]))
        return ret
    }
}