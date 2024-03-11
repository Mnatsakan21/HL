import axios from "axios"


export function request(data){
    axios.interceptors.request.use(config => {
        console.log(config)
        config.headers.Authorization = `Bearer ${data.accessToken}`
         return config
       })
} 


export function response (){
  
    axios.interceptors.response.use( 
        response => response,
            async error => {    
                const config = error?.config 
                if (error?.response?.status == 401) { 
                    
                    const {data} = await axios.get('http://164.92.254.73/service/api/v1/admin/refresh',{withCredentials:true
                })
                      console.log(data)
                    config.headers.Authorization = `Bearer ${data.accessToken}`
                    return axios(config)
                } 
                return Promise.reject(error)
                
        })
} 
