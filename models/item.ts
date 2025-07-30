interface Item {
  id: string;
  title: string;
  price: string;
  image: string;
  rating: number;
  link: string;
  category?: string;
  quantity: number;
  description?: string;
}

const MockData: Item[] = [
  {
    id: "sandwich",
    title: "サンドウィッチ",
    price: "¥500",
    image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Sandwich.png",
    rating: 2.8,
    link: "/sandwich",
    category: "フード",
    description: "新鮮な野菜とお肉を挟んだボリューム満点のサンドウィッチ。",
    quantity: 1,
  },
  {
    id: "tropical-juice",
    title: "トロピカルジュース",
    price: "¥600",
    image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Tropical%20Drink.png",
    rating: 3.6,
    link: "/tropical-juice",
    category: "ドリンク",
    description: "さっぱりとした甘さが特徴のトロピカルジュース。",
    quantity: 1,
  },
  {
    id: "ice-cream",
    title: "アイスクリーム",
    price: "¥400",
    image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Shaved%20Ice.png",
    rating: 4.7,
    link: "/ice-cream",
    category: "サイド",
    description: "つめたく冷たいアイスクリーム。暑い日にぴったりのデザートです。",
    quantity: 1,
  },
  {
    id: "popcorn",
    title: "ポップコーン",
    price: "¥1,080",
    image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Popcorn.png",
    rating: 4.5,
    link: "/popcorn",
    category: "サイド",
    description: "映画のお供に最適なポップコーン。軽やかな食感とバターの風味が楽しめます。",
    quantity: 1,
  },
  {
    id: "hamburger",
    title: "ハンバーガー",
    price: "¥300",
    image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Hamburger.png",
    rating: 3.3,
    link: "/hamburger",
    category: "フード",
    description: "ジューシーなパティと新鮮な野菜を挟んだハンバーガー。",
    quantity: 1,
  },
  {
    id: "donut",
    title: "ドーナツ",
    price: "¥120",
    image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Doughnut.png",
    rating: 2.4,
    link: "/donut",
    category: "サイド",
    description: "ふんわりとした生地に甘いクリームがたっぷり詰まったドーナツ。",
    quantity: 1,
  },
    {
    id: "beer",
    title: "ビール",
    price: "¥640",
    image: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Beer%20Mug.png",
    rating: 5,
    link: "/beer",
    category: "ドリンク",
    description: "爽やかな喉越しと豊かな香りが楽しめるビール。",
    quantity: 1,
  },
];

export { 
  MockData,
  type Item,
};