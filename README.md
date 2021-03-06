# ES6 Modules Demo
A really basic example of using ES6 Javascript modules. 

* [Youtube demonstration video](https://www.youtube.com/watch?v=q5GBqxNiPgM)

## Deploying
Unfortunately, if you try to run this by just opening index.html in your browser, it will error out 
with a CORS error, so we need to run a webserver, which we can easily do in one of two ways.

### Run With PHP Webserver
If you have PHP Installed locall, you can just run

```bash
cd src/
php -S localhost:8080
```

### Run With Docker
Alternatively, if you have installed Docker, I have included a docker-compose file so you can just 
run:

```bash
docker-compose up
```
