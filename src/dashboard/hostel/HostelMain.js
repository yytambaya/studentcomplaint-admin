import {useEffect, useLayoutEffect, useState} from 'react' 
// import Profile from './Profile'
//import NewLit from './NewLit'
import Lits from './Hostels'
import EditLit from './EditHostel'
import { getSiteBaseURL } from '../../services/helpers'
import logo1 from '../../asset/images/logo1.svg' 
import hostelPic from '../../asset/images/user.svg';
import EditHostel from './EditHostel'
import Hostels from './Hostels'
import NewHostel from './NewHostel'
import Hostel from './Hostel'
import { Navbar } from '../components/Navbar'

const HostelMain = () => {
    const [page, setPage] = useState("Hostels")
    const [lastPage, setLastPage] = useState("Hostels")
    const [hostel, setHostel] = useState({})
    
    
    useLayoutEffect( () => {
        if(localStorage.getItem('jwt_token') == "" || localStorage.getItem('jwt_token') == null || localStorage.getItem('jwt_token') == undefined){
            window.location.href = `${getSiteBaseURL()}/login`
        }
    }, [])
    
    
    
    return(
        <div>
          <Navbar/>
          {page == "NewHostel"? <NewHostel setPage={setPage} setLastPage={setLastPage} lastPage={lastPage} /> : page == "Hostels" ? <Hostels setPage={setPage} setLastPage={setLastPage} lastPage={lastPage} setHostel={setHostel} /> : page == "Hostel" ? <Hostel hostel={hostel} setPage={setPage} setLastPage={setLastPage} lastPage={lastPage}/> : page == "EditHostel" ? <EditHostel hostel={hostel} setPage={setPage} setLastPage={setLastPage} lastPage={lastPage}/> : null}
        </div>    

    )
}

export default HostelMain