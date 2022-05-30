import { config } from "./constants";
import { setUserInfo } from "./userInfo";
import { addCards } from "./card";

export const initUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then((res) => {
      setUserInfo(res.name, res.about);
    })
    .catch((err) => {
      `Ошибка: ${err}`;
    });
};

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => {
      addCards(res);
    })
    .catch((err) => {
      `Ошибка: ${err}`;
    });
};
