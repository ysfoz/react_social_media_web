import axios from 'axios'

const {REACT_APP_API_TOKEN,REACT_APP_API_BASE_URL} = process.env;

export const fetchData = async () =>{
    const response = await axios.get(`${REACT_APP_API_BASE_URL}/user`,{
      headers:{
          'app-id':REACT_APP_API_TOKEN,
      }
  })
   return (response?.data?.data)
  }