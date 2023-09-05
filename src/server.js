import "@babel/polyfill";
import app from './app';

async function main(){
    console.log("call server.js");
    await app.listen(9854);
    console.log("server run on 9854");
}
main();