function findNeedle(haystack, needle) {

    // for (let i =0; i <haystack.length; i++) {
    //     for (let j =0; j <needle.length; j++) {
    //     if(needle[j] !== haystack[i+j]) break
    //     if(j === needle.length-1) return i
    //     }
    // }
    // return -1;

    // if (haystack.slice(i, i + needle.length) === needle) return i;

    const haystackLength = haystack.length;
    const needleLength = needle.length;
    const lastCharIndex = {};

    for (let i = 0; i < needleLength;i++){
        lastCharIndex[needle[i]] = i;
    }

    let i = 0;

    while( i <= haystackLength - needleLength){
        let j = needleLength -1

        while( j >= 0 && needle[j] === haystack[j+1]) {
            j--
        }
        if (j === -1){
            return i
        } else {
            const badChar = haystack[i+j];
            const badCharIndex = lastCharIndex[badChar];
            i += Math.max(i, j - badCharIndex);
        }
    }
    return -1;

}

console.log(findNeedle('gonorrea', 'rrea'))