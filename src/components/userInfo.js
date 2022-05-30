import { profileTitle, profileSubtitle, profileAvatar } from "./modal";
export function setUserInfo(name, about) {
  profileTitle.textContent = name;
  profileSubtitle.textContent = about;
}
export function setAvatar(link) {
  profileAvatar.src = link;
}
