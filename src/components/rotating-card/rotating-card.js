import React from "react"
import "./rotating-card.scss"
import front from "./HE_Graduation-Party_Invitation_front.png"
import back from "./HE_Graduation-Party_Invitation_back.png"

const RotatingCard = () => {
  return (
    <div class="col-12">
			<div className="panel">
				<div className="front">
					<img src={front} className="front-image" alt="2019 graduation postcard front" />
				</div>
				<div className="back">
					<img src={back}  className="back-image" alt="2019 graduation postcard back" />
				</div>
			</div>
		</div>
  )
}

export default RotatingCard