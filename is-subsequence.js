// add whatever parameters you deem necessary
function isSubsequence(str1, str2,m,n) {
    if (m === 0)
        return true;
    if (n === 0)
        return false;
          
    // If last characters of two strings
    // are matching
    if (str1[m - 1] === str2[n - 1])
        return isSubSequence(str1, str2,
                             m - 1, n - 1);
 
    // If last characters are not matching
    return isSubSequence(str1, str2, m, n - 1);
}
