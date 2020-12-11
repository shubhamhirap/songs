import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Stars", duration: "3:15" },
    { title: "Panda", duration: "3:50" },
    { title: "Bohemian Rhapsody", duration: "5:54" },
    { title: `Don't Go`, duration: "3:30" },
    { title: "Fallen Stars Flaying", duration: "3:01" },
    { title: "How Many", duration: "2:49" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
