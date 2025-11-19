// Core node data for the Web of Antiquity graph

const nodes = [
    // Gladiators & Spartacus
    {
      id: "gladiators",
      label: "Gladiators",
      type: "Ancient Source",
      cluster: "Gladiators & Spartacus",
      description:
        "The Roman institution of gladiatorial games, combining entertainment, violence, and power display in the arena.",
      sources: ["Appian", "Plutarch", "Suetonius"],
      note:
        "Modern culture often romanticizes gladiators as heroic underdogs rather than as enslaved performers within an imperial spectacle."
    },
    {
      id: "spartacus_revolt",
      label: "Spartacus' Revolt",
      type: "Ancient Source",
      cluster: "Gladiators & Spartacus",
      description:
        "The Third Servile War (73–71 BCE), led by Spartacus, a Thracian gladiator who escaped a ludus near Capua.",
      sources: ["Plutarch, Life of Crassus", "Appian, Civil Wars"],
      note:
        "Ancient sources focus on elite Roman perspectives; modern receptions reframe the revolt as a symbol of universal freedom."
    },
    {
      id: "spartacus_film_1960",
      label: "Spartacus (1960 film)",
      type: "Modern Media",
      cluster: "Gladiators & Spartacus",
      description:
        "Hollywood epic directed by Stanley Kubrick, starring Kirk Douglas, produced during the Cold War and the blacklist era.",
      sources: ["Film: Spartacus (1960)", "Production histories"],
      note:
        "The film reads Spartacus through American liberalism and anti-McCarthy politics, emphasizing individual heroism and resistance."
    },
    {
      id: "gladiator_2000",
      label: "Gladiator (2000)",
      type: "Modern Media",
      cluster: "Gladiators & Spartacus",
      description:
        "Ridley Scott film about Maximus, a fictional general-turned-gladiator who challenges imperial corruption.",
      sources: ["Film: Gladiator (2000)", "Modern reviews"],
      note:
        "Blends historical elements with modern values of authenticity, masculinity, and trauma; redefines the arena as a space of moral truth."
    },
  
    // Persia vs Greece / 300
    {
      id: "thermopylae",
      label: "Battle of Thermopylae",
      type: "Ancient Source",
      cluster: "Persia vs Greece / 300",
      description:
        "480 BCE battle where a small Greek force led by Leonidas faced the invading Persian army at a narrow pass.",
      sources: ["Herodotus, Histories"],
      note:
        "Ancient narrative already dramatizes ‘few vs many’; later receptions amplify this into a myth of Western, masculine heroism."
    },
    {
      id: "three_hundred_graphic",
      label: "300 (Graphic Novel)",
      type: "Modern Media",
      cluster: "Persia vs Greece / 300",
      description:
        "Frank Miller and Lynn Varley’s stylized retelling of Thermopylae, emphasizing hyper-masculine Spartans and monstrous Persians.",
      sources: ["Frank Miller, 300 (1998)"],
      note:
        "Transforms complex Greek–Persian relations into a stark visual binary of ‘free’ West vs ‘despotic’ East."
    },
    {
      id: "three_hundred_film_2006",
      label: "300 (2006 film)",
      type: "Modern Media",
      cluster: "Persia vs Greece / 300",
      description:
        "Zack Snyder’s adaptation of Miller’s graphic novel, famous for slow-motion violence and graphic-novel aesthetics.",
      sources: ["Film: 300 (2006)", "Contemporary criticism"],
      note:
        "Frequently read as a post-9/11 fantasy that maps U.S. geopolitics onto ancient East–West conflict."
    },
  
    // Tropes & Political Uses
    {
      id: "trope_freedom_vs_tyranny",
      label: "Freedom vs Tyranny",
      type: "Trope",
      cluster: "Rome as Empire / Fascism",
      description:
        "A recurring narrative pattern opposing ‘free’ citizens and ‘enslaving’ empires, projected both onto Greeks and Romans.",
      sources: ["Modern political rhetoric", "Classical reception studies"],
      note:
        "Ancient nuances are flattened into a simple binary that modern politics reuses for propaganda and identity-building."
    },
    {
      id: "political_spartacus_left",
      label: "Spartacus in Left Politics",
      type: "Political Use",
      cluster: "Gladiators & Spartacus",
      description:
        "Use of Spartacus as a symbol of class struggle, revolution, and anti-capitalist resistance.",
      sources: ["Trade union posters", "20th-century socialist movements"],
      note:
        "Highlights how ancient slave revolts are recoded as blueprints for modern liberation movements."
    }
  ];
  
  // Edges: directed conceptually, but we mostly care about “connectedness” here
  
  const edges = [
    // Gladiators & Spartacus cluster
    {
      id: "e1",
      from: "gladiators",
      to: "spartacus_revolt",
      relationType: "contextual background",
      note: "Spartacus’ revolt emerges from the wider system of gladiatorial slavery."
    },
    {
      id: "e2",
      from: "spartacus_revolt",
      to: "spartacus_film_1960",
      relationType: "inspired adaptation",
      note: "Film reframes ancient revolt through Cold War and anti-McCarthy politics."
    },
    {
      id: "e3",
      from: "gladiators",
      to: "gladiator_2000",
      relationType: "loosely inspired reimagining",
      note: "Draws on gladiatorial spectacle but invents a fictional protagonist."
    },
    {
      id: "e4",
      from: "spartacus_revolt",
      to: "political_spartacus_left",
      relationType: "political appropriation",
      note: "Spartacus becomes an icon of socialist and workers’ movements."
    },
  
    // Thermopylae / 300 cluster
    {
      id: "e5",
      from: "thermopylae",
      to: "three_hundred_graphic",
      relationType: "stylized adaptation",
      note: "Selective use of Herodotus with strong visual and ideological filters."
    },
    {
      id: "e6",
      from: "three_hundred_graphic",
      to: "three_hundred_film_2006",
      relationType: "direct adaptation",
      note: "Film preserves the graphic novel’s framing more than the ancient sources."
    },
  
    // Tropes and cross-cluster links
    {
      id: "e7",
      from: "thermopylae",
      to: "trope_freedom_vs_tyranny",
      relationType: "ideological framing",
      note: "Battle is reframed as pure ‘freedom vs tyranny’ in modern retellings."
    },
    {
      id: "e8",
      from: "three_hundred_film_2006",
      to: "trope_freedom_vs_tyranny",
      relationType: "exaggerated use of trope",
      note: "The film leans heavily on Western freedom vs Eastern despotism rhetoric."
    },
    {
      id: "e9",
      from: "spartacus_film_1960",
      to: "trope_freedom_vs_tyranny",
      relationType: "shared trope",
      note: "Spartacus’ ‘I am Spartacus’ scene becomes a canonical freedom gesture."
    }
  ];
  