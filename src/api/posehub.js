import axios from 'axios'
import request from "../utils/request.js";
export const getPoseList = () =>  axios.get('/hot.json')
export const getPoseCategory = async () => {
    const res = await request.get('/category/common?category_id=45&openid=ofJJv6A9EdBnYftPSNqNhQJ9Wrds')
    debugger
    return {
        data: res.data.category_list["0"]
    }
}
