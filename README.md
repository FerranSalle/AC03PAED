# AC03 Ferran Castañé

Programa fet amb [Deno](https://deno.land/) ([TypeScript](https://www.typescriptlang.org/)) que executa algorismes recorsius

1. Elevar un número a la n
2. Passar un número de decimal a binari
3. Comptar quantes vegades hi ha un número impar a un array d'enters
## IDE
S'ha utilitzat [WebStorm](https://www.jetbrains.com/es-es/webstorm/) per com a entorn de desenvolupament, concretament, la versió 2021.2.3
## Installation
[Deno](https://deno.land/#installation)

Mac,Linux

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

[HomeBrew](https://formulae.brew.sh/formula/deno) (Mac)
```bash
brew install deno
```

PowerShell (Windows):
```bash
iwr https://deno.land/x/install/install.ps1 -useb | iex
```
## Usage

```typescript
import {potencia} from "potencia.ts"
import {aBinari} from "binari.ts"
import {comptaImparells} from "comptaImparells.ts"

//returns '32'
potencia(2,5)

//returns '1011'
aBinari(11)

//returns 3
comptaImparells([1,2,3,4,5])
```

## Run
Per executar el programa, ho podem fer de dues maneres:
Les següents ordes, s'han d'executar dins del direcori del programa


Windows,Linux,Mac:
```bash
deno run index.ts
```

[Docker](https://www.docker.com/):

Executa un script bash que executa docker eliminant automaticament el contenidor un cop ha acabat la seva execusió
```bash
bash start.sh
````