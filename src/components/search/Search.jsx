import { useState,useEffect, useRef } from "react"
import "./search.style.scss"
import SearchSlice from "./searchslice/SearchSlice"
import axios from "axios"
import { Link } from "react-router-dom"

const data = [
  {
    date:"Հուլ 3,2023",
    title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ իպսում դոլոռ սիթ ամեթ, քուո ադ",
    about:"Լոռեմ իպսում դոլոռ սիթ ամեթ, տուրիզմ ադ ծհոռո եխեռծի դելիծաթա Լոռեմ տուրիզմ դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
    img:"../img/cyclist.png",
  },
  {
    date:"Հուլ 3,2023",
    title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ իպսում դոլոռ սիթ ամեթ, քուո ադ",
    about:"Լոռեմ իպսում դոլոռ սիթ ամեթ, տուրիզմ ադ ծհոռո եխեռծի դելիծաթա Լոռեմ տուրիզմ դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
    img:"../img/cyclist.png",
  },
  {
    date:"Հուլ 3,2023",
    title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ իպսում դոլոռ սիթ ամեթ, քուո ադ",
    about:"Լոռեմ իպսում դոլոռ սիթ ամեթ, տուրիզմ ադ ծհոռո եխեռծի դելիծաթա Լոռեմ տուրիզմ դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
    img:"../img/cyclist.png",
  },
  {
    date:"Հուլ 3,2023",
    title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ իպսում դոլոռ սիթ ամեթ, քուո ադ",
    about:"Լոռեմ իպսում դոլոռ սիթ ամեթ, տուրիզմ ադ ծհոռո եխեռծի դելիծաթա Լոռեմ տուրիզմ դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
    img:"../img/cyclist.png",
  },
  {
    date:"Հուլ 3,2023",
    title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ իպսում դոլոռ սիթ ամեթ, քուո ադ",
    about:"Լոռեմ իպսում դոլոռ սիթ ամեթ, տուրիզմ ադ ծհոռո եխեռծի դելիծաթա Լոռեմ տուրիզմ դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
    img:"../img/cyclist.png",
  },
  {
    date:"Հուլ 3,2023",
    title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ իպսում դոլոռ սիթ ամեթ, քուո ադ",
    about:"Լոռեմ իպսում դոլոռ սիթ ամեթ, տուրիզմ ադ ծհոռո եխեռծի դելիծաթա Լոռեմ տուրիզմ դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
    img:"../img/cyclist.png",
  },
  {
    date:"Հուլ 3,2023",
    title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ իպսում դոլոռ սիթ ամեթ, քուո ադ",
    about:"Լոռեմ իպսում դոլոռ սիթ ամեթ, տուրիզմ ադ ծհոռո եխեռծի դելիծաթա Լոռեմ տուրիզմ դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
    img:"../img/cyclist.png",
  },
  {
    date:"Հուլ 3,2023",
    title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ իպսում դոլոռ սիթ ամեթ, քուո ադ",
    about:"Լոռեմ իպսում դոլոռ սիթ ամեթ, տուրիզմ ադ ծհոռո եխեռծի դելիծաթա Լոռեմ տուրիզմ դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
    img:"../img/cyclist.png",
  },
  {
    date:"Հուլ 3,2023",
    title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ իպսում դոլոռ սիթ ամեթ, քուո ադ",
    about:"Լոռեմ իպսում դոլոռ սիթ ամեթ, տուրիզմ ադ ծհոռո եխեռծի դելիծաթա Լոռեմ տուրիզմ դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
    img:"../img/cyclist.png",
  },
  {
    date:"Հուլ 3,2023",
    title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ իպսում դոլոռ սիթ ամեթ, քուո ադ",
    about:"Լոռեմ իպսում դոլոռ սիթ ամեթ, տուրիզմ ադ ծհոռո եխեռծի դելիծաթա Լոռեմ տուրիզմ դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
    img:"../img/cyclist.png",
  },
  {
    date:"Հուլ 3,2023",
    title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ իպսում դոլոռ սիթ ամեթ, քուո ադ",
    about:"Լոռեմ իպսում դոլոռ սիթ ամեթ, տուրիզմ ադ ծհոռո եխեռծի դելիծաթա Լոռեմ տուրիզմ դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
    img:"../img/cyclist.png",
  },
  {
    date:"Հուլ 3,2023",
    title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ իպսում դոլոռ սիթ ամեթ, քուո ադ",
    about:"Լոռեմ իպսում դոլոռ սիթ ամեթ, տուրիզմ ադ ծհոռո եխեռծի դելիծաթա Լոռեմ տուրիզմ դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա",
    img:"../img/cyclist.png",
  },
]
const Search = () => {
    const inputRef = useRef()
    const [search,setSearch] = useState()
    const [searchData,setSearchData] = useState("")

    const [currentPage, setCurrentPage] = useState(1)
    const [contentBeginning,setContentBegining] = useState(0)
    const [contentQuantity,setContentQuantity] = useState(6)
    const containerRef = useRef(null)
    const maxPages = Math.ceil(data.length/6)
    
    
    useEffect(()=>{
        (async () => {
            try { 
                if(search == "")return
          const {data} = await axios.get(`http://localhost:5005/api/v1/news/search?search=${search}`)
          setSearchData(data)
        } catch (error) {
            console.log(error)
          }
        })()
      },[search])
      
      function handleNextPage () {
        if(currentPage<maxPages){
          setCurrentPage(currentPage+1)
          setContentBegining(contentQuantity)
          setContentQuantity(contentQuantity+6)
          containerRef.current.scrollIntoView({behavior:"smooth", block: "start"})
        }
      }
      
      function handlePrevPage (){
        if(currentPage>1){
          setCurrentPage(currentPage-1)
          setContentBegining(contentBeginning - 6)
          setContentQuantity(contentQuantity-6)
          containerRef.current.scrollIntoView({behavior:"smooth", block: "start"})
        }
      }
      
      function handlePageChange(number){ 
        setCurrentPage(number)
        setContentBegining((number*6)-6)
        setContentQuantity(number*6)
        containerRef.current.scrollIntoView({behavior:"smooth", block: "start"})
      }



  return (
    <main ref={containerRef} className="search_container">
        <div className="input_container">
            <input ref={inputRef} type="text" placeholder="Որոնել ․․․" />
            <button onClick={()=>{setSearch(inputRef.current.value)}}><img src="/img/VectorSearch.png" alt="Որոնել" /></button>
        </div>
        {search && <div className="search_result">
            <p><span>{`<<${search}>> `}</span>որոնման արդյունքերը</p>
            <p>{`${searchData?searchData.length:0} արդյունք`}</p>
        </div>}
        <hr />

        {searchData==0?search && <h2>Արդյունք չի գտնվել</h2>:searchData && 
        <>
        {searchData.map((data,key)=>{
          if(key>=contentQuantity || key<contentBeginning)return
          return <Link  key={key} to={"/news/"+data.id}>
          <SearchSlice data={data}/>
         </Link>
        })}
        <div className="flex_container search_paginate_container">
        
        <div className="paginate_ctn">
          <div className={"arrow "+(currentPage == 1?"":"arrow_active")} onClick={handlePrevPage}> ← </div>

          {new Array(maxPages).fill(null).map((_,key)=>{
            const rightSide = currentPage+3
            const leftSide = currentPage
            const number = key + 1

              if(number > rightSide || number < leftSide)return
            return <div key={key} className={"round_effect "+(number === currentPage ? "paginate_active" : "")} onClick={()=>handlePageChange(number)}>
              {number}
            </div>
          })}
          <div className={"arrow "+(currentPage == maxPages?"":"arrow_active")} onClick={handleNextPage}> → </div>
          </div>
          </div>
          </>
        
        }
        
    </main>
  )
}

export default Search