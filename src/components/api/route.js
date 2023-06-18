import axios from 'axios'

const URL = 'http://localhost:8000';

export const FindUser = (async(data) => {
    try{
        console.log(data);
        return await axios.post(`${URL}/user/findUser`, data);
    }catch(err){
        console.log(err);
    }
})
