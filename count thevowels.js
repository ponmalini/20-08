let sentence="hello";
let vowel=['a','e','i','o','u'];
let sentenceArray=[...sentence];
let vowelCount=0;
for(i=0;i<sentenceArray.length;i++){
    if(vowel.includes(sentenceArray[i]))
    {
        vowelCount++;
    }
}
console.log('Vowels:'+vowelCount);
