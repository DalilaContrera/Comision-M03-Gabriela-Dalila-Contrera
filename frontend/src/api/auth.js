//pedidos al servidor

import axios from "axios";

const API = "http://localhost:3000"

export const registerReq = (user) => axios.post(`${API}/.register`, user);
