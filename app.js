// Need a simple way to look at users badge count and Javascript Points

// Solution: User Node.js to connect to Treehouse API to get profile info to print outx
var profile = require("./profile.js");
profile.getProfile("haiderkhan2");

console.log(profile.getName);
