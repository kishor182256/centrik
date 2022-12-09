import axios from 'axios';
export const fetchData = async(category) => {
    const data=  await axios.get(`${process.env.REACT_APP_URL}/${category}`)
    return data;
}