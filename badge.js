

var id;
var name;
var url;
var iconUrl;
var earnedDate;
var courses

function Badge() {
}

// Get the id
Object.defineProperty(Badge.prototype, 'getId', {
    get: function() { return id; }
});

// Set the id
Object.defineProperty(Badge.prototype, 'setId', {
    set: function(id) { this.id = id; }
});

// Get the Badge name
Object.defineProperty(Badge.prototype, 'getName', {
    get: function() { return name; } 
});

// Set the Badge name
Object.defineProperty(Badge.prototype, 'setName', {
    set: function(name) { this.name = name; }
});

// Get the url
Object.defineProperty(Badge.prototype, 'getUrl', {
    get: function() { return url; }
});

// Set the url
Object.defineProperty(Badge.prototype, 'setUrl', {
    set: function(url) { this.url = url; }
});

// Get the icon url
Object.defineProperty(Badge.prototype, 'getIconUrl', {
    get: function() { return iconUrl; } 
});

// Set the icon url
Object.defineProperty(Badge.prototype, 'setIconUrl', {
    set: function(iconUrl) { this.iconUrl = iconUrl; }
});

// Get the earned data
Object.defineProperty(Badge.prototype, 'getEarnedDate', {
    get: function() { return earnedDate; }
});

// Set the earned date
Object.defineProperty(Badge.prototype, 'setEarnedDate', {
    set: function(earnedDate) { this.earnedDate = earnedDate; }
});

// Get the courses
Object.defineProperty(Badge.prototype, 'getCourses', {
    get: function() { return courses; }
});

// set the courses
Object.defineProperty(Badge.prototype, 'setCourses', {
    set: function(courses) { this.courses = courses; }
});
