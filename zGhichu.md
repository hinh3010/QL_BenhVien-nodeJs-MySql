### sequelize
`https://sequelize.org/docs/v6/getting-started/`

    npm i sequelize
    
    npm i -D sequelize-cli
    
    
### sequelize-cli
`https://sequelize.org/docs/v6/other-topics/migrations/`

    npm i -D sequelize-cli
    
    npx sequelize-cli init

### migrate
    npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
    
    npx sequelize-cli db:migrate
    
    npx sequelize-cli db:migrate:undo
    
### seed
    npx sequelize-cli seed:generate --name demo-user

    npx sequelize-cli db:seed:all
    
    If you wish to undo the most recent seed:
    npx sequelize-cli db:seed:undo

    If you wish to undo a specific seed:
    npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

    If you wish to undo all seeds:
    npx sequelize-cli db:seed:undo:all