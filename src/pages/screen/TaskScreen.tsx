import { useAutoAnimate } from "@formkit/auto-animate/react"
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { useSelector } from "react-redux"
import { createTask, getTask } from "../../api/tasksApi"
import ActiveUser from "../../components/common/ActiveUser"
import Input from "react-input-emoji"

const TaskScreen = () => {
  const [parent] = useAutoAnimate()
  const queryClient = new QueryClient()
  const userID = useSelector((state) => state.taskState)
  const [ tasked, setTasked ] = useState("")
  
  const { data } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTask,
    refetchInterval: 1000
  })

  const mutate = useMutation({
    mutationKey: ["tasks"],
    mutationFn: (data) => createTask(data, userID),

    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['tasks']},)
    }
  })

  const onSubmit = () =>{
    mutate.mutate(tasked)
  }
  return (
    <div className="flex flex-col items-center">
      <br />
      <br />
      <div className="w-[400px]">
        <Input 
        value={tasked} 
        onChange={setTasked} 
        onEnter={onSubmit} 
        cleanOnEnter 
        placeholder="Enter a Task"/>
      </div>

      <div className="flex flex-wrap" ref={parent}>
        {
          data?.map(({task, _id, userID}: string) => (
            <div key={_id}>
              <div className="flex items-center w-[150px] border border-[silver] rounded h-[90px] justify-between p-2 m-2 ">
                <div>
                  <div className="font-bold text-[18px]">{task}</div>
                  <ActiveUser myID={userID}/>
                </div>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TaskScreen

