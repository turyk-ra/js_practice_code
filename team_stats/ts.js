// Let’s make a data structure to store the information about our team. Declare a const variable called team and set it to an empty object.
const team = {
    //Our team has players and the games that they have played. Let’s represent both of these by adding two properties to your team object. Add a _players property and a _games property and initialize both to empty arrays.
    _players: [
        //Next, populate the empty_players array with three players. Each player should be an object containing three properties: firstName, lastName, and age. Put each player on a new line to prevent the line from getting too long.
        {
            firstName: 'Mike',
            lastName: 'Tyson',
            age: 57
        },
        {
            firstName: 'Gabriel',
            lastName: 'Martinelli',
            age: 22
        },
        {
            firstName: 'Ronnie',
            lastName: 'O\'sullivan',
            age: 47
        }
    ],
    _games: [
        //Let’s do the same for our _games array. Populate the empty array with three games. Each game should be an object containing three properties: opponent, , .teamPointsopponentPoints
        {
            opponent: 'Team A',
            teamPoints: 6,
            opponentPoints: 10
        },
        {
            opponent: 'Team B',
            teamPoints: 3,
            opponentPoints: 1
        }, {
            opponent: 'Team C',
            teamPoints: 10,
            opponentPoints: 7
        }
    ],
    //Create a getter method called players to retrieve the _players property. Inside the getter method, return the _players property. For the scope of this project, we won’t need to create setter methods, because we don’t want anyone to change the data saved to the properties.
    get players() {
        if (this._players) {
            return this._players;
        }
    },
    //Create another getter method called games to retrieve the _games property. Inside the getter method, return the _games property.
    get games() {
        if (this._games) {
            return this._games;
        }
    },
    //We want to add a new player to our team. Add a .addPlayer() method to the team object. This method should take in three parameters: newFirstName, newLastName, and newAge.
    //Inside the method, create a player object by setting the three parameters to be the values for the object’s three properties: firstName, lastName, age. Finally, add the player object to the team‘s _players array.
    addPlayer(newFirstName, newLastName, newAge) {
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        }
        this._players.push(player);
    },
    //The scorekeeper has some new information for us! Create a method for adding game results called addGame that takes three parameters: newOpponent, newTeamPoints, newOpponentPoints.
    //Inside the .addGame() method, create a game object by setting the three parameters to be the values for the object’s three properties: opponent, teamPoints, opponentPoints. Add the game object to the team‘s _games array.
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        }
        this._games.push(game);
    }
}

//Below the team object, let’s try out our new .addPlayer() method to add a new player: Bugs Bunny, age 76.Log the team‘s _players property to check that our new player was added.
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);
//Finally, below our team object, use the .addGame() method to add a record of a new game. Our team played against the 'Titans' where we scored 100 points and the opponent scored 98 points.
//Log the team‘s _games property to check that our new game record was properly added.
team.addGame('Titans', 100, 98);
console.log(team._games);
