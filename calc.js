const inquirer = require('inquirer')
let total = 0
let fulltotal = 0

const sum = async (num1, num2, sym) =>{
    console.log("hi")
    switch(sym){
        case '+':
            total = Number(num1) + Number(num2)
            break;
        case '-':
            total = Number(num1) - Number(num2)
            break;
        case '*':
            total = Number(num1) * Number(num2)
            break;
        case '/':
            total = Number(num1) / Number(num2)
            break;
        default:
            console.log('default')
    }
    
    fulltotal += total
    console.log(fulltotal)
    show()
}

const another = async () =>{
    const {nwnum} = await inquirer.prompt({
        name: 'nwnum',
        message: 'new equasion'
    })
    const symbol =/[-+*/]/g
    const numbers = /([0-9]*\.?[0-9]+)/g
    const full = nwnum.match(symbol)
    const nums = nwnum.match(numbers)
    const symblmtch =  full ? full[0] : null
    console.log(symblmtch)
    console.log(typeof symblmtch)
    console.log(Symbol(symblmtch))
    total = fulltotal
    console.log(full)
    console.log("nums", nums[0])
           const operation = `total ${symblmtch}= ${Number(nums[0])}`
           console.log(operation)
           eval(operation)
   
    fulltotal = total
    console.log(fulltotal)
    return( fulltotal, show())
}
const test = async () =>{
        const {testing} = await inquirer.prompt({
            name: 'testing',
            message: 'enter equasion'
        })
        const symbol =/[-+*/]/g
        const numbers = /([-+]?[0-9]*\.?[0-9]+)/g
        const full = testing.match(symbol)
        const nums = testing.match(numbers)
        
        console.log(full)
        console.log(nums)
        const choice = full[0]
        sum(nums[0], nums[1], full[0])
        
}

const show = async () =>{
    const choice = await inquirer.prompt({
        name:"intro",
        message: " what would you like to do?",
        type: 'list',
        choices: ['add', 'clear','test','add another','display','leave']
    })
    switch(choice.intro){
        case 'add':
            sum()
            break;
        case 'add another':
            another(fulltotal)
            break;
        case 'clear':
            fulltotal = 0
            show()
        case 'test':
            test()
            break;
        case 'display':
            console.log(fulltotal)
            show()
        default:
            break;
    }


}
show()