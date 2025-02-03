class MainData {
  constructor() {
    this._room = null
  }

  init() {
    this._room = 'city';
  }

  getRoom(){
    return this._room
  }

  setRoom = (room) =>{
    this._room = room
  }
}


export default new MainData()