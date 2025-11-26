// Core node data for the Web of Antiquity graph

const nodes = [
  /* ------------------------------------------------------------------
     CLUSTER: Gladiators & Spartacus
     (Syllabus Lesson 7, 9 & Intro)
     ------------------------------------------------------------------ */
  /* --- NEW ADDITIONS: The Trojan War & Disney --- */
  {
    id: "homer_poet",
    label: "Homer (Iliad/Odyssey)",
    type: "Ancient Source",
    cluster: "Greek Tragedy & Feminism", // Fits broadly in "Greek Literature"
    description: "The foundational epic poet of Greece. Attributed author of the Iliad (Trojan War) and Odyssey.",
    sources: ["Iliad", "Odyssey"],
    note: "The primary source for almost all Greek heroism tropes. Establishes the 'Kleos' (glory) that modern films obsess over."
  },
  {
    id: "troy_film",
    label: "Troy (2004)",
    type: "Modern Media",
    cluster: "Persia vs Greece / 300", // Fits in "East vs West" warfare
    description: "Wolfgang Petersen's realistic take on the Iliad. Strips out all the gods to focus on human duelists (Achilles/Hector).",
    sources: ["Film: Troy (2004)"],
    note: "Famous for removing the supernatural to make the myth 'rational' and 'gritty' for modern audiences."
  },
  {
    id: "disney_hercules",
    label: "Disney's Hercules (1997)",
    type: "Modern Media",
    cluster: "Greek Tragedy & Feminism", // Irony: It sanitizes the tragedy
    description: "Animated musical re-imagining Heracles as a celebrity athlete seeking fame to regain his godhood.",
    sources: ["Film: Disney's Hercules"],
    note: "Sanitizes the dark original myths (insanity, murder) into a story about American celebrity culture and Superman-like heroism."
  },
  {
    id: "ancient_aliens",
    label: "Ancient Aliens",
    type: "Modern Media",
    cluster: "Persia vs Greece / 300", // Fits with "Mysticism/Othering"
    description: "History Channel series proposing that ancient monuments and gods were actually extraterrestrial technology.",
    sources: ["TV: Ancient Aliens"],
    note: "The ultimate 'distortion': strips ancient cultures of their human agency and attributes their achievements to aliens."
  },

     /* --- NEW ADDITIONS: Rome, Christianity & Spectacle (Syllabus Lesson 10 & 12) --- */
     {
      id: "greek_gods_myth",
      label: "The Greek Gods",
      type: "Ancient Source",
      // Placing in "Tragedy" cluster as it's the home of myth in your current filters, 
      // but it applies broadly.
      cluster: "Greek Tragedy & Feminism", 
      description: "The Olympian pantheon: Zeus, Ares, Athena, etc. Capricious, powerful, and anthropomorphic deities.",
      sources: ["Hesiod (Theogony)", "Homer"],
      note: "Modern media often simplifies them into 'Superheroes' or 'Villains', stripping away their terrifying lack of human morality."
    },
    {
      id: "god_of_war_game",
      label: "God of War",
      type: "Modern Media",
      cluster: "Gladiators & Spartacus", // Fits here due to "Spectacle & Violence"
      description: "Video game franchise following Kratos, a Spartan warrior who violently challenges the Olympian Gods.",
      sources: ["Game: God of War (2005-2018)"],
      note: "Epitomizes the 'Hyper-violent' reception of classics. Kratos is the ultimate anti-hero, destroying the very myths he comes from."
    },
  {
    id: "quo_vadis_1951",
    label: "Quo Vadis (1951)",
    type: "Modern Media",
    cluster: "Rome, Christianity & Jews",
    description: "Hollywood epic where a Roman commander falls for a Christian hostage under Nero's rule.",
    sources: ["Film: Quo Vadis (1951)", "Sienkiewicz (Novel)"],
    note: "Establishes the visual language of the 'Roman Movie': trumpets, eagles, and the contrast between pagan excess and Christian purity."
  },
  {
    id: "the_robe_1953",
    label: "The Robe (1953)",
    type: "Modern Media",
    cluster: "Rome, Christianity & Jews",
    description: "The first CinemaScope film. A Roman tribune who crucified Jesus is tormented by the magical robe.",
    sources: ["Film: The Robe (1953)"],
    note: "Focuses on the 'conversion narrative'—the Roman soldier is the proxy for the modern audience moving from skepticism to faith."
  },
  {
    id: "masada_miniseries",
    label: "Masada (1981)",
    type: "Modern Media",
    cluster: "Rome, Christianity & Jews",
    description: "TV miniseries depicting the Jewish siege at Masada. Frames the conflict as freedom fighters vs. imperial machine.",
    sources: ["TV: Masada (1981)"],
    note: "Heavily parallels the 'Freedom vs. Tyranny' trope, aligning Jewish zealots with American revolutionary ideals."
  },
  {
    id: "josephus",
    label: "Josephus",
    type: "Ancient Source",
    cluster: "Rome, Christianity & Jews",
    description: "Jewish-Roman historian (1st Century CE) who chronicled the Jewish War and the fall of Jerusalem.",
    sources: ["The Jewish War"],
    note: "Our primary source for Masada, though his account is complex and often apologetic towards Rome."
  },

  /* --- NEW ADDITIONS: Decadence & Sexuality (Syllabus Lesson 8) --- */
  {
    id: "satyricon_petronius",
    label: "Petronius' Satyricon",
    type: "Ancient Source",
    cluster: "Decadence & Sexuality",
    description: "Neronian-era novel offering a satirical, gritty look at low-life Rome, focusing on food, sex, and money.",
    sources: ["Petronius"],
    note: "Unlike the 'marble' Rome of statesmen, this text shows the chaotic, grotesque, and vibrant underbelly."
  },
  {
    id: "fellini_satyricon",
    label: "Fellini Satyricon (1969)",
    type: "Modern Media",
    cluster: "Decadence & Sexuality",
    description: "Federico Fellini’s surreal adaptation. Fragmented, dreamlike, and deliberately alienating.",
    sources: ["Film: Fellini Satyricon"],
    note: "Rejects the 'Hollywood' version of Rome. Depicts antiquity as a strange, unknowable sci-fi world."
  },
  {
    id: "caligula_film",
    label: "Caligula (1979)",
    type: "Modern Media",
    cluster: "Decadence & Sexuality",
    description: "Infamous cult film produced by Penthouse. Focuses entirely on the insanity and sexual depravity of the emperor.",
    sources: ["Film: Caligula (1979)"],
    note: "The ultimate example of the 'Decadence' trope—Rome exists solely as a venue for shock value and pornography."
  },
  {
    id: "suetonius_twelve",
    label: "Suetonius' 12 Caesars",
    type: "Ancient Source",
    cluster: "Decadence & Sexuality",
    description: "Roman biographer who cataloged the scandals, vices, and physical oddities of the early emperors.",
    sources: ["Suetonius"],
    note: "The main source for nearly all modern depictions of 'crazy emperors' (Nero, Caligula)."
  },

  /* --- NEW ADDITIONS: Tragedy & Feminism (Syllabus Lesson 5) --- */
  {
    id: "antigone_ancient",
    label: "Antigone",
    type: "Ancient Source",
    cluster: "Greek Tragedy & Feminism",
    description: "Sophocles' play about a young woman defying the state (King Creon) to bury her brother.",
    sources: ["Sophocles"],
    note: "The primal text for civil disobedience and the conflict between private conscience and public law."
  },
  {
    id: "antigone_political",
    label: "Antigone (Political Use)",
    type: "Political Use",
    cluster: "Greek Tragedy & Feminism",
    description: "Used frequently in the 20th century (e.g., Anouilh under Nazi occupation, Fugard in Apartheid SA) to protest authoritarianism.",
    sources: ["Anouilh", "Athol Fugard"],
    note: "Antigone shifts from a tragic figure to a pure symbol of resistance against the 'Fascist' state."
  },
  {
    id: "lysistrata_ancient",
    label: "Lysistrata",
    type: "Ancient Source",
    cluster: "Greek Tragedy & Feminism",
    description: "Aristophanes' comedy where women go on a sex strike to end the Peloponnesian War.",
    sources: ["Aristophanes"],
    note: "Often adapted by modern feminism as a 'Girl Power' pacifist narrative, ignoring the original's scatological humor."
  },
  {
    id: "chi_raq",
    label: "Chi-Raq (2015)",
    type: "Modern Media",
    cluster: "Greek Tragedy & Feminism",
    description: "Spike Lee’s film adapting Lysistrata to modern-day Chicago gang violence.",
    sources: ["Film: Chi-Raq"],
    note: "Shows the flexibility of reception: ancient Greek gender dynamics mapped onto modern American race and gun violence."
  },

  /* --- NEW ADDITIONS: Pop Culture / Gaming (To thicken the web) --- */
  {
    id: "assassins_creed",
    label: "Assassin's Creed: Odyssey",
    type: "Modern Media",
    cluster: "Persia vs Greece / 300",
    description: "Video game set during the Peloponnesian War allowing players to explore a recreated Greece.",
    sources: ["Game: Ubisoft (2018)"],
    note: "Allows 'tourism' of the past. Often prioritizes architectural grandeur over historical social realities."
  },
  {
    id: "percy_jackson",
    label: "Percy Jackson",
    type: "Modern Media",
    cluster: "Gladiators & Spartacus",
    description: "YA series/movies bringing Greek gods into modern America.",
    sources: ["Rick Riordan"],
    note: "Domesticates the terrifying ancient gods, making them relatable parents and teens."
  },
  {
    id: "gladiators_historical",
    label: "Historical Gladiators",
    type: "Ancient Source",
    cluster: "Gladiators & Spartacus",
    description: "The Roman institution of gladiatorial games (munera), combining religious duty, entertainment, and power display.",
    sources: ["Suetonius", "Juvenal (Satires)"],
    note: "Modern culture often ignores the religious origins, focusing solely on the bloodsport and the 'fight for freedom' narrative."
  },
  {
    id: "spartacus_revolt",
    label: "Spartacus' Revolt",
    type: "Ancient Source",
    cluster: "Gladiators & Spartacus",
    description: "The Third Servile War (73–71 BCE), led by Spartacus. A massive slave uprising that terrified the Roman elite.",
    sources: ["Plutarch (Life of Crassus)", "Appian"],
    note: "Ancient sources viewed Spartacus as a dangerous enemy; modern reception reimagines him as a champion of universal human rights."
  },
  {
    id: "spartacus_film_1960",
    label: "Spartacus (1960)",
    type: "Modern Media",
    cluster: "Gladiators & Spartacus",
    description: "Kubrick’s epic starring Kirk Douglas. Produced during the Cold War/Blacklist era.",
    sources: ["Film: Spartacus (1960)"],
    note: "Read as a critique of McCarthyism. The 'I am Spartacus' scene emphasizes solidarity, a concept absent in the ancient accounts."
  },
  {
    id: "gladiator_2000",
    label: "Gladiator (2000)",
    type: "Modern Media",
    cluster: "Gladiators & Spartacus",
    description: "Ridley Scott’s revival of the sword-and-sandal genre. Focuses on Maximus, a fictional general-turned-gladiator.",
    sources: ["Film: Gladiator (2000)"],
    note: "Replaces the specific politics of Rome with modern American values of family, democracy, and individual authenticity."
  },
  {
    id: "gym_culture",
    label: "Gym & 'Alpha' Culture",
    type: "Modern Media",
    cluster: "Gladiators & Spartacus",
    description: "The use of gladiator imagery (Spartan helmets, 'Pain is Weakness') in modern fitness and motivational media.",
    sources: ["Social Media", "Fitness Branding"],
    note: "Strips the context of slavery and death, keeping only the aesthetic of hyper-masculine stoicism and physical dominance."
  },
  {
    id: "political_spartacus",
    label: "Spartacus (Socialist Icon)",
    type: "Political Use",
    cluster: "Gladiators & Spartacus",
    description: "The adoption of Spartacus by the Left (e.g., The Spartacus League in Germany) as a proto-communist revolutionary.",
    sources: ["Rosa Luxemburg", "Karl Marx"],
    note: "Projects modern class-struggle dynamics backward onto ancient slave economies."
  },

  /* ------------------------------------------------------------------
     CLUSTER: Persia vs Greece / 300
     (Syllabus Lesson 6)
     ------------------------------------------------------------------ */
  {
    id: "thermopylae",
    label: "Battle of Thermopylae",
    type: "Ancient Source",
    cluster: "Persia vs Greece / 300",
    description: "480 BCE. The '300' Spartans (plus allies) holding the pass against the Persian Empire.",
    sources: ["Herodotus, Histories"],
    note: "Herodotus respects the Persians more than modern media does; he treats them as worthy adversaries, not monsters."
  },
  {
    id: "three_hundred_film",
    label: "300 (2006)",
    type: "Modern Media",
    cluster: "Persia vs Greece / 300",
    description: "Zack Snyder’s film adapting Frank Miller’s graphic novel. Highly stylized, violent, and visually distinct.",
    sources: ["Film: 300 (2006)"],
    note: "Criticized for promoting a 'Clash of Civilizations' narrative (West=Free/Rational vs. East=Slave/Mystical/Decadent)."
  },
  {
    id: "orientalism_trope",
    label: "Orientalism",
    type: "Trope",
    cluster: "Persia vs Greece / 300",
    description: "A way of seeing the East as exotic, feminine, despotic, and dangerous to the 'rational' West.",
    sources: ["Edward Said (Orientalism)", "Lesson 6 Readings"],
    note: "In '300', Xerxes is depicted as an effeminate, jewelry-draped 'God King' to contrast with the rugged, manly Spartans."
  },

  /* ------------------------------------------------------------------
     CLUSTER: Rome, Christianity & Jews
     (Syllabus Lesson 10, 11, 12)
     ------------------------------------------------------------------ */
  {
    id: "nero_historical",
    label: "Nero & Persecution",
    type: "Ancient Source",
    cluster: "Rome, Christianity & Jews",
    description: "Emperor Nero (r. 54–68 CE), associated with the Great Fire of Rome and the first persecution of Christians.",
    sources: ["Tacitus (Annals)", "Suetonius"],
    note: "Became the archetype of the 'Antichrist' and the corrupt pagan state in Christian historiography."
  },
  {
    id: "ben_hur_1959",
    label: "Ben-Hur (1959)",
    type: "Modern Media",
    cluster: "Rome, Christianity & Jews",
    description: "The supreme cinematic spectacle. Tells the story of a Jewish prince enslaved by Rome who encounters Jesus.",
    sources: ["Film: Ben-Hur (1959)", "Lew Wallace (Novel)"],
    note: "Intertwines the 'Cinema of Spectacle' (chariot race) with the 'Cinema of Piety'. Rome is power; Christianity is love."
  },
  {
    id: "life_of_brian",
    label: "Monty Python's Life of Brian",
    type: "Modern Media",
    cluster: "Rome, Christianity & Jews",
    description: "1979 satire about a man born next door to Jesus. Satirizes both Roman bureaucracy and religious factionalism.",
    sources: ["Film: Life of Brian (1979)"],
    note: "Critiques the solemnity of the 'Biblical Epic' genre. Famous for the line 'What have the Romans ever done for us?'"
  },
  {
    id: "trope_evil_empire",
    label: "The Evil Empire",
    type: "Trope",
    cluster: "Rome, Christianity & Jews",
    description: "The depiction of Rome as a cold, militaristic machine that crushes spiritual or democratic freedom.",
    sources: ["Course Syllabus", "Pop Culture"],
    note: "Used to frame Christians/Jews as the 'Rebel Alliance' against the Imperial Stormtroopers."
  },

  /* ------------------------------------------------------------------
     CLUSTER: Rome as Empire / Fascism
     (Syllabus Lesson 4, 9)
     ------------------------------------------------------------------ */
  {
    id: "mussolini_rome",
    label: "Mussolini's Romanitá",
    type: "Political Use",
    cluster: "Rome as Empire / Fascism",
    description: "Italian Fascism's appropriation of Roman symbols (the fasces, the eagle, the salute) to legitimize authority.",
    sources: ["Lesson 4 Readings", "Fleming (2007)"],
    note: "Rome was used to argue that Italian expansion was a historical destiny and a return to greatness."
  },
  {
    id: "star_wars_empire",
    label: "The Galactic Empire",
    type: "Modern Media",
    cluster: "Rome as Empire / Fascism",
    description: "George Lucas's depiction of the Empire in Star Wars, blending Nazi and Roman aesthetics.",
    sources: ["Film: Star Wars"],
    note: "The shift from Republic to Empire in the Prequels mirrors the fall of the Roman Republic (Senate becomes impotent)."
  },

  /* ------------------------------------------------------------------
     CLUSTER: Decadence & Sexuality
     (Syllabus Lesson 8)
     ------------------------------------------------------------------ */
  {
    id: "messalina",
    label: "Messalina",
    type: "Ancient Source",
    cluster: "Decadence & Sexuality",
    description: "Wife of Claudius. Portrayed by ancient historians as sexually insatiable and manipulative.",
    sources: ["Juvenal (Satires)", "Tacitus"],
    note: "Used by ancient authors to slander the Julio-Claudian dynasty; became a modern byword for female depravity."
  },
  {
    id: "hbo_rome",
    label: "HBO's Rome",
    type: "Modern Media",
    cluster: "Decadence & Sexuality",
    description: "2005 series depicting the grit, grime, and complex sexuality of the Late Republic.",
    sources: ["TV: HBO Rome"],
    note: "Breaks the 'marble' image of Rome. Uses sex/nudity not just for titillation but to show a pre-Christian moral universe."
  },

  /* ------------------------------------------------------------------
     CLUSTER: Greek Tragedy & Feminism
     (Syllabus Lesson 5)
     ------------------------------------------------------------------ */
  {
    id: "medea_ancient",
    label: "Euripides' Medea",
    type: "Ancient Source",
    cluster: "Greek Tragedy & Feminism",
    description: "Tragedy where a foreign woman kills her children to punish her unfaithful Greek husband, Jason.",
    sources: ["Euripides"],
    note: "Challenges Greek patriarchal norms. Is she a monster or a victim of oppression?"
  },
  {
    id: "feminist_adaptation",
    label: "Feminist Receptions",
    type: "Trope",
    cluster: "Greek Tragedy & Feminism",
    description: "Modern theater/film reclaiming tragic women (Medea, Antigone) as icons of female agency against patriarchy.",
    sources: ["Lesson 5 Readings"],
    note: "Shifts focus from their 'crimes' to the social structures that pushed them to extremes."
  }
];

/* ------------------------------------------------------------------
   EDGES / CONNECTIONS
   ------------------------------------------------------------------ */
   const edges = [
  /* --- EDGES FOR NEW NODES --- */
  
  // 1. Homer -> Troy
  { from: "homer_poet", to: "troy_film", relationType: "rationalized adaptation", note: "The film removes the gods that are central to Homer's text." },
  
  // 2. Homer -> Odyssey Game (Assassin's Creed)
  { from: "homer_poet", to: "assassins_creed", relationType: "world building", note: "The game allows players to meet a fictionalized Odysseus." },

  // 3. Greek Gods -> Disney's Hercules
  { from: "greek_gods_myth", to: "disney_hercules", relationType: "sanitized adaptation", note: "Hera becomes a loving mother instead of the villain." },

  // 4. Disney -> Gym Culture (The link to modern body image)
  { from: "disney_hercules", to: "gym_culture", relationType: "influences", note: "The 'Zero to Hero' montage is a staple of fitness motivation culture." },

  // 5. Greek Gods -> Ancient Aliens
  { from: "greek_gods_myth", to: "ancient_aliens", relationType: "pseudo-scientific reinterpretation", note: "Gods are reinterpreted as aliens." },

  // 6. Gladiator (2000) -> Troy (2004)
  { from: "gladiator_2000", to: "troy_film", relationType: "genre revival", note: "Gladiator's success greenlit the production of Troy." },
  
    /* --- MYTHOLOGY & GAMING HUB --- */
  
  // 1. Greek Gods -> Percy Jackson (The connection you were missing)
  { 
    from: "greek_gods_myth", 
    to: "percy_jackson", 
    relationType: "modern adaptation", 
    note: "Updates the gods into absentee parents in a modern American setting." 
  },

  // 2. Greek Gods -> God of War
  { 
    from: "greek_gods_myth", 
    to: "god_of_war_game", 
    relationType: "violent deconstruction", 
    note: "The game treats the gods as bosses to be defeated rather than deities to be worshipped." 
  },

  // 3. Greek Gods -> Medea (Connecting back to the Tragedy cluster)
  { 
    from: "greek_gods_myth", 
    to: "medea_ancient", 
    relationType: "divine lineage", 
    note: "Medea is the granddaughter of Helios (the Sun God)." 
  },

  // 4. Thermopylae (Spartans) -> God of War (Kratos is a Spartan)
  { 
    from: "thermopylae", 
    to: "god_of_war_game", 
    relationType: "character origin", 
    note: "Kratos is explicitly a Spartan General, using the 'Spartan Rage' mechanic." 
  },
  
  // 5. Greek Gods -> Wonder Woman (Optional if you want to add her later, but good to keep in mind)
  // { from: "greek_gods_myth", to: "wonder_woman_film", relationType: "superhero adaptation" }

    /* --- ROME & CHRISTIANITY (Corrected: Source -> Adaptation) --- */
    { from: "nero_historical", to: "quo_vadis_1951", relationType: "antagonist inspiration" },
    { from: "quo_vadis_1951", to: "ben_hur_1959", relationType: "genre predecessor", note: "Quo Vadis set the mold that Ben-Hur perfected." },
    { from: "the_robe_1953", to: "ben_hur_1959", relationType: "genre companion" },
    { from: "josephus", to: "masada_miniseries", relationType: "primary source" },
    // Flipped: The Trope exists first, the series uses it
    { from: "trope_freedom_vs_tyranny", to: "masada_miniseries", relationType: "thematic frame" },
    // Flipped: The Trope frames the series
    { from: "trope_evil_empire", to: "masada_miniseries", relationType: "framing device" },
  
    /* --- DECADENCE (Corrected: Ancient -> Modern) --- */
    { from: "satyricon_petronius", to: "fellini_satyricon", relationType: "adaptation" },
    { from: "suetonius_twelve", to: "caligula_film", relationType: "source material" },
    { from: "suetonius_twelve", to: "hbo_rome", relationType: "source material" },
    // Flipped: The trope informs the film
    { from: "trope_evil_empire", to: "caligula_film", relationType: "exemplified by" },
    // Flipped: Fellini (1969) comes before HBO (2005)
    { from: "fellini_satyricon", to: "hbo_rome", relationType: "stylistic contrast", note: "Fellini's earlier dream-logic contrasts with HBO's later realism." },
    { from: "messalina", to: "caligula_film", relationType: "shared archetype", note: "Both represent the trope of the 'sex-crazed' imperial court." },
  
    /* --- TRAGEDY/FEMINISM (Corrected) --- */
    { from: "antigone_ancient", to: "antigone_political", relationType: "political appropriation" },
    { from: "trope_freedom_vs_tyranny", to: "antigone_political", relationType: "central theme" },
    { from: "lysistrata_ancient", to: "chi_raq", relationType: "modern adaptation" },
    { from: "medea_ancient", to: "chi_raq", relationType: "thematic link", note: "Both feature women taking radical action against male violence." },
    
    /* --- POP CULTURE/GAMING (Corrected) --- */
    { from: "thermopylae", to: "assassins_creed", relationType: "historical setting" },
    { from: "three_hundred_film", to: "assassins_creed", relationType: "visual influence", note: "The game's combat style is heavily influenced by the movie 300." },
    { from: "gladiators_historical", to: "percy_jackson", relationType: "mythological remix" },
    
    /* --- GLADIATORS CLUSTER (Corrected) --- */
    { from: "gladiators_historical", to: "spartacus_revolt", relationType: "context" },
    { from: "spartacus_revolt", to: "spartacus_film_1960", relationType: "adaptation" },
    { from: "spartacus_revolt", to: "political_spartacus", relationType: "appropriation" },
    { from: "gladiators_historical", to: "gladiator_2000", relationType: "inspiration" },
    { from: "gladiator_2000", to: "gym_culture", relationType: "visual quotation" },
    { from: "three_hundred_film", to: "gym_culture", relationType: "visual quotation" },
  
    /* --- PERSIA / 300 CLUSTER (Corrected) --- */
    { from: "thermopylae", to: "three_hundred_film", relationType: "adaptation" },
    // Flipped: The Trope is the concept, the film is the example
    { from: "orientalism_trope", to: "three_hundred_film", relationType: "manifests in" },
    
    /* --- ROME & CHRISTIANITY LINKS (Corrected) --- */
    { from: "nero_historical", to: "ben_hur_1959", relationType: "historical setting" },
    // Flipped: Ancient History -> Modern Film
    { from: "gladiators_historical", to: "ben_hur_1959", relationType: "historical setting", note: "Chariot racing and arena violence." },
    // Flipped: Trope -> Film
    { from: "trope_evil_empire", to: "ben_hur_1959", relationType: "depicted in" },
    // Flipped: Ben Hur (1959) -> Monty Python (1979)
    { from: "ben_hur_1959", to: "life_of_brian", relationType: "satirized by" },
    
    /* --- EMPIRE / FASCISM CLUSTER (Corrected) --- */
    { from: "mussolini_rome", to: "trope_evil_empire", relationType: "real-world parallel" },
    { from: "trope_evil_empire", to: "star_wars_empire", relationType: "scifi adaptation" },
    // Flipped: Ben Hur (1959) -> Star Wars (1977)
    { from: "ben_hur_1959", to: "star_wars_empire", relationType: "cinematic homage", note: "Pod race inspired by Ben-Hur chariot race." },
  
    /* --- DECADENCE / SEXUALITY LINKS (Corrected) --- */
    { from: "messalina", to: "hbo_rome", relationType: "character inspiration" },
    // Flipped: Ancient History -> Modern Show
    { from: "gladiators_historical", to: "hbo_rome", relationType: "depicted in" },
    
    /* --- TRAGEDY CLUSTER (Corrected) --- */
    { from: "medea_ancient", to: "feminist_adaptation", relationType: "reinterpretation" }
  ];