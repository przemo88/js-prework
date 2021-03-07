import {alphabet} from './example'

function main() {
    
    const aggregateIntoChunks = (arr) => {
    
        let size_array = [], a = 0, ran, sum=0;
    
    while(sum < alphabet.length){
        ran = Math.floor(Math.random()*(7 - 4 + 1) + 4);
        size_array[a] = ran;
        sum += ran;
        a++;
    
        if(sum > alphabet.length){
            sum = 0;
            a = 0;
            size_array = [];
        }
   
    }
      var chunks = [], i = 0, n = arr.length;
    
        let b = 0;
        while (i < n) {
        chunks.push(arr.slice(i, i += size_array[b]));
        b++;
      }
    
      return chunks;
    }
    
    const alphabet = "abcdefghijklmnoprstuwxyz".split("");
    
    console.log(aggregateIntoChunks(alphabet));
}

export default main