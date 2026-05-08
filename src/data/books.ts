export type SeriesArcId =
  | "the-prophecies-begin"
  | "the-new-prophecy"
  | "power-of-three"
  | "omen-of-the-stars"
  | "a-vision-of-shadows"
  | "the-broken-code";

export interface SeriesArc {
  id: SeriesArcId;
  name: string;
  description: string;
  order: number;
}

export interface Book {
  slug: string;
  title: string;
  seriesArc: SeriesArcId;
  bookNumber: number;
  year: number;
  description: string;
  protagonist: string;
  isbn: string;
}

export function getCoverUrl(isbn: string, size: "S" | "M" | "L" = "M"): string {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg`;
}

export const seriesArcs: SeriesArc[] = [
  {
    id: "the-prophecies-begin",
    name: "The Prophecies Begin",
    description:
      "A house cat named Rusty joins ThunderClan and becomes Firepaw, then Fireheart, eventually rising to become one of the greatest leaders the forest has ever known.",
    order: 1,
  },
  {
    id: "the-new-prophecy",
    name: "The New Prophecy",
    description:
      "When the forest territories face destruction, cats from all four Clans must join together on a perilous journey to find a new home.",
    order: 2,
  },
  {
    id: "power-of-three",
    name: "Power of Three",
    description:
      "Three ThunderClan cats—Jayfeather, Lionblaze, and Hollyleaf—discover a prophecy that they hold the power of the stars in their paws.",
    order: 3,
  },
  {
    id: "omen-of-the-stars",
    name: "Omen of the Stars",
    description:
      "The Dark Forest rises to wage war on the living Clans, and three cats must fulfill an ancient prophecy to save them all.",
    order: 4,
  },
  {
    id: "a-vision-of-shadows",
    name: "A Vision of Shadows",
    description:
      "Alderpaw receives a mysterious vision from StarClan that sends him on a quest, leading to the return of the long-lost SkyClan.",
    order: 5,
  },
  {
    id: "the-broken-code",
    name: "The Broken Code",
    description:
      "StarClan has gone silent, Bramblestar is acting strangely, and three young cats must uncover a darkness that threatens to shatter the warrior code forever.",
    order: 6,
  },
];

export const books: Book[] = [
  // The Prophecies Begin
  { slug: "into-the-wild", title: "Into the Wild", seriesArc: "the-prophecies-begin", bookNumber: 1, year: 2003, description: "Rusty, a house cat, ventures into the forest and joins ThunderClan, beginning his journey to become the warrior Firepaw.", protagonist: "Firestar", isbn: "9780062366962" },
  { slug: "fire-and-ice", title: "Fire and Ice", seriesArc: "the-prophecies-begin", bookNumber: 2, year: 2003, description: "Fireheart faces divided loyalties as he must bring WindClan home while dealing with threats from within his own Clan.", protagonist: "Firestar", isbn: "9780062366979" },
  { slug: "forest-of-secrets", title: "Forest of Secrets", seriesArc: "the-prophecies-begin", bookNumber: 3, year: 2003, description: "Fireheart uncovers dangerous secrets about Tigerclaw's treachery and the truth about Bluestar's past.", protagonist: "Firestar", isbn: "9780062366986" },
  { slug: "rising-storm", title: "Rising Storm", seriesArc: "the-prophecies-begin", bookNumber: 4, year: 2004, description: "Now deputy of ThunderClan, Fireheart must protect his Clan from fire, treachery, and the growing threat of Tigerstar.", protagonist: "Firestar", isbn: "9780062366993" },
  { slug: "a-dangerous-path", title: "A Dangerous Path", seriesArc: "the-prophecies-begin", bookNumber: 5, year: 2004, description: "A pack of dogs threatens the forest, and Fireheart must lead ThunderClan through their most dangerous challenge yet.", protagonist: "Firestar", isbn: "9780062367006" },
  { slug: "the-darkest-hour", title: "The Darkest Hour", seriesArc: "the-prophecies-begin", bookNumber: 6, year: 2004, description: "Firestar must unite all four Clans against Tigerstar and his allies in the bloodiest battle the forest has ever seen.", protagonist: "Firestar", isbn: "9780062367013" },

  // The New Prophecy
  { slug: "midnight", title: "Midnight", seriesArc: "the-new-prophecy", bookNumber: 1, year: 2005, description: "Six cats from different Clans receive a shared dream from StarClan and must journey together to hear what midnight has to tell them.", protagonist: "Brambleclaw", isbn: "9780062367020" },
  { slug: "moonrise", title: "Moonrise", seriesArc: "the-new-prophecy", bookNumber: 2, year: 2005, description: "The questing cats discover the Tribe of Rushing Water in the mountains and learn that the forest Clans face destruction.", protagonist: "Brambleclaw", isbn: "9780062367037" },
  { slug: "dawn", title: "Dawn", seriesArc: "the-new-prophecy", bookNumber: 3, year: 2005, description: "The Clans must leave their forest home forever and begin the Great Journey to find a new territory by the lake.", protagonist: "Brambleclaw", isbn: "9780062367044" },
  { slug: "starlight", title: "Starlight", seriesArc: "the-new-prophecy", bookNumber: 4, year: 2006, description: "The four Clans arrive at the lake and must establish new territories, borders, and a new Gathering place.", protagonist: "Brambleclaw", isbn: "9780062367051" },
  { slug: "twilight", title: "Twilight", seriesArc: "the-new-prophecy", bookNumber: 5, year: 2006, description: "Badgers attack ThunderClan's new camp, and tensions between Brambleclaw and his half-brother Hawkfrost reach a breaking point.", protagonist: "Brambleclaw", isbn: "9780062367068" },
  { slug: "sunset", title: "Sunset", seriesArc: "the-new-prophecy", bookNumber: 6, year: 2006, description: "A prophecy of betrayal threatens the Clans as Brambleclaw must choose between loyalty and ambition.", protagonist: "Brambleclaw", isbn: "9780062367075" },

  // Power of Three
  { slug: "the-sight", title: "The Sight", seriesArc: "power-of-three", bookNumber: 1, year: 2007, description: "Three young ThunderClan cats—Jaykit, Hollykit, and Lionkit—begin their training, unaware of the powerful prophecy that binds them.", protagonist: "Jayfeather", isbn: "9780062367082" },
  { slug: "dark-river", title: "Dark River", seriesArc: "power-of-three", bookNumber: 2, year: 2007, description: "Jaypaw explores the tunnels beneath the Clans' territories, while Lionpaw forms a forbidden friendship across Clan borders.", protagonist: "Jayfeather", isbn: "9780062367099" },
  { slug: "outcast", title: "Outcast", seriesArc: "power-of-three", bookNumber: 3, year: 2008, description: "The three siblings journey to the mountains to help the Tribe of Rushing Water, while secrets about their parentage deepen.", protagonist: "Jayfeather", isbn: "9780062367105" },
  { slug: "eclipse", title: "Eclipse", seriesArc: "power-of-three", bookNumber: 4, year: 2008, description: "War erupts between the Clans, and as an eclipse darkens the sky, the three cats begin to understand their true powers.", protagonist: "Jayfeather", isbn: "9780062367112" },
  { slug: "long-shadows", title: "Long Shadows", seriesArc: "power-of-three", bookNumber: 5, year: 2008, description: "A devastating fire and a shocking revelation about Sol threaten to tear ThunderClan apart from within.", protagonist: "Jayfeather", isbn: "9780062367129" },
  { slug: "sunrise", title: "Sunrise", seriesArc: "power-of-three", bookNumber: 6, year: 2009, description: "The truth about the three cats' parentage is finally revealed, with consequences that will change ThunderClan forever.", protagonist: "Jayfeather", isbn: "9780062367136" },

  // Omen of the Stars
  { slug: "the-fourth-apprentice", title: "The Fourth Apprentice", seriesArc: "omen-of-the-stars", bookNumber: 1, year: 2009, description: "As a mysterious drought grips the lake, Dovepaw discovers she has extraordinary senses and may be part of the prophecy.", protagonist: "Dovewing", isbn: "9780062382573" },
  { slug: "fading-echoes", title: "Fading Echoes", seriesArc: "omen-of-the-stars", bookNumber: 2, year: 2010, description: "The Dark Forest cats begin training living warriors in their dreams, while Ivypaw grows jealous of her sister's powers.", protagonist: "Dovewing", isbn: "9780062382597" },
  { slug: "night-whispers", title: "Night Whispers", seriesArc: "omen-of-the-stars", bookNumber: 3, year: 2010, description: "Flametail of ShadowClan discovers the Dark Forest's plot, and the line between loyalty and survival grows thin.", protagonist: "Dovewing", isbn: "9780062382603" },
  { slug: "sign-of-the-moon", title: "Sign of the Moon", seriesArc: "omen-of-the-stars", bookNumber: 4, year: 2011, description: "Jayfeather travels back in time to the ancient Clans and must help the first Stoneteller fulfill an ancient destiny.", protagonist: "Dovewing", isbn: "9780062382610" },
  { slug: "the-forgotten-warrior", title: "The Forgotten Warrior", seriesArc: "omen-of-the-stars", bookNumber: 5, year: 2011, description: "A long-lost warrior returns to ThunderClan, and the Dark Forest's invasion draws ever closer.", protagonist: "Dovewing", isbn: "9780062382627" },
  { slug: "the-last-hope", title: "The Last Hope", seriesArc: "omen-of-the-stars", bookNumber: 6, year: 2012, description: "The Dark Forest launches its final assault on the living Clans in the most epic battle in Warriors history.", protagonist: "Dovewing", isbn: "9780062382634" },

  // A Vision of Shadows
  { slug: "the-apprentices-quest", title: "The Apprentice's Quest", seriesArc: "a-vision-of-shadows", bookNumber: 1, year: 2016, description: "Alderpaw, son of Bramblestar, receives a vision from StarClan that sends him on a quest beyond Clan territory.", protagonist: "Alderheart", isbn: "9780062386397" },
  { slug: "thunder-and-shadow", title: "Thunder and Shadow", seriesArc: "a-vision-of-shadows", bookNumber: 2, year: 2016, description: "A rogue named Rain causes chaos, and ShadowClan's young cats rebel against their leader.", protagonist: "Alderheart", isbn: "9780062386434" },
  { slug: "shattered-sky", title: "Shattered Sky", seriesArc: "a-vision-of-shadows", bookNumber: 3, year: 2017, description: "The rogue leader Darktail takes over ShadowClan, and the remaining Clans must unite to drive him out.", protagonist: "Alderheart", isbn: "9780062386472" },
  { slug: "darkest-night", title: "Darkest Night", seriesArc: "a-vision-of-shadows", bookNumber: 4, year: 2017, description: "SkyClan struggles to find its place among the other Clans by the lake as old tensions resurface.", protagonist: "Alderheart", isbn: "9780062386519" },
  { slug: "river-of-fire", title: "River of Fire", seriesArc: "a-vision-of-shadows", bookNumber: 5, year: 2018, description: "A devastating sickness sweeps through the Clans, and SkyClan faces the question of whether they truly belong.", protagonist: "Alderheart", isbn: "9780062386533" },
  { slug: "the-raging-storm", title: "The Raging Storm", seriesArc: "a-vision-of-shadows", bookNumber: 6, year: 2018, description: "A terrible storm ravages the lake territories, and the five Clans must face the consequences of broken borders.", protagonist: "Alderheart", isbn: "9780062386571" },

  // The Broken Code
  { slug: "lost-stars", title: "Lost Stars", seriesArc: "the-broken-code", bookNumber: 1, year: 2019, description: "StarClan's connection to the living Clans is shattered, and three young cats sense something terribly wrong.", protagonist: "Bristlefrost", isbn: "9780062823533" },
  { slug: "the-silent-thaw", title: "The Silent Thaw", seriesArc: "the-broken-code", bookNumber: 2, year: 2019, description: "Bramblestar begins imposing harsh new rules, and a small group of cats suspects he is not who he seems.", protagonist: "Bristlefrost", isbn: "9780062823571" },
  { slug: "veil-of-shadows", title: "Veil of Shadows", seriesArc: "the-broken-code", bookNumber: 3, year: 2020, description: "The rebels against the false Bramblestar must find a way to save the real leader's spirit.", protagonist: "Bristlefrost", isbn: "9780062823694" },
  { slug: "darkness-within", title: "Darkness Within", seriesArc: "the-broken-code", bookNumber: 4, year: 2020, description: "The Clans search for Bramblestar's missing spirit while the impostor's dark influence continues to spread.", protagonist: "Bristlefrost", isbn: "9780062823748" },
  { slug: "the-place-of-no-stars", title: "The Place of No Stars", seriesArc: "the-broken-code", bookNumber: 5, year: 2021, description: "Cats must venture into the Dark Forest itself—the Place of No Stars—to rescue lost spirits.", protagonist: "Bristlefrost", isbn: "9780062823786" },
  { slug: "a-light-in-the-mist", title: "A Light in the Mist", seriesArc: "the-broken-code", bookNumber: 6, year: 2021, description: "The final battle to save StarClan and restore the connection between the living and the dead.", protagonist: "Bristlefrost", isbn: "9780062823908" },
];

export function getBooksByArc(arcId: SeriesArcId): Book[] {
  return books.filter((b) => b.seriesArc === arcId).sort((a, b) => a.bookNumber - b.bookNumber);
}

export function getArcForBook(book: Book): SeriesArc {
  return seriesArcs.find((a) => a.id === book.seriesArc)!;
}
