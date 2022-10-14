import { useNavigate } from "react-router-dom"
const Footer = () => {
    const navigate = useNavigate();
  return (
    <footer className="h-[4rem] bg-orange-500">
         <button className='p-[1rem] float-right hover:bg-orange-600 rounded-lg' onClick={()=>navigate('/nextPage')}>Next</button>
    </footer>
  )
}

export default Footer;