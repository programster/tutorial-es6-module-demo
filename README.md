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

## TypeScript
Initially when I created this, it was purely focussed on using ES6 Modules in pure Javascript, but one can one
can make use of Typescript too.

The files include `Cat.ts` which is similar to `Dog.js`, but in Typescript format. One can then compile that to `Cat.js` with the following command:

```bash
tsc --module ES6 Cat.ts
```

Also, the code demonstrates the ability to use multiple classes in one file with the use of `Animals.ts` which includes both Cat and Dog classes. One can compile that in the same way as follows:

```bash
tsc --module ES6 Cat.ts
```

Then one can either load Cat and Dog class files directly with:


```javascript
import Dog from './Dog.js'
import Cat from './Cat.js'
```

... or from the single `Animals.js` file like so:


```javascript
import {Cat, Dog} from './Animals.js'
```
