export function checkServerConnection() {
  return fetch("https://nomoreparties.co/v1/plus-cohort-10/cards", {
    headers: {
      authorization: "78934802-087a-46b7-9dd2-2151d51fe105",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    });
}
