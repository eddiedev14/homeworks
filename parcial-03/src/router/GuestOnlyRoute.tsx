import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/auth/useAuth";

export const GuestOnlyRoute = () => {
    const { user } = useAuth();
    return user ? <Navigate to="/home" /> : <Outlet />;
};