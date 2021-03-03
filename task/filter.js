import {testArray} from './example'

function main() {
    
    const mapFn = (array, callback) => {
      const resultArray = [];
      for(let a = 0; a < array.length; a++){
         
          if(callback(array[a])){
              resultArray.push(array[a]);
          }
      }
      return resultArray;
    };
    
    
    console.log(mapFn(testArray, (x) => x > 7));
}

export default main;