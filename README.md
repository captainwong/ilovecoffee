# ilovecoffee

code for [NestJS Fundamentals Course](https://courses.nestjs.com/)

current progress:

`32 Setting up Migrations`

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

### migrate

```bash
yarn run typeorm migration:run -d ./ormconfig.ts
```





