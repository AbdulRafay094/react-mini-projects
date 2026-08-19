import { Bookmark } from "lucide-react";
import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={props.brandLogo} alt="Not available" />
          <button>
            Save <Bookmark size={20} />
          </button>
        </div>
        <div className="center">
          <h2>
            {props.companyName} <span>{props.datePosted}</span>
          </h2>
          <h3>{props.post}</h3>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
}

export default Card;
