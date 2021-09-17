import axios from "axios";
const base = "http://localhost:3002";

const queryString = require('query-string');

const request = axios.create({
    baseURL: `${base}`,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },

    paramsSerializer: (params) => queryString.stringify(params)
});

export default request;
