import React from "react";
import Link from "next/link";
import { GiCancel } from "react-icons/gi";

const Canceled = () => {
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon" style={{ color: "red" }}>
          <GiCancel />
        </p>
        <h2 style={{ color: "#f02d34" }}>Order Canceled!</h2>
        <p className="email-msg">See you next time.</p>
        <p className="description">
          If you have any quastions, please email
          <a className="email" href="mailto:order@sandipdeb.com">
            order@sandipdeb.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Canceled;
