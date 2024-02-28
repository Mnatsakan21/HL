import { useRef , useEffect , useState} from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import './slider.style.scss'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination,Navigation } from 'swiper/modules'
import axios from "axios"
import { address,countries } from "../../../../repetitiveVariables/variables"
import { Link } from "react-router-dom"

const data = [
  {
  id:1,
  title:"Lոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ, ծում ոդիո ունում լուդուս եու",
  description:"Լոռեմ իպսում դոլոռ սիթ ամեթ, քուո ադ ծհոռո եխեռծի դելիծաթա, ադ վիս վիթաե քուիդամ,դիամ թռիթանի ածծուսամուս, իդ սոլեաթ դեթեռռուիսսեթ մեդիոծռիթաթեմ մել, մեա քուիս նուսքուամ եի.",
  img:"",
  country:"armenia"
},
]
export default function Slider() {
   
    const swiperRef = useRef()


    const [dataToday,setDataToday] = useState()

    useEffect(()=>{
      (async () => {
        try {
          const {data}= await axios.get('http://localhost:5005/api/v1/news/getToday')
          setDataToday(data)
        } catch (error) {
          console.log(error)
        }
      })()
    },[])

    const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>'
      },
    }
  return (
    <>
      <Swiper className="mySwiper" pagination={pagination} modules={[Pagination,Navigation]} navigation={true}
      onSwiper={(swiper) => {
        swiperRef.current = swiper
      }}>
        
        {dataToday && dataToday.map(({id,title,description,img,country},key)=>{
          if(key >= 4) return
           return <SwiperSlide key={key}>
                    <Link to={"/news/"+id}>
                    <div className='today_news_slider'>
                        <img src={address+img} alt="" />
                        <div className="today_news_text">
                          <h3>{title}</h3>
                          <p>{description}</p>
                          <h4>{countries[country.title]}</h4>
                        </div>
                    </div>
                  </Link>
            </SwiperSlide>
        })}
         <div className="swiper_nav_btns"></div>
      </Swiper>
    </>
  )
}

