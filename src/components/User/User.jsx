import { useSelector } from 'react-redux'
import { selectUserById } from '../../store/entities/user/selectors'

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, { userId }))
  if (!user) return null

  return (
    <div>
      <h2>{user.name}</h2>
    </div>
  )
}
