var test=function(x)
{
var a=x.toLowerCase();
 console.log(`Hello, ${x}!
 Your name lowercased is \"${a}\".`)
}
test(process.argv[2])