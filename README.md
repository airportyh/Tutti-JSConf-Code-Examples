Tutti Code Examples
===================
These are the code examples I used in the Tutti demo at JSConf 2011 in Portland. To run these examples, first make sure you have the prerequisite software installed:

1. [node.js](http://nodejs.org/)
2. [npm](http://npmjs.org/)
3. tutti npm package (installed via `npm install tutti`, `sudo` may be required depending on your installation of npm)

Next, go to <http://tuttijs.com> and create a room. Copy the URL when you've entered the room, and paste it into the places in the scripts where it says 'PASTE ROOM URL HERE'.
    
There are three examples: `testing`, `autotest`, and `feature_detection`. Here's how to run the scripts for each example:

### Testing

    cd testing
    # edit runTests.js to substitute room URL
    node runTests.js
    
### Autotest

    cd autotest
    # edit runTests.js to substitute room URL
    node runTests.js
    # now you need to actually edit the map.js and testMap.js files and save
    # them to trigger a re-run of the tests.
    
### Feature Detection(generate a browser feature comparison table)

    cd feature_detection
    # edit features.js to substitute room URL
    ./features.sh
    open features.html
    
I hope these instructions are sufficient to get it going for you. If not, ping me on twitter: @airportyh.

