import * as a1lib from "alt1/base";
import DialogReader from "alt1/dialog";
import { DialogReaderWithFarmFont } from "./DialogReaderWithFarmFont";

function strcompare(first: string, second: string) {
	// Calculates the similarity between two strings  
	// discuss at: http://phpjs.org/functions/similar_text
	first += '';
	second += '';
	var pos1 = 0,
		pos2 = 0,
		max = 0,
		firstLength = first.length,
		secondLength = second.length,
		p, q, l, sum;
	max = 0;
	for (p = 0; p < firstLength; p++) {
		for (q = 0; q < secondLength; q++) {
			for (l = 0;
				(p + l < firstLength) && (q + l < secondLength) && (first.charAt(p + l) === second.charAt(q + l)); l++);
			if (l > max) {
				max = l;
				pos1 = p;
				pos2 = q;
			}
		}
	}
	sum = max;
	if (sum) {
		if (pos1 && pos2) {
			sum += strcompare(first.substr(0, pos2), second.substr(0, pos2));
		}
		if ((pos1 + max < firstLength) && (pos2 + max < secondLength)) {
			sum += strcompare(first.substr(pos1 + max, firstLength - pos1 - max), second.substr(pos2 + max, secondLength - pos2 - max));
		}
	}
	return sum;
}

export async function handleImageCaptureFallsbacksIfNeeded(img?: a1lib.ImgRef) {
	if (!img) {
		try { img = a1lib.captureHoldFullRs(); } catch (e) { }
	}
	if (!img) { throw new Error("Need pixel permission."); }
	return img;
}

const reader = new DialogReaderWithFarmFont();
export async function getImageDialogBoxObj(img: a1lib.ImgRef) {
	var pos = reader.find(img);
	if (!pos) { throw new Error("Chat box not found, reactivate check once there is a dialog box on screen."); }
	
	return {
		text: await reader.screwThisImCheatingIveSpentDaysOnThisStupidFontWithLiterallyNoProgress(img),
	}

	// var b1 = reader.read(img);
	// var b2 = reader.readWithFarmFont(img);
	// var b3 = await reader.screwThisImCheatingIveSpentDaysOnThisStupidFontWithLiterallyNoProgress(img);
	// if(b1 && b2) {
	// 	console.log('default-text: ', b1.text?.join(" "));
	// 	console.log('farmFont-text: ', b2.text?.join(" "));
	// 	console.log('farmFont-cheat: ', b3);
	// }
	
	// var box = reader.read(img);
	// if (!box) { throw new Error("Failed to read dialog box."); }
	// return box;
}
	
export async function getImageDialogBoxText(img: a1lib.ImgRef) {
	const box = await getImageDialogBoxObj(img);
	if (!box.text) { throw new Error("Activate this check again when the chat text is shown."); }
	return box.text;
}

function strcomparescore(foundstring: string, templatestr: string) {
	return (strcompare(foundstring.toLowerCase(), templatestr.toLowerCase()) - Math.abs(foundstring.length - templatestr.length) / 2) / foundstring.length;
}

export function compareStringAgainstMultiplePossibleMatchesFindBestMatch<T>(str:string, possibleMatches:T[], getAnswerText:(pm:T)=>string[]) {
	let bestScore = 0;
	let best: T | undefined;
	for (const pm of possibleMatches) {
		const matchTexts =  getAnswerText(pm);
		for (const text of matchTexts) {
			let c = strcomparescore(str, text);
			if (c > bestScore) {
				bestScore = c;
				best = pm;
			}
		}
	}
	return [best, bestScore] as const;
}