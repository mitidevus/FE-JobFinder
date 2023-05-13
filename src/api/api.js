import axios from "axios";
import { api } from "../constants";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

//Export default thì ko nên đôi khi import thì mình ko biết là đang import cái nào
// VD: import axios from '../api/api';
// export default axios.create({
//     baseURL: api.prod,
// });

//Export const thì sẽ lấy đúng cái tên khi import ở các component khác
// VD: import { axiosPrivate } from '../api/api';

export const axiosPrivate = axios.create({
    baseURL: api.prod,
    headers: { "Content-Type": "application/json"},
});
