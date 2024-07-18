# 1pt
JavaScript library for 1pt.co
# main
```js
async function main(){
    const {onept} = require('./onept');
    const url= new onept();
    let req=await url.add_url("url","custom")
    console.log(req)
}
main()
```
