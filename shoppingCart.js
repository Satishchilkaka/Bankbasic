
/* const cutppice = function (fruit) {
    return fruit * 4;
}

const fruits = function (apples, oranges) {
    const applescut = cutppice(apples)
    const orangecut = cutppice(oranges)
    const fruitsCut = function () {

        let simple = `juice with apples is ${applescut} and juice with oranges ${orangecut} `
        return simple
    }
    return fruitsCut

}
console.log(fruits(7, 8)) */


 const studentPassMarks = function () {
     const passMarks = 35;

    return passMarks
}

const studentMarks = function (stuident1, student2, student3) {
    
    if(stuident1 == studentPassMarks()) {
        
        console.log("Student just pass ")
        return stuident1
    }
    else if(student2 == studentPassMarks ()) {
        console.log("Student2 Just pass")
        return stuident2
    }
    else if(student3 == studentPassMarks ()) {
        console.log("Student3 Just pass")
    }
    else{
        console.log("Stunde fail;")
    }
}
console.log(studentMarks()) 