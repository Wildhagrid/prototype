export interface ScenarioOption {
  id: number;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export const scenarioOptions: ScenarioOption[] = [
  {
    id: 1,
    text: "1. Controleer direct de inhoud van de beschadigde doos om te zien of het product nog bruikbaar is.",
    isCorrect: false,
    feedback: "Goed dat je de inhoud wilt controleren, maar je moet de schade eerst registreren om het proces correct te volgen.",
  },
  {
    id: 2,
    text: "2. Noteer de schade in het systeem en meld dit aan je leidinggevende voordat je de doos verder verwerkt.",
    isCorrect: true,
    feedback: "Correct! Het registreren van de schade en dit melden zorgt voor een juiste administratieve afhandeling en voorkomt kwaliteitsproblemen later in het proces.",
  },
  {
    id: 3,
    text: "3. Negeer de schade en plaats de doos bij de rest van de levering.",
    isCorrect: false,
    feedback: "Dit is niet de juiste aanpak. Het negeren van schade kan leiden tot problemen in latere processen en een risico vormen voor de klant.",
  },
];