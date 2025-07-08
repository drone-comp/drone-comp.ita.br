# Restore de backup

> Verificar em `/config/custom/<site>.js` a configuração desejada e ajustar de acordo/

> Obter configurado de acordo com [README.md](../README.md) (em **Setup mínimo do mongodb**).

```sh
mongorestore --uri=''mongodb://portalAdmin:p4ssw0rd@172.16.8.200:27017/portal'' --archive=''mongodb-portal-ita.archive''
```

# Configuração SSH

Criar chave no repositório para acesso durante build:

![](./ssh-key.png)