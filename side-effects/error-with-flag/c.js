export const c = (function(){  console.log("set c");return (Date.now = function(){ return 999 })() % 999 == 0 ? "C1" : "C2" })()
