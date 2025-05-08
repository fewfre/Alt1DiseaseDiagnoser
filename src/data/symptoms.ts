export enum Disease {
	FootInMouth = "Foot-in-mouth",
	Flu = "Flu",
	Curse = "Curse",
	DryNose = "Dry nose",
	BoneRattle = "Bone rattle",
	WootingCough = "Wooting cough"
}

export enum BodyPart {
	Head = "head",
	Eyes = "eyes",
	Legs = "legs",
	Stomach = "stomach"
}

export const diseaseList = [Disease.FootInMouth, Disease.Flu, Disease.Curse, Disease.DryNose, Disease.BoneRattle, Disease.WootingCough];

export const symptoms:Record<BodyPart, { prefix:string, symptoms:Array<{ symptom:string, diagnosis:Array<Disease> }> }> = {
	[BodyPart.Head]: {
		prefix: "You examine the animal's head: ",
		symptoms: [
			{ symptom: "You can't seem to spot anything immediately obvious.", diagnosis: [Disease.FootInMouth, Disease.Flu, Disease.Curse, Disease.DryNose, Disease.BoneRattle, Disease.WootingCough] }, // All except DryNose
			{ symptom: "The animal's nose seems fine.", diagnosis: [Disease.BoneRattle, Disease.WootingCough] },
			
			// Foot-in-mouth
			{ symptom: "The animal keeps making noises at embarrassing moments, making it difficult to investigate.", diagnosis: [Disease.FootInMouth] },
			{ symptom: "The animal's breath smells oddly like socks.", diagnosis: [Disease.FootInMouth] },
			{ symptom: "The gums appear to be a little sore.", diagnosis: [Disease.FootInMouth] },
			{ symptom: "There are some nasty looking marks along the gum line.", diagnosis: [Disease.FootInMouth] },
			
			// Flu
			{ symptom: "The animal appears to be suffering from a small fever.", diagnosis: [Disease.Flu] },
			{ symptom: "The animal coughs in your face.", diagnosis: [Disease.Flu] },
			{ symptom: "The animal sneezes in your face.", diagnosis: [Disease.Flu] },
			{ symptom: "The animal's breath smells deeply unpleasant.", diagnosis: [Disease.Flu] },
			
			// Curse
			{ symptom: "The animal occasionally mumbles something in a language it can't possibly speak.", diagnosis: [Disease.Curse] },
			{ symptom: "The animal's breath smells faintly of sulphur.", diagnosis: [Disease.Curse] },
			{ symptom: "The animal's nose is lumpy, like it's grown warts.", diagnosis: [Disease.Curse] },
			{ symptom: "There is a faint light deep within the animal's throat.", diagnosis: [Disease.Curse] },
			
			// Dry nose
			{ symptom: "The animal's nose is very dry.", diagnosis: [Disease.DryNose] },
			{ symptom: "The animal refuses to let you see its nose, it seems like the nose is quite sore.", diagnosis: [Disease.DryNose] },
			
			// Bone rattle
			{ symptom: "The animal's breath smells normal, which is to say horrible.", diagnosis: [Disease.BoneRattle] },
			{ symptom: "The animal's teeth click in a sinister manner.", diagnosis: [Disease.BoneRattle] },
			{ symptom: "The gums appear to be healthy.", diagnosis: [Disease.BoneRattle] },
			
			// Wooting cough
			{ symptom: "The animal coughs as you try and examine it.", diagnosis: [Disease.WootingCough] },
			{ symptom: "The animal coughs loudly in a 'hu hu huuu' style.", diagnosis: [Disease.WootingCough] },
			{ symptom: "The animal's breath smells normal.", diagnosis: [Disease.WootingCough] }
		]
	},
	[BodyPart.Eyes]: {
		prefix: "You examine the animal's eyes: ",
		symptoms: [
			{ symptom: "You can't seem to spot anything immediately obvious.", diagnosis: [Disease.FootInMouth, Disease.Flu, Disease.Curse, Disease.DryNose, Disease.BoneRattle] }, // all but WootingCough
			{ symptom: "The animal's eyes are a little bloodshot.", diagnosis: [] }, // curse or wooting
			{ symptom: "The animal's eyes seem fine.", diagnosis: [] }, // dry or bone rattle
			
			// Foot-in-mouth
			{ symptom: "The animal's eyes seem normal.", diagnosis: [Disease.FootInMouth] },
			
			// Flu
			{ symptom: "The eyes are a little bloodshot.", diagnosis: [Disease.Flu] },
			
			// Curse
			{ symptom: "The animal's eyes are faintly glowing.", diagnosis: [Disease.Curse] },
			{ symptom: "The animal's eyes are filled with uncharacteristic malice.", diagnosis: [Disease.Curse] },
			{ symptom: "The animal's eyes seem a little glazed over.", diagnosis: [Disease.Curse] },
			
			// Dry nose
			
			// Bone rattle
			
			// Wooting cough
			{ symptom: "The animal's eyes are filled with mirth, more mirth than normal.", diagnosis: [Disease.WootingCough] },
			{ symptom: "The animal's eyes keep darting around the place with a sense of wonder.", diagnosis: [Disease.WootingCough] }
		]
	},
	[BodyPart.Legs]: {
		prefix: "You examine the animal's legs: ",
		symptoms: [
			{ symptom: "The animal's feet are faintly chewed on.", diagnosis: [Disease.FootInMouth, Disease.Curse] },
			{ symptom: "The animal's feet seem a little scuffed.", diagnosis: [Disease.FootInMouth, Disease.Curse] },
			{ symptom: "The animal's feet seem fine.", diagnosis: [Disease.FootInMouth, Disease.Flu, Disease.Curse, Disease.DryNose] }, // all but BoneRattle or WootingCough
			{ symptom: "You can't seem to spot anything immediately obvious.", diagnosis: [Disease.FootInMouth, Disease.Flu, Disease.Curse, Disease.DryNose] }, // all but BoneRattle or WootingCough
			
			// Foot-in-mouth
			{ symptom: "The animal's feet are a little soggy for some reason.", diagnosis: [Disease.FootInMouth] },
			
			// Flu
			{ symptom: "The animal's feet are clammy.", diagnosis: [Disease.Flu] },
			{ symptom: "The animal's feet are very sweaty.", diagnosis: [Disease.Flu] },
			{ symptom: "The animal's feet are very warm to the touch.", diagnosis: [Disease.Flu] },
			
			// Curse
			{ symptom: "The animal's feet are tapping to a strange rhythm. It's unsettling.", diagnosis: [Disease.Curse] },
			
			// Dry nose
			
			// Bone rattle
			{ symptom: "The animal's legs click as it walks.", diagnosis: [Disease.BoneRattle] },
			{ symptom: "The animal's legs seem a little stiff.", diagnosis: [Disease.BoneRattle] },
			
			// Wooting cough
			{ symptom: "The animal is a little unsteady on its feet.", diagnosis: [Disease.WootingCough] },
			{ symptom: "The animal's legs seem fine.", diagnosis: [Disease.WootingCough] }
		]
	},
	[BodyPart.Stomach]: {
		prefix: "You examine the animal's stomach: ",
		symptoms: [
			{ symptom: "The animal doesn't appear to be in gastronomic distress.", diagnosis: [] }, // Could be anything
			{ symptom: "The animal has a bit of gas, but nothing too concerning.", diagnosis: [] }, // Could be anything
			{ symptom: "You can't seem to spot anything immediately obvious.", diagnosis: [] }, // Could be anything
			{ symptom: "The animal seems off its food.", diagnosis: [Disease.Flu, Disease.Curse] },
			
			// Foot-in-mouth
			{ symptom: "The animal's emissions smell strangely of shoes.", diagnosis: [Disease.FootInMouth] },
			{ symptom: "The animal's stomach appears to be a little bloated.", diagnosis: [Disease.FootInMouth] },
			
			// Flu
			{ symptom: "The animal appears to be suffering from nausea.", diagnosis: [Disease.Flu] },
			
			// Curse
			{ symptom: "The animal's stomach is making strange noises, like there's something singing inside there.", diagnosis: [Disease.Curse] },
			
			// Dry nose
			
			// Bone rattle
			{ symptom: "The animal appears to be shivering, but has no temperature.", diagnosis: [Disease.BoneRattle] },
			{ symptom: "The animal's body is making a weird clicking noise.", diagnosis: [Disease.BoneRattle] },
			
			// Wooting cough
			{ symptom: "The animal coughs regularly.", diagnosis: [Disease.WootingCough] },
			{ symptom: "The animal's body is slightly swollen.", diagnosis: [Disease.WootingCough] }
		]
	}
}

export const symptomsAsList = Object.entries(symptoms).flatMap(([bodyPart, { prefix, symptoms }]) => 
	symptoms.map(symptomObj => 
		({ ...symptomObj, fullText:prefix+symptomObj.symptom, bodyPart:bodyPart as BodyPart })
	)
);