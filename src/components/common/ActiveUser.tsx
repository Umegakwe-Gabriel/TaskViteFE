import { useQuery } from "@tanstack/react-query"
import { onAuth } from "../../api/authApi"

interface iData {
    myID: string
}

const ActiveUser: React.FC<iData> = ({myID}) => {
     const { data: user } = useQuery({
        queryKey: ["authUser", { id: myID }],
        queryFn: () => onAuth(myID),
        refetchInterval: 1000
     })
  return (
    <div>
        <div className="uppercase text-[12px]">{user?.name}</div>
        <div className="capitalize text-[7px]">{user?.email}</div>
    </div>
  )
}

export default ActiveUser