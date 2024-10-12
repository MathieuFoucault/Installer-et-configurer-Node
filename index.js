import dotenv from "dotenv";
import cowsay from "cowsay";

dotenv.config();

const name = process.env.NAME;
const campus = process.env.CAMPUS;

console.log(
	cowsay.say({
		text: `Mon nom est ${name} et je suis en formation développeur web ${campus}.`,
		e: "oO",
		T: "U ",
	}),
);
