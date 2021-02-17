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

- start in graphql sandbox : graphiql http://localhost:4000/graphql

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
- aspect oriented programming, intercepter
- usages
  - cache
  - authorization
  - masking
  - string conversion
  - localization
  - limitation
  - ...
- @cacheControl(maxAge: 60, scope="PRIVATE")
  - automatically set the Cache-Control HTTP response header to an appropriate value describing the maxAge and scope, such as Cache-Control: max-age=60, private
- @deprecated(reason: "Field is replace author")
- @defer, @stream
  - https://foundation.graphql.org/news/2020/12/08/improving-latency-with-defer-and-stream-directives/
  - The @defer directive can be applied to fragment spreads and inline fragments. It is a declarative way for developers to mark parts of a query as non-essential for immediate return.
  - The @stream directive also allows the client to receive data before the entire result is ready. @stream can be used on list fields.
- @skip, @include

```
query book($yes:Boolean!,$no:Boolean!){
  books{
    title @skip(if:$no)
    author @include(if:$yes)
  }
}

# varialbe
{"yes":true,"no":false}
```

- learn how to define & implement directive
  - @l20n

### 007-subscription

- learn how to implement publish/subscribe
