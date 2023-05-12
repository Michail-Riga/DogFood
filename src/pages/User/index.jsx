import { useSelector } from "react-redux"
import { useAuth } from "../../hooks/useAuth"

export const User = () => {
  useAuth()
  const user = useSelector(state => state.user)

  return (
    <>
      <h1> Пользователь</h1>
      <div>
        <p>Имя: {user.name} </p>
        <p>Должность: {user.about} </p>
        <p>Группа: {user.group} </p>
      </div>
    </>
  )
}
























