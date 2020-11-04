# Iniciando um projeto com Typescript

Para iniciar um projeto com typescript, é necessário instalarmos o typescript como dependência de desenvolvedor, a partir dai, os arquivos criados terão a extensão .ts e não mais .js, salvo excessões

```bash
# inicia o projeto
yarn init -y

# instala o typescript
yarn add typescript -D 

# inicializa configurações do typescript criando o arquivo tsconfig.json
yarn tsc --init
```

Com o código abaixo, vamos ver um projeto rodando com typescript, crie um arquivo index.ts dentro da pasta src

```tsx
// com o Typescript podemos usar o import ao inves do require
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    return res.json({message: 'Hello Typescript'})
})

app.listen(3333)
```

Para executar esse projeto precisamos converter o código typescript para javascript, mas antes altere a linha abaixo no seu arquivo tsconfig.json. Essa alteração vai fazer que o nosso código convertido vá para a pasta dist, parecido como funciona no babel.

```js
// encontre a linha abaixo e deixe nesse formato
"outDir": "./dist",                       /* Redirect output structure to the directory. */
```

```bash
# rode o comando abaixo no terminal para converter de ts para js
yarn tsc

# executando o projeto para rodar na porta 3333
node dist/index.js
```

## Quando adicionar tipagem

O editor VSCode irá sempre avisar quando precisamos tipar os dados apontando um erro. 

Sempre que houver o import de um package, não vamos precisar passar os tipos explicitamente, porém quando separarmos os arquivos e importarmos ele, vamos precisar passar o tipo.

```tsx
// arquivo index.ts

import express from 'express'

import { helloWorld } from './routes' 

const app = express()

app.get('/', helloWorld)

app.listen(3333)
```

```tsx
// arquivo routes.ts

// import dos tipos
import { Request, Response } from 'express'

// tipando os parametros, habilitamos o intelisensse
export function helloWorld(req: Request, res: Response) {
    return res.json({message: 'Hello Typescript'})
}
```

## Criando nossos tipos

Crie o arquivo User.ts dentro da pasta services, que por sua vez, esta dentro da pasta src.

```tsx
// arquivo User.ts

// exportamos a funcao com seus tipos nos parametros
export default function createUser(name = '', email: string, password: string, age: number) {
    const data = {
        name,
        email,
        password,
        age
    }
    return data
}
```

```tsx
// arquivo routes.ts

import { Request, Response } from 'express'

// importamos a funcao createUser
import createUser from './services/User'

export function helloWorld(req: Request, res: Response) {
		// ao usar a funcao, precisamos escrever todos os parametros corretamente com seus tipos, caso contrario dara erro
    const user = createUser('marcelo', 'marcelo@marcelo.com', '123456', 28)

    return res.json({message: 'Hello Typescript'})
}
```

Criando uma interface

```tsx
// arquivo User.ts

interface TechObject {
    title: string,
    experience: number
}

interface userData {
    name?: string, // o interrogação significa que o nome é opcional, ou seja, não precisa ser informado obrigatoriamente
    email: string,
    password: string,
    age: number,
    techs: Array<string | TechObject> // techs contem um array de strings ou um oojeto 
    // podemos tambem utilizar o formato -> techs: string[] para dizer que eh um array de strings
}

export default function createUser({ name = '', email, password, age }: userData) {
    const data = {
        name,
        email,
        password,
        age
    }
    return data
}
```

```tsx
// arquivo routes.ts

import { Request, Response } from 'express'
import createUser from './services/User'

export function helloWorld(req: Request, res: Response) {
    const user = createUser({
        age: 123,
        email: 'marcelo@marcelo.com',
        password: '1324568',
        techs: [
            'NodeJS',
            'ReactJS',
            'React Native',
            { title: 'ReactJS', experience: 100 }
        ]
    })

    return res.json({message: 'Hello Typescript'})
}
```

Sempre que precisarmos definir o formado de um objeto, criamos uma nova interface para isso