import { Game } from "../protocols/game-protocol";
import  {connection}  from "database/database.ts";

const games: Game[] = [];

function getGames() {
  return games;
}

function  createGame(game: Game) {
   connection.query(`INSERT INTO games (game) VALUES ($1)`, [game])
}

function getGameByTitleAndPlatform(game: Game) {
  return games.find(({ title, platform }) => {
    return game.title === title && game.platform === platform;
  })
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;