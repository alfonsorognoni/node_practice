const { Readable } = require('stream');
const readableStream = new Readable({
    /**
     * 
     * @param {*} size 
     * When the read method is called on a readable stream, the implementation can push partial data to the queue
     * For example, we can push one letter at a time, starting with character code 65 (which represents A), and incrementing that on every push
     */
    read(size) {
        setTimeout(() => {
            if (this.currentChartCode > 90) {
                this.push(null);// No more data
                return;
            }
            this.push(String.fromCharCode(this.currentChartCode++));
        }, 100);
    }
});

readableStream.currentChartCode = 65;
readableStream.pipe(process.stdout);