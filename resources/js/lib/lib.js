import store from "../store";

let getConfig = () => {
  return {
    headers: {
      Authorization: store.state.token ? 'Bearer ' + store.state.token : '',
      'Content-Type': 'application/json'
    }
  }
}

export default {
  getConfig
}
