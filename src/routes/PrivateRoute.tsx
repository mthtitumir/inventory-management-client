import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { useCurrentToken } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default PrivateRoute;
