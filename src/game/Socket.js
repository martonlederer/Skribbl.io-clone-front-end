export default class Socket {

  io = null
  Game = {

    code: '',
    status: '',
    players: {},
    playerData: {},
    currentDrawerID: '',
    rounds: 0,
    timeout: 0

  }

}
