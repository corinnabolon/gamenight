import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";

class PlayersService {

  addPlayer(playerData) {
    const newPlayer = new Player(playerData.name)

    console.log("Here is your fancy class model", newPlayer)

    AppState.players.push(newPlayer)
  }


  scorePoint(playerName) {
    const foundPlayer = AppState.players.find(player => player.name == playerName)
    foundPlayer.score++
    console.log(foundPlayer)
  }

}



// NOTE we create a single instance of our service class, and export that to other modules. 
export const playersService = new PlayersService()