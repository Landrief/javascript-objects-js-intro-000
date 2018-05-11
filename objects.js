var playlist = {"Michael Jackson": "Dance"}

function updatePlaylist(playlist, artistName, songTitle) {

  return Object.assign({}, playlist, { [artistName]: songTitle })
}