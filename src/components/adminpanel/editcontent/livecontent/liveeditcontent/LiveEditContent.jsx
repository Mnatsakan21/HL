import { useState , useEffect} from 'react'
import './liveeditcontent.style.scss'
import axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
import { address } from '../../../../../repetitiveVariables/variables'

const LiveEditContent = () => {
    const [dataId,setDataId] = useState([])
    const {id} = useParams()

  useEffect(()=>{
    (async () => {
      try {
        const {data} = await axios.get(`${address}/api/v1/live/getAll`)
        setDataId(data.filter((data)=>data.id == id)[0])
      } catch (error) {
        console.log(error)
      }
    })()
  },[])

  function handleDelete(){
    (async () => {
      try {
        const {data} = await axios.delete(`${address}/api/v1/live/delete/${id}`)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    })()
  }

  return (
    <div className='live_edit_content_container'>
         <NavLink to={`/admin/edit/live/${id}/editcontent`}>
              <button>Edit Content</button>
        </NavLink> 
        <iframe src={dataId && dataId.url}></iframe>
        <h2>{dataId && dataId.title}</h2>
        <NavLink to='/admin/edit'>
            <button onClick={handleDelete}>Delete This Post</button>
        </NavLink>
    </div>
  )
}

export default LiveEditContent