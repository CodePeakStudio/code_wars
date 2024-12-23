export const likes = (a: string[]): string => {
    if (a.length === 0) {
        return 'no one likes this';
    } else if (a.length === 1) {
        return `${a[0]} likes this`;
    } else if (a.length === 2) {
        return `${a.join(' and ')} like this`;
    } else if (a.length === 3) {
        return `${a.slice(0, 2).join(', ')} and ${a.slice(2).join(', ')} like this`;
    } else {
        return `${a.slice(0, 2).join(', ')} and ${a.length - 2} others like this`;
    }
}

console.log(likes([]));
console.log(likes(['Alex']));
console.log(likes(['Alex', 'Jacob']));
console.log(likes(['Alex', 'Jacob', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));