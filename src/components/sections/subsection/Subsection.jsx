import { useEffect, useState,useRef } from "react"
import AsideSlice from "../asideslice/AsideSlice"
import "./subsection.style.scss"
import { Link, useLocation } from "react-router-dom"
import axios from "axios"
import { categories,countriesfilter } from "../../../repetitiveVariables/variables"

const Subsection = ({title,dataGlobal}) => {
  const [data,setData] = useState("")
  const location = useLocation().pathname.split("/")

  const [currentPage, setCurrentPage] = useState(1)
  const [contentBeginning,setContentBegining] = useState(0)
  const [contentQuantity,setContentQuantity] = useState(8)
  const containerRef = useRef(null)
  const maxPages = Math.ceil(data?.length/8)

    
  useEffect(()=>{
    (async () => {
      try {
        if(location[1] == "armenia"){
          const {data} = await axios.get(`http://localhost:5005/api/v1/news/filter?countryId=1&categoryId=${categories[location[2]]}`) 
          setData(data)

        }else{
          const {data} = await axios.get(`http://localhost:5005/api/v1/news/filter?countryId=${countriesfilter[location[2]]}`) 
          setData(data)
        }

      } catch (error) {
        console.log(error)
      }
    })()
  },[])


    useEffect(()=>{
      containerRef.current.scrollIntoView({behavior:"smooth", block: "start"})
    },[currentPage])

    function handleNextPage () {
      if(currentPage<maxPages){
        setCurrentPage(currentPage+1)
        setContentBegining(contentQuantity)
        setContentQuantity(contentQuantity+8)
      }
    }
    
    function handlePrevPage (){
      if(currentPage>1){
        setCurrentPage(currentPage-1)
        setContentBegining(contentBeginning - 8)
        setContentQuantity(contentQuantity-8)
      }
    }
    
    function handlePageChange(number){ 
      setCurrentPage(number)
      setContentBegining((number*8)-8)
      setContentQuantity(number*8)
    }
    
    function handleAfterColor(title){
      if(title == "Քաղաքական" || title == "Իրավական" || title == "Ռազմական" || title == "Հասարակություն" )return "subsection_armenia"
      else return "subsection_region"

    }

  return (
    <main className="subsection_container">
        <div ref={containerRef} className="subsection_container_bottom">
            <h3 className={handleAfterColor(title)}>{title}</h3>
            
            <div>
            {data && data.map((data,key)=>{
              if(key>=contentQuantity || key<contentBeginning)return
                return <Link to={"/news/"+ data.id}><AsideSlice key={key} data={data}/></Link>

            })}
              <div className="flex_container">
        
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
          
            </div>
           

        </div>
        
    </main>
  )
}

export default Subsection