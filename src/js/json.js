let myJson = {
    "name": "竹马",
    "ege": 23,
    "gender": "男"
}
for (let myJsonKey in myJson) {
    console.log(myJsonKey);
    console.log(myJson[myJsonKey]);
}
