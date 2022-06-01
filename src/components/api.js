import { config } from "./constants";
import { setUserInfo, setAvatar, setMyID } from "./userInfo";
import { addCards } from "./card";
import { profileSubmitBtn, cardSubmitBtn, avatarSubmitBtn } from "./modal";
import { addCard, renderLoading } from "./utils";

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
      setAvatar(res.avatar);
      setMyID(res);
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

export const saveProfileInfo = (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      about: `${about}`,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
    })
    .catch((err) => {
      `Ошибка: ${err}`;
    })
    .finally(() => {
      renderLoading(profileSubmitBtn, "Сохранить", false);
    });
};

export const postCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      link: `${link}`,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
    })
    .then((res) => {
      addCard(res);
    })
    .catch((err) => {
      `Ошибка: ${err}`;
    })
    .finally(() => {
      renderLoading(cardSubmitBtn, "Создать", false);
    });
};

export const saveAvatar = (link) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: `${link}`,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
    })
    .catch((err) => {
      `Ошибка: ${err}`;
    })
    .finally(() => {
      renderLoading(avatarSubmitBtn, "Сохранить", false);
    });
};

export const deleteCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
    })
    .catch((err) => {
      `Ошибка: ${err}`;
    });
};
