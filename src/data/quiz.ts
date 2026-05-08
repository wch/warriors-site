export interface QuizQuestion {
  question: string;
  options: {
    text: string;
    clan: string;
  }[];
}

export interface QuizResult {
  clan: string;
  title: string;
  description: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "A fox is threatening a loner near your territory. What do you do?",
    options: [
      { text: "Rush in to help — no cat should face danger alone!", clan: "thunderclan" },
      { text: "Observe from the shadows and strike when the moment is right", clan: "shadowclan" },
      { text: "Lure the fox toward the river where you have the advantage", clan: "riverclan" },
      { text: "Race to get reinforcements — speed saves lives", clan: "windclan" },
      { text: "Climb a tree to get a better view and plan your attack from above", clan: "skyclan" },
    ],
  },
  {
    question: "What would be your favorite type of territory to live in?",
    options: [
      { text: "A thick, leafy forest full of places to hide and explore", clan: "thunderclan" },
      { text: "A dark pine forest with plenty of shadows and mystery", clan: "shadowclan" },
      { text: "Near a river or lake with sparkling water and fish", clan: "riverclan" },
      { text: "Wide open moors with endless sky and room to run", clan: "windclan" },
      { text: "Rocky cliffs and tall trees perfect for climbing", clan: "skyclan" },
    ],
  },
  {
    question: "Your best friend breaks an important rule. What do you do?",
    options: [
      { text: "Stand by them and help them make things right", clan: "thunderclan" },
      { text: "Keep their secret — loyalty to friends comes first", clan: "shadowclan" },
      { text: "Talk to them privately and figure out a clever solution", clan: "riverclan" },
      { text: "Encourage them to confess — honesty is always the fastest path", clan: "windclan" },
      { text: "Help them find a creative way to fix the situation", clan: "skyclan" },
    ],
  },
  {
    question: "What quality do you value most in a leader?",
    options: [
      { text: "Bravery and a willingness to fight for what's right", clan: "thunderclan" },
      { text: "Strength and the cunning to outsmart enemies", clan: "shadowclan" },
      { text: "Intelligence and the ability to find peaceful solutions", clan: "riverclan" },
      { text: "Speed in decision-making and a free spirit", clan: "windclan" },
      { text: "Determination and the ability to adapt to anything", clan: "skyclan" },
    ],
  },
  {
    question: "It's a free day with no duties. How do you spend it?",
    options: [
      { text: "Exploring the forest and going on adventures", clan: "thunderclan" },
      { text: "Practicing battle moves and sharpening your skills", clan: "shadowclan" },
      { text: "Swimming, fishing, or relaxing by the water", clan: "riverclan" },
      { text: "Running across the moors and feeling the wind in your fur", clan: "windclan" },
      { text: "Climbing the tallest tree to see the whole territory", clan: "skyclan" },
    ],
  },
  {
    question: "A rival Clan challenges yours to a border dispute. How do you react?",
    options: [
      { text: "Stand firm and defend your borders with courage", clan: "thunderclan" },
      { text: "Plan a surprise ambush to teach them a lesson", clan: "shadowclan" },
      { text: "Negotiate — there's usually a way both sides can win", clan: "riverclan" },
      { text: "Scout their movements quickly and report back to your leader", clan: "windclan" },
      { text: "Find the high ground and use the terrain to your advantage", clan: "skyclan" },
    ],
  },
  {
    question: "What kind of prey sounds most appealing?",
    options: [
      { text: "A plump mouse from the forest floor", clan: "thunderclan" },
      { text: "A frog caught in the marshes at night", clan: "shadowclan" },
      { text: "A fresh, silvery fish straight from the river", clan: "riverclan" },
      { text: "A swift rabbit caught after an exciting chase", clan: "windclan" },
      { text: "A bird snatched mid-flight from the treetops", clan: "skyclan" },
    ],
  },
  {
    question: "What's your biggest strength?",
    options: [
      { text: "My courage — I'll face anything head-on", clan: "thunderclan" },
      { text: "My cleverness — I always have a plan", clan: "shadowclan" },
      { text: "My patience — I wait for the perfect moment", clan: "riverclan" },
      { text: "My speed — nobody can keep up with me", clan: "windclan" },
      { text: "My creativity — I solve problems others can't", clan: "skyclan" },
    ],
  },
  {
    question: "You discover a secret about another Clan. What do you do?",
    options: [
      { text: "Tell your leader immediately — your Clan's safety comes first", clan: "thunderclan" },
      { text: "Keep it to yourself and use it when the time is right", clan: "shadowclan" },
      { text: "Think carefully about whether sharing it would help or hurt", clan: "riverclan" },
      { text: "Share it with your closest friend and decide together", clan: "windclan" },
      { text: "Investigate further before making any decisions", clan: "skyclan" },
    ],
  },
  {
    question: "What would your warrior name reflect?",
    options: [
      { text: "Something fiery and bold, like Flameheart or Lionpelt", clan: "thunderclan" },
      { text: "Something dark and mysterious, like Nightwhisper or Shadowstrike", clan: "shadowclan" },
      { text: "Something flowing and graceful, like Streamshine or Ripplefur", clan: "riverclan" },
      { text: "Something swift and wild, like Breezepelt or Swiftfoot", clan: "windclan" },
      { text: "Something high and bright, like Skyleap or Cloudwing", clan: "skyclan" },
    ],
  },
];

export const namePrefixes: Record<string, string[]> = {
  universal: [
    "Flame", "Ember", "Bramble", "Fern", "Thistle", "Hazel", "Birch", "Briar",
    "Dusk", "Dawn", "Mist", "Rowan", "Frost", "Spark", "Holly", "Ivy",
    "Robin", "Heather", "Sorrel", "Stone", "Patch", "Ash",
  ],
  thunderclan: ["Lion", "Tiger", "Oak", "Squirrel", "Sandy", "Cinder", "Russet"],
  shadowclan: ["Raven", "Crow", "Pine", "Tawny", "Russet", "Owl", "Night"],
  riverclan: ["Reed", "Mossy", "Silver", "Pebble", "Willow", "Otter", "Minnow"],
  windclan: ["Swift", "Breeze", "Whisker", "Heath", "Gorse", "Tall", "Rabbit"],
  skyclan: ["Cloud", "Sky", "Hawk", "Falcon", "Leaf", "Cherry", "Sparrow"],
};

export const nameSuffixes: string[] = [
  "heart", "pelt", "claw", "fur", "tail", "stripe", "whisker",
  "leap", "fang", "wing", "shine", "fall", "watcher", "song",
  "leaf", "stream", "stalker", "flight",
];

export function generateWarriorName(clanSlug: string): string {
  const pool = [...namePrefixes.universal, ...(namePrefixes[clanSlug] || [])];
  const prefix = pool[Math.floor(Math.random() * pool.length)];
  const suffix = nameSuffixes[Math.floor(Math.random() * nameSuffixes.length)];
  return prefix + suffix;
}

export const quizResults: QuizResult[] = [
  {
    clan: "thunderclan",
    title: "You belong to ThunderClan!",
    description:
      "You are brave, loyal, and always willing to stand up for what is right. Like Firestar, you believe every cat deserves a chance. Your courage inspires those around you!",
  },
  {
    clan: "shadowclan",
    title: "You belong to ShadowClan!",
    description:
      "You are independent, cunning, and fiercely proud. You trust your own instincts and move through life with confidence. Your strength comes from within!",
  },
  {
    clan: "riverclan",
    title: "You belong to RiverClan!",
    description:
      "You are graceful, clever, and appreciate the beauty in life. You go with the flow and find creative solutions to problems. Your calm wisdom guides you!",
  },
  {
    clan: "windclan",
    title: "You belong to WindClan!",
    description:
      "You are swift, free-spirited, and deeply connected to the world around you. You value freedom and open skies. Your energy is unstoppable!",
  },
  {
    clan: "skyclan",
    title: "You belong to SkyClan!",
    description:
      "You are resourceful, determined, and always reach for the stars. You adapt to any challenge and never give up. Your creativity knows no bounds!",
  },
];
