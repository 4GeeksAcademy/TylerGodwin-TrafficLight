import React from "react";
import styles from "/workspaces/TylerGodwin-TrafficLight/src/styles/index.css";
import { useState } from "react";

//create your first component
const TrafficLight = () => {
	const [ color, setColor ] = useState("blue");

	return (
		<div className="traffic-light">
			<div className="lights">
				<div onClick={() => setColor("red")} className={"light" + (color === "red" ? "-red glow" : "")}></div>
				<div onClick={() => setColor("yellow")} className={"light" + (color === "yellow" ? "-yellow glow" : "")}></div>
				<div onClick={() => setColor("green")} className={"light" + (color === "green" ? "-green glow" : "")}></div>
			</div>
		</div>
	);
};

export default TrafficLight;