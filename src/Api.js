const apiForm = 'http://5ca4282b8bae720014a96380.mockapi.io/api/informations';
const headers = {
  "Content-Type": "application/json",
}

export const GetApi = () => {
    return fetch(apiForm)
      .then(response => response.json())
      .then(data => data);
}

export const submitFormApi = (value) => {
  return fetch(apiForm, {
    method: 'post',
    headers: headers,
    body: JSON.stringify(value)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    return data;
  });
}