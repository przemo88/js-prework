import {textArray} from './example';

function main() {
    
    const forEachFn = (array, callback) => {
        const resultArray = [];
        for(let a = 0; a < array.length; a++){
            resultArray.push(callback(array[a]));
        }
        return resultArray;
    };
    
    
    console.log(forEachFn(textArray, (x) => x.toUpperCase()));
}

export default main;