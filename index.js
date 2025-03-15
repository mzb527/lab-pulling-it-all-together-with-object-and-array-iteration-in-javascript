function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
{function gameObject() {
    return {
        home: {
            teamName: "Team A",
            colors: ["Red", "White"],
            players: {
                "Player1": { points: 10, shoeSize: 12, rebounds: 5, jerseyNumber: 1 },
                "Player2": { points: 20, shoeSize: 10, rebounds: 8, jerseyNumber: 2 }
            }
        },
        away: {
            teamName: "Team B",
            colors: ["Blue", "Black"],
            players: {
                "Player3": { points: 15, shoeSize: 11, rebounds: 6, jerseyNumber: 3 },
                "Player4": { points: 25, shoeSize: 13, rebounds: 7, jerseyNumber: 4 }
            }
        }
    };
}

// Retrieve Player Information
function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].points;
        }
    }
    return null; // Player not found
}

function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].shoeSize;
        }
    }
    return null; // Player not found
}

// Retrieve Team Information
function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return null; // Team not found
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// Retrieve Player Numbers and Stats
function playerNumbers(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].teamName === teamName) {
            return Object.values(game[team].players).map(player => player.jerseyNumber);
        }
    }
    return null; // Team not found
}

function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName];
        }
    }
    return null; // Player not found
}

// Example Usage
console.log(numPointsScored("Player1")); // Output: 10
console.log(shoeSize("Player4")); // Output: 13
console.log(teamColors("Team A")); // Output: ["Red", "White"]
console.log(teamNames()); // Output: ["Team A", "Team B"]
console.log(playerNumbers("Team B")); // Output: [3, 4]
console.log(playerStats("Player3")); // Output: { points: 15, shoeSize: 11, rebounds: 6, jerseyNumber: 3 }
}