export const a = (function(){ console.log("set a");return Date.now() % 999 == 0 ? "A1" : "A2" })()
