function private() {
 console.log("Invoked but not exported");
}

//invoke the function above in the exports object but not exporting the function below

module.exports = {
 expfunc: function() {
   private();
 }
};

// function test() {
//   foo();
//}
//module.exports = { test };