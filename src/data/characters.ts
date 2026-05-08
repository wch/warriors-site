export interface Character {
  slug: string;
  name: string;
  clan: string;
  role: string;
  description: string;
  appearances: string[];
}

export const characters: Character[] = [
  // ThunderClan
  {
    slug: "firestar",
    name: "Firestar",
    clan: "thunderclan",
    role: "Leader",
    description:
      "Born a kittypet named Rusty, Firestar joined ThunderClan and rose to become one of the greatest leaders in Clan history. His flame-colored pelt and fierce courage made him a legend.",
    appearances: ["the-prophecies-begin", "the-new-prophecy", "power-of-three", "omen-of-the-stars"],
  },
  {
    slug: "graystripe",
    name: "Graystripe",
    clan: "thunderclan",
    role: "Warrior",
    description:
      "Firestar's best friend and a loyal ThunderClan warrior. A long-haired gray tom known for his humor, bravery, and his complicated love across Clan borders.",
    appearances: ["the-prophecies-begin", "the-new-prophecy", "power-of-three"],
  },
  {
    slug: "bramblestar",
    name: "Bramblestar",
    clan: "thunderclan",
    role: "Leader",
    description:
      "Son of the villainous Tigerstar, Bramblestar proved that heritage does not define destiny. A dark brown tabby tom who became ThunderClan's leader after Firestar.",
    appearances: ["the-new-prophecy", "power-of-three", "omen-of-the-stars", "a-vision-of-shadows", "the-broken-code"],
  },
  {
    slug: "jayfeather",
    name: "Jayfeather",
    clan: "thunderclan",
    role: "Medicine Cat",
    description:
      "A blind gray tabby tom with extraordinary powers to walk in other cats' dreams. Sharp-tongued and fiercely independent despite his disability.",
    appearances: ["power-of-three", "omen-of-the-stars", "a-vision-of-shadows"],
  },
  {
    slug: "lionblaze",
    name: "Lionblaze",
    clan: "thunderclan",
    role: "Warrior",
    description:
      "A golden tabby tom gifted with the power to fight without being injured in battle. One of the Three prophesied cats.",
    appearances: ["power-of-three", "omen-of-the-stars"],
  },
  {
    slug: "squirrelflight",
    name: "Squirrelflight",
    clan: "thunderclan",
    role: "Deputy",
    description:
      "Firestar's spirited daughter, known for her stubbornness, courage, and fierce love for her family. A dark ginger she-cat.",
    appearances: ["the-new-prophecy", "power-of-three", "omen-of-the-stars", "the-broken-code"],
  },

  // ShadowClan
  {
    slug: "tigerstar",
    name: "Tigerstar",
    clan: "shadowclan",
    role: "Leader",
    description:
      "The most feared villain in Clan history. A massive dark brown tabby whose ambition and cruelty knew no bounds.",
    appearances: ["the-prophecies-begin"],
  },
  {
    slug: "tawnypelt",
    name: "Tawnypelt",
    clan: "shadowclan",
    role: "Warrior",
    description:
      "Tigerstar's daughter who chose ShadowClan to escape the shadow of her father's legacy in ThunderClan. A brave tortoiseshell she-cat.",
    appearances: ["the-new-prophecy", "power-of-three", "omen-of-the-stars"],
  },
  {
    slug: "tigerstar-ii",
    name: "Tigerstar II",
    clan: "shadowclan",
    role: "Leader",
    description:
      "Son of Tawnypelt, named after his grandfather but determined to forge his own honorable path as ShadowClan's leader.",
    appearances: ["a-vision-of-shadows", "the-broken-code"],
  },

  // RiverClan
  {
    slug: "crookedstar",
    name: "Crookedstar",
    clan: "riverclan",
    role: "Leader",
    description:
      "A RiverClan leader with a twisted jaw, whose life was shaped by a dark bargain. Despite his hardships, he led with wisdom and strength.",
    appearances: ["the-prophecies-begin"],
  },
  {
    slug: "mistystar",
    name: "Mistystar",
    clan: "riverclan",
    role: "Leader",
    description:
      "Daughter of Bluestar, Mistystar is one of the longest-lived leaders in Clan history. A blue-gray she-cat known for her calm wisdom.",
    appearances: ["the-new-prophecy", "power-of-three", "omen-of-the-stars", "a-vision-of-shadows", "the-broken-code"],
  },
  {
    slug: "feathertail",
    name: "Feathertail",
    clan: "riverclan",
    role: "Warrior",
    description:
      "A silver tabby she-cat who gave her life to save the Tribe of Rushing Water. Her sacrifice is remembered by all the Clans.",
    appearances: ["the-new-prophecy"],
  },

  // WindClan
  {
    slug: "tallstar",
    name: "Tallstar",
    clan: "windclan",
    role: "Leader",
    description:
      "A black-and-white tom who led WindClan through some of its most turbulent times, including the Great Journey to the lake.",
    appearances: ["the-prophecies-begin", "the-new-prophecy"],
  },
  {
    slug: "onestar",
    name: "Onestar",
    clan: "windclan",
    role: "Leader",
    description:
      "Once Firestar's close friend, Onestar became hostile and unpredictable after becoming WindClan's leader, driven by a dark secret.",
    appearances: ["the-new-prophecy", "power-of-three", "omen-of-the-stars", "a-vision-of-shadows"],
  },
  {
    slug: "crowfeather",
    name: "Crowfeather",
    clan: "windclan",
    role: "Warrior",
    description:
      "A dark gray tom whose forbidden love affairs across Clan borders produced some of the most important cats in Clan history.",
    appearances: ["the-new-prophecy", "power-of-three", "omen-of-the-stars"],
  },

  // SkyClan
  {
    slug: "leafstar",
    name: "Leafstar",
    clan: "skyclan",
    role: "Leader",
    description:
      "The determined leader who rebuilt SkyClan from nothing and led them on the long journey to rejoin the other Clans by the lake.",
    appearances: ["a-vision-of-shadows", "the-broken-code"],
  },
  {
    slug: "hawkwing",
    name: "Hawkwing",
    clan: "skyclan",
    role: "Deputy",
    description:
      "SkyClan's loyal deputy and father of Violetshine and Twigbranch. A dark gray tom who endured great loss to protect his Clan.",
    appearances: ["a-vision-of-shadows", "the-broken-code"],
  },
];

export function getCharactersByClan(clanSlug: string): Character[] {
  return characters.filter((c) => c.clan === clanSlug);
}
