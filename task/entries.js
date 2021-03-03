import {testArray} from './example'

function main() {
    
    const entriesFn = (array,callback) => {
        const newObj = {};
        for(let a = 0; a < array.length; a++){
            newObj[a] = (callback(array[a]))
        }
        return newObj;
    };
    
    
    console.log(entriesFn(testArray, (x) =>  x));
}

export default main