# semantic-ui-react

dropdown not working on production build


## run with docker

working 

```sh
docker build . -t semantic-ui-works -f Dockerfile.dev && docker run -p 80:80 semantic-ui-works
open http://localhost
```

failing

```sh
docker build . -t semantic-ui-fails -f Dockerfile && docker run -p 80:80 semantic-ui-fails
open http://localhost

```

or run with http-server

```sh
sudo npm install -g http-server
```

build failing production bundle in dist

```sh
npm install
npm run build
http-server dist -p 8080
open http://localhost:8080

```

build development bundle in dist

```sh
npm install
npm run build:dev
http-server dist -p 8080
open http://localhost:8080


```