# AC03 Ferran Castañé

Programa fet amb [Deno](https://deno.land/) ([TypeScript](https://www.typescriptlang.org/)) que executa algorismes recorsius

1. Elevar un número a la n
2. Passar un número de decimal a binari
3. Comptar quantes vegades hi ha un número impar a un array d'enters

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

Docker Compose:

Abans d'executar-ho, cal cambiar la ruta del [docker-compose.yml](https://github.com/FerranSalle/AC03PAED/blob/master/docker-compose.yml) (linia 6)
```bash
docker-compose up
```
Windows,Linux,Mac:
```bash
deno run index.ts
```

Docker:

Executa un script bash que executa docker eliminant automaticament el contenidor un cop ha acabat la seva execusió
```bash
bash start.sh
````