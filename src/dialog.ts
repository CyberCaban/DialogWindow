export type dialogStages = {
  speaker: string;
  line: string;
  event?: event;
};

export type event = {
  eventType: eventType;
};

export type eventType = {
  imageURL?: string;
  soundURL?: string;
};

export type dialogId = string;

export type Dialogs = Record<dialogId, dialogStages[]>;

export enum Names {
  Fuuka = "Fuuka",
  Junpei = "Junpei",
  Yukari = "Yukari",
  UnknownMan = "Unknown man",
  QuestionMark = "???",
}

export const dialogs: Dialogs = {
  "test 1": [
    { speaker: Names.Fuuka, line: "Tell 'em to bring out the whole ocean!" },
    { speaker: Names.Junpei, line: "Let's go golfing!" },
    { speaker: Names.Yukari, line: "Life is roblox" },
  ],

  "test 2": [
    {
      speaker: Names.UnknownMan,
      line: 'A letter from Mr. Osaki asks "how do i get rid of these nasty roaches?"',
    },
    {
      speaker: Names.UnknownMan,
      line: "Easy. Just burn your house down.",
    },
  ],

  "test 3": [
    {
      speaker: Names.QuestionMark,
      line: "Join Covenant? (abandons former Covenant) ",
      event: {
        eventType: {
          imageURL: "./images/join covenant.jpg",
          soundURL: "./sounds/A Moment's Peace.mp3",
        },
      },
    },
    {
      speaker: Names.QuestionMark,
      line: "You joined Covenant. (abandoned former Covenant)",
      event: {
        eventType: {
          imageURL: "./images/joined covenant.jpg",
        },
      },
    },
  ],
} as const;
