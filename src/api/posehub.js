import axios from 'axios'
export const getPoseList = () =>  axios.get('/hot.json')
export const getPoseCategory = () =>  axios.get('/category.json')
