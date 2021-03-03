
import testArray from './example';

function main() {
    
    const mapFn = (array, callback) => {
        const resultArray = [];
        for(let a = 0; a < array.length; a++){
            resultArray.push(callback(array[a]));
        }
        return resultArray;
    };
    
    
    console.log(mapFn(testArray, (x) => x * 1));
}

export default main;