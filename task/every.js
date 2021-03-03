import {testArray} from './example';

function main() {
    
    const everyFn = (array, callback) => {
       
        for(let a = 0; a < array.length; a++){
            if(!callback(array[a])){
                return false;
            }
        }
      return true;
    };
    
    
    console.log(everyFn(testArray, (x) => x % 2 == 0));
}

export default main;