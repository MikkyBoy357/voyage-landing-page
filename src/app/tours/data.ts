export interface ItineraryDay {
  day: number
  title: string
  description: string
}

export interface Tour {
  id: number
  slug: string
  title: string
  tagline: string
  destination: string
  coverImage: string
  galleryImages: string[]
  category: string
  duration: string
  groupSize: string
  startDate: string
  endDate: string
  price: string
  difficulty: "Easy" | "Moderate" | "Challenging"
  highlights: string[]
  overview: string
  itinerary: ItineraryDay[]
  included: string[]
  notIncluded: string[]
}

export const tours: Tour[] = [
  {
    id: 1,
    slug: "santorini-greek-islands",
    title: "Santorini & the Greek Islands",
    tagline: "Azure waters, ancient ruins, and sunsets that redefine beauty",
    destination: "Greece",
    coverImage:
      "/images/santorini-cover.jpg",
    galleryImages: [
      "/images/santorini-1.jpg",
      "/images/santorini-2.jpg",
      "/images/santorini-3.jpg",
    ],
    category: "Beach & Islands",
    duration: "8 Days / 7 Nights",
    groupSize: "Max 14 Guests",
    startDate: "June 15, 2026",
    endDate: "June 22, 2026",
    price: "$3,450",
    difficulty: "Easy",
    highlights: [
      "Sunset cruise along the Santorini caldera",
      "Private wine tasting at Santo Wines",
      "Guided hike from Fira to Oia along the cliffside trail",
      "Day trip to the volcanic island of Nea Kameni",
      "Traditional Greek cooking class with a local chef",
      "Ferry to Mykonos with guided old town walking tour",
    ],
    overview:
      "Experience the magic of the Greek Islands on this carefully curated 8-day journey. Begin in Athens with a private Acropolis tour, then sail to Santorini for clifftop sunsets, volcanic beaches, and world-class gastronomy. Cross to Mykonos for its legendary charm before returning to the mainland enriched and inspired. Every detail — from boutique caldera-view hotels to private boat charters — has been meticulously planned.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Athens",
        description:
          "Welcome reception at your boutique hotel in the Plaka district. Evening rooftop dinner overlooking the illuminated Acropolis.",
      },
      {
        day: 2,
        title: "Athens – Ancient Wonders",
        description:
          "Private guided tour of the Acropolis and Parthenon, followed by the Acropolis Museum. Afternoon free to explore the Plaka's winding streets and artisan shops.",
      },
      {
        day: 3,
        title: "Ferry to Santorini",
        description:
          "High-speed ferry to Santorini. Check into your caldera-view cave hotel in Oia. Evening welcome dinner at a cliffside restaurant.",
      },
      {
        day: 4,
        title: "Santorini – Caldera & Wine",
        description:
          "Morning hike along the Fira–Oia trail with panoramic caldera views. Afternoon wine tasting at three volcanic vineyards. Sunset from the Oia castle.",
      },
      {
        day: 5,
        title: "Santorini – Volcanic Adventure",
        description:
          "Boat trip to the volcanic islands of Nea Kameni and Palea Kameni. Swim in natural hot springs. Afternoon cooking class learning traditional Cycladic dishes.",
      },
      {
        day: 6,
        title: "Santorini – Beach & Leisure",
        description:
          "Free morning to explore at your own pace. Visit the Red Beach, Vlychada's lunar landscape, or shop in Fira. Afternoon sunset sailing cruise with dinner onboard.",
      },
      {
        day: 7,
        title: "Ferry to Mykonos",
        description:
          "Morning ferry to Mykonos. Guided walking tour of Mykonos Town — Little Venice, the iconic windmills, and hidden chapels. Farewell dinner at a seaside taverna.",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Free morning for last-minute shopping or a final swim. Transfer to Mykonos airport or ferry port for your onward journey.",
      },
    ],
    included: [
      "7 nights boutique accommodation",
      "Daily breakfast, 4 dinners",
      "All inter-island ferry transfers",
      "Private guided tours & excursions",
      "Sunset sailing cruise",
      "Wine tasting & cooking class",
      "Airport/port transfers",
      "Dedicated BLAZE tour leader",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Meals not listed in itinerary",
      "Personal shopping & souvenirs",
      "Optional spa treatments",
    ],
  },
  {
    id: 2,
    slug: "serengeti-safari-expedition",
    title: "Serengeti Safari Expedition",
    tagline: "Witness the Great Migration and the Big Five in their kingdom",
    destination: "Tanzania",
    coverImage:
      "/images/serengeti-cover.jpg",
    galleryImages: [
      "/images/serengeti-1.jpg",
      "/images/serengeti-2.jpg",
      "/images/serengeti-3.jpg",
    ],
    category: "Adventure",
    duration: "10 Days / 9 Nights",
    groupSize: "Max 10 Guests",
    startDate: "July 8, 2026",
    endDate: "July 17, 2026",
    price: "$5,800",
    difficulty: "Moderate",
    highlights: [
      "Witness the Great Migration river crossings",
      "Game drives through the Serengeti, Ngorongoro & Tarangire",
      "Luxury tented camp under the African stars",
      "Visit an authentic Maasai village",
      "Ngorongoro Crater — the world's largest caldera",
      "Hot air balloon safari at sunrise (optional add-on)",
    ],
    overview:
      "This 10-day expedition takes you deep into Tanzania's legendary wildlife reserves. From the vast Serengeti plains — timed for the Great Migration — to the astonishing Ngorongoro Crater and the elephant-rich Tarangire National Park, every day promises life-changing wildlife encounters. Stay in luxury tented camps, dine under star-filled skies, and be guided by expert Maasai trackers who know this land intimately.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Arrive at Kilimanjaro International Airport. Transfer to your lodge at the foot of Mount Meru. Welcome briefing and dinner.",
      },
      {
        day: 2,
        title: "Arusha – Tarangire National Park",
        description:
          "Drive to Tarangire, famous for its massive elephant herds and ancient baobab trees. Afternoon game drive. Overnight at a luxury tented camp.",
      },
      {
        day: 3,
        title: "Tarangire – Ngorongoro",
        description:
          "Morning game drive, then transfer to the Ngorongoro Conservation Area. Afternoon visit to a Maasai village. Sundowner on the crater rim.",
      },
      {
        day: 4,
        title: "Ngorongoro Crater",
        description:
          "Full-day descent into the Ngorongoro Crater — often called the 'Garden of Eden'. Spot lion, rhino, hippo, and flamingos in this enclosed ecosystem.",
      },
      {
        day: 5,
        title: "Ngorongoro – Serengeti (South)",
        description:
          "Cross the Serengeti's southern plains. Game drive en route spotting cheetah, giraffe, and wildebeest columns. Arrive at your Serengeti camp.",
      },
      {
        day: 6,
        title: "Serengeti – Central Plains",
        description:
          "Full-day game drives across the central Serengeti. Seek out lion prides, leopards in acacia trees, and vast herds on the move.",
      },
      {
        day: 7,
        title: "Serengeti – Migration River Crossings",
        description:
          "Drive north to the Mara River region. Witness the dramatic wildebeest crossings — one of nature's greatest spectacles. Picnic lunch in the bush.",
      },
      {
        day: 8,
        title: "Serengeti – Full Day Safari",
        description:
          "Another full day exploring different sectors of the Serengeti. Optional sunrise hot air balloon safari (additional cost). Bush dinner under the stars.",
      },
      {
        day: 9,
        title: "Serengeti – Arusha",
        description:
          "Morning game drive. Light aircraft transfer back to Arusha. Afternoon at leisure. Farewell dinner celebrating the expedition.",
      },
      {
        day: 10,
        title: "Departure",
        description:
          "Transfer to Kilimanjaro International Airport for your departure flight. Karibu tena — welcome back anytime.",
      },
    ],
    included: [
      "9 nights luxury tented camp & lodge accommodation",
      "All meals throughout the safari",
      "All game drives in custom 4x4 vehicles",
      "Expert Maasai guide & trackers",
      "Ngorongoro Crater entry fees",
      "All national park fees",
      "Light aircraft Serengeti–Arusha transfer",
      "Airport transfers",
      "Dedicated BLAZE expedition leader",
    ],
    notIncluded: [
      "International flights",
      "Travel & medical insurance",
      "Hot air balloon safari ($550 pp)",
      "Visa fees",
      "Personal items & gratuities",
    ],
  },
  {
    id: 3,
    slug: "sacred-bali-spiritual-journey",
    title: "Sacred Bali: A Spiritual Journey",
    tagline: "Ancient temples, rice terraces, and a deep cultural immersion",
    destination: "Indonesia",
    coverImage:
      "/images/bali-cover.jpg",
    galleryImages: [
      "/images/bali-1.jpg",
      "/images/bali-2.jpg",
      "/images/bali-3.jpg",
    ],
    category: "Culture",
    duration: "7 Days / 6 Nights",
    groupSize: "Max 12 Guests",
    startDate: "August 2, 2026",
    endDate: "August 8, 2026",
    price: "$2,900",
    difficulty: "Easy",
    highlights: [
      "Sunrise at the Gates of Heaven — Pura Lempuyang",
      "Purification ritual at Tirta Empul holy spring",
      "Trek through Jatiluwih UNESCO rice terraces",
      "Private Balinese cooking class",
      "Traditional dance performance at Ubud Palace",
      "Yoga & meditation retreat in the jungle",
    ],
    overview:
      "Go beyond the beaches and discover the spiritual soul of Bali. This 7-day journey is guided by a Balinese Hindu priest who opens doors to sacred temples, hidden ceremonies, and ancient wisdom traditions. From the mist-covered highlands of Kintamani to the artistic heart of Ubud, every day offers profound cultural encounters balanced with moments of serenity and natural beauty.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Ubud",
        description:
          "Airport pickup and drive through lush countryside to Ubud. Check into your jungle-view boutique resort. Welcome ceremony with offerings and blessings.",
      },
      {
        day: 2,
        title: "Ubud – Temples & Art",
        description:
          "Morning visit to Tirta Empul for a guided purification ritual. Afternoon explore Ubud's art galleries and the sacred Monkey Forest. Evening Kecak dance at Ubud Palace.",
      },
      {
        day: 3,
        title: "Rice Terraces & Highlands",
        description:
          "Trek through the Jatiluwih rice terraces (UNESCO). Learn about the subak water management system. Drive to Kintamani for lunch overlooking Mount Batur.",
      },
      {
        day: 4,
        title: "Sacred Temples Circuit",
        description:
          "Pre-dawn departure for sunrise at Pura Lempuyang — the Gates of Heaven framing Mount Agung. Visit Tirta Gangga water palace and Goa Gajah elephant cave.",
      },
      {
        day: 5,
        title: "Yoga, Meditation & Cooking",
        description:
          "Morning yoga and meditation session in a riverside pavilion. Afternoon Balinese cooking class using fresh market ingredients. Free evening in Ubud.",
      },
      {
        day: 6,
        title: "Ulun Danu & Waterfalls",
        description:
          "Drive to the highland lake temples — Ulun Danu Bratan floating on the misty lake. Visit Sekumpul waterfall. Farewell dinner at a candlelit rice paddy restaurant.",
      },
      {
        day: 7,
        title: "Departure",
        description:
          "Free morning for last reflections. Transfer to Bali airport with a stop at a silversmith village in Celuk.",
      },
    ],
    included: [
      "6 nights boutique resort accommodation",
      "Daily breakfast, 3 lunches, 3 dinners",
      "All temple entries & guided tours",
      "Balinese priest guide throughout",
      "Cooking class & yoga sessions",
      "All ground transportation",
      "Airport transfers",
      "Dedicated BLAZE tour leader",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Meals not listed",
      "Optional spa treatments",
      "Personal shopping & gratuities",
    ],
  },
  {
    id: 4,
    slug: "morocco-imperial-cities-sahara",
    title: "Morocco: Imperial Cities & Sahara",
    tagline: "From ancient medinas to starlit desert camps under endless skies",
    destination: "Morocco",
    coverImage:
      "/images/morocco-cover.jpg",
    galleryImages: [
      "/images/morocco-1.jpg",
      "/images/morocco-2.jpg",
      "/images/morocco-3.jpg",
    ],
    category: "Road Trip",
    duration: "12 Days / 11 Nights",
    groupSize: "Max 12 Guests",
    startDate: "September 5, 2026",
    endDate: "September 16, 2026",
    price: "$4,200",
    difficulty: "Moderate",
    highlights: [
      "Private guided tour of the Marrakech medina & souks",
      "Cross the High Atlas Mountains via Tizi n'Tichka",
      "Overnight camel trek into the Erg Chebbi dunes",
      "Explore UNESCO-listed Aït Benhaddou",
      "Hike the dramatic Todra Gorge",
      "Stay in a restored riad in the heart of Fes",
    ],
    overview:
      "Traverse the full spectrum of Morocco on this epic 12-day journey. Begin in the sensory whirlwind of Marrakech, cross the snow-capped Atlas Mountains, explore ancient kasbahs and dramatic gorges, then venture deep into the Sahara for an unforgettable night under the stars. End in the medieval labyrinth of Fes — Africa's oldest university city. This tour blends adventure, culture, and comfort in equal measure.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Marrakech",
        description:
          "Welcome at Marrakech airport. Transfer to your traditional riad in the medina. Evening walk through Jemaa el-Fna square and welcome dinner.",
      },
      {
        day: 2,
        title: "Marrakech – Medina & Palaces",
        description:
          "Full day exploring: Bahia Palace, Saadian Tombs, Koutoubia Mosque, and the labyrinthine souks with a local guide. Afternoon tea on a rooftop terrace.",
      },
      {
        day: 3,
        title: "Atlas Mountains & Aït Benhaddou",
        description:
          "Cross the High Atlas via the dramatic Tizi n'Tichka pass (2,260m). Visit the UNESCO kasbah of Aït Benhaddou. Overnight in Ouarzazate.",
      },
      {
        day: 4,
        title: "Roses Valley & Todra Gorge",
        description:
          "Drive through the Valley of Roses and Dades Valley. Arrive at the towering Todra Gorge for a guided canyon walk. Overnight in a gorge-side lodge.",
      },
      {
        day: 5,
        title: "Todra – Merzouga (Sahara Gateway)",
        description:
          "Drive south through palm oases and Berber villages to Merzouga at the edge of the Sahara. Afternoon at leisure by the pool.",
      },
      {
        day: 6,
        title: "Sahara Desert – Camel Trek",
        description:
          "Afternoon camel trek into the Erg Chebbi dunes. Watch sunset from the crest. Luxury desert camp with Berber music, tagine dinner, and stargazing.",
      },
      {
        day: 7,
        title: "Sahara – Midelt",
        description:
          "Sunrise over the dunes. Drive through the Ziz Gorge and cedar forests. Overnight in Midelt in the Middle Atlas foothills.",
      },
      {
        day: 8,
        title: "Midelt – Fes",
        description:
          "Continue north to Fes. Check into your palace riad. Afternoon free to wander the blue-and-white streets of the Jewish quarter (Mellah).",
      },
      {
        day: 9,
        title: "Fes – The Medieval Medina",
        description:
          "Full-day guided exploration of the Fes medina: tanneries, Al Quaraouiyine Mosque (world's oldest university), artisan workshops, and hidden gardens.",
      },
      {
        day: 10,
        title: "Fes – Chefchaouen",
        description:
          "Day trip to the famous blue city of Chefchaouen in the Rif Mountains. Explore the photogenic streets and enjoy a mountain-side lunch.",
      },
      {
        day: 11,
        title: "Fes – Cooking & Farewell",
        description:
          "Morning cooking class learning to make traditional pastilla and tagine. Afternoon at a hammam spa. Farewell dinner on a rooftop overlooking the medina.",
      },
      {
        day: 12,
        title: "Departure",
        description:
          "Transfer to Fes airport (or option for Marrakech transfer). Ma'a salama — until we meet again.",
      },
    ],
    included: [
      "11 nights riad/lodge/luxury camp accommodation",
      "Daily breakfast, 6 lunches, 7 dinners",
      "All guided tours & entries",
      "Private air-conditioned vehicle & driver",
      "Camel trek & desert camp experience",
      "Cooking class & hammam visit",
      "All ground transfers",
      "Dedicated BLAZE tour leader",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Meals not listed",
      "Visa fees (if applicable)",
      "Personal shopping & gratuities",
    ],
  },
  {
    id: 5,
    slug: "norwegian-fjords-cruise",
    title: "Norwegian Fjords Expedition Cruise",
    tagline: "Glaciers, waterfalls, and the midnight sun from the deck of a luxury vessel",
    destination: "Norway",
    coverImage:
      "/images/norway-cover.jpg",
    galleryImages: [
      "/images/norway-1.jpg",
      "/images/norway-2.jpg",
      "/images/norway-3.jpg",
    ],
    category: "Cruise",
    duration: "9 Days / 8 Nights",
    groupSize: "Max 20 Guests",
    startDate: "June 28, 2026",
    endDate: "July 6, 2026",
    price: "$6,200",
    difficulty: "Easy",
    highlights: [
      "Sail through UNESCO-listed Geirangerfjord",
      "Zodiac excursion to Jostedalsbreen glacier",
      "Visit Urnes Stave Church (oldest in Norway)",
      "Experience the midnight sun above the Arctic Circle",
      "Explore the colorful Bryggen wharf in Bergen",
      "Onboard lectures by expedition geologists",
    ],
    overview:
      "Board our luxury expedition vessel in Bergen and sail into the heart of Norway's most dramatic fjords. Over 9 extraordinary days, you'll navigate glacier-carved waterways flanked by thousand-meter cliffs and cascading waterfalls. Go ashore to hike to glacier faces, explore Viking-era stave churches, and taste fresh Nordic cuisine. This voyage combines the comfort of a boutique ship with the thrill of genuine expedition-style exploration.",
    itinerary: [
      {
        day: 1,
        title: "Bergen – Embarkation",
        description:
          "Explore Bergen's colorful Bryggen wharf and fish market. Board the expedition vessel in the afternoon. Welcome dinner and captain's briefing.",
      },
      {
        day: 2,
        title: "Sognefjord",
        description:
          "Sail into Norway's longest fjord. Stop at Flåm for the legendary Flåm Railway — one of the world's steepest railway lines with spectacular mountain views.",
      },
      {
        day: 3,
        title: "Jostedalsbreen Glacier",
        description:
          "Zodiac excursion to the Nigardsbreen glacier arm. Guided hike to the ice face. Onboard lecture on glaciology and fjord formation.",
      },
      {
        day: 4,
        title: "Urnes & Inner Fjords",
        description:
          "Visit Urnes Stave Church (UNESCO, c.1130). Cruise the narrow inner Lustrafjord with its emerald waters and sheer granite walls.",
      },
      {
        day: 5,
        title: "Geirangerfjord",
        description:
          "Sail into the iconic Geirangerfjord. Witness the Seven Sisters and Suitor waterfalls. Kayaking excursion (weather permitting). Afternoon at Geiranger village.",
      },
      {
        day: 6,
        title: "Nordfjord & Selje",
        description:
          "Explore Nordfjord's quieter waters. Visit the monastery ruins on Selja island. Onboard Norwegian cooking demonstration.",
      },
      {
        day: 7,
        title: "Hardangerfjord",
        description:
          "Cruise the orchard-lined Hardangerfjord. Visit a traditional cider farm. Hike to the Vøringsfossen waterfall viewpoint.",
      },
      {
        day: 8,
        title: "Rosendal & Farewell",
        description:
          "Morning stop at the Barony of Rosendal — Norway's smallest barony with idyllic gardens. Afternoon sailing back to Bergen. Captain's farewell dinner.",
      },
      {
        day: 9,
        title: "Bergen – Disembarkation",
        description:
          "Disembark after breakfast. Optional guided Bergen city tour before your onward journey. Ha det bra — goodbye for now!",
      },
    ],
    included: [
      "8 nights onboard luxury expedition vessel",
      "All meals onboard (full board)",
      "All zodiac & shore excursions",
      "Onboard expedition lectures",
      "Flåm Railway & stave church entries",
      "Kayaking equipment",
      "Port transfers in Bergen",
      "Dedicated BLAZE expedition leader",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Alcoholic beverages beyond welcome/farewell dinners",
      "Optional Bergen city tour on Day 9",
      "Personal items & gratuities",
    ],
  },
  {
    id: 6,
    slug: "tokyo-japan-discovery",
    title: "Tokyo & Japan Discovery",
    tagline: "Where ancient tradition and futuristic innovation collide magnificently",
    destination: "Japan",
    coverImage:
      "/images/japan-cover.jpg",
    galleryImages: [
      "/images/japan-1.jpg",
      "/images/japan-2.jpg",
      "/images/japan-3.jpg",
    ],
    category: "City & Culture",
    duration: "11 Days / 10 Nights",
    groupSize: "Max 14 Guests",
    startDate: "October 10, 2026",
    endDate: "October 20, 2026",
    price: "$5,100",
    difficulty: "Easy",
    highlights: [
      "Private tea ceremony with a Kyoto tea master",
      "Bullet train experience Tokyo–Kyoto",
      "Sunrise at Fushimi Inari's 10,000 torii gates",
      "Day trip to Mount Fuji and Hakone",
      "Michelin-starred sushi omakase dinner",
      "Night tour of Tokyo's neon neighborhoods",
    ],
    overview:
      "Discover Japan in all its magnificent contrasts on this 11-day journey spanning Tokyo, Hakone, Kyoto, and Osaka. Experience cutting-edge technology and centuries-old ritual side by side. Ride the bullet train, walk through bamboo forests, sample the world's finest cuisine, and find serenity in zen gardens. Our expert cultural guides reveal a Japan that goes far deeper than the surface.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tokyo",
        description:
          "Welcome at Narita/Haneda airport. Private transfer to your hotel in Shinjuku. Evening orientation walk through the neon streets. Welcome dinner in a private izakaya.",
      },
      {
        day: 2,
        title: "Tokyo – Old & New",
        description:
          "Morning at Senso-ji Temple and Asakusa. Cross to Akihabara's electric town. Afternoon in Shibuya and Harajuku. Evening free to explore Shinjuku Golden Gai.",
      },
      {
        day: 3,
        title: "Tokyo – Meiji & Tsukiji",
        description:
          "Serene morning at Meiji Shrine and its ancient forest. Sushi breakfast at Tsukiji Outer Market. Afternoon at TeamLab digital art museum. Michelin omakase dinner.",
      },
      {
        day: 4,
        title: "Day Trip – Mt. Fuji & Hakone",
        description:
          "Bullet train to Odawara, then cable car over Owakudani volcanic valley. Cruise on Lake Ashi with Fuji views. Return to Tokyo via the romance car.",
      },
      {
        day: 5,
        title: "Tokyo – Kyoto (Bullet Train)",
        description:
          "Experience the Shinkansen bullet train (2 hrs). Arrive in Kyoto. Afternoon stroll through the Gion geisha district. Evening kaiseki dinner.",
      },
      {
        day: 6,
        title: "Kyoto – Temples & Gardens",
        description:
          "Pre-dawn visit to Fushimi Inari's 10,000 torii gates. Kinkaku-ji Golden Pavilion. Afternoon zen rock garden at Ryoan-ji. Private tea ceremony with a master.",
      },
      {
        day: 7,
        title: "Kyoto – Arashiyama",
        description:
          "Morning in the Arashiyama bamboo grove. Visit Tenryu-ji Temple and its garden. Afternoon sake tasting at a Fushimi brewery. Free evening in Kyoto.",
      },
      {
        day: 8,
        title: "Day Trip – Nara",
        description:
          "Train to Nara to visit Todai-ji Temple housing the Great Buddha. Walk among the friendly deer in Nara Park. Return to Kyoto for dinner.",
      },
      {
        day: 9,
        title: "Kyoto – Osaka",
        description:
          "Train to Osaka. Explore Osaka Castle and the historic Shinsekai district. Guided street food tour of Dotonbori — Japan's kitchen.",
      },
      {
        day: 10,
        title: "Osaka – Free Day & Farewell",
        description:
          "Free morning for last-minute shopping in Shinsaibashi. Optional visit to the Osaka Aquarium. Farewell dinner overlooking the Osaka skyline.",
      },
      {
        day: 11,
        title: "Departure",
        description:
          "Transfer to Kansai International Airport. Sayonara — until next time!",
      },
    ],
    included: [
      "10 nights premium hotel accommodation",
      "Daily breakfast, 5 dinners (incl. Michelin omakase & kaiseki)",
      "Bullet train passes (Tokyo–Kyoto, Kyoto–Osaka)",
      "All guided tours & temple entries",
      "Private tea ceremony & sake tasting",
      "TeamLab museum entry",
      "Mount Fuji/Hakone day trip transport",
      "Airport transfers",
      "Dedicated BLAZE cultural guide",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Meals not listed",
      "JR Pass upgrade (if wanted for free days)",
      "Personal shopping & gratuities",
    ],
  },
]

export function getTour(id: number): Tour | undefined {
  return tours.find((t) => t.id === id)
}

export function getAllTours(): Tour[] {
  return tours
}

function departureTime(tour: Tour): number {
  return new Date(tour.startDate).getTime()
}

/** Midnight today, so a tour stays bookable for the whole of its departure day. */
function startOfDay(date: Date): number {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  return d.getTime()
}

export function hasDeparted(tour: Tour, now: Date = new Date()): boolean {
  return departureTime(tour) < startOfDay(now)
}

/** Still bookable, soonest departure first. */
export function getUpcomingTours(now: Date = new Date()): Tour[] {
  return tours
    .filter((t) => !hasDeparted(t, now))
    .sort((a, b) => departureTime(a) - departureTime(b))
}

/** Already departed, most recent first. */
export function getPastTours(now: Date = new Date()): Tour[] {
  return tours
    .filter((t) => hasDeparted(t, now))
    .sort((a, b) => departureTime(b) - departureTime(a))
}
