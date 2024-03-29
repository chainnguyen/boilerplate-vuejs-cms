# Boilerplate VueJS CMS

## Technologies
Project is created with:
* Node version: >= 16
* VueJS version: 2.6.14
* Ant design Vue version: 1.6.2
* Lodash es version: 4.17.15
* Moment version: 2.28.0

## Setup
```
yarn | npm install
```

## Create a global <code>.env.{development|staging|production}</code> file from .env.example
<code>.env.development</code>
```
BASE_URL=./
VUE_APP_API_URL=https://localhost:8080/dev
```

<code>.env.staging</code>
```
BASE_URL=./
VUE_APP_API_URL=https://localhost:8080/stag
```

<code>.env.production</code>
```
BASE_URL=./
VUE_APP_API_URL=https://localhost:8080/prod
```

### Compiles and hot-reloads for development
```
yarn serve | npm run serve
```

### Compiles and build each of environments
```
yarn build:development | npm run build:development
yarn build:staging | npm run build:staging
yarn build:production | npm run build:production
```

### Lints and fixes files
```
yarn lint | npm run lint
```

## Changelog

See more [CHANGELOG.md](CHANGELOG.md).

### Show your support
Give a ⭐ if you like this website!

## License
Copyright by [Chain Nguyễn](https://chainnguyen.github.io/chain-curriculum-vitae/).
