import { useState } from "react";
import { useQuery ,useMutation  } from "react-query";
import { fetchUser,updateBookmark } from "../api";
import { QueryClient } from "react-query";


// documentid ,  version , toggle ,isSelected


const Bookmark = () => {

    const { data, isError, isLoading, error } = useQuery({
        queryKey: ["user", 2],
        queryFn:()=> fetchUser(2),
      });
    
      const updateUserMutation = useMutation({
        mutationFn: updateBookmark,
        onSuccess: () => {
          console.log('success')
        //   queryClient.invalidateQueries({ queryKey: ["user"] }) 
        }
      });



    console.log(data);


    const onToggle=()=>{
    //     setToggle({...data, })
    //    const userData= updateUserMutation.mutate({...data, data['isSelected']:{toggle}})
    //     console.log(userData)
    }

    return ( <>
        <div>data</div>
        <button onClick={onToggle}></button>
    </> );
}
 
export default Bookmark;