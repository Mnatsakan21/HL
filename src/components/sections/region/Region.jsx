import AllNews from "../../homepage/allnews/AllNews"
import Article from "../article/article"
import { useState , useEffect } from "react"
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
const Region = () => {
  const [data,setData] = useState()
  const [dataGeorgia,setDataGeorgia] = useState()
  const [dataTurkey,setDataTurkey] = useState()
  const [dataIran,setDataIran] = useState()
  const [dataAzerbaijan,setDataAzerbaijan] = useState()

  useEffect(()=>{
    (async () => {
      try {
        const {data}= await axios.get('http://localhost:5005/api/v1/news/getAll') 
        const turkey = await axios.get('http://localhost:5005/api/v1/news/filter?countryId=2') 
        const georgia = await axios.get('http://localhost:5005/api/v1/news/filter?countryId=3') 
        const iran = await axios.get('http://localhost:5005/api/v1/news/filter?countryId=4') 
        const azerbaijan = await axios.get('http://localhost:5005/api/v1/news/filter?countryId=5') 
        setData(data.filter((data)=>data.countryId != 1 && data.countryId != 6 && data.newsContent.file.isImage))
        setDataGeorgia(georgia.data.filter((data)=>data.newsContent.file.isImage))
        setDataTurkey(turkey.data.filter((data)=>data.newsContent.file.isImage))
        setDataIran(iran.data.filter((data)=>data.newsContent.file.isImage))
        setDataAzerbaijan(azerbaijan.data.filter((data)=>data.newsContent.file.isImage))
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
            <h2>Տարածաշրջան</h2>
        <hr  className="region_line"/>
            <ul>
              <li><Link onClick={()=>handleTop("georgia")}  to={{ pathname: '/region',hash: '#georgia' }}>Վրաստան</Link></li>
              <li><Link onClick={()=>handleTop('turkey')} to={{ pathname: '/region', hash:'#turkey' }}>Թուրքիա</Link></li>
              <li><Link onClick={()=>handleTop('iran')} to={{ pathname: '/region',hash: '#iran' }}>Իրան</Link></li>
              <li><Link onClick={()=>handleTop('azerbaijan')} to={{ pathname: '/region', hash:'#azerbaijan' }}>Ադրբեջան</Link></li>
            </ul>
        </div>
        <hr className="region_line"/>
        <AllNews title={"Թարմ Նորություններ"} data={data && data} region="Տարածաշրջան"/>
        {data && <Article title="Վրաստան" to="georgia" data={dataGeorgia}/>}
        {data && <Article title="Թուրքիա" to="turkey" data={dataTurkey}/>}
        {data && <Article title="Իրան" to="iran" data={dataIran}/>}
        {data && <Article title="Ադրբեջան" to="azerbaijan" data={dataAzerbaijan}/>}
    </main>
  )
}

export default Region