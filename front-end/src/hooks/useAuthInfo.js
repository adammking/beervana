import { useDispatch, useSelector } from "react-redux"
import { decode } from "jsonwebtoken"
import { getUserFromApi, 
         getFollowersFromApi, 
         getFollowingFromApi, 
         getUserPostsFromApi,
        getUserReviewsFromApi } from "../actions/user"

function useAuthInfo() {
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const isAuth = useSelector(st => st.authorized)

    if (token && isAuth) {
        const { username } = decode(token)
        dispatch(getUserFromApi(username))
        dispatch(getFollowersFromApi(username))
        dispatch(getFollowingFromApi(username))
        dispatch(getUserPostsFromApi(username))
        dispatch(getUserReviewsFromApi(username))
        return true
    } else {
        return false
    }

}

export default useAuthInfo;