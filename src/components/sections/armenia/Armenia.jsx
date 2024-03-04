import "./armenia.style.scss"
import AllNews from "../../homepage/allnews/AllNews"
import Article from "../article/article"
import { useState,useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const dataInternationalNews = [
  {
    id: 1,
    title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
    description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
    img: "./img/Rectangle108.png",
    views: 2,
    countryId: 1,
    categoryId: 1,
    newsContentId: 2,
    createdAt: "2024-02-20T08:06:53.331Z",
    updatedAt: "2024-02-20T10:09:41.666Z",
    newsContent: {
      id: 2,
      title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
      description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
      author: "Valod",
      fileId: 6,
      createdAt: "2024-02-20T08:06:53.312Z",
      updatedAt: "2024-02-20T08:06:53.312Z"
    },
    country: {
      id: 1,
      title: "armenia",
      createdAt: "2024-02-20T08:01:26.424Z",
      updatedAt: "2024-02-20T08:01:26.424Z"
    },
    category: {
      id: 1,
      title: "politics",
      createdAt: "2024-02-20T08:02:33.263Z",
      updatedAt: "2024-02-20T08:02:33.263Z"
    }
  },
  {
    id: 2,
    title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
    description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
    img: "./img/Rectangle108.png",
    views: 2,
    countryId: 1,
    categoryId: 1,
    newsContentId: 2,
    createdAt: "2024-02-20T08:06:53.331Z",
    updatedAt: "2024-02-20T10:09:41.666Z",
    newsContent: {
      id: 2,
      title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
      description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
      author: "Valod",
      fileId: 6,
      createdAt: "2024-02-20T08:06:53.312Z",
      updatedAt: "2024-02-20T08:06:53.312Z"
    },
    country: {
      id: 1,
      title: "armenia",
      createdAt: "2024-02-20T08:01:26.424Z",
      updatedAt: "2024-02-20T08:01:26.424Z"
    },
    category: {
      id: 1,
      title: "politics",
      createdAt: "2024-02-20T08:02:33.263Z",
      updatedAt: "2024-02-20T08:02:33.263Z"
    }
  },
  {
    id: 3,
    title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
    description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
    img: "./img/Rectangle108.png",
    views: 2,
    countryId: 1,
    categoryId: 1,
    newsContentId: 2,
    createdAt: "2024-02-20T08:06:53.331Z",
    updatedAt: "2024-02-20T10:09:41.666Z",
    newsContent: {
      id: 2,
      title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
      description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
      author: "Valod",
      fileId: 6,
      createdAt: "2024-02-20T08:06:53.312Z",
      updatedAt: "2024-02-20T08:06:53.312Z"
    },
    country: {
      id: 1,
      title: "armenia",
      createdAt: "2024-02-20T08:01:26.424Z",
      updatedAt: "2024-02-20T08:01:26.424Z"
    },
    category: {
      id: 1,
      title: "politics",
      createdAt: "2024-02-20T08:02:33.263Z",
      updatedAt: "2024-02-20T08:02:33.263Z"
    }
  },
  {
    id: 4,
    title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
    description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
    img: "./img/Rectangle108.png",
    views: 2,
    countryId: 1,
    categoryId: 1,
    newsContentId: 2,
    createdAt: "2024-02-20T08:06:53.331Z",
    updatedAt: "2024-02-20T10:09:41.666Z",
    newsContent: {
      id: 2,
      title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
      description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
      author: "Valod",
      fileId: 6,
      createdAt: "2024-02-20T08:06:53.312Z",
      updatedAt: "2024-02-20T08:06:53.312Z"
    },
    country: {
      id: 1,
      title: "armenia",
      createdAt: "2024-02-20T08:01:26.424Z",
      updatedAt: "2024-02-20T08:01:26.424Z"
    },
    category: {
      id: 1,
      title: "politics",
      createdAt: "2024-02-20T08:02:33.263Z",
      updatedAt: "2024-02-20T08:02:33.263Z"
    }
  },
  {
    id: 5,
    title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
    description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
    img: "./img/Rectangle108.png",
    views: 2,
    countryId: 1,
    categoryId: 1,
    newsContentId: 2,
    createdAt: "2024-02-20T08:06:53.331Z",
    updatedAt: "2024-02-20T10:09:41.666Z",
    newsContent: {
      id: 2,
      title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
      description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
      author: "Valod",
      fileId: 6,
      createdAt: "2024-02-20T08:06:53.312Z",
      updatedAt: "2024-02-20T08:06:53.312Z"
    },
    country: {
      id: 1,
      title: "armenia",
      createdAt: "2024-02-20T08:01:26.424Z",
      updatedAt: "2024-02-20T08:01:26.424Z"
    },
    category: {
      id: 1,
      title: "politics",
      createdAt: "2024-02-20T08:02:33.263Z",
      updatedAt: "2024-02-20T08:02:33.263Z"
    }
  },
  {
    id:6,
    title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
    description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
    img: "./img/Rectangle108.png",
    views: 2,
    countryId: 1,
    categoryId: 1,
    newsContentId: 2,
    createdAt: "2024-02-20T08:06:53.331Z",
    updatedAt: "2024-02-20T10:09:41.666Z",
    newsContent: {
      id: 2,
      title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
      description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
      author: "Valod",
      fileId: 6,
      createdAt: "2024-02-20T08:06:53.312Z",
      updatedAt: "2024-02-20T08:06:53.312Z"
    },
    country: {
      id: 1,
      title: "armenia",
      createdAt: "2024-02-20T08:01:26.424Z",
      updatedAt: "2024-02-20T08:01:26.424Z"
    },
    category: {
      id: 1,
      title: "politics",
      createdAt: "2024-02-20T08:02:33.263Z",
      updatedAt: "2024-02-20T08:02:33.263Z"
    }
  },
  {
    id: 7,
    title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
    description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
    img: "./img/Rectangle108.png",
    views: 2,
    countryId: 1,
    categoryId: 1,
    newsContentId: 2,
    createdAt: "2024-02-20T08:06:53.331Z",
    updatedAt: "2024-02-20T10:09:41.666Z",
    newsContent: {
      id: 2,
      title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
      description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
      author: "Valod",
      fileId: 6,
      createdAt: "2024-02-20T08:06:53.312Z",
      updatedAt: "2024-02-20T08:06:53.312Z"
    },
    country: {
      id: 1,
      title: "armenia",
      createdAt: "2024-02-20T08:01:26.424Z",
      updatedAt: "2024-02-20T08:01:26.424Z"
    },
    category: {
      id: 1,
      title: "politics",
      createdAt: "2024-02-20T08:02:33.263Z",
      updatedAt: "2024-02-20T08:02:33.263Z"
    }
  },
  {
    id: 8,
    title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
    description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
    img: "./img/Rectangle108.png",
    views: 2,
    countryId: 1,
    categoryId: 1,
    newsContentId: 2,
    createdAt: "2024-02-20T08:06:53.331Z",
    updatedAt: "2024-02-20T10:09:41.666Z",
    newsContent: {
      id: 2,
      title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
      description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
      author: "Valod",
      fileId: 6,
      createdAt: "2024-02-20T08:06:53.312Z",
      updatedAt: "2024-02-20T08:06:53.312Z"
    },
    country: {
      id: 1,
      title: "armenia",
      createdAt: "2024-02-20T08:01:26.424Z",
      updatedAt: "2024-02-20T08:01:26.424Z"
    },
    category: {
      id: 1,
      title: "politics",
      createdAt: "2024-02-20T08:02:33.263Z",
      updatedAt: "2024-02-20T08:02:33.263Z"
    }
  },
  {
    id: 9,
    title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
    description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
    img: "./img/Rectangle108.png",
    views: 2,
    countryId: 1,
    categoryId: 1,
    newsContentId: 2,
    createdAt: "2024-02-20T08:06:53.331Z",
    updatedAt: "2024-02-20T10:09:41.666Z",
    newsContent: {
      id: 2,
      title: "Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
      description: "Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,   դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի. ",
      author: "Valod",
      fileId: 6,
      createdAt: "2024-02-20T08:06:53.312Z",
      updatedAt: "2024-02-20T08:06:53.312Z"
    },
    country: {
      id: 1,
      title: "armenia",
      createdAt: "2024-02-20T08:01:26.424Z",
      updatedAt: "2024-02-20T08:01:26.424Z"
    },
    category: {
      id: 1,
      title: "politics",
      createdAt: "2024-02-20T08:02:33.263Z",
      updatedAt: "2024-02-20T08:02:33.263Z"
    }
  },
]
const Armenia = () => {
    const [data,setData] = useState()
    const [dataMilitary,setDataMilitary] = useState()
    const [dataPolitics,setDataPolitics] = useState()
    const [dataLegal,setDataLegal] = useState()
    const [dataSociety,setDataSociety] = useState()
    
    
    useEffect(()=>{
      (async () => {
        try {
          const {data}= await axios.get('http://localhost:5005/api/v1/news/filter?countryId=1') 
          const politics = await axios.get('http://localhost:5005/api/v1/news/filter?countryId=1&categoryId=1') 
          const legal = await axios.get('http://localhost:5005/api/v1/news/filter?countryId=1&categoryId=2') 
          const military = await axios.get('http://localhost:5005/api/v1/news/filter?countryId=1&categoryId=3') 
          const society = await axios.get('http://localhost:5005/api/v1/news/filter?countryId=1&categoryId=4') 
          setData(data.filter((data)=>data.newsContent.file.isImage))
          setDataPolitics(politics.data.filter((data)=>data.newsContent.file.isImage))
          setDataMilitary(military.data.filter((data)=>data.newsContent.file.isImage))
          setDataLegal(legal.data.filter((data)=>data.newsContent.file.isImage))
          setDataSociety(society.data.filter((data)=>data.newsContent.file.isImage))
        } catch (error) {
          console.log(error)
        }
      })()
    },[])


    const handleTop = (id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
        <main className="region_page">
        <div className="region_title_container">
            <h2>Հայաստան</h2>
            <hr/>
            <ul>
              <li><Link onClick={()=>handleTop("politics")}  to={{ pathname: '/armenia',hash: '#politics' }}>Քաղաքական</Link></li>
              <li><Link onClick={()=>handleTop('legal')} to={{ pathname: '/armenia', hash:'#legal' }}>Իրավական</Link></li>
              <li><Link onClick={()=>handleTop('military')} to={{ pathname: '/armenia',hash: '#military' }}>Ռազմական</Link></li>
              <li><Link onClick={()=>handleTop('society')} to={{ pathname: '/armenia', hash:'#society' }}>Հասարակություն</Link></li>
            </ul>
        </div>
        <hr/>
        <AllNews title="Թարմ Նորություններ" data={data && data} region="Հայաստան"/>
         {data && <Article title="Քաղաքական" to="politics" data={dataPolitics}/>}
         {data && <Article title="Իրավական" to="legal" data={dataLegal}/>}
         {data && <Article title="Ռազմական" to="military" data={dataMilitary}/>}
         {data && <Article title="Հասարակություն" to="society" data={dataSociety}/>}
    </main>
  )
}

export default Armenia