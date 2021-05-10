// add whatever parameters you deem necessary
function sameFrequency(num1,num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();

    if (str1.length !== str2.length) return false;

    let s1Count = {};
    let s2Count = {};

    for (let i = 0; i < str1.length; i++){
        s1Count[str1[i]] = (s1Count[str1[i]] || 0) + 1;
    }
    for (let j = 0; j < str2.length; j++){
        s2Count[str2[j]] = (s2Count[str2[j]] || 0) + 1;
    }
    for(let key in s1Count){
        if (s1Count[key] !== s2Count[key]) return false;
        
    }
    return true;
}
