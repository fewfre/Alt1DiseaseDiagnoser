import { objectEntriesCast, objectKeysCast } from "../utils/utils";

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

type GameLang = "en" | "pt";
type GameLangMap = Record<GameLang, string | undefined>;

export const diseaseList = [Disease.FootInMouth, Disease.Flu, Disease.Curse, Disease.DryNose, Disease.BoneRattle, Disease.WootingCough];

export const symptoms:Record<BodyPart, { prefix:GameLangMap, symptoms:Array<{ symptom:GameLangMap, diagnosis:Array<Disease> }> }> = {
	[BodyPart.Head]: {
		prefix: { en:"You examine the animal's head: ", pt:"Você examina a cabeça do animal: " },
		symptoms: [
			// Multiple
			//////////////////////////////////
			
			{
				symptom: {
					en: "You can't seem to spot anything immediately obvious.",
					pt: "Você não vê nada preocupante de imediato.",
				},
				diagnosis: [Disease.FootInMouth, Disease.Flu, Disease.Curse, Disease.DryNose, Disease.BoneRattle, Disease.WootingCough] // All except DryNose
			},
			{
				symptom: {
					en: "The animal's nose seems fine.",
					pt: "O nariz do animal parece bem.",
				},
				diagnosis: [Disease.BoneRattle, Disease.WootingCough]
			},
			
			// Foot-in-mouth
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal keeps making noises at embarrassing moments, making it difficult to investigate.",
					pt: "O animal faz barulhos em momentos constrangedores, dificultando a investigação.",
				},
				diagnosis: [Disease.FootInMouth]
			},
			{
				symptom: {
					en: "The animal's breath smells oddly like socks.",
					pt: "O bafo deste animal tem cheiro de meia suja.",
				},
				diagnosis: [Disease.FootInMouth]
			},
			{
				symptom: {
					en: "The gums appear to be a little sore.",
					pt: "As gengivas parecem estar doloridas.",
				},
				diagnosis: [Disease.FootInMouth]
			},
			{
				symptom: {
					en: "There are some nasty looking marks along the gum line.",
					pt: "Tem umas marcas nojentas na gengiva.",
				},
				diagnosis: [Disease.FootInMouth]
			},
			
			// Flu
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal appears to be suffering from a small fever.",
					pt: "Parece que o animal está com um pouco de febre.",
				},
				diagnosis: [Disease.Flu]
			},
			{
				symptom: {
					en: "The animal coughs in your face.",
					pt: "O animal tosse na sua cara.",
				},
				diagnosis: [Disease.Flu]
			},
			{
				symptom: {
					en: "The animal sneezes in your face.",
					pt: "O animal espirra na sua cara.",
				},
				diagnosis: [Disease.Flu]
			},
			{
				symptom: {
					en: "The animal's breath smells deeply unpleasant.",
					pt: "O bafo deste animal tem um cheiro horrível.",
				},
				diagnosis: [Disease.Flu]
			},
			
			// Curse
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal occasionally mumbles something in a language it can't possibly speak.",
					pt: "O animal murmura algo numa língua que é impossível que ele possa falar.",
				},
				diagnosis: [Disease.Curse]
			},
			{
				symptom: {
					en: "The animal's breath smells faintly of sulphur.",
					pt: "O bafo deste animal tem um leve cheiro de enxofre.",
				},
				diagnosis: [Disease.Curse]
			},
			{
				symptom: {
					en: "The animal's nose is lumpy, like it's grown warts.",
					pt: "O nariz do animal está grumoso, como se tivessem crescido verrugas.",
				},
				diagnosis: [Disease.Curse]
			},
			{
				symptom: {
					en: "There is a faint light deep within the animal's throat.",
					pt: "Há uma luz fraca vindo da garganta do animal.",
				},
				diagnosis: [Disease.Curse]
			},
			
			// Dry nose
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal's nose is very dry.",
					pt: "O nariz do animal está muito seco.",
				},
				diagnosis: [Disease.DryNose]
			},
			{
				symptom: {
					en: "The animal refuses to let you see its nose, it seems like the nose is quite sore.",
					pt: "O animal se recusa a deixar você examinar seu nariz. Parece que o nariz está muito dolorido.",
				},
				diagnosis: [Disease.DryNose]
			},
			
			// Bone rattle
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal's breath smells normal, which is to say horrible.",
					pt: "O hálito do animal tem cheiro normal, ou seja, cheira mal.",
				},
				diagnosis: [Disease.BoneRattle]
			},
			{
				symptom: {
					en: "The animal's teeth click in a sinister manner.",
					pt: "Os dentes do animal rangem de um jeito sinistro.",
				},
				diagnosis: [Disease.BoneRattle]
			},
			{
				symptom: {
					en: "The gums appear to be healthy.",
					pt: "As gengivas parecem estar saudáveis.",
				},
				diagnosis: [Disease.BoneRattle]
			},
			
			// Wooting cough
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal coughs as you try and examine it.",
					pt: "O animal tosse quando você tenta examiná-lo.",
				},
				diagnosis: [Disease.WootingCough]
			},
			{
				symptom: {
					en: "The animal coughs loudly in a 'hu hu huuu' style.",
					pt: "O animal tosse alto, fazendo 'hu hu huuu'.",
				},
				diagnosis: [Disease.WootingCough]
			},
			{
				symptom: {
					en: "The animal's breath smells normal.",
					pt: "O bafo deste animal tem cheiro normal.",
				},
				diagnosis: [Disease.WootingCough] }
		]
	},
	[BodyPart.Eyes]: {
		prefix: { en:"You examine the animal's eyes: ", pt:"Você examina os olhos do animal: " },
		symptoms: [
			// Multiple
			//////////////////////////////////
			
			{
				symptom: {
					en: "You can't seem to spot anything immediately obvious.",
					pt: "Você não vê nada preocupante de imediato.",
				},
				diagnosis: [Disease.FootInMouth, Disease.Flu, Disease.Curse, Disease.DryNose, Disease.BoneRattle] // all but WootingCough
			},
			
			// special case since en has "flu" with unique text, but pt doesn't, and has all 3 with same text
			{
				symptom: { en: "The animal's eyes are a little bloodshot.", pt: undefined },
				diagnosis: [Disease.Curse, Disease.WootingCough], // curse or wooting
			},
			{
				symptom: { pt: "Os olhos estão um pouco vermelhos.", en: undefined },
				diagnosis: [Disease.Flu, Disease.Curse, Disease.WootingCough], // flu, curse, or wooting
			},
			
			{
				symptom: {
					en: "The animal's eyes seem fine.",
					pt: "Os olhos do animal parecem bem.",
				},
				diagnosis: [Disease.DryNose, Disease.BoneRattle] // dry or bone rattle
			},
			
			// Foot-in-mouth
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal's eyes seem normal.",
					pt: "Os olhos do animal parecem normais.",
				},
				diagnosis: [Disease.FootInMouth]
			},
			
			// Flu
			//////////////////////////////////
			
			{
				symptom: {
					en: "The eyes are a little bloodshot.",
					pt: undefined, // pt for w/e reason doesn't have this?
				},
				diagnosis: [Disease.Flu]
			},
			
			// Curse
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal's eyes are faintly glowing.",
					pt: "Os olhos do animal estão emitindo um brilho sutil.",
				},
				diagnosis: [Disease.Curse]
			},
			{
				symptom: {
					en: "The animal's eyes are filled with uncharacteristic malice.",
					pt: "Os olhos do animal estão cheios de malícia atípica.",
				},
				diagnosis: [Disease.Curse]
			},
			{
				symptom: {
					en: "The animal's eyes seem a little glazed over.",
					pt: "Os olhos do animal parecem um pouco vidrados.",
				},
				diagnosis: [Disease.Curse]
			},
			
			// Dry nose
			//////////////////////////////////
			
			// Bone rattle
			//////////////////////////////////
			
			// Wooting cough
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal's eyes are filled with mirth, more mirth than normal.",
					pt: "Os olhos do animal estão cheios de alegria, mais do que o normal.",
				},
				diagnosis: [Disease.WootingCough]
			},
			{
				symptom: {
					en: "The animal's eyes keep darting around the place with a sense of wonder.",
					pt: "O animal fica olhando de um lado para o outro, maravilhado.",
				},
				diagnosis: [Disease.WootingCough]
			}
		]
	},
	[BodyPart.Legs]: {
		prefix: { en:"You examine the animal's legs: ", pt:"Você examina as pernas do animal: " },
		symptoms: [
			// Multiple
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal's feet are faintly chewed on.",
					pt: "Os pés do animal estão levemente roídos.",
				},
				diagnosis: [Disease.FootInMouth, Disease.Curse]
			},
			{
				symptom: {
					en: "The animal's feet seem a little scuffed.",
					pt: "Os pés do animal parecem um pouco arranhados.",
				},
				diagnosis: [Disease.FootInMouth, Disease.Curse]
			},
			{
				symptom: {
					en: "The animal's feet seem fine.",
					pt: "Os pés do animal parecem bem.",
				},
				diagnosis: [Disease.FootInMouth, Disease.Flu, Disease.Curse, Disease.DryNose] // all but BoneRattle or WootingCough
			},
			{
				symptom: {
					en: "You can't seem to spot anything immediately obvious.",
					pt: "Você não vê nada preocupante de imediato.",
				},
				diagnosis: [Disease.FootInMouth, Disease.Flu, Disease.Curse, Disease.DryNose] // all but BoneRattle or WootingCough
			},
			
			// Foot-in-mouth
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal's feet are a little soggy for some reason.",
					pt: "Os pés estão um pouco úmidos por algum motivo.",
				},
				diagnosis: [Disease.FootInMouth]
			},
			
			// Flu
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal's feet are clammy.",
					pt: "Os pés do animal estão frios e úmidos.",
				},
				diagnosis: [Disease.Flu]
			},
			{
				symptom: {
					en: "The animal's feet are very sweaty.",
					pt: "Os pés do animal estão muito suados.",
				},
				diagnosis: [Disease.Flu]
			},
			{
				symptom: {
					en: "The animal's feet are very warm to the touch.",
					pt: "Os pés do animal estão muito quentes ao toque.",
				},
				diagnosis: [Disease.Flu]
			},
			
			// Curse
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal's feet are tapping to a strange rhythm. It's unsettling.",
					pt: "Os pés do animal estão batendo num ritmo estranho. É perturbador.",
				},
				diagnosis: [Disease.Curse]
			},
			
			// Dry nose
			//////////////////////////////////
			
			// Bone rattle
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal's legs click as it walks.",
					pt: "As pernas do animal estalam conforme ele anda.",
				},
				diagnosis: [Disease.BoneRattle]
			},
			{
				symptom: {
					en: "The animal's legs seem a little stiff.",
					pt: "As pernas do animal parecem um pouco rígidas.",
				},
				diagnosis: [Disease.BoneRattle]
			},
			
			// Wooting cough
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal is a little unsteady on its feet.",
					pt: "O animal está com as pernas um pouco trêmulas.",
				},
				diagnosis: [Disease.WootingCough]
			},
			{
				symptom: {
					en: "The animal's legs seem fine.",
					pt: "As pernas do animal parecem bem.",
				},
				diagnosis: [Disease.WootingCough]
			}
		]
	},
	[BodyPart.Stomach]: {
		prefix: { en:"You examine the animal's stomach: ", pt:"Você examina o estômago do animal: " },
		symptoms: [
			// Multiple
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal doesn't appear to be in gastronomic distress.",
					pt: "O animal não parece estar com dores gastrointestinais.",
				},
				diagnosis: [] // Could be anything
			},
			{
				symptom: {
					en: "The animal has a bit of gas, but nothing too concerning.",
					pt: "O animal tem um pouco de gases, mas nada muito preocupante.",
				},
				diagnosis: [] // Could be anything
			},
			{
				symptom: {
					en: "You can't seem to spot anything immediately obvious.",
					pt: "Você não vê nada preocupante de imediato.",
				},
				diagnosis: [] // Could be anything
			},
			{
				symptom: {
					en: "The animal seems off its food.",
					pt: "O animal parece estranhar sua comida.",
				},
				diagnosis: [Disease.Flu, Disease.Curse]
			},
			
			// Foot-in-mouth
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal's emissions smell strangely of shoes.",
					pt: "As emissões do animal têm um cheiro parecido com o de sapatos.",
				},
				diagnosis: [Disease.FootInMouth]
			},
			{
				symptom: {
					en: "The animal's stomach appears to be a little bloated.",
					pt: "O estômago do animal parece estar um pouco inchado.",
				},
				diagnosis: [Disease.FootInMouth]
			},
			
			// Flu
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal appears to be suffering from nausea.",
					pt: "Parece que o animal tem náusea.",
				},
				diagnosis: [Disease.Flu]
			},
			
			// Curse
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal's stomach is making strange noises, like there's something singing inside there.",
					pt: "O estômago do animal está fazendo barulhos estranhos, como se tivesse algo cantando dentro dele.",
				},
				diagnosis: [Disease.Curse]
			},
			
			// Dry nose
			//////////////////////////////////
			
			// Bone rattle
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal appears to be shivering, but has no temperature.",
					pt: "O animal parece estar tremendo, mas não tem febre.",
				},
				diagnosis: [Disease.BoneRattle]
			},
			{
				symptom: {
					en: "The animal's body is making a weird clicking noise.",
					pt: "O corpo do animal está fazendo um barulho estranho de clique.",
				},
				diagnosis: [Disease.BoneRattle]
			},
			
			// Wooting cough
			//////////////////////////////////
			
			{
				symptom: {
					en: "The animal coughs regularly.",
					pt: "O animal tosse com frequência.",
				},
				diagnosis: [Disease.WootingCough]
			},
			{
				symptom: {
					en: "The animal's body is slightly swollen.",
					pt: "O estômago do animal parece estar um pouco inchado.",
				},
				diagnosis: [Disease.WootingCough]
			}
		]
	}
}

// Convert the multi-level list above into a map of flat objects
export const symptomsAsList = objectEntriesCast(symptoms).flatMap(([bodyPart, { prefix, symptoms }]) => 
	symptoms.flatMap(symptomObj => 
		objectKeysCast(symptomObj.symptom).filter(lang=>!!symptomObj.symptom[lang]).map(lang=>({
			...symptomObj, lang, symptom:symptomObj.symptom[lang]!, fullText:prefix[lang]+symptomObj.symptom[lang]!, bodyPart
		})),
	)
);