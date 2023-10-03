import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { playersService } from "../services/PlayersService.js";
import { getFormData } from "../utils/FormHandler.js";



function _drawPlayers() {
  const players = AppState.players
  let content = ``
  players.forEach(player => content += player.PlayerTemplateCard)
  setHTML("players", content)
}

export class PlayersController {

  constructor() {
    console.log("Players controller is loaded.")
    console.log("Looking at players in the AppState", AppState.players);
    _drawPlayers()
  }


  scorePoint(playerName) {
    console.log(`${playerName} Clicked`)
    playersService.scorePoint(playerName)
    _drawPlayers()
  }

  addPlayer(event) {
    event.preventDefault()
    console.log("Form submitted", event)
    const form = event.target
    const playerData = getFormData(form)
    console.log(playerData)
    playersService.addPlayer(playerData)
    _drawPlayers()

  }

}