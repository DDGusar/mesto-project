import { profileTitle, profileSubtitle, profileAvatar } from "./modal";
// const myID = "";

export function setUserInfo(name, about) {
  profileTitle.textContent = name;
  profileSubtitle.textContent = about;
}
export function setAvatar(link) {
  profileAvatar.src = link;
}
export function setMyID(identificator) {
  console.log(identificator);
  const myID = identificator;
  return myID;
  // console.log(myID);
}
