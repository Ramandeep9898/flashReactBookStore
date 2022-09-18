import React from "react";
import "./auth-icon.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../customHooks/useAuth";
import { AiOutlineLogin } from "react-icons/ai";

export const AuthIcon = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  return user ? (
    <button onClick={() => navigate("/user")} className="avatar avatar-s">
      <h2 className="user-avatar">{`${user.firstName[0]}${user.lastName[0]}`}</h2>
    </button>
  ) : (
    <div
      onClick={() => {
        navigate("/auth");
      }}
    >
      <AiOutlineLogin />
    </div>
  );
};
