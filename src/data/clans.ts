export interface Clan {
  slug: string;
  name: string;
  motto: string;
  description: string;
  territory: string;
  strengths: string[];
  color: string;
  symbol: string;
}

export const clans: Clan[] = [
  {
    slug: "thunderclan",
    name: "ThunderClan",
    motto: "Brave and loyal",
    description:
      "ThunderClan cats are fierce, courageous, and loyal. They are known for taking in outsiders and giving them a chance to prove themselves as true warriors.",
    territory:
      "Dense deciduous forest with thick undergrowth, near a ravine camp sheltered by rocks and brambles.",
    strengths: ["Stalking through undergrowth", "Courage in battle", "Loyalty and compassion"],
    color: "amber",
    symbol: "⚡",
  },
  {
    slug: "shadowclan",
    name: "ShadowClan",
    motto: "Proud and fierce",
    description:
      "ShadowClan cats are cunning, proud, and independent. They are masters of stealth and ambush, skilled at moving through the shadows.",
    territory:
      "Dark pine forest with marshy ground, bordered by a Thunderpath. Their camp is hidden in a hollow surrounded by brambles.",
    strengths: ["Night hunting", "Ambush tactics", "Fierce independence"],
    color: "slate",
    symbol: "🌑",
  },
  {
    slug: "riverclan",
    name: "RiverClan",
    motto: "Strong and clever",
    description:
      "RiverClan cats are sleek, well-fed, and proud of their swimming abilities. They are the only Clan that enjoys water and catches fish as their main prey.",
    territory:
      "Open streams and rivers with lush, reedy banks. Their camp is on a well-drained island surrounded by water.",
    strengths: ["Swimming and fishing", "Sleek agility", "Resourcefulness"],
    color: "blue",
    symbol: "🌊",
  },
  {
    slug: "windclan",
    name: "WindClan",
    motto: "Swift and free",
    description:
      "WindClan cats are lean, wiry, and the fastest runners of all the Clans. They live on the open moor and are fiercely loyal to the warrior code.",
    territory:
      "Open moorland swept by wind, with rolling hills and rabbit warrens. Their camp is a shallow scoop in the ground sheltered by gorse.",
    strengths: ["Speed and endurance", "Keen eyesight", "Closeness to StarClan"],
    color: "stone",
    symbol: "💨",
  },
  {
    slug: "skyclan",
    name: "SkyClan",
    motto: "Determined and resourceful",
    description:
      "SkyClan is the long-lost fifth Clan, driven from the forest generations ago. They are exceptional jumpers and climbers, skilled at hunting birds in trees.",
    territory:
      "Rocky gorges and scattered trees with open sky above. Their territory blends woodland edges with open ground.",
    strengths: ["Powerful jumping", "Tree climbing", "Adaptability"],
    color: "sky",
    symbol: "☁️",
  },
];
