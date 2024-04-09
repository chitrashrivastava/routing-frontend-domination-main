import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    const GoBackHandler = () => {
        // code to submit form in the database
        // navigate("/user");
        navigate(-1);
    };

    return (
        <div className=" mt-10">
            <h1 className="text-red-200 text-2xl mb-2">User Detail</h1>

            <h1 className="text-2xl mt-3 ">hii! {name}</h1>

            <button
                onClick={GoBackHandler}
                className="mt-5 text-white px-3 py-2 bg-red-300"
            >
                Go back
            </button>
        </div>
    );
};

export default UserDetail;
