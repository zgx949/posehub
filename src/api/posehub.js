import axios from 'axios'
import request from "../utils/request.js";
export const getPoseList = async (categoryId)  => {
    const res = await request.get(`/category/common?category_id=${categoryId}&openid=ofJJv6A9EdBnYftPSNqNhQJ9Wrds`)
    return {
        data: res.action_list
    }
}
export const getPoseCategory = async () => {
    const res = await request.get('/category/common?category_id=45&openid=ofJJv6A9EdBnYftPSNqNhQJ9Wrds')
    return {
        data: res.category_list["0"]
    }
}
