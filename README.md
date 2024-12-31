# tour-and-travel-server

User

Tour

Review

```javascript
user {
    name
    email
    age
    photo
    role -> user,
    admin status -> active,
    inactive
}
```

```javascript
tour {
    name
    duration
    rating
    price
    coverImage
    image[]
    startDate
    tourLocation
}
```

```javascript
review {
    review
    rating
    tour -> ref
    user -> ref
}
```

Install

```
npm install --save-dev @types/express
```

```
npm i ts-node-dev --save-dev
```

```
ts-node-dev --respawn --transpile-only server.ts
```

```
npm install dotenv --save
```

Draft

```
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "dev": "node ./node_modules/ts-node-dev/lib/bin.js --respawn --transpile-only src/server.ts",
```

Model -> Interface -> Service -> Controller -> Route