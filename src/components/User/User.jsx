import { useSelector } from "react-redux";
import { selectUserById } from "../../store/entities/user/selector";

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));
  if (!user) return null;

  return (
    <div>
      <b>{user.name}</b>
    </div>
  );
};
