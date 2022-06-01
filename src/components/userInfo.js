import { profileTitle, profileSubtitle, profileAvatar } from "./modal";
export let myProfile = {};

export function setUserInfo(name, about) {
  profileTitle.textContent = name;
  profileSubtitle.textContent = about;
}
export function setAvatar(link) {
  profileAvatar.src = link;
}
export function setMyID(identificator) {
  myProfile = identificator;
}
