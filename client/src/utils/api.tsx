import axios from "axios";
import apiRoutes from "./apiRoutes";

const api = {
  getAzImmersiveReaderCredentials: function () {
    return axios.get(apiRoutes.azImmersiveReaderCreds);
  },
};

export default api;
