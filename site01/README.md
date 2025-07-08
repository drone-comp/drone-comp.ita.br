Criar arquivo `.env` contendo

```ini
NODE_ENV=maintenance
```

Onde `maintenance` é o nome do arquivo `config\custom\maintenance.js`.

Opcionalmente substituir `maintenance` por `prod` ou `test` de acordo com o ambiente desejado (ver arquivos na pasta `config`).

## Setup mínimo do *mongodb*

```sh
docker exec -it mongodb mongo -u root -p <password from .env>
```

```json
use portal
db.createUser({ user: "portalAdmin", pwd: "p4ssw0rd", roles: [ "dbOwner" ]})
```

## Servidor MongoDB LabQS/IEC via túnel SSH

```sh
ssh -p 2222 -fN -L 27017:172.16.8.200:27017 <usuário_vpn>@test.labqs.ita.br
```

## Container Docker

Verificar no arquivo `Dockerfile` a seguinte linha:

```Dockerfile
CMD [ "pm2-runtime", "start", "ecosystem.config.js", "--env", "ita" ]
```

Em `--env` substituir pela configuração desejada que exista na pasta `config/custom` (por exemplo `ita.js`).

No arquivo `config/custom/ita.js`, a configuração do MongoDB fica assim:

```json
mongodb://portalAdmin:p4ssw0rd@172.16.8.200:27017/portal
```

### Criação e execução do container

```sh
cd site01
set "DOCKER_BUILDKIT=1" && docker build -t portal:latest --ssh default=$HOME/.ssh/id_ed25519 .
docker run -d --network=netlab01 --name portal portal:latest
```

> **Obs**.: No **LabQS** é necessário especificar a rede do ambiente (`--network=netlab01`)

> **Obs**.: O build precisa de chave SSH para acesso ao repositório no **GitLab** (veja: [`scripts/README.md`](./scripts/README.md))

### Parar/re-iniciar o serviço

Parar:

```sh
docker stop portal
```

Re-iniciar

```sh
docker start portal
```

## Migração de servidor

Será necessário ajustar o `Host` e caminho (`PathPrefix`) na seguinte linha no arquivo `Dockerfile`

```Dockerfile
LABEL "traefik.http.routers.labqs.rule"="Host(`test.labqs.ita.br`) && PathPrefix(`/portal`)"
```
