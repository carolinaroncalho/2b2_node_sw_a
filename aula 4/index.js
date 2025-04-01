const inquirer = require('inquirer')
const chalk = require('chalk')
 
const fs = require('fs')
 
function operetion(){
    inquirer.prompt([
        {
            type:'list',
            name:'action',
            menssage: 'Escolha uma das opcoes do menu',
            choices:[
                'Criar conta',
                'Consultar saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        }
    ]).then((answer) => {
        const action = answer['action']
        if(action === 'Criar conta'){
            console.log('Criando a conta...')
        }else if(action === 'Consultar saldo'){
            console.log('Consultando saldo...')
        }else if(action === 'Depositar'){
            console.log('Depositando...')
        }else if(action === 'Sacar'){
            console.log('Retirando saque...')
        }else if(action === 'Sair'){
            console.log('Saindo do distema...')
        }else{
            console.log('Nao e valido')
        }
      })
}
 
 