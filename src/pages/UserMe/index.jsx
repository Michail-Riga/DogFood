import { useSelector } from "react-redux"

export const UserMe = () => {
  const user = useSelector(state => state.user)

  return (
    <>
      Имя: {user.name}
      About: {user.about}
    </>
  )
}


