function print(str) {
    console.log(str);
}

var myArr = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function removeFalsy(arr) {
    var res = '';

    for (var i = 0, tempStr = ''; i < arr.length; i++) {
        tempStr = "" + arr[i];
        switch (tempStr) {
            case "NaN":
            case "undefined":
            case "null":
            case "Infinity":
                continue;
            default:
                res += arr[i];
        }
    }
    return res;
}

print(removeFalsy(myArr));
