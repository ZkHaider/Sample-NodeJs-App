


'use-strict';
var http = require('http');
var JSON = require('JSON');

// Profile class for TeamTreehouse


// Variables for the Profile 
var profile;
var name;
var profileName;
var profileUrl;
var gravatarUrl;
var gravatarHash;
var badges;
var points;

function printMessage(userName, badgeCount, points) {
    var msg = userName + " has " + badgeCount + " total badges and " + points + " points";
    console.log(msg);
}

// Print out error messages 
function printError(error) {
   console.error(error.message);
}

// We will need to connect to API url http://teamtreehouse.com/user.json
function getProfile(username) {

    var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {

        console.log("STATUS: " + response.statusCode);
        response.setEncoding('utf8');

        var body = "";

        response.on('data', function(jsonBody) {
            body += jsonBody;
        });

        response.on('end', function() {

            if (response.statusCode == 200) {

                try {
                    profile = JSON.parse(body);
                    name = profile.name;
                    profileName = profile.profile_name;
                    profileUrl = profile.profile_url;
                    gravatarUrl = profile.gravatar_url;
                    gravatarHash = profile.gravatar_hash;
                    badges = profile.badges;
                    points = profile.points;
                    
                    for (i = 0; i < badges.length; i++) {
                        console.log(badges[i].name);   
                    }
                    
                } catch (error) {
                    // Parse Error
                    printError(error);
                }

                setProfile();
                return profile;

            } else {
                printError({ message: "There was an error, status code error is " 
                            + http.STATUS_CODES[response.statusCode]});  
            }
        });
    });

    // Connection Error
    request.on('error', printError);
    
}


function setProfile() {
    name = profile.name;
    profileUrl = profile.profile_name;
    profileUrl = profile.profile_url;
    gravatarUrl = profile.gravatar_url;
    gravatarHash = profile.gravatar_hash;
    badges = profile.badges;
    points = profile.points;
}

function getName() {
    if (name != null) {
        return name;   
    } else {
        console.log("null");
    }
}

function getProfileName() {
    if (profileName != null) {
        return profileName;   
    } else {
        console.log("null");
    }   
}

function getProfileUrl() {
    if (profileUrl != null) {
        return profileUrl;   
    } else {
        console.log("null");
    }  
}

function getGravatarUrl() {
    if (gravatarUrl != null) {
        return gravatarUrl;   
    } else {
        console.log("null");
    }
}

function getGravatarHash() {
    if (gravatarHash != null) {
        return gravatarHash;   
    } else {
        console.log("null");
    }
}

function getBadges() {
    if (badges != null) {
        badges = new Array(profile.badges.length);
        for (i = 0; i < badges.length; i++) {
            badges[i] = new Badge();
            badges[i].setId(profile.badges[i].id);
            badges[i].setName(profile.badges[i].name);
            badges[i].setUrl(profile.badges[i].url);
            badges[i].setIconUrl(profile.badges[i].icon_url);
            badges[i].setEarnedDate(profile.badges[i].earned_date);
            badges[i].setCourses(profile.badges[i].courses);
        }
        return badges;
    } else {
        console.log("null");
    }
}

module.exports.getProfile = getProfile;
