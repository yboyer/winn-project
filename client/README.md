http://stackoverflow.com/a/34411589

Gulp-uglify has yet no official support for ECMAScript 2015 (aka ES6, aka Harmony) but with a little modification the on-development repository can be used.

Open Console and enter
```bash
cd node_modules/gulp-uglify
```

Edit package.json
```json
dependencies": {
   "uglify-js": "git+https://github.com/mishoo/UglifyJS2.git#harmony"
},
```

Console enter:
`npm update`

And it is ready to run `.pipe(uglify())` again

---
