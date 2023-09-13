# ilovecoffee


## flat

run

```
nest g class coffees/dto/update-coffee.dto --flat --no-spec
```

to avoid folder creation of `update-coffee`

## docker

```
docker-compose up -d
```

If `ports not available`:

```
Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:5432 -> 0.0.0.0:0: listen tcp 0.0.0.0:5432: bind: An attempt was made to access a socket in a way forbidden by its access permissions.
```

try: run `net stop winnat` by `Administrator`.