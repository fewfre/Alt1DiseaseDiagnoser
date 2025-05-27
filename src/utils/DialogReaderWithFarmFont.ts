import * as a1lib from "alt1/base";
import DialogReader from "alt1/dialog";
// import * as OCR from "alt1/ocr";
// import * as OCR from "./farmFont-attempt-at-custom-fix/OcrTest";
// import fontmono2a from "./farmFont-attempt-at-custom-fix/farmFont.fontdefinition.json";
// const fontmono2 = fontmono2a as any;

import { createWorker } from "tesseract.js";
const tesseractWorker = createWorker('eng');

export class DialogReaderWithFarmFont extends DialogReader {
	// readWithFarmFont(imgref?: a1lib.ImgRef | null | undefined) {
	// 	imgref = this.ensureimg(imgref);
	// 	if (!imgref) { return false; }

	// 	let title = this.readTitle(imgref);
	// 	var r = {
	// 		text: null as null | string[],
	// 		opts: null as ReturnType<DialogReader["readOptions"]>,
	// 		title
	// 	};
	// 	if (this.checkDialog(imgref)) {
	// 		r.text = this.readDialogWithFarmFont(imgref, true);
	// 		return r;
	// 	}
	// 	else {
	// 		var opts = this.findOptions(imgref);
	// 		if (opts.length != 0) {
	// 			r.opts = this.readOptions(imgref, opts);
	// 			return r;
	// 		}
	// 		else {
	// 			return null;
	// 		}
	// 	}
	// }
	
	getDialogBoxImageData(imgref: a1lib.ImgRef | undefined | null) : ImageData | undefined | null {
		let checked = false;
		if (!this.pos) { throw new Error("position not found yet"); }
		imgref = this.ensureimg(imgref);
		if (!imgref) { return null; }
		if (!checked) { checked = this.checkDialog(imgref); }
		if (!checked) { return null; }
		
		return imgref.toData(this.pos.x, this.pos.y + 33, this.pos.width, 80)
	}
	
	async screwThisImCheatingIveSpentDaysOnThisStupidFontWithLiterallyNoProgress(imgref: a1lib.ImgRef | undefined | null) : Promise<string[] | null> {
		const buf = this.getDialogBoxImageData(imgref);
		if(!buf) return null;
		
		const worker = await tesseractWorker;
		const ret = await worker.recognize("data:image/png;base64,"+buf.toPngBase64());
		// await worker.terminate();
		
		return ret.data.text.split('\n');
	}
	

	// readDialogWithFarmFont(imgref: a1lib.ImgRef | undefined | null, checked: boolean) {
	// 	if (!this.pos) { throw new Error("position not found yet"); }
	// 	imgref = this.ensureimg(imgref);
	// 	if (!imgref) { return null; }
	// 	if (!checked) { checked = this.checkDialog(imgref); }
	// 	if (!checked) { return null; }


	// 	var lines: string[] = [];
	// 	var buf = imgref.toData(this.pos.x, this.pos.y + 33, this.pos.width, 80);
	// 	var read:any;
	// 	for (var y = 30; y < 46; y++) {
	// 		for (var x = 0; x < 250; x++) {
	// 			read = OCR.readLine(buf, fontmono2, [0, 0, 0], x, y, true, true);
	// 			if (read.text.length >= 3) {
	// 				lines.push(read.text);
	// 			}
	// 		}
	// 	}
		
		
		
	// 	for (var y = 0; y < buf.height; y++) {
	// 		var hastext = false;
	// 		for (var x = 200; x < 300; x++) {
	// 			var i = x * 4 + y * 4 * buf.width;
	// 			if (buf.data[i] + buf.data[i + 1] + buf.data[i + 2] < 50) {
	// 				hastext = true;
	// 				break;
	// 			}
	// 		}
	// 		if (hastext) {
	// 			var chr: OCR.ReadCharInfo | null = null;
	// 			for (var x = 100; x < 500; x+=5) {
	// 				chr = chr || OCR.findChar(buf, fontmono2, [0, 0, 0], x, y + 5, 12, 3);
	// 			}
	// 			// chr = chr || OCR.findChar(buf, fontmono2, [0, 0, 0], 192, y + 5, 12, 3);
	// 			// chr = chr || OCR.findChar(buf, fontmono2, [0, 0, 0], 246, y + 5, 12, 3);
	// 			// chr = chr || OCR.findChar(buf, fontmono2, [0, 0, 0], 310, y + 5, 12, 3);
	// 			console.log('chr', chr);
	// 			if (chr) {
	// 				var read = OCR.readLine(buf, fontmono2, [0, 0, 0], chr.x, chr.y, true, true);
	// 				console.log('read', read);
	// 				if (read.text.length >= 3) {
	// 					lines.push(read.text);
	// 				}
	// 				y = chr.y + 5;
	// 			}
	// 		}
	// 	}

	// 	return lines;
	// }
}