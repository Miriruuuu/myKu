console.log('这是一个js文件')

function sum(...args) {

    let sum = 0;

    sum += args

    console.log('sum', sum);

    sum = null

    return

}

sum(1,2,3)