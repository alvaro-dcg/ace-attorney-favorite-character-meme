import { CharacterData } from "../interfaces/characters";
import { CLASSES, GAMES } from "../interfaces/classes";

export const characters_data: CharacterData = {
  // AA1

  "Phoenix Wright": [
    {game: GAMES.AA1, category: [CLASSES.DEFENSE, CLASSES.DEFENDANT], music: ["Phoenix Wright - Objection 2001"]},
    {game: GAMES.AA2, category: [CLASSES.DEFENSE], music: ["Phoenix Wright - Objection 2002"]},
    {game: GAMES.AA3, category: [CLASSES.DEFENSE], music: ["Phoenix Wright - Objection 2004"]},
    {game: GAMES.AA4, category: [CLASSES.DEFENSE]}
  ],

  "Mia Fey": [
    {game: GAMES.AA1, category: [CLASSES.DEFENSE, CLASSES.ASSISTANT, CLASSES.VICTIM]},
    {game: GAMES.AA3, category: [CLASSES.DEFENSE]}
  ],

  "Larry Butz": [
    {game: GAMES.AA1, category: [CLASSES.DEFENDANT, CLASSES.WITNESS]}
  ],

  "Cindy Stone": [
    {game: GAMES.AA1, category: [CLASSES.VICTIM]}
  ],

  "Winston Payne": [
    {game: GAMES.AA1, category: [CLASSES.PROSECUTOR]},
    {game: GAMES.AA2, category: [CLASSES.PROSECUTOR]}
  ],

  "Frank Sahwit": [
    {game: GAMES.AA1, category: [CLASSES.WITNESS, CLASSES.CULPRIT], breakdown: ["Frank Sahwit", "Frank Sahwit (2)"]}
  ],

  "Maya Fey": [
    {game: GAMES.AA1, category: [CLASSES.ASSISTANT, CLASSES.DEFENDANT], music: ["Maya Fey - Turnabout Sisters 2001"]},
    {game: GAMES.AA2, category: [CLASSES.ASSISTANT, CLASSES.DEFENDANT], music: ["Maya Fey - Turnabout Sisters 2002"]},
    {game: GAMES.AA3, category: [CLASSES.ASSISTANT, CLASSES.DEFENDANT]}
  ],

  "Dick Gumshoe": [
    {game: GAMES.AA1, category: [CLASSES.DETECTIVE, CLASSES.WITNESS], music: ["Dick Gumshoe - That's 'Detective Gumshoe', Pal!"]},
    {game: GAMES.AA2, category: [CLASSES.DETECTIVE, CLASSES.WITNESS]},
    {game: GAMES.AA3, category: [CLASSES.DETECTIVE, CLASSES.WITNESS]},
    {game: GAMES.AA4, category: [CLASSES.DETECTIVE, CLASSES.WITNESS]},
    {game: GAMES.AAI1, category: [CLASSES.DETECTIVE, CLASSES.DEFENDANT, CLASSES.ASSISTANT], music: ["Dick Gumshoe - You Can Count on Me, Sir!"]},
    {game: GAMES.AAI2, category: [CLASSES.DETECTIVE, CLASSES.ASSISTANT]}
  ],

  "Miles Edgeworth": [
    {game: GAMES.AA1, category: [CLASSES.PROSECUTOR, CLASSES.DEFENDANT]},
    {game: GAMES.AA2, category: [CLASSES.PROSECUTOR], music: ["Triumphant Return - Miles Edgeworth"]},
    {game: GAMES.AA3, category: [CLASSES.PROSECUTOR, CLASSES.DEFENSE]},
    {game: GAMES.AAI1, category: [CLASSES.PROSECUTOR, CLASSES.DEFENDANT], music: ["Miles Edgeworth - Objection! 2009"]},
    {game: GAMES.AAI2, category: [CLASSES.PROSECUTOR], music: ["Miles Edgeworth - Objection! 2011"]}
  ],

  "April May": [
    {game: GAMES.AA1, category: [CLASSES.WITNESS, CLASSES.CULPRIT]}
  ],

  "Marvin Grossberg": [
    {game: GAMES.AA1, category: [CLASSES.DEFENSE], music: ["Marvin Grossberg - Reckonings and Regrets of an Aged Attorney"]}
  ],

  "Bellboy": [
    {game: GAMES.AA1, category: [CLASSES.WITNESS]}
  ],

  "Redd White": [
    {game: GAMES.AA1, category: [CLASSES.WITNESS, CLASSES.CULPRIT]}
  ],

  "Will Powers": [
    {game: GAMES.AA1, category: [CLASSES.DEFENDANT]},
    {game: GAMES.AA2, category: [CLASSES.WITNESS]},
    {game: GAMES.AAI2, category: []}
  ],

  "Wendy Oldbag": [
    {game: GAMES.AA1, category: [CLASSES.WITNESS]},
    {game: GAMES.AA2, category: [CLASSES.WITNESS]}
  ],

  "Jack Hammer": [
    {game: GAMES.AA1, category: [CLASSES.VICTIM]}
  ],

  "Penny Nichols": [
    {game: GAMES.AA1, category: []},
    {game: GAMES.AAI2, category: []}
  ],

  "Sal Manella": [
    {game: GAMES.AA1, category: [CLASSES.WITNESS]}
  ],

  "Cody Hackins": [
    {game: GAMES.AA1, category: [CLASSES.WITNESS], breakdown: ["Cody Hackins"]}
  ],

  "Dee Vasquez": [
    {game: GAMES.AA1, category: [CLASSES.WITNESS, CLASSES.CULPRIT]}
  ],

  "Mia Fey (Maya)": [
    {game: GAMES.AA1, category: [CLASSES.DEFENSE, CLASSES.ASSISTANT]},
    {game: GAMES.AA2, category: [CLASSES.DEFENSE, CLASSES.ASSISTANT]},
    {game: GAMES.AA3, category: [CLASSES.DEFENSE, CLASSES.ASSISTANT]}
  ],

  "Lotta Hart": [
    {game: GAMES.AA1, category: [CLASSES.WITNESS]},
    {game: GAMES.AA2, category: [CLASSES.WITNESS]},
    {game: GAMES.AAI2, category: [CLASSES.WITNESS]}
  ],

  "Larry Butz (Santa)": [
    {game: GAMES.AA1, category: [CLASSES.WITNESS]}
  ],

  "Robert Hammond": [
    {game: GAMES.AA1, category: [CLASSES.VICTIM, CLASSES.DEFENSE]}
  ],

  "Gregory Edgeworth": [
    {game: GAMES.AA1, category: [CLASSES.VICTIM, CLASSES.DEFENSE]},
    {game: GAMES.AAI2, category: [CLASSES.DEFENSE], music: ["Gregory Edgeworth - A Veteran Attorney's Wisdom"]}
  ],

  "Manfred von Karma": [
    {game: GAMES.AA1, category: [CLASSES.PROSECUTOR, CLASSES.CULPRIT], breakdown: ["Manfred von Karma"]},
    {game: GAMES.AAI1, category: [CLASSES.PROSECUTOR]},
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.PROSECUTOR]}
  ],

  "Yanni Yogi": [
    {game: GAMES.AA1, category: [CLASSES.WITNESS, CLASSES.CULPRIT]}
  ],

  "Polly": [
    {game: GAMES.AA1, category: [CLASSES.WITNESS]}
  ],

  "Ema Skye": [
    {game: GAMES.AA1, category: [CLASSES.ASSISTANT, CLASSES.WITNESS], music: ["Ema Skye - Turnabout Sisters 2005"]}
  ],

  "Lana Skye": [
    {game: GAMES.AA1, category: [CLASSES.DEFENDANT, CLASSES.WITNESS]}
  ],

  "Angel Starr": [
    {game: GAMES.AA1, category: [CLASSES.WITNESS, CLASSES.DETECTIVE]}
  ],

  "Jake Marshall": [
    {game: GAMES.AA1, category: [CLASSES.WITNESS, CLASSES.DETECTIVE], music: ["Jake Marshall - Renegade Sheriff"]}
  ],

  "Bruce Goodman": [
    {game: GAMES.AA1, category: [CLASSES.VICTIM, CLASSES.DETECTIVE]}
  ],

  "Damon Gant": [
    {game: GAMES.AA1, category: [CLASSES.WITNESS, CLASSES.CULPRIT], music:["Damon Gant - Swimming, Anyone"]}
  ],

  "Mike Meekins": [
    {game: GAMES.AA1, category: [CLASSES.WITNESS]},
    {game: GAMES.AA4, category: []},
    {game: GAMES.AAI1, category: [CLASSES.WITNESS, CLASSES.DEFENDANT]}
  ],

  "Joe Darke": [
    {game: GAMES.AA1, category: [CLASSES.CULPRIT, CLASSES.VICTIM]}
  ],

  "Neil Marshall": [
    {game: GAMES.AA1, category: [CLASSES.VICTIM]}
  ],


  //AA2

  "Maggey Byrde": [
    {game: GAMES.AA2, category: [CLASSES.ASSISTANT, CLASSES.DEFENDANT]}
  ],

  "Dustin Prince": [
    {game: GAMES.AA2, category: [CLASSES.VICTIM]}
  ],

  "Richard Wellington": [
    {game: GAMES.AA2, category: [CLASSES.CULPRIT, CLASSES.WITNESS], breakdown: ["Richard Wellington"]}
  ],

  "Turner Grey": [
    {game: GAMES.AA2, category: [CLASSES.VICTIM]}
  ],

  "Pearl Fey": [
    {game: GAMES.AA2, category: [CLASSES.ASSISTANT], music: ["Pearl Fey - With Pearly"]},
    {game: GAMES.AA3, category: [CLASSES.ASSISTANT]}
  ],

  "Morgan Fey": [
    {game: GAMES.AA2, category: [CLASSES.CULPRIT, CLASSES.WITNESS]},
    {game: GAMES.AA3, category: [CLASSES.CULPRIT]}
  ],

  "Ini Miney": [
    {game: GAMES.AA2, category: [CLASSES.VICTIM]}
  ],

  "Mimi Miney": [
    {game: GAMES.AA2, category: [CLASSES.WITNESS, CLASSES.CULPRIT]}
  ],

  "Mia Fey (Pearl)": [
    {game: GAMES.AA2, category: [CLASSES.DEFENSE, CLASSES.ASSISTANT]},
    {game: GAMES.AA3, category: [CLASSES.DEFENSE, CLASSES.ASSISTANT]}
  ],

  "Franziska von Karma": [
    {game: GAMES.AA2, category: [CLASSES.PROSECUTOR], music: ["Triumphant Return - Franziska von Karma"]},
    {game: GAMES.AA3, category: [CLASSES.PROSECUTOR]},
    {game: GAMES.AAI1, category: [CLASSES.WITNESS, CLASSES.PROSECUTOR, CLASSES.ASSISTANT, CLASSES.DEFENDANT]},
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.PROSECUTOR]}
  ],

  "Director Hotti-Hickfield": [
    {game: GAMES.AA2, category: []},
    {game: GAMES.AA4, category: []}
  ],

  "Max Galactica": [
    {game: GAMES.AA2, category: [CLASSES.DEFENDANT]}
  ],

  "Regina Berry": [
    {game: GAMES.AA2, category: []},
    {game: GAMES.AAI2, category: []}
  ],

  "Russell Berry": [
    {game: GAMES.AA2, category: []}
  ],

  "Benjamin Woodman": [
    {game: GAMES.AA2, category: [CLASSES.WITNESS]}
  ],

  "Trilo Quist": [
    {game: GAMES.AA2, category: [CLASSES.WITNESS]}
  ],

  "Moe": [
    {game: GAMES.AA2, category: [CLASSES.WITNESS]}
  ],

  "Acro": [
    {game: GAMES.AA2, category: [CLASSES.WITNESS, CLASSES.CULPRIT], breakdown: ["Acro"]}
  ],

  "Bat": [
    {game: GAMES.AA2, category: [CLASSES.VICTIM]}
  ],

  "Juan Corrida": [
    {game: GAMES.AA2, category: [CLASSES.VICTIM]}
  ],

  "Matt Engarde": [
    {game: GAMES.AA2, category: [CLASSES.WITNESS, CLASSES.CULPRIT, CLASSES.DEFENDANT]},
  ],

  "Matt Engarde (True Self)": [
    {game: GAMES.AA2, category: [CLASSES.WITNESS, CLASSES.CULPRIT, CLASSES.DEFENDANT], breakdown: ["Matt Engarde (True Self)"]}
  ],

  "Adrian Andrews": [
    {game: GAMES.AA2, category: [CLASSES.WITNESS]}
  ],

  "Celeste Inpax": [
    {game: GAMES.AA2, category: [CLASSES.VICTIM]}
  ],

  "Shelly de Killer (Bellboy)": [
    {game: GAMES.AA2, category: [CLASSES.CULPRIT]}
  ],

  "Shelly de Killer": [
    {game: GAMES.AA2, category: [CLASSES.CULPRIT], music: ["Shelly de Killer - A Deadly Gentleman's Delight"]}
  ],

  "Shelly de Killer (Radio)": [
    {game: GAMES.AA2, category: [CLASSES.WITNESS, CLASSES.CULPRIT]}
  ],


  //AA3

  "Marvin Grossberg (hemorrhoids)": [
    {game: GAMES.AA3, category: [CLASSES.ASSISTANT, CLASSES.DEFENSE]}
  ],

  "Phoenix Wright (College)": [
    {game: GAMES.AA3, category: [CLASSES.DEFENDANT, CLASSES.WITNESS]}
  ],

  "Doug Swallow": [
    {game: GAMES.AA3, category: [CLASSES.VICTIM]}
  ],

  "Dahlia Hawthorne": [
    {game: GAMES.AA3, category: [CLASSES.WITNESS, CLASSES.CULPRIT], music: ["Dahlia Hawthorne - The Visage of What Once Was"]}
  ],

  "Winston Payne (younger)": [
    {game: GAMES.AA3, category: [CLASSES.PROSECUTOR]}
  ],

  "Adrian Andrews (new job)": [
    {game: GAMES.AA3, category: []}
  ],

  "Mask☆DeMasque": [
    {game: GAMES.AA3, category: [], music: ["Mask☆DeMasque - Please Listen to Meeeee!"]}
  ],

  "Luke Atmey": [
    {game: GAMES.AA3, category: [CLASSES.WITNESS, CLASSES.CULPRIT, CLASSES.DETECTIVE], music:["Luke Atmey - Look at Me"]}
  ],

  "Ron DeLite": [
    {game: GAMES.AA3, category: [CLASSES.WITNESS, CLASSES.DEFENDANT]}
  ],

  "Desirée DeLite": [
    {game: GAMES.AA3, category: []}
  ],

  "Larry Butz (Security Guard)": [
    {game: GAMES.AA3, category: [], music:["Larry Butz - When Something Smells, It's Usually Me"]}
  ],

  "Godot": [
    {game: GAMES.AA3, category: [CLASSES.PROSECUTOR, CLASSES.CULPRIT], music: ["Godot - The Fragrance of Dark Coffee"]}
  ],

  "Kane Bullard": [
    {game: GAMES.AA3, category: [CLASSES.VICTIM]}
  ],

  "Maggey Byrde (Waitress)": [
    {game: GAMES.AA3, category: [CLASSES.DEFENDANT]}
  ],

  "Jean Armstrong": [
    {game: GAMES.AA3, category: [CLASSES.WITNESS]}
  ],

  "Glen Elg": [
    {game: GAMES.AA3, category: [CLASSES.VICTIM]}
  ],

  "Victor Kudo": [
    {game: GAMES.AA3, category: [CLASSES.WITNESS], music: ["Victor Kudo - Martial Anthem of Misery"]}
  ],

  "Maya Fey (waitress)": [
    {game: GAMES.AA3, category: [CLASSES.ASSISTANT]}
  ],

  "Mia Fey (waitress)": [
    {game: GAMES.AA3, category: [CLASSES.DEFENSE, CLASSES.ASSISTANT]}
  ],

  "Lisa Basil": [
    {game: GAMES.AA3, category: []}
  ],

  "Viola Cadaverini": [
    {game: GAMES.AA3, category: [], music: ["Reminiscences - Violetta Vitriol"]}
  ],

  "Furio Tigre": [
    {game: GAMES.AA3, category: [CLASSES.WITNESS, CLASSES.CULPRIT, CLASSES.DEFENSE], music: ["Furio Tigre - Swingin' Tiger"]}
  ],

  "Bruto Cadaverini": [
    {game: GAMES.AA3, category: []}
  ],

  "Terry Fawles": [
    {game: GAMES.AA3, category: [CLASSES.DEFENDANT, CLASSES.WITNESS, CLASSES.VICTIM]}
  ],

  "Valerie Hawthorne": [
    {game: GAMES.AA3, category: [CLASSES.VICTIM]}
  ],

  "Diego Armando": [
    {game: GAMES.AA3, category: [CLASSES.DEFENSE, CLASSES.ASSISTANT]}
  ],

  "Miles Edgeworth (new prosecutor)": [
    {game: GAMES.AA3, category: [CLASSES.PROSECUTOR]}
  ],

  "Dick Gumshoe (new detective)": [
    {game: GAMES.AA3, category: [CLASSES.DETECTIVE, CLASSES.WITNESS]},
    {game: GAMES.AAI1, category: [CLASSES.WITNESS]}
  ],

  "Bikini": [
    {game: GAMES.AA3, category: [CLASSES.WITNESS]}
  ],

  "Misty Fey": [
    {game: GAMES.AA3, category: [CLASSES.VICTIM], music: ["Elise Deauxnim - A Gentle Melody"]}
  ],

  "Iris": [
    {game: GAMES.AA3, category: [CLASSES.DEFENDANT]}
  ],

  "Larry Butz (Laurice Deauxnim)": [
    {game: GAMES.AA3, category: [CLASSES.WITNESS]},
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.DEFENDANT]}
  ],


  //AA4

  "Apollo Justice": [
    {game: GAMES.AA4, category: [CLASSES.DEFENSE], music: ["Apollo Justice - A New Era Begins!"]},
    {game: GAMES.AA5, category: [CLASSES.DEFENSE, CLASSES.ASSISTANT], music: ["Apollo Justice - A New Era Begins! 2013"]},
    {game: GAMES.AA6, category: [CLASSES.DEFENSE], music: ["Apollo Justice - A New Era Begins! 2016"]}
  ],

  "Kristoph Gavin": [
    {game: GAMES.AA4, category: [CLASSES.DEFENSE, CLASSES.ASSISTANT, CLASSES.WITNESS, CLASSES.CULPRIT], breakdown: ["Kristoph Gavin", "Kristoph Gavin (2)"]}
  ],

  "Phoenix Wright (hobo)": [
    {game: GAMES.AA4, category: [CLASSES.DEFENDANT, CLASSES.WITNESS, CLASSES.ASSISTANT]}
  ],

  "Shadi Smith": [
    {game: GAMES.AA4, category: [CLASSES.VICTIM]}
  ],

  "Winston Payne (long hair)": [
    {game: GAMES.AA4, category: [CLASSES.PROSECUTOR]}
  ],

  "Olga Orly": [
    {game: GAMES.AA4, category: [CLASSES.WITNESS], breakdown: ["Olga Orly"]}
  ],

  "Olga 'Quick-Fingers' Orly": [
    {game: GAMES.AA4, category: [CLASSES.WITNESS], breakdown: ["Olga 'Quick-Fingers' Orly"]}
  ],

  "Trucy Wright": [
    {game: GAMES.AA4, category: [CLASSES.ASSISTANT], music: ["Trucy's Theme - Child of Magic"]},
    {game: GAMES.AA5, category: [CLASSES.ASSISTANT], music: ["Trucy's Theme - Child of Magic 2013"]},
    {game: GAMES.AA6, category: [CLASSES.DEFENDANT, CLASSES.WITNESS]}
  ],

  "Guy Eldoon": [
    {game: GAMES.AA4, category: []}
  ],

  "Plum Kitaki": [
    {game: GAMES.AA4, category: []}
  ],

  "Alita Tiala": [
    {game: GAMES.AA4, category: [CLASSES.WITNESS, CLASSES.CULPRIT], breakdown: ["Alita Tiala"]}
  ],

  "Ema Skye (detective)": [
    {game: GAMES.AA4, category: [CLASSES.DETECTIVE, CLASSES.WITNESS], music: ["Ema Skye - Science-Minded Detective"]},
    {game: GAMES.AA6, category: [CLASSES.DETECTIVE, CLASSES.WITNESS], music: ["Ema Skye - Science-Minded Detective 2016"]}
  ],

  "Wocky Kitaki": [
    {game: GAMES.AA4, category: [CLASSES.DEFENDANT, CLASSES.WITNESS]}
  ],

  "Klavier Gavin": [
    {game: GAMES.AA4, category: [CLASSES.PROSECUTOR], music: ["Klavier Gavin - Guilty Love"]},
    {game: GAMES.AA5, category: [CLASSES.PROSECUTOR]}
  ],

  "Pal Meraktis": [
    {game: GAMES.AA4, category: [CLASSES.VICTIM]}
  ],

  "Winfred Kitaki": [
    {game: GAMES.AA4, category: []}
  ],

  "Wesley Stickler": [
    {game: GAMES.AA4, category: [CLASSES.WITNESS], breakdown: ["Wesley Stickler"]}
  ],

  "Romein LeTouse": [
    {game: GAMES.AA4, category: [CLASSES.VICTIM]}
  ],

  "Lamiroir": [
    {game: GAMES.AA4, category: [CLASSES.WITNESS], music: ["Lamiroir - Landscape Painter in Sound"]}
  ],

  "Machi Tobaye": [
    {game: GAMES.AA4, category: [CLASSES.WITNESS]}
  ],

  "Daryan Crescend": [
    {game: GAMES.AA4, category: [CLASSES.DETECTIVE, CLASSES.WITNESS, CLASSES.CULPRIT], breakdown: ["Daryan Crescend"]}
  ],

  "Valant Gramarye": [
    {game: GAMES.AA4, category: []}
  ],

  "Trucy Enigmar": [
    {game: GAMES.AA4, category: []}
  ],

  "Vera Misham": [
    {game: GAMES.AA4, category: [CLASSES.DEFENDANT, CLASSES.WITNESS]}
  ],

  "Vera Misham (12 yo)": [
    {game: GAMES.AA4, category: []}
  ],

  "Drew Misham": [
    {game: GAMES.AA4, category: [CLASSES.VICTIM]}
  ],

  "Valant Gramarye (younger)": [
    {game: GAMES.AA4, category: [CLASSES.WITNESS]}
  ],

  "Spark Brushel": [
    {game: GAMES.AA4, category: [CLASSES.WITNESS]}
  ],

  "Klavier Gavin (new prosecutor)": [
    {game: GAMES.AA4, category: [CLASSES.PROSECUTOR]}
  ],

  "Zak Gramarye": [
    {game: GAMES.AA4, category: [CLASSES.DEFENDANT]}
  ],

  "Magnifi Gramarye": [
    {game: GAMES.AA4, category: [CLASSES.VICTIM]}
  ],

  "Thalassa Gramarye": [
    {game: GAMES.AA4, category: []}
  ],


  //AA5

  "Athena Cykes": [
    {game: GAMES.AA5, category: [CLASSES.DEFENSE, CLASSES.ASSISTANT, CLASSES.DEFENDANT], music: ["Athena Cykes - Let's Do This!", "Athena Cykes - Courtroom Révolutionnaire"]},
    {game: GAMES.AA6, category: [CLASSES.DEFENSE, CLASSES.ASSISTANT], music: ["Athena Cykes - Courtroom Révolutionnaire 2016"]}
  ],

  "Apollo Justice (bandaged)": [
    {game: GAMES.AA5, category: [CLASSES.DEFENSE, CLASSES.WITNESS]}
  ],

  "Juniper Woods": [
    {game: GAMES.AA5, category: [CLASSES.WITNESS, CLASSES.DEFENDANT]}
  ],

  "Candice Arme": [
    {game: GAMES.AA5, category: [CLASSES.VICTIM, CLASSES.DETECTIVE]}
  ],

  "Phoenix Wright (back to abogacy)": [
    {game: GAMES.AA5, category: [CLASSES.DEFENSE], music: ["Phoenix Wright - Objection 2013"]},
    {game: GAMES.AA6, category: [CLASSES.DEFENSE], music: ["Phoenix Wright - Objection 2016"]}
  ],

  "Gaspen Payne": [
    {game: GAMES.AA5, category: [CLASSES.PROSECUTOR]}
  ],

  "Ted Tonate": [
    {game: GAMES.AA5, category: [CLASSES.WITNESS, CLASSES.CULPRIT], breakdown: ["Ted Tonate"]}
  ],

  "Jinxie Tenma": [
    {game: GAMES.AA5, category: [CLASSES.WITNESS]}
  ],

  "The Amazing Nine-Tails": [
    {game: GAMES.AA5, category: []}
  ],

  "Damian Tenma": [
    {game: GAMES.AA5, category: [CLASSES.DEFENDANT, CLASSES.WITNESS]}
  ],

  "Rex Kyubi": [
    {game: GAMES.AA5, category: [CLASSES.VICTIM]}
  ],

  "Phineas Filch": [
    {game: GAMES.AA5, category: [CLASSES.WITNESS]}
  ],

  "Bobby Fulbright": [
    {game: GAMES.AA5, category: [CLASSES.DETECTIVE, CLASSES.WITNESS, CLASSES.VICTIM], music: ["Bobby Fullbright - In Justice We Trust!"]}
  ],

  "Florent L'Belle": [
    {game: GAMES.AA5, category: [CLASSES.WITNESS, CLASSES.CULPRIT], music: ["Je suis Florent L'Belle!"], breakdown: ["Florent L'Belle"]}
  ],

  "Simon Blackquill": [
    {game: GAMES.AA5, category: [CLASSES.PROSECUTOR, CLASSES.WITNESS], music: ["Simon Blackquill - Twisted Swordplay"]},
    {game: GAMES.AA6, category: [CLASSES.PROSECUTOR, CLASSES.ASSISTANT, CLASSES.WITNESS]}
  ],

  "Aristotle Means": [
    {game: GAMES.AA5, category: [CLASSES.WITNESS, CLASSES.CULPRIT, CLASSES.DEFENSE], breakdown: ["Aristotle Means"]}
  ],

  "Constance Courte": [
    {game: GAMES.AA5, category: [CLASSES.VICTIM]}
  ],

  "Juniper Woods (school uniform)": [
    {game: GAMES.AA5, category: [CLASSES.DEFENDANT]}
  ],

  "Hugh O'Conner": [
    {game: GAMES.AA5, category: [CLASSES.WITNESS, CLASSES.DEFENSE]}
  ],

  "Robin Newman": [
    {game: GAMES.AA5, category: [CLASSES.WITNESS, CLASSES.PROSECUTOR], breakdown: ["Robin Newman"]}
  ],

  "Robin Newman (true self)": [
    {game: GAMES.AA5, category: [CLASSES.WITNESS, CLASSES.PROSECUTOR]}
  ],

  "Myriam Scuttlebutt (with box)": [
    {game: GAMES.AA5, category: [CLASSES.WITNESS]}
  ],

  "Myriam Scuttlebutt": [
    {game: GAMES.AA5, category: [CLASSES.WITNESS]}
  ],

  "Clay Terran": [
    {game: GAMES.AA5, category: [CLASSES.VICTIM]}
  ],

  "Solomon Starbuck": [
    {game: GAMES.AA5, category: [CLASSES.DEFENDANT, CLASSES.WITNESS]}
  ],

  "Yuri Cosmos": [
    {game: GAMES.AA5, category: [CLASSES.WITNESS], music: ["Yuri Cosmos - The Director of the Center of the Cosmos"], breakdown: ["Yuri Cosmos"]}
  ],

  "Ponco": [
    {game: GAMES.AA5, category: [CLASSES.WITNESS]}
  ],

  "Aura Blackquill": [
    {game: GAMES.AA5, category: [CLASSES.CULPRIT, CLASSES.WITNESS]}
  ],

  "Clonco": [
    {game: GAMES.AA5, category: []}
  ],

  "Athena Cykes (11 yo)": [
    {game: GAMES.AA5, category: []}
  ],

  "Metis Cykes": [
    {game: GAMES.AA5, category: [CLASSES.VICTIM]}
  ],

  "Pearl Fey (17 yo)": [
    {game: GAMES.AA5, category: [CLASSES.ASSISTANT], music: ["Pearl Fey - With Pearly 2013"]},
    {game: GAMES.AA6, category: []}
  ],

  "Miles Edgeworth (chief prosecutor)": [
    {game: GAMES.AA5, category: [CLASSES.PROSECUTOR], music: ["Miles Edgeworth - Triumphant Return 2013"]},
    {game: GAMES.AA6, category: [CLASSES.PROSECUTOR]}
  ],

  "The Phantom": [
    {game: GAMES.AA5, category: [CLASSES.CULPRIT, CLASSES.WITNESS], music: ["The Phantom - IDENTITY UNKNOWN"], breakdown: ["The Phantom"]}
  ],

  "Sasha Buckler": [
    {game: GAMES.AA5, category: [CLASSES.DEFENDANT, CLASSES.WITNESS]}
  ],

  "Orla Shipley": [
    {game: GAMES.AA5, category: [CLASSES.DEFENDANT, CLASSES.WITNESS]}
  ],

  "Jack Shipley": [
    {game: GAMES.AA5, category: [CLASSES.VICTIM]}
  ],

  "Norma DePlume": [
    {game: GAMES.AA5, category: [CLASSES.WITNESS], breakdown:["Norma DePlume"]}
  ],

  "Marlon Rimes": [
    {game: GAMES.AA5, category: [CLASSES.WITNESS, CLASSES.CULPRIT]}
  ],

  "Marlon Rimes (muscular)": [
    {game: GAMES.AA5, category: [CLASSES.WITNESS, CLASSES.CULPRIT], breakdown:["Marlon Rimes (muscular)"]}
  ],

  "Herman Crab": [
    {game: GAMES.AA5, category: [CLASSES.WITNESS]}
  ],

  "Azura Summers": [
    {game: GAMES.AA5, category: [CLASSES.VICTIM]}
  ],


  //AA6

  "Ahlbi Ur'gaid": [
    {game: GAMES.AA6, category: [CLASSES.DEFENDANT, CLASSES.WITNESS]}
  ],

  "Gaspen Payne (Khura'in)": [
    {game: GAMES.AA6, category: [CLASSES.PROSECUTOR]}
  ],

  "Paht Rohl": [
    {game: GAMES.AA6, category: [CLASSES.VICTIM]}
  ],

  "Rayfa Padma Khura'in": [
    {game: GAMES.AA6, category: [CLASSES.WITNESS, CLASSES.ASSISTANT], music: ["Rayfa Padma Khura'in - Indomitable Royal Priestess"]}
  ],

  "Pees'lubn Andistan'dhin": [
    {game: GAMES.AA6, category: [CLASSES.WITNESS, CLASSES.CULPRIT], music: ["Pees'lubn Andistan'dhin - Ethnic Music"], breakdown: ["Pees'lubn Andistan'dhin"]}
  ],

  "Bonny de Famme": [
    {game: GAMES.AA6, category: [CLASSES.WITNESS]}
  ],

  "Roger Retinz": [
    {game: GAMES.AA6, category: [CLASSES.WITNESS, CLASSES.CULPRIT], breakdown: ["Roger Retinz"]}
  ],

  "Manov Mistree": [
    {game: GAMES.AA6, category: [CLASSES.VICTIM], music: ["The Great Mr. Reus - Masked Magician"]}
  ],

  "Nahyuta Sahdmadhi": [
    {game: GAMES.AA6, category: [CLASSES.PROSECUTOR], music: ["Nahyuta Sahdmadhi - Last Rites Prosecutor"]}
  ],

  "Betty de Famme": [
    {game: GAMES.AA6, category: [CLASSES.WITNESS]}
  ],

  "Maya Fey (Channeling Master)": [
    {game: GAMES.AA6, category: [CLASSES.ASSISTANT, CLASSES.DEFENDANT], music: ["Maya Fey - Turnabout Sisters 2016"]}
  ],

  "Tahrust Inmee": [
    {game: GAMES.AA6, category: [CLASSES.VICTIM]}
  ],

  "Puhray Zeh'lot": [
    {game: GAMES.AA6, category: [CLASSES.VICTIM]}
  ],

  "A'nohn Ihmus": [
    {game: GAMES.AA6, category: [CLASSES.WITNESS]}
  ],

  "Datz Are'bal": [
    {game: GAMES.AA6, category: [CLASSES.WITNESS]}
  ],

  "Beh'leeb Inmee": [
    {game: GAMES.AA6, category: [CLASSES.CULPRIT]}
  ],

  "Tahrust Inmee (Maya)": [
    {game: GAMES.AA6, category: [CLASSES.WITNESS], breakdown: ["Tahrust Inmee (Maya)"]}
  ],

  "Taifu Toneido": [
    {game: GAMES.AA6, category: [CLASSES.VICTIM]}
  ],

  "Bucky Whet": [
    {game: GAMES.AA6, category: [CLASSES.DEFENDANT]}
  ],

  "Geiru Toneido": [
    {game: GAMES.AA6, category: [CLASSES.WITNESS, CLASSES.CULPRIT], breakdown: ["Geiru Toneido"]}
  ],

  "Uendo Toneido": [
    {game: GAMES.AA6, category: [CLASSES.WITNESS], music: ["Uendo Toneido - A Typhoon of Laughs"]}
  ],

  "Dhurke Sahdmadhi": [
    {game: GAMES.AA6, category: [CLASSES.ASSISTANT, CLASSES.VICTIM], music: ["Dhurke - A Dragon Never Yields"]}
  ],

  "Archie Buff": [
    {game: GAMES.AA6, category: []}
  ],

  "Paul Atishon": [
    {game: GAMES.AA6, category: [CLASSES.WITNESS, CLASSES.CULPRIT], music: ["Paul Atishon - Vote for Me, Your Local Politician!"], breakdown: ["Paul Atishon"]}
  ],

  "Armie Buff": [
    {game: GAMES.AA6, category: [CLASSES.WITNESS]}
  ],

  "Inga Karkhuul Khura'in": [
    {game: GAMES.AA6, category: []}
  ],

  "Ga'ran Sigatar Khura'in": [
    {game: GAMES.AA6, category: [CLASSES.CULPRIT]}
  ],

  "Ga'ran Sigatar Khura'in (prosecutor)": [
    {game: GAMES.AA6, category: [CLASSES.PROSECUTOR, CLASSES.CULPRIT], breakdown: ["Ga'ran Sigatar Khura'in (prosecutor)"]}
  ],

  "Nayna": [
    {game: GAMES.AA6, category: []}
  ],

  "Amara Sigatar Khura'in": [
    {game: GAMES.AA6, category: []}
  ],

  "Larry Butz (picture book author)": [
    {game: GAMES.AA6, category: [CLASSES.WITNESS], music: ["Larry Butz - When Something Smells, It's Usually Me 2016"]}
  ],

  "Ellen Wyatt": [
    {game: GAMES.AA6, category: [CLASSES.DEFENDANT], music: ["Ellen Wyatt - Walking Down the Aisle"]}
  ],

  "Dumas Gloomsbury": [
    {game: GAMES.AA6, category: [CLASSES.VICTIM]}
  ],

  "Sorin Sprocket": [
    {game: GAMES.AA6, category: [CLASSES.WITNESS], breakdown: ["Sorin Sprocket"]}
  ],

  "Pierce Nichody": [
    {game: GAMES.AA6, category: [CLASSES.WITNESS, CLASSES.CULPRIT], breakdown: ["Pierce Nichody"]}
  ],

  "Selena Sprocket": [
    {game: GAMES.AA6, category: [CLASSES.VICTIM]}
  ],


  //AAI1

  "Buddy Faith": [
    {game: GAMES.AAI1, category: [CLASSES.DETECTIVE, CLASSES.VICTIM]}
  ],

  "Jacques Portsman": [
    {game: GAMES.AAI1, category: [CLASSES.PROSECUTOR, CLASSES.CULPRIT, CLASSES.WITNESS, CLASSES.DEFENDANT], breakdown: ["Jacques Portsman"]}
  ],

  "Maggey Byrde (Security Guard)": [
    {game: GAMES.AAI1, category: [CLASSES.DEFENDANT]}
  ],

  "Akbey Hicks": [
    {game: GAMES.AAI1, category: [CLASSES.VICTIM]}
  ],

  "Rhoda Teneiro": [
    {game: GAMES.AAI1, category: [CLASSES.WITNESS, CLASSES.DEFENDANT, CLASSES.ASSISTANT]}
  ],

  "Zinc Lablanc": [
    {game: GAMES.AAI1, category: [CLASSES.WITNESS], music: ["Zinc Lablanc - Time is Money"], breakdown: ["Zinc Lablanc"]}
  ],

  "Cammy Meele": [
    {game: GAMES.AAI1, category: [CLASSES.WITNESS, CLASSES.DEFENDANT, CLASSES.CULPRIT, CLASSES.ASSISTANT], music: ["Cammy Meele - Nighty-Night"], breakdown: ["Cammy Meele"]}
  ],

  "Ernest Amano": [
    {game: GAMES.AAI1, category: []}
  ],

  "Lance Amano": [
    {game: GAMES.AAI1, category: [CLASSES.WITNESS, CLASSES.DEFENDANT, CLASSES.CULPRIT], breakdown: ["Lance Amano"]}
  ],

  "Kay Faraday": [
    {game: GAMES.AAI1, category: [CLASSES.ASSISTANT, CLASSES.DEFENDANT], music: ["Kay Faraday - Great Thief of the Truth"]},
    {game: GAMES.AAI2, category: [CLASSES.ASSISTANT]}
  ],

  "Shi-Long Lang": [
    {game: GAMES.AAI1, category: [CLASSES.WITNESS, CLASSES.DETECTIVE], music: ["Shi-Long Lang - Lang Zi Says!"]},
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.DETECTIVE]}
  ],

  "Shih-na": [
    {game: GAMES.AAI1, category: [CLASSES.WITNESS, CLASSES.DEFENDANT], breakdown: ["Shih-na"]}
  ],

  "Colin Devorae": [
    {game: GAMES.AAI1, category: [CLASSES.VICTIM]}
  ],

  "Lauren Paups": [
    {game: GAMES.AAI1, category: [CLASSES.WITNESS, CLASSES.DEFENDANT]}
  ],

  "Ema Skye (Investigations)": [
    {game: GAMES.AAI1, category: []},
    {game: GAMES.AAI2, category: [CLASSES.ASSISTANT]}
  ],

  "Wendy Oldbag (Pink Badger)": [
    {game: GAMES.AAI1, category: [CLASSES.WITNESS]}
  ],

  "Byrne Faraday": [
    {game: GAMES.AAI1, category: [CLASSES.VICTIM, CLASSES.DEFENDANT, CLASSES.PROSECUTOR]}
  ],

  "Deid Mann": [
    {game: GAMES.AAI1, category: [CLASSES.VICTIM]}
  ],

  "Mack Rell": [
    {game: GAMES.AAI1, category: [CLASSES.VICTIM, CLASSES.DEFENDANT]}
  ],

  "Kay Faraday (10 yo)": [
    {game: GAMES.AAI1, category: []}
  ],

  "Judge": [
    {game: GAMES.AAI1, category: [CLASSES.WITNESS]}
  ],

  "Calisto Yew": [
    {game: GAMES.AAI1, category: [CLASSES.WITNESS, CLASSES.DEFENDANT, CLASSES.CULPRIT, CLASSES.DEFENSE], music: ["Calisto Yew - Cold Laughter"]}
  ],

  "Tyrell Badd": [
    {game: GAMES.AAI1, category: [CLASSES.WITNESS, CLASSES.DETECTIVE], music: ["Tyrell Badd - The Truth Is Never Sweet"]}
  ],

  "Manny Coachen": [
    {game: GAMES.AAI1, category: [CLASSES.DEFENDANT, CLASSES.VICTIM]}
  ],

  "Franziska von Karma (Young)": [
    {game: GAMES.AAI1, category: [CLASSES.WITNESS, CLASSES.ASSISTANT, CLASSES.PROSECUTOR]}
  ],

  "Colias Palaeno": [
    {game: GAMES.AAI1, category: []}
  ],

  "Quercus Alba": [
    {game: GAMES.AAI1, category: [CLASSES.WITNESS, CLASSES.DEFENDANT, CLASSES.CULPRIT]}
  ],

  "Quercus Alba (True self)": [
    {game: GAMES.AAI1, category: [CLASSES.WITNESS, CLASSES.DEFENDANT, CLASSES.CULPRIT], music: ["Quercus Alba - He Who Is Above the Law"], breakdown: ["Quercus Alba (True self)"]}
  ],

  "Larry Butz (Steel Samurai)": [
    {game: GAMES.AAI1, category: [CLASSES.WITNESS, CLASSES.DEFENDANT]}
  ],

  "Ka-Shi Nou": [
    {game: GAMES.AAI1, category: [CLASSES.VICTIM]}
  ],

  "Wendy Oldbag (Pink Princess)": [
    {game: GAMES.AAI1, category: []}
  ],


  //AAI2

  "Di-Jun Wang": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.VICTIM], breakdown: ["Di-Jun Wang"]}
  ],

  "Di-Jun Wang (True Self)": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.VICTIM]}
  ],

  "Tabby Lloyd": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.DEFENDANT]}
  ],

  "Shelly de Killer (Ice Cream Seller)": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.DEFENDANT]}
  ],

  "Bronco Knight": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.DEFENDANT, CLASSES.CULPRIT, CLASSES.VICTIM], breakdown: ["Bronco Knight"]}
  ],

  "Bastian Rook": [
    {game: GAMES.AAI2, category: [CLASSES.VICTIM]}
  ],

  "Eddie Fender": [
    {game: GAMES.AAI2, category: [CLASSES.DEFENSE, CLASSES.ASSISTANT], music: ["Eddie Fender - Wisecracking Candor"]}
  ],

  "Rocco Carcerato": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.DEFENDANT], breakdown: ["Rocco Carcerato"]}
  ],

  "Verity Gavèlle": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.DEFENDANT], music: ["Verity Gavèlle - Goddess of Justice"]}
  ],

  "Eustace Winner": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.PROSECUTOR], music: ["Eustace Winner - Winning Deductions", "Eustace Winner - Winning Independence"]},
  ],

  "Simeon Saint": [
    {game: GAMES.AAI2, category: [CLASSES.DEFENDANT, CLASSES.WITNESS, CLASSES.CULPRIT]}
  ],

  "Fifi Laguarde": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.DEFENDANT, CLASSES.CULPRIT], breakdown: ["Fifi Laguarde"], music: ["Fifi Laguarde - A Hug and Smooch is Entirely de Rigueur"]}
  ],

  "Frank Sahwit (Prisioner)": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.DEFENDANT], breakdown: ["Frank Sahwit (Prisioner)"]}
  ],

  "Bodhidharma Kanis": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.DEFENDANT], music: ["Bodhidharma Kanis - The Sound of One's Assassination"]}
  ],

  "Eddie Fender (Young)": [
    {game: GAMES.AAI2, category: [CLASSES.DEFENSE, CLASSES.ASSISTANT]}
  ],

  "Samson Tangaroa (younger)": [
    {game: GAMES.AAI2, category: [CLASSES.DEFENDANT], music: ["Samson Tangoroa - Candied Happiness"]}
  ],

  "Samson Tangaroa": [
    {game: GAMES.AAI2, category: []}
  ],

  "Artie Frost": [
    {game: GAMES.AAI2, category: [CLASSES.VICTIM]}
  ],

  "Judy Bound (Young)": [
    {game: GAMES.AAI2, category: [], music: ["Judy Bound - Candied Dance"]}
  ],

  "Judy Bound": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.DEFENDANT]}
  ],

  "Tyrell Badd (younger)": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.ASSISTANT, CLASSES.DETECTIVE]}
  ],

  "Carmelo Gusto (younger)": [
    {game: GAMES.AAI2, category: [CLASSES.DEFENDANT], music: ["Carmelo Gusto - A Flash of Taste"]}
  ],

  "Carmelo Gusto": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.CULPRIT], breakdown: ["Carmelo Gusto"]}
  ],

  "Delicia Scone": [
    {game: GAMES.AAI2, category: [CLASSES.DEFENDANT]}
  ],

  "Florence Niedler": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS]}
  ],

  "Kay Faraday (Lost Memory)": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.ASSISTANT, CLASSES.DEFENDANT]}
  ],

  "Hilda Hertz": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS], breakdown: ["Hilda Hertz"]}
  ],

  "Rosie Ringer": [
    {game: GAMES.AAI2, category: [CLASSES.VICTIM, CLASSES.DEFENSE]}
  ],

  "Excelsius Winner": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.PROSECUTOR, CLASSES.DEFENDANT, CLASSES.CULPRIT], breakdown: ["Excelsius Winner"]}
  ],

  "Shaun Fenn": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.DEFENDANT], music: ["Shaun Fenn - Bull-Headed Teenager"]}
  ],

  "Alf Aldown": [
    {game: GAMES.AAI2, category: [CLASSES.VICTIM]}
  ],

  "Simeon Saint (True Self)": [
    {game: GAMES.AAI2, category: [CLASSES.WITNESS, CLASSES.DEFENDANT, CLASSES.CULPRIT], breakdown: ["Simeon Saint (True Self)"]}
  ],

  //GAA1

  "Ryunosuke Naruhodo": [
    {game: GAMES.GAA1, category: [CLASSES.DEFENSE, CLASSES.DEFENDANT], music: ["Ryunosuke Naruhodo - Objection!"]},
    {game: GAMES.GAA2, category: [CLASSES.DEFENSE]}
  ],

  "Kazuma Asogi": [
    {game: GAMES.GAA1, category: [CLASSES.DEFENSE, CLASSES.ASSISTANT, CLASSES.VICTIM], music: ["Kazuma Asogi - Samurai of destiny"]}
  ],

  "Yujin Mikotoba": [
    {game: GAMES.GAA1, category: []},
    {game: GAMES.GAA2, category: [CLASSES.ASSISTANT]}
  ],

  "Taketsuchi Auchi": [
    {game: GAMES.GAA1, category: [CLASSES.PROSECUTOR]}
  ],

  "John H. Wilson": [
    {game: GAMES.GAA1, category: [CLASSES.VICTIM]}
  ],

  "Satoru Hosonaga (Waiter)": [
    {game: GAMES.GAA1, category: [CLASSES.WITNESS, CLASSES.DETECTIVE]}
  ],

  "Iyesa Nosa": [
    {game: GAMES.GAA1, category: [CLASSES.WITNESS], breakdown: ["Iyesa Nosa"]}
  ],

  "Kyurio Korekuta": [
    {game: GAMES.GAA1, category: [CLASSES.WITNESS]}
  ],

  "Jezaille Brett": [
    {game: GAMES.GAA1, category: [CLASSES.WITNESS, CLASSES.CULPRIT], breakdown: ["Jezaille Brett"]},
    {game: GAMES.GAA2, category: [CLASSES.VICTIM]}
  ],

  "Susato Mikotoba": [
    {game: GAMES.GAA1, category: [CLASSES.ASSISTANT], music: ["Susato Mikotoba - A New Bloom in the New World"]},
    {game: GAMES.GAA2, category: [CLASSES.ASSISTANT]}
  ],

  "Herlock Sholmes": [
    {game: GAMES.GAA1, category: [CLASSES.DETECTIVE], music: ["Herlock Sholmes - Great Detective of Foggy London Town"]},
    {game: GAMES.GAA2, category: [CLASSES.DETECTIVE, CLASSES.ASSISTANT]}
  ],

  "Satoru Hosonaga (Sailor)": [
    {game: GAMES.GAA1, category: [CLASSES.DETECTIVE]}
  ],

  "Bif Strogenov": [
    {game: GAMES.GAA1, category: []}
  ],

  "Grimesby Roylott": [
    {game: GAMES.GAA1, category: [CLASSES.CULPRIT]}
  ],

  "Nikolina Pavlova": [
    {game: GAMES.GAA1, category: [CLASSES.CULPRIT]}
  ],

  "Mael Stronghart": [
    {game: GAMES.GAA1, category: [], music: ["Lord Chief Justice Stronghart"]},
    {game: GAMES.GAA2, category: [CLASSES.CULPRIT], breakdown: ["Mael Stronghart"]}
  ],

  "Magnus McGilded": [
    {game: GAMES.GAA1, category: [CLASSES.WITNESS, CLASSES.DEFENDANT, CLASSES.CULPRIT]}
  ],

  "Barok van Zieks": [
    {game: GAMES.GAA1, category: [CLASSES.PROSECUTOR], music: ["Barok van Zieks - The Reaper of the Bailey"]},
    {game: GAMES.GAA2, category: [CLASSES.PROSECUTOR, CLASSES.DEFENDANT, CLASSES.WITNESS]}
  ],

  "Mason Milverton": [
    {game: GAMES.GAA1, category: [CLASSES.VICTIM]}
  ],

  "Beppo": [
    {game: GAMES.GAA1, category: [CLASSES.WITNESS]}
  ],

  "Bruce Fairplay": [
    {game: GAMES.GAA1, category: [CLASSES.WITNESS]}
  ],

  "Lay D. Furst": [
    {game: GAMES.GAA1, category: [CLASSES.WITNESS]}
  ],

  "Gina Lestrade": [
    {game: GAMES.GAA1, category: [CLASSES.WITNESS, CLASSES.DEFENDANT], music: ["Gina Lestrade - A Blast from the East End"]}
  ],

  "Tobias Gregson": [
    {game: GAMES.GAA1, category: [CLASSES.DETECTIVE, CLASSES.WITNESS], music: ["Tobias Gregson - The Great Detective's Great Foe"]},
    {game: GAMES.GAA2, category: [CLASSES.DETECTIVE, CLASSES.WITNESS, CLASSES.VICTIM]}
  ],

  "Soseki Natsume": [
    {game: GAMES.GAA1, category: [CLASSES.DEFENDANT], music: ["Soseki Natsume - I Am Not Guilty"]},
    {game: GAMES.GAA2, category: [CLASSES.WITNESS, CLASSES.DEFENDANT]}
  ],

  "Iris Wilson": [
    {game: GAMES.GAA1, category: [CLASSES.ASSISTANT], music: ["Iris Wilson - Young Biographer"]},
    {game: GAMES.GAA2, category: [CLASSES.ASSISTANT]}
  ],

  "Joan Garrideb": [
    {game: GAMES.GAA1, category: [CLASSES.WITNESS, CLASSES.CULPRIT], breakdown: ["Joan Garrideb"]}
  ],

  "John Garrideb": [
    {game: GAMES.GAA1, category: [CLASSES.WITNESS]},
    {game: GAMES.GAA2, category: []}
  ],

  "Olive Green": [
    {game: GAMES.GAA1, category: [CLASSES.VICTIM]},
    {game: GAMES.GAA2, category: [CLASSES.WITNESS, CLASSES.CULPRIT]}
  ],

  "Roly Beate": [
    {game: GAMES.GAA1, category: [CLASSES.WITNESS]}
  ],

  "Patricia Beate": [
    {game: GAMES.GAA1, category: [CLASSES.WITNESS]}
  ],

  "Pop Windibank": [
    {game: GAMES.GAA1, category: [CLASSES.VICTIM]}
  ],

  "Ashley Graydon": [
    {game: GAMES.GAA1, category: [CLASSES.WITNESS, CLASSES.CULPRIT], breakdown: ["Ashley Graydon"]}
  ],

  "Nash Skulkin": [
    {game: GAMES.GAA1, category: [CLASSES.WITNESS, CLASSES.CULPRIT]}
  ],

  "Ringo Skulkin": [
    {game: GAMES.GAA1, category: [CLASSES.WITNESS, CLASSES.CULPRIT]}
  ],


  //GAA2

  "Ryutaro Naruhodo": [
    {game: GAMES.GAA2, category: [CLASSES.DEFENSE]}
  ],

  "Rei Membami": [
    {game: GAMES.GAA2, category: [CLASSES.DEFENDANT, CLASSES.WITNESS]}
  ],

  "Taketsuchi Auchi (Loose Hair)": [
    {game: GAMES.GAA2, category: [CLASSES.PROSECUTOR]}
  ],

  "Satoru Hosonaga (Bathing outfit)": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS, CLASSES.DETECTIVE]}
  ],

  "Raiten Menimemo": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS, CLASSES.CULPRIT], breakdown: ["Raiten Menimemo"], music: ["Raiten Menimemo - One Journo's Menimemoism"]}
  ],

  "William Shamspeare": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS, CLASSES.CULPRIT], breakdown: ["William Shamspeare"], music: ["William Shamspeare - Back Alley Bard"]}
  ],

  "Adron B. Metermann": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS]}
  ],

  "Quinby Altamont": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS]}
  ],

  "Duncan Ross": [
    {game: GAMES.GAA2, category: [CLASSES.VICTIM]}
  ],

  "Odie Asman": [
    {game: GAMES.GAA2, category: [CLASSES.VICTIM]}
  ],

  "Albert Harebrayne": [
    {game: GAMES.GAA2, category: [CLASSES.DEFENDANT, CLASSES.WITNESS], music: ["Professor Harebrayne - Student of Science"]}
  ],

  "Masked Apprentice": [
    {game: GAMES.GAA2, category: [CLASSES.PROSECUTOR]}
  ],

  "Gina Lestrade (Detective)": [
    {game: GAMES.GAA2, category: [CLASSES.DETECTIVE, CLASSES.WITNESS]}
  ],

  "Esmeralda Tusspells": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS], music: ["Madame Tusspells - Mysteries Encased in Wax"]}
  ],

  "Balthazar Lune": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS]}
  ],

  "Gotts": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS]}
  ],

  "Gotts (Masked)": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS]}
  ],

  "Courtney Sithe": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS, CLASSES.CULPRIT], music: ["Doctor Sithe - Untouchable Coroner"]}
  ],

  "Enoch Drebber": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS, CLASSES.CULPRIT], music: ["Enoch Drebber - Rondo of Science and Magic"]}
  ],

  "Yujin Mikotoba (Great Britain outfit)": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS]}
  ],

  "Seishiro Jigoku": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS, CLASSES.CULPRIT], breakdown: ["Seishiro Jigoku"]}
  ],

  "Evie Vigil": [
    {game: GAMES.GAA2, category: []}
  ],

  "Daley Vigil": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS], breakdown: ["Daley Vigil"]}
  ],

  "Barry Caidin": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS]}
  ],

  "Kazuma Asogi (Unmasked)": [
    {game: GAMES.GAA2, category: [CLASSES.PROSECUTOR]}
  ],

  "Klint van Zieks": [
    {game: GAMES.GAA2, category: [CLASSES.PROSECUTOR, CLASSES.VICTIM]}
  ],

  "Genshin Asogi": [
    {game: GAMES.GAA2, category: [CLASSES.DETECTIVE, CLASSES.VICTIM]}
  ],

  "Hugh Boone": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS]}
  ],

  "Venus": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS]}
  ],

  "Sandwich": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS]}
  ],

  "Fabien de Rousseau": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS, CLASSES.CULPRIT]}
  ],

  "Peppino de Rossi": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS, CLASSES.CULPRIT]}
  ],

  "Maria Gorey (Masked)": [
    {game: GAMES.GAA2, category: []}
  ],

  "Maria Gorey": [
    {game: GAMES.GAA2, category: [CLASSES.WITNESS]}
  ],

  "Tchikin Strogenov": [
    {game: GAMES.GAA2, category: []}
  ],

};
