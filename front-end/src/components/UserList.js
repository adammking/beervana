import React from 'react';
import { getAllUsersFromApi } from "./actions/user"



function UserList() {

    const dispatch = useDispatch();
     
    useEffect(function() {
        dispatch(getAllUsersFromApi())
    }, [dispatch])
    

    const users = useSelector(st => st.users) ;

    return (
        <div>
            <ul>
                {users.map(data => (
                    <li><User data={data}/></li>
                ))}
            </ul>
        </div>
    )
};



export default UserList;