import { profileTitle, profileSubtitle } from "./modal";
export function setUserInfo(name, about) {
  profileTitle.textContent = name;
  profileSubtitle.textContent = about;
}
