# edu-graphql

## prepare

- git clone this repository
- npm install

```
$ npm install
```

- run node

```
$ node index.js
or
$ npm start
```

- start in graphiql (graphql sandbox)

[http://localhost:4000/graphql](http://localhost:4000/graphql)

## samples

### 001-greeting

- set root types : Query, Mutation
- learn how to make graphql types and resolvers
- learn how to describe types for documentation

### 002-person-query

- extend field types for Query operation : person, people
- learn how to add parameters for field types : people(from, to)

### 003-person-mutation

- extend field types for Mutation operation : createPerson, updatePerson
- learn how to define input types
- learn how to set parameters for mutations

### 004-profile-field-query

- extend field types : add avatar field to Person type
- learn how to extend field types

### 005-friends-field-query-recursive

- extend field types : add friends field to Person type
- learn how to extend object array type field

### 006-directive

- directives provide a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
  - cache
  - authorization
  - masking
  - string conversion
  - localization
  - limitation
  - ...
- aspect oriented
- @cacheControl
  - automatically set the Cache-Control HTTP response header to an appropriate value describing the maxAge and scope, such as Cache-Control: max-age=60, private
- @upper
- @i18n

### 007-subscription
