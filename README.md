# Node.js (use knex connect mysql)

## Installation
```sh 
$ git clone ...
$ npm install
```

## Use Knex (migration)
```sh
$ cd src
$ knex migrate:make ${filename}
```

## Use Knex (seed)
```sh
$ cd src
$ knex seed:make ${filename}
$ knex seed:run
```

### Change
- username, password, dataname 
