import { useDispatch } from "react-redux"
import { logOut } from "../../global/GlobalState"


const Header = () => {

  const dispatch = useDispatch()

  return (
    <div className="flex justify-between items-center h-[70px] w-[100%] bg-black text-white px-8">
      <div className="text-[40px] font-extrabold">TUGM</div>
      <button className="py-[8px] px-[28px] rounded-[30px] text-[20px] font-bold transition-all duration-300 hover: scale-[1.05] bg-purple-700" onClick={()=>{
        dispatch(logOut())
      }}>LogOut</button>
    </div>
  )
}

export default Header;