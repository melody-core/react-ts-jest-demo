export const xGet = (url, params = {}) => {
  // 参数拼接
  let queryStr = "";
  for (let i in params) {
    if (params[i]) {
      queryStr += (queryStr ? "&" : "?");
      queryStr += `${i}=${params[i]}`;
    }
  }
  return fetch(url + queryStr).then((res) => res.json());
};



export const xPost = (url, params = {}) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};
