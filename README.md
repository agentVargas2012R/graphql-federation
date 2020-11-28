## Description

This sample app showcases federation and apollo gateway using the NestJS Framework. It decouples monolith graphs into seperated microservice graphs across various endpoints while utilizing a main entry point. The gateway also acts as an orchestration layer for authentication providers and for microservices.

## Naming Conventions
 
 The easiest way to decipher project layout is to look at the extension names of the files.  Each component follows a pod-style layout where the functional areas belong to a folder structure.

 .module - declare a high-level functional component

.resolver - indicates a graphql resolver

.service - indicates a service that interacts with graphql types.

.type - indicates a graphql object type

.entity - indicates a **typeorm** object, not to be confused with a graphql type.

## Responsibilities

This gateway and federation api serves two responsibilties. 

* Expose all microservices into a single graph

* Pass a valid JWT token to microservices which require authentication.

## Architecture

See graphl-api draw.io diagram in this project. The gateway injects authorization tokens into outgoing requests if they exist. Receiving microservice can use this information to determine if a token is valid and has appropriate permissions tied to it in order to carry out a given request. This decouples the gateway architecture as being a lightweight pass-through medium.


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Frameworks

The following frameworks are components of this demo project.

[TypeOrm](https://github.com/typeorm/typeorm/blob/master/docs/select-query-builder.md) framework is used as a relational db mapping tool to interface with databases> is a specification used to interact with apis in a flexible and powerful way.

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

[Postgres](https://www.postgresql.org/) database implementation for this project. Can be swapped out for another db. See **typeorm.config.ts**

## License

 N/A
