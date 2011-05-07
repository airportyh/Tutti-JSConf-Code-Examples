echo "<!doctype html>
<html>
<head>
<style>
body{
    font-family: helvetica;
}
#editor{
    width: 650px;
    height: 300px;
    font-family: monaco, monospace;
    font-size: 1em;
}
table{
    width: 650px;
    background-color: #eee;
    border: 1px solid #888;
    border-collapse: collapse;
    color: #444;
}
td, th{
    border: 1px solid #ccc;
    padding: 0.2em 0.5em;
}
th{
    min-width: 50px;
    border-bottom: 2px solid #888;
}
td{
    text-align: center;
}
td:first-child{
    text-align: left;
    font-weight: bold;
}
tr:nth-child(even){
    background-color: #ddd;
}
</style>
</head>
<body>" > features.html


node features.js > features.tbl
node tbl.js features.tbl >> features.html

echo "</body></html>" >> features.html
