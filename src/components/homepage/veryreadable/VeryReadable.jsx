import './veryreadable.style.scss'
import VeryReadableNews from './veryreadablenews/VeryReadableNews'
import VeryReadableNewsRight from './veryreadablenewsright/VeryReadableNewsRight'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const data = {
  date:"Հուլ 3,2023",
  title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ",
  about:"Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
  img:"./img/cyclist.png"
}

const dataRight = {
  title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
  about:"Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ",
  img:"/img/Group143726076.png",
  region:"Տարածաշրջան"
}

const VeryReadable = () => {
  const [dataMostWiew,setDataMostWiew] = useState()

  useEffect(()=>{
    (async () => {
      try {
        const {data}= await axios.get('http://localhost:5005/api/v1/news/getMostViewed')
        setDataMostWiew(data)
      } catch (error) {
        console.log(error)
      }
    })()
  },[])

  return (
    <section className='very_readable_container'>
      <div className='very_readables'>
        <h2>Շատ կարդացվող</h2>
          <div className='very_readable_left'>
            {dataMostWiew && dataMostWiew.map((data,key)=>{
              if(key>=2)return
              return <Link key={key} to={"/news/"+data.id}><VeryReadableNews data={data}/></Link>
            })}
          </div>
      </div>
      
      <div className='very_readable_right'>
       {dataMostWiew && <Link to={'/news/'+dataMostWiew[2].id}>
        <VeryReadableNewsRight data = {dataMostWiew[2]}/>
        </Link> 
        }
      </div>
    </section>
  )
}

export default VeryReadable