import {testArray} from './example';

function main(){
    const reduceFn = (array, callback, initial) => {
        let value = initial;
        for(let a = 0; a < array.length; a++){
           let current = array[a];
           value = callback(value,current);
        }
        return value;
      };
      
      const sum = (initial, current) => initial + current;
      const reduceValue = reduceFn(testArray,sum,0);
      console.log(reduceValue);
  }



export default main;