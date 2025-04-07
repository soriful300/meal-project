import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="nav-bar flex p-4 justify-between bg-amber-50 border-amber-200 border-b-2">
        <div className="site-name text-2xl font-bold">KhaBarTime</div>
        <div className="profile-img"><img  src="../../assets/logo.jpg" alt="" /></div>
      </div>
    </div>
  );
};

export default Navbar;
