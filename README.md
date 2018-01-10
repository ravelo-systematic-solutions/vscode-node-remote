# About

Prove of concept that we can debug node apps through node containers.

# Server configurations

The server runs under the following ports:

  * `5000`: Server
  * `5001`: Debugger

# Configurations

### `Start server`

In the debug pane, you will find a configuration called `Start Server` which will run the app, and attach the debbuger at the same time

```
$ docker build --tag poc-hapijs .
$ docker run --rm -p 5000:5000 -d --name poc-hapijs-container poc-hapijs
```

### `Attach Debugger (Without Docker)`

This configuration will only attach VS code to the debugger so you will need to run in your terminal `npm start` which is equipped with a node inspector.

### `Attach Debugger (With Docker)`

In order for this configuration to work, you need to make sure that the docker
container is running:

```
$ docker build --tag poc-hapijs .
$ docker run --rm -p 5001:5001 -p 5000:5000 -d --name poc-hapijs-container poc-hapijs
```

Now simply run the `Attach Debugger (With Docker)` configuration and create a breakpoint then go to the [hapi server](http://localhost:5000)

