import axios from "axios";
import API_URL from 'constants/apiBaseUrl';

export const postDiary = async()=> {
    try{
      const resp = await axios.post(`${API_URL}/diary`,
      {
        "date":date,
        "description":description
      });
      console.log(resp.data);
      resp.errorBody().string()
    } catch(err) {
      console.log(err)
    }
}