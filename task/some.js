import {testArray} from './example';

function main() {
    
    const someFn = (array, callback) => {
    
        for(let a = 0; a < array.length; a++){
            if(callback(array[a])){
                return true;
            }
        }
        return false;
    };
    
    console.log(someFn(testArray, (x) => x % 2 == 0));
}

export default main;