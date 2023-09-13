# ilovecoffee

code for [NestJS Fundamentals Course](https://courses.nestjs.com/)

current progress:

`32 Setting up Migrations`

## create

```bash
yarn global add @nestjs/cli
nest new ilovecoffee -p yarn
```

## flat

run

```
nest g class coffees/dto/update-coffee.dto --flat --no-spec
```

with `--flat` to avoid folder creation of `update-coffee.dto`

## docker

```
docker-compose up -d
```

If `ports not available`:

```
Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:5432 -> 0.0.0.0:0: listen tcp 0.0.0.0:5432: bind: An attempt was made to access a socket in a way forbidden by its access permissions.
```

try: run `net stop winnat` by `Administrator`.

## pgAdmin 4

### PSQL Tool

#### show tables

```psql
\dt
```

example output:

```psql
postgres=# \dt
                 List of relations
 Schema |         Name          | Type  |  Owner
--------+-----------------------+-------+----------
 public | coffee                | table | postgres
 public | coffee_flavors_flavor | table | postgres
 public | flavor                | table | postgres
 public | migration             | table | postgres
(4 rows)
```

#### desc table

```psql
\d+ coffee
\d+ migration
```

### Query Tool

```sql
select * from coffee;
select * from migration;
```

## migration

add 

```json
"typeorm": "ts-node ./node_modules/typeorm/cli"
```

to `package.json`'s `scripts`.

### create

```bash
yarn run typeorm migration:create src/migrations/CoffeeRefactor
```

run `yarn run build` to generate `dist`

### migrate

```bash
yarn run typeorm migration:run -d ./ormconfig.ts
```

will add a record to table `migration`

### revert

```bash
yarn run typeorm migration:revert -d ./ormconfig.ts
```

will clear table `migration`

### generate

```bash
yarn run typeorm migration:generate src/migrations/SchemaSync -d ./ormconfig.ts
# because I set `migrations: ['dist/src/migrations/*.js'],` in `ormconfig.ts`
# must build before migrate
yarn run build
yarn run typeorm migration:run -d ./ormconfig.ts
```



