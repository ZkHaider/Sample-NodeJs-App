// Need a simple way to look at users badge count and Javascript Points

// Solution: User Node.js to connect to Treehouse API to get profile info to print outx
var profile = require("./profile.js");
var users = process.argv.slice(2); // Slice at 2 index
users.forEach(profile.getProfile);


