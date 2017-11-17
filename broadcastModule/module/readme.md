## Creating npm module using [following tutorial](https://medium.com/@cyrilletuzi/how-to-build-and-publish-an-angular-module-7ad19c0b4464)
Before you start do the following actions
- Setup local-npm
```cmd
npm install -g local-npm
```
- Then type to start the server
```cmd
local-npm
```
- Then set npm to point to the local server
```cmd
npm set registry http://127.0.0.1:5080
```
- To switch back, you can do
```cmd
npm set registry https://registry.npmjs.org
```

See more about local-npm [here](https://www.npmjs.com/package/local-npm)


- Add your npm user
```cmd
npm adduser --registry=http://127.0.0.1:5080
```
- Then go to npmjs.com and verify your email

- my user vasilyterkin password prizrak-kommunizma
