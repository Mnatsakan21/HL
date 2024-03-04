import './main.style.scss'
import TodayNews from '../todayNews/Todaynews'
import VeryReadable from '../veryreadable/VeryReadable'
import Watch from '../watch/Watch'
import AllNews from '../allnews/AllNews'
import axios from 'axios'
import { useEffect,useState } from 'react'


const Main = () => {
 
  const [dataAllNews,setAllNews] = useState()

  useEffect(()=>{
    (async () => {
      try {
        const {data}= await axios.get('http://localhost:5005/api/v1/news/getAll')
        setAllNews(data.filter((data)=>data.newsContent.file.isImage))
      } catch (error) {
        console.log(error)
      }
    })()
  },[])
  
  return (
    <main className='home_page'>
        <TodayNews/>
        <VeryReadable/>
        <Watch/>
        <AllNews title={"Բոլոր նորությունները"} data={dataAllNews && dataAllNews}/>
    </main>
  )
}

export default Main