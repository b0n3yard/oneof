const inquirer = require('inquirer')
let total = 0
let fulltotal = 0

const sum = async (testing) =>{
    const symbol =/[-+*/]/g
    const symbol2 =/[+\-*/]?\d+|\*?\([^)]+\)/g
    const numbers = /([0-9]*\.?[0-9]+)/g
    const splits = testing.match(symbol2)
    console.log(splits)
    const full = testing.match(symbol)
    const nums = testing.match(numbers)
    let lit = `total = ${total}`
    console.log(nums.length)
    if(fulltotal == 0){
         lit = `total = ${splits[0]}${splits[1]}`
    }else{
        for(let x in nums){
            lit= lit +`${splits[x]}` 
        }
    }
    console.log(lit)
    eval(lit)
    
    fulltotal = total
    lit = 0
    console.log(fulltotal)
    show()
}

const another = async () =>{
    const {nwnum} = await inquirer.prompt({
        name: 'nwnum',
        message: 'new equasion'
    })
    sum(nwnum)
    
}
const welcome = async () =>{
        const {testing} = await inquirer.prompt({
            name: 'testing',
            message: 'enter equasion'
        })
        sum(testing)
        
        
}

const show = async () =>{
    const choice = await inquirer.prompt({
        name:"intro",
        message: " what would you like to do?",
        type: 'list',
        choices: ['add another', 'clear','display','leave']
    })
    // console.log(choice)
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
            break;
        case 'test':
            test()
            break;
        case 'display':
            console.log(fulltotal)
            show()
            break;
        default:
            break;
    }


}
welcome()