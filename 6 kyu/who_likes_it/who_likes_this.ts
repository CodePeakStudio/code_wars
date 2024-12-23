export const likes = (a: string[]): string => {
    // if (a.length === 0) {
    //     return 'no one likes this';
    // }
    // let result = a.reduce((result: string, val: string, idx: number, array: string[]) => {
    //     if (array.length == 1) {
    //         result += val;
    //     } else {
    //         if (idx < 3) {
    //             result += (result == '') ? `${val}` : ` and ${val}`
    //         }
    //     }
    //     return result;
    // }, "");
    // return `${result} ${a.length === 1 ? 'likes this' : a.length < 4 ? 'like this' : 'tralalala'}`
    return a.join(',');
}

console.log(likes([]));
console.log(likes(['Alex']));
console.log(likes(['Alex', 'Jacob']));
console.log(likes(['Alex', 'Jacob', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));