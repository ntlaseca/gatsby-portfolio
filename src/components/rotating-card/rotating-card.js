import React from "react"
import front from "./HE_Graduation-Party_Invitation_front.png"
import back from "./HE_Graduation-Party_Invitation_back.png"
import { Container, Panel } from "./rotating-card.css"

const RotatingCard = () => {
  return (
		<Container>
			<Panel>
				<div className="front">
					<img src={front} className="front-image" alt="2019 graduation postcard front" />
				</div>
				<div className="back">
					<img src={back}  className="back-image" alt="2019 graduation postcard back" />
				</div>
			</Panel>
		</Container>
  )
}

export default RotatingCard