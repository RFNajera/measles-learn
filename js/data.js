/* ============================================================
   Measles Learning App — Content data
   All prose adapted from CDC, WHO, and peer-reviewed sources
   (see per-module "sources" arrays for citations).
   ============================================================ */

const MODULES = [
  {
    id: 'origins',
    num: 1,
    title: 'Origins & Emergence',
    subtitle: 'How a cattle disease became a human one',
    icon: 'origin',
    summary:
      'Where measles came from: how it split off from a cattle virus, why it needed big cities to survive, and who first described it in writing.',
    readingMinutes: 6,
    sections: [
      {
        h: 'Evolutionary origins and the rinderpest connection',
        p: [
          'Measles only infects people, but it did not start with us. Its closest relative is <strong>rinderpest</strong>, a cattle disease that vaccines wiped out completely in 2011. Both belong to a family of viruses called <em>Morbillivirus</em>. Most scientists think measles began when an ancestor of the rinderpest virus jumped from animals into humans — a "spillover" — and then changed until it could spread easily from person to person.',
          'For a long time, researchers thought that jump happened around the 11th or 12th century CE. A 2010 study using a "molecular clock" (a way to estimate age from how much a virus\'s genes have changed) put it around 1074–1171 CE. Then a 2020 study in <em>Science</em> read the genes of a measles sample saved from 1912 — the oldest human RNA virus ever decoded — and pushed the date back much further, to roughly <strong>528 BCE</strong>. That fits the time when large, connected cities were first growing across Europe and Asia.'
        ]
      },
      {
        h: 'Why measles needs a crowd',
        p: [
          'Measles cannot survive in a small group of people. Once you catch measles and recover, you are protected for life. So the virus constantly needs new people who have never had it — mostly newborns — to keep spreading. In a small town it quickly runs out of people to infect and dies out, until someone brings it back from somewhere else.',
          'The epidemiologist F.L. Black worked out roughly how big a population has to be for measles to stick around on its own: about <strong>250,000 to 500,000 people</strong>. This is also a clue about where measles came from. Groups that large did not exist until the first cities, so measles could not have settled into humans until those cities appeared.'
        ]
      },
      {
        h: 'The first written descriptions',
        p: [
          'The first clear medical description of measles was written by the Persian physician <strong>Abu Bakr Muhammad ibn Zakariyya al-Razi</strong>, known in the West as Rhazes (about 854–925 CE). In his book comparing smallpox and measles, he was the first to explain in writing how the two diseases differ — describing the rash, the fever that comes first, and other signs. That was careful, accurate work for his time.',
          'Centuries later, doctors in Europe kept sharpening that picture. In <strong>1546</strong>, the Veronese physician <strong>Girolamo Fracastoro</strong> published a classic description of the illness. He suggested it spread through tiny invisible "seeds" — he called them <em>seminaria</em> — passed from one person to the next. That was a striking guess, more than 300 years before anyone could actually see a virus.',
          'In <strong>1670</strong>, during a measles epidemic in London, the English physician <strong>Thomas Sydenham</strong> wrote a thorough, careful account of the disease as it played out in his patients. His work helped doctors tell measles apart from scarlet fever and smallpox — three illnesses that were often confused because they all cause fever and a rash.',
          'The big proof that measles is truly infectious came in <strong>1757</strong>, when the Scottish doctor <strong>Francis Home</strong> ran an experiment. He took blood from people sick with measles and used it to give the disease to healthy people on purpose. When they came down with measles, it showed that something in the blood of a sick person could pass the disease along — direct evidence that measles is caused by an infectious agent.'
        ]
      }
    ],
    keyFacts: [
      'Measles split off from rinderpest (a cattle virus) around <strong>528 BCE</strong>, based on a 2020 study of a measles sample from 1912.',
      'An older estimate put the split in the 11th–12th century CE; the earlier date is now favored.',
      'Measles needs a population of about <strong>250,000–500,000</strong> people to keep spreading on its own.',
      'Rhazes (al-Razi) wrote the first clear description telling measles apart from smallpox, in the 9th–10th century CE.',
      'In <strong>1757</strong>, Francis Home proved measles is infectious by passing it to healthy people using the blood of sick patients.',
      'Rinderpest was wiped out in 2011 — the only animal disease ever eliminated — leaving measles as the last of its kind.'
    ],
    sources: [
      { t: 'Düx et al., Science (2020) — measles–rinderpest divergence', u: 'https://www.science.org/doi/10.1126/science.aba9411' },
      { t: 'Furuse et al., Virology Journal (2010)', u: 'https://d-nb.info/1098729005/34' },
      { t: 'Black, Journal of Theoretical Biology (1966) — critical community size', u: 'https://andreashandel.github.io/IDEMAcourse/media/black66jtb.pdf' },
      { t: 'CDC — History of Measles', u: 'https://www.cdc.gov/measles/about/history.html' },
      { t: 'Muslim Heritage — Al-Razi on Smallpox and Measles', u: 'https://muslimheritage.com/al-razi-smallpox-measles/' },
      { t: 'SAMJ (2010) — early history of measles (Fracastoro, Sydenham)', u: 'https://scielo.org.za/scielo.php?script=sci_arttext&pid=S0256-95742010000400013' },
      { t: 'Médecine et Maladies Infectieuses (2022) — Sydenham and the clinical description of measles', u: 'https://www.sciencedirect.com/science/article/abs/pii/S0755498222000422' },
      { t: 'MSK Library Guides — History of Measles (Francis Home)', u: 'https://libguides.mskcc.org/publichealth/MeaslesHistory' },
      { t: 'WHO — History of Measles Vaccination', u: 'https://www.who.int/news-room/spotlight/history-of-vaccination/history-of-measles-vaccination' }
    ]
  },
  {
    id: 'virology',
    num: 2,
    title: 'Virology',
    subtitle: 'What the virus is made of, and how it hijacks the body',
    icon: 'virus',
    summary:
      'What measles is built from, the two “doors” it uses to get into your cells, why one vaccine still works after 60 years, and how measles erases the immune system’s memory.',
    readingMinutes: 7,
    sections: [
      {
        h: 'What measles is made of',
        p: [
          'Measles is in the same virus family (called <strong>Paramyxoviridae</strong>) as mumps and a few animal diseases. The virus is a tiny ball wrapped in a fatty outer coat, about 100–300 nanometers wide — you could line up roughly 400 of them across the width of a human hair.',
          'Its instructions are stored in <strong>RNA</strong> rather than DNA. That RNA is “backwards” (scientists call it negative-sense), so the virus cannot use it directly. First it has to flip the RNA into a readable form using a copying tool it carries with it. In all, its genes code for eight proteins — six that build the virus and two that help it dodge the immune system.'
        ]
      },
      {
        h: 'The two proteins on its surface: H and F',
        p: [
          'Two proteins stick out from the virus’s surface, and they do most of the work of infecting you. The <strong>H protein</strong> is the grappling hook — it latches onto the outside of one of your cells. Once it grabs on, the <strong>F protein</strong> pulls the virus and the cell together and fuses them, letting the virus slip its genes inside. These same two proteins are the main targets your antibodies learn to recognize, which is why they matter for the vaccine.'
        ]
      },
      {
        h: 'The two “doors” it uses to get in',
        p: [
          'A virus can only enter a cell if that cell has a matching “door” (a receptor) on its surface. Measles uses two. The first door, called <strong>SLAM</strong>, sits on immune cells — the very cells meant to fight infection. Measles targets them first. The immune system’s long-term memory cells carry extra copies of this door, which is why measles hits them especially hard (more on that below).',
          'The second door, called <strong>nectin-4</strong>, sits on the cells lining your airway. After the virus multiplies in your immune system, it moves to these airway cells. From there, fresh virus is coughed and sneezed into the air — ready to infect the next person.'
        ]
      },
      {
        h: 'Why one measles vaccine still works after 60 years',
        p: [
          'The flu virus changes its surface every year, which is why you need a new flu shot each season. Measles does not do this. To your immune system, measles has essentially looked the same for over a century. Antibodies made against the measles strain isolated in 1954 still block the measles spreading today. That is the reason a vaccine designed in the 1960s still protects people now, with no need to update it.'
        ]
      },
      {
        h: 'How measles erases immune memory',
        p: [
          'Here is one of the most surprising and dangerous facts about measles: it can erase your immune system’s memory. Your body remembers past infections through special memory cells, so it can fight the same germ faster next time. Because measles attacks these memory cells, it wipes out protection you had already built up.',
          'A 2019 study in <em>Science</em> measured this directly. After a measles infection, children lost between <strong>11% and 73%</strong> of the antibodies they had built up against other germs — years of protection, gone. This leaves them open to infections they had already beaten before, and the effect can last two to three years (some studies say up to five). One more thing worth being clear about: the MMR vaccine does <strong>not</strong> do this. The vaccine builds immunity without destroying memory cells.'
        ]
      }
    ],
    keyFacts: [
      'Measles stores its instructions in <strong>RNA</strong>, not DNA, and wraps itself in a fatty coat.',
      'It gets into cells using two “doors”: <strong>SLAM</strong> on immune cells and <strong>nectin-4</strong> on airway cells.',
      'Measles barely changes over time, so a vaccine from the 1960s still works against today’s virus.',
      '<strong>Immune amnesia</strong>: measles can erase 11–73% of the antibodies you built up against other germs, for 2–3 years.',
      'The MMR vaccine builds immunity <strong>without</strong> causing this memory loss.',
      'The H and F proteins on the surface are what your antibodies learn to target.'
    ],
    sources: [
      { t: 'PHAC — Measles Virus Pathogen Safety Data Sheet', u: 'https://www.canada.ca/en/public-health/services/laboratory-biosafety-biosecurity/pathogen-safety-data-sheets-risk-assessment/measles-virus.html' },
      { t: 'Mina et al., Science (2019) — immune amnesia', u: 'https://www.science.org/doi/10.1126/science.aay6485' },
      { t: 'CDC Pink Book, Chapter 13 — Measles', u: 'https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-13-measles.html' },
      { t: 'WHO Immunological Basis for Immunization Series (2020)', u: 'https://files.givewell.org/files/DWDA%202009/WHO/WHO_Immunological_Basis_for_Immunization_Series_Measles_2020.pdf' },
      { t: 'NIH Director\u2019s Blog (2019) — how measles leaves the body prone to infection', u: 'https://directorsblog.nih.gov/2019/11/12/how-measles-leaves-the-body-prone-to-future-infections/' }
    ]
  },
  {
    id: 'clinical',
    num: 3,
    title: 'Clinical Disease & Societal Impact',
    subtitle: 'What measles does to the body, and how it spreads',
    icon: 'clinical',
    summary:
      'What measles looks like from exposure to rash, why it spreads faster than almost any other disease, and the serious problems it can cause — from pneumonia to a rare brain disease that is always fatal.',
    readingMinutes: 7,
    sections: [
      {
        h: 'From exposure to rash, step by step',
        p: [
          'Measles usually follows the same pattern. First comes a quiet stretch — about 10 to 12 days after you are exposed — when you feel fine and have no symptoms. Doctors call this the incubation period. Then the illness starts with a high fever (often 103–105°F) plus a cough, a runny nose, and red, watery eyes. A memory aid is the “three C’s”: cough, coryza (runny nose), and conjunctivitis (pink eye). This is also when the person is most contagious — before the rash even shows up, which makes measles hard to catch in time.',
          'A day or two before the rash, tiny blue-white spots (called <strong>Koplik spots</strong>) may appear inside the cheeks — a sign that points strongly to measles. The rash then starts on the face and spreads down the body over 3 to 5 days. A person can spread measles from 4 days before the rash to 4 days after it appears.'
        ]
      },
      {
        h: 'One of the most contagious diseases there is',
        p: [
          'Measles spreads more easily than almost any other disease. If one person has measles and everyone around them is unprotected, that one person will infect <strong>12 to 18 others</strong> on average. For comparison, regular flu spreads to about 1 or 2 people, and the original COVID-19 virus to about 2 or 3. So measles spreads roughly ten times more easily than the flu.',
          'It travels through the air. The virus can hang in a room for up to <strong>2 hours</strong> after an infected person has left. If unprotected people breathe that air, about <strong>9 out of 10</strong> of them will catch it. You do not have to touch anyone — sharing the same room is enough.'
        ]
      },
      {
        h: 'Measles is more than a rash',
        p: [
          'Measles can cause serious problems, and they are more common than many people expect. <strong>Pneumonia</strong> (a lung infection) is the main cause of measles deaths. <strong>Swelling of the brain</strong>, called encephalitis, happens in about 1 in every 1,000 people who get measles; it can be deadly, and many survivors are left with lasting brain damage. Measles also causes ear infections in about 7 to 9 out of every 100 cases, which can lead to permanent hearing loss, and it can cause blindness where children are also short on vitamin A.',
          'How often measles kills depends heavily on where you are. In wealthy countries, roughly 1 to 3 of every 1,000 people who get measles die. In places with widespread malnutrition and little access to care, that number can climb to 100–250 of every 1,000 during an outbreak. The disease is the same; the difference is access to food, care, and vaccines.'
        ]
      },
      {
        h: 'A rare brain disease that shows up years later',
        p: [
          'There is one measles complication that is rare but always fatal. It is called <strong>SSPE</strong> (short for subacute sclerosing panencephalitis). In some people, the measles virus quietly stays in the brain and, 7 to 10 years later — sometimes even decades — causes the brain to break down. It starts with small changes in behavior and thinking, then leads to seizures, coma, and death, usually within 1 to 3 years. Children who catch measles before age 2 are at the highest risk. Because it appears so long after the original illness, families often do not connect it back to the measles infection.'
        ]
      },
      {
        h: 'When measles reaches people who have never seen it',
        p: [
          'Measles is deadliest when it reaches a population that has never been exposed to it, so no one has any immunity. Historians call these “virgin-soil” epidemics. In the Faroe Islands in 1846, measles came back after 65 years away and infected nearly everyone. In Fiji in 1875, it killed about one in four people within months. Measles also played a large part in the collapse of Indigenous populations in the Americas.',
          'It is worth being clear about why these death tolls were so high. It was not that these groups were biologically weaker. It was that no one had immunity, and the deaths were made worse by poverty, crowding, and no medical care during the outbreak. The same conditions still make measles more deadly in some places today.'
        ]
      }
    ],
    keyFacts: [
      'Early signs are fever plus the “three C’s” (cough, runny nose, pink eye); tiny <strong>Koplik spots</strong> may appear in the mouth 1–2 days before the rash.',
      'Measles spreads to <strong>12–18</strong> unprotected people per case — about ten times more than the flu — and lingers in the air for up to 2 hours.',
      '<strong>SSPE</strong> is a rare brain disease (roughly 1 in 25,000–100,000 cases, higher in infants) that appears years later and is always fatal.',
      'In wealthy countries, 1–3 of every 1,000 people with measles die; the toll is far higher where malnutrition is common.',
      'By erasing immune memory, measles leaves people open to other infections for years afterward.',
      'When measles reaches people with no prior immunity, far more of them die — driven by no immunity, poverty, and lack of care.'
    ],
    sources: [
      { t: 'CDC — Clinical Overview of Measles', u: 'https://www.cdc.gov/measles/hcp/clinical-overview/index.html' },
      { t: 'WHO — Measles Fact Sheet', u: 'https://www.who.int/news-room/fact-sheets/detail/measles' },
      { t: 'CDC — Measles Signs & Symptoms', u: 'https://www.cdc.gov/measles/signs-symptoms/index.html' },
      { t: 'ECDC — Measles Facts', u: 'https://www.ecdc.europa.eu/en/measles/facts' },
      { t: 'Pathogens and Global Health (2015) — Indigenous mortality', u: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4768625/' }
    ]
  },
  {
    id: 'epi-past',
    num: 4,
    title: 'Epidemiology — Past',
    subtitle: 'What measles did before the vaccine',
    icon: 'past',
    summary:
      'Before 1963, nearly every child caught measles. Here is what that cost — 3 to 4 million U.S. cases a year — plus two early studies that taught us how the disease works.',
    readingMinutes: 6,
    sections: [
      {
        h: 'What measles cost the U.S. before 1963',
        p: [
          'Before the vaccine arrived in 1963, measles was almost a rite of passage: nearly every American child caught it by age 15. That meant an estimated <strong>3 to 4 million cases every year</strong>. (Only about 500,000 were officially reported, because measles was so common that most families never bothered to report it.)',
          'These were not harmless cases. In a typical year in that era, measles caused about <strong>400 to 500 deaths</strong>, sent 48,000 people to the hospital, and left about 1,000 with permanent brain damage from swelling of the brain. “Everyone gets it” did not mean it was safe.'
        ]
      },
      {
        h: 'Why outbreaks came in waves',
        p: [
          'Before the vaccine, measles came back in big cities on a regular schedule — a large outbreak roughly every <strong>2 to 3 years</strong>. The reason is simple: after an outbreak, most kids who could catch measles already had. It took a couple of years for enough new babies to be born to give the virus fresh people to infect, and then it surged again. Outbreaks usually peaked in late winter and early spring, when children were packed together in school.',
          'Worldwide, the toll was staggering. Before vaccines were widely used, measles killed an estimated <strong>2.6 million people a year</strong>, most of them young children.'
        ]
      },
      {
        h: 'The Faroe Islands, 1846: an early detective story',
        p: [
          'When measles swept the Faroe Islands in 1846, a young Danish doctor named Peter Ludwig Panum went to study it — and figured out several things we still teach today. He found that people got sick about 13 to 14 days after being exposed (the incubation period). He noticed that older residents who had survived the last measles outbreak, back in 1781, did not get sick again — proof that measles gives lifelong protection. And he showed it spread through close contact between people. He worked all this out just by careful observation, decades before anyone even knew viruses existed.'
        ]
      },
      {
        h: 'Fiji, 1875: a disaster in a few months',
        p: [
          'In 1875, Fiji’s king and his party returned from a trip to Australia, and measles came back with them on the ship. No one in Fiji had ever been exposed, so no one was protected. Within a few months, an estimated <strong>25,000 to 40,000 people died</strong> — about one in four Fijians. Part of what made it so deadly: whole families and villages fell sick at the same time, so there was no one well enough to bring water, food, or care. When everyone is ill at once, an outbreak becomes far more dangerous.'
        ]
      }
    ],
    keyFacts: [
      'Before the 1963 vaccine, the U.S. had about <strong>3–4 million measles cases</strong> and 400–500 deaths every year.',
      'Big cities had a large measles outbreak roughly every <strong>2–3 years</strong>, as new babies replaced those already immune.',
      'Worldwide, measles killed about <strong>2.6 million people a year</strong> before vaccines were common.',
      'In 1846, Dr. Panum used the Faroe Islands outbreak to show measles has a 13–14-day incubation period and gives lifelong protection.',
      'The 1875 Fiji outbreak killed about <strong>25,000–40,000 people</strong> — roughly one in four — in a few months.',
      'In the first decade after U.S. reporting began (1912), about 6,000 measles deaths were recorded each year.'
    ],
    sources: [
      { t: 'CDC — History of Measles', u: 'https://www.cdc.gov/measles/about/history.html' },
      { t: 'WHO — Measles Fact Sheet', u: 'https://www.who.int/news-room/fact-sheets/detail/measles' },
      { t: 'Panum, American Journal of Public Health (reprint)', u: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1530953/' },
      { t: 'Journal of Pacific Studies (2023) — Epidemics in Fiji\u2019s history', u: 'https://www.usp.ac.fj/journal-of-pacific-studies/wp-content/uploads/sites/162/2023/12/Epidemics-in-Fijis-history.pdf' }
    ]
  },
  {
    id: 'epi-current',
    num: 5,
    title: 'Epidemiology — Current',
    subtitle: 'Why measles is coming back',
    icon: 'current',
    summary:
      'Why about 95% of people need to be vaccinated, how measles surged worldwide when that slipped, and how the 2025 U.S. outbreak became the worst in over 30 years.',
    readingMinutes: 7,
    sections: [
      {
        h: 'Why the magic number is about 95%',
        p: [
          'Because measles spreads so easily, you need a very high share of people protected to stop it. This is called <strong>herd immunity</strong>: when enough people are immune, the virus runs out of people to infect and cannot spread, which also shields babies and others who cannot be vaccinated.',
          'For measles, that share is about <strong>95%</strong> — higher than for almost any other disease. That leaves very little room for error, since a few people will not respond to the vaccine and some are too young or too sick to get it. When coverage slips below 95%, even in one town or one school, measles can come roaring back.'
        ]
      },
      {
        h: 'Measles surged back worldwide, 2017–2019',
        p: [
          'In 2016, reported measles cases hit a record low of about 132,000 worldwide. Then they shot back up. By 2019, reported cases had jumped to about <strong>869,770</strong> — more than six times higher — the most since 1996, with an estimated <strong>207,500 deaths</strong>. Large outbreaks hit the Democratic Republic of Congo, Madagascar, Samoa, Ukraine, and the Philippines. In every case the cause was the same: not enough people were vaccinated.'
        ]
      },
      {
        h: 'The U.S. nearly lost its “measles-free” status',
        p: [
          'The U.S. declared measles <strong>eliminated in 2000</strong>, meaning it was no longer spreading on its own here. But “eliminated” does not mean gone forever — it can return whenever coverage drops. In 2019, long outbreaks in a few under-vaccinated communities in New York drove <strong>1,274 cases</strong> across 31 states, the most since 1992. The U.S. came close to losing its measles-free status. About 89% of the people who got sick were unvaccinated or had no vaccination record.'
        ]
      },
      {
        h: 'Where things stand worldwide (2024)',
        p: [
          'The most recent WHO numbers, for <strong>2024</strong>, show about <strong>95,000 measles deaths</strong> worldwide. Globally, 84% of children have gotten one dose of the vaccine and only 76% have gotten both — both below the 95% needed to stop measles.',
          'The vaccine has done enormous good even so. Health agencies estimate measles shots prevented nearly <strong>59 million deaths between 2000 and 2024</strong> — more lives saved than any other vaccine over that period. The gaps that remain are about reaching the children who are still being missed.'
        ]
      },
      {
        h: 'The 2025 U.S. outbreak',
        p: [
          'In 2025 the U.S. had its <strong>worst measles year since 1992</strong>: <strong>2,288 confirmed cases</strong> across 45 states and territories, 48 separate outbreaks, and <strong>3 deaths</strong>. About 11 of every 100 patients ended up in the hospital — and among children under 5, closer to 18 of every 100.',
          'The pattern was clear. About <strong>93% of the people who got measles were unvaccinated or had no vaccination record</strong>. The largest outbreak, in West Texas and New Mexico, caused the first measles deaths in American children in more than 20 years — the last one before that was in 2003.'
        ]
      }
    ],
    keyFacts: [
      'Stopping measles takes about <strong>95%</strong> of people being protected — higher than for almost any other disease.',
      'In 2019, reported measles cases worldwide jumped to <strong>869,770</strong> (six times the 2016 low), with about 207,500 deaths.',
      'In 2024 there were about <strong>95,000</strong> measles deaths worldwide; global two-dose coverage was only 76%.',
      'Measles shots prevented an estimated <strong>59 million deaths</strong> from 2000 to 2024.',
      '2025 was the worst U.S. year since 1992: <strong>2,288 cases</strong>, 3 deaths, and about 93% of cases in unvaccinated people.',
      'The U.S. was declared measles-free in 2000, but outbreaks in 2014, 2019, and 2025 have threatened that status.'
    ],
    sources: [
      { t: 'WHO — Measles Fact Sheet (updated Nov 2025)', u: 'https://www.who.int/news-room/fact-sheets/detail/measles' },
      { t: 'WHO (2020) — worldwide measles deaths climb 50%', u: 'https://www.who.int/news/item/12-11-2020-worldwide-measles-deaths-climb-50-from-2016-to-2019-claiming-over-207-500-lives-in-2019' },
      { t: 'CDC — Measles Cases and Outbreaks (final 2019 count of 1,274 and 2025 data)', u: 'https://www.cdc.gov/measles/data-research/index.html' },
      { t: 'CDC MMWR (April 2025) — 2025 outbreak and first pediatric deaths since 2003', u: 'https://www.cdc.gov/mmwr/volumes/74/wr/mm7414a1.htm' },
      { t: 'Lancet (2024) — deaths averted by vaccination', u: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11140691/' },
      { t: 'KFF — Measles elimination status', u: 'https://www.kff.org/other-health/measles-elimination-status-what-it-is-and-how-the-u-s-could-lose-it/' }
    ]
  },
  {
    id: 'vaccine',
    num: 6,
    title: 'Vaccine Development History',
    subtitle: 'How the vaccine was made — and the fraud that hurt it',
    icon: 'vaccine',
    summary:
      'How scientists built the measles vaccine over the 1950s and 60s, how it became the MMR shot, and the debunked 1998 study that scared families away from it.',
    readingMinutes: 8,
    sections: [
      {
        h: 'Catching the virus (1954)',
        p: [
          'The story starts during a 1954 measles outbreak at a boarding school in Massachusetts. A scientist named <strong>John Enders</strong> — who had just won a Nobel Prize for figuring out how to grow viruses in the lab — sent a colleague, <strong>Thomas Peebles</strong>, to collect blood samples from sick students. From an 11-year-old boy named <strong>David Edmonston</strong>, they managed to grow the measles virus in the lab for the first time. (Most accounts, and Edmonston himself, say he was 11; a few later sources say 13.) That lab sample, called the <strong>Edmonston strain</strong>, became the starting point for nearly every measles vaccine made since.'
        ]
      },
      {
        h: 'The first vaccine (1963)',
        p: [
          'To make a vaccine, scientists weakened the virus so it would train the immune system without making people sick. Enders and his team spent the late 1950s doing this, and by 1961 their vaccine protected essentially all of the thousands of children tested. In <strong>1963</strong> the first measles vaccine went on sale. It worked well, but it often caused fever and a rash, so it was sometimes given alongside another shot to ease those effects. Even with those rough edges, U.S. measles cases dropped by more than 97% within a few years.'
        ]
      },
      {
        h: 'A gentler version (1968)',
        p: [
          'The fever-and-rash problem was solved by <strong>Maurice Hilleman</strong>, a scientist at Merck who developed more than 40 vaccines in his career. He weakened the virus further until the vaccine caused far fewer side effects while still protecting just as well. He named his version <strong>“Moraten”</strong> (short for “More Attenuated Enders,” meaning “more weakened”), and it was approved in <strong>1968</strong>. It is still the measles vaccine used in the U.S. today.'
        ]
      },
      {
        h: 'Three shots become one: MMR (1971)',
        p: [
          'Hilleman and his colleagues had also made vaccines for mumps and rubella (German measles). Rather than give three separate shots, they combined all three into one — the <strong>MMR vaccine</strong> — approved in <strong>1971</strong>. In <strong>1989</strong>, after outbreaks showed a single dose was not always enough, health officials added a <strong>second dose</strong>. Two doses of MMR now stop measles about <strong>97%</strong> of the time — meaning it fails for only about 3 of every 100 fully vaccinated people.'
        ]
      },
      {
        h: 'The 1998 study that got it wrong',
        p: [
          'In 1998, a doctor named Andrew Wakefield published a paper in the journal <em>The Lancet</em> suggesting the MMR vaccine might cause autism. It was based on just 12 children and had no comparison group, so it could not actually show cause and effect. The news covered it heavily anyway, many parents got scared, and vaccination rates dropped. Since then, studies following hundreds of thousands to millions of children have looked hard for a link between MMR and autism and found none. The vaccine does not cause autism.',
          'The story got worse. A journalist, Brian Deer, found that Wakefield had been paid in connection with a lawsuit against vaccine makers — money he never disclosed — and that he had changed the children’s medical histories to fit his claim. <em>The Lancet</em> <strong>retracted</strong> the paper in 2010, and Wakefield <strong>lost his medical license</strong>. A later investigation by the journal <em>BMJ</em> concluded he had faked the data on purpose. It is worth being clear about the harm: the fear that paper created still keeps some families from vaccinating today, and children have died in outbreaks because of it.'
        ]
      }
    ],
    keyFacts: [
      'In 1954, <strong>Enders and Peebles</strong> first grew the measles virus in the lab — the Edmonston strain.',
      'The first measles vaccine went on sale in <strong>1963</strong>.',
      '<strong>Maurice Hilleman</strong> made a gentler version in 1968 — still the U.S. measles vaccine today.',
      'The combined <strong>MMR</strong> shot arrived in 1971; a second dose was added in 1989.',
      'Two doses of MMR stop measles about <strong>97%</strong> of the time.',
      'The 1998 paper claiming MMR causes autism was <strong>retracted</strong>, its author lost his license, and its data were found to be faked. <strong>MMR does not cause autism.</strong>'
    ],
    sources: [
      { t: 'CDC — History of Measles', u: 'https://www.cdc.gov/measles/about/history.html' },
      { t: 'WHO — History of Measles Vaccination', u: 'https://www.who.int/news-room/spotlight/history-of-vaccination/history-of-measles-vaccination' },
      { t: 'National Academies — Maurice Hilleman biographical memoir', u: 'https://www.nasonline.org/wp-content/uploads/2024/06/hilleman-maurice.pdf' },
      { t: 'Los Angeles Times (2010) — Thomas Peebles obituary (David Edmonston, age 11)', u: 'https://www.latimes.com/local/obituaries/la-me-thomas-peebles-20100813-story.html' },
      { t: 'PBS NewsHour (2025) — David Edmonston recalls being 11 at the time', u: 'https://www.pbs.org/newshour/show/man-whose-blood-helped-develop-measles-vaccine-weighs-in-on-recent-outbreak' },
      { t: 'BMJ (2011) — Wakefield\u2019s article was fraudulent', u: 'https://www.bmj.com/content/342/bmj.c7452' },
      { t: 'Indian Journal of Psychiatry (2011) — the Wakefield affair', u: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3136032/' }
    ]
  },
  {
    id: 'samoa',
    num: 7,
    title: 'A Place Without Vaccines',
    subtitle: 'What happened when Samoa\u2019s vaccination rate fell',
    icon: 'current',
    summary:
      'In 2019, after a vaccine mix-up and a drop in vaccination, measles swept Samoa and killed 83 people \u2014 most of them young children \u2014 in a country of about 200,000. Here is how it happened, and what it teaches us.',
    readingMinutes: 9,
    video: {
      embed: 'https://www.youtube-nocookie.com/embed/cD-_ONtAJTQ',
      title: 'The 2019 Samoa measles outbreak',
      caption: 'News footage of the 2019 Samoa measles outbreak.'
    },
    timelineHeading: 'Timeline of the outbreak',
    timeline: [
      { date: '2013', text: 'Samoa\u2019s first-dose MMR coverage for one-year-olds sits near 90% \u2014 close to the herd-immunity threshold \u2014 before a multi-year decline begins amid urbanization and weakening routine-immunization outreach.', src: { t: 'WHO/UNICEF data (Journal of Global Health)', u: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7533430/' } },
      { date: '2013\u20132017', text: 'First-dose MMR coverage falls year on year \u2014 roughly 90% (2013) to 82%, 69%, 68%, and 58% (2017) \u2014 leaving successive birth cohorts under-protected.', src: { t: 'Journal of Global Health', u: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7533430/' } },
      { date: '6 July 2018', text: 'Two 12-month-old infants die within minutes of MMR vaccination at Safotu Hospital. The national MMR program is immediately suspended while investigations begin; the cause is not initially made public.', src: { t: '1News NZ', u: 'https://www.1news.co.nz/2019/08/02/nurses-sentenced-to-five-years-in-prison-for-incorrectly-administering-mmr-vaccine-that-led-to-deaths-of-two-infants-in-samoa/' } },
      { date: 'Late 2018', text: 'With the program suspended and the cause of the deaths not yet clearly communicated, misinformation spreads. First-dose MMR coverage among one-year-olds collapses to about 31\u201334% \u2014 far below the ~95% needed for herd immunity.', src: { t: 'BBC News', u: 'https://www.bbc.com/news/world-asia-50625680' } },
      { date: 'April 2019', text: 'Health officials publicly confirm the 2018 deaths were caused by a preparation error, not the vaccine, and the MMR program restarts \u2014 but coverage remains dangerously low after roughly ten months of suspension.', src: { t: 'ABC Pacific', u: 'https://www.abc.net.au/pacific/programs/pacificbeat/samoa-vaccine-confidence/13158420' } },
      { date: '2 August 2019', text: 'A court establishes that the infant deaths resulted from a nurse mixing the MMR powder with an expired muscle relaxant instead of sterile water; two nurses are sentenced. The vaccine itself was not defective.', src: { t: '1News NZ', u: 'https://www.1news.co.nz/2019/08/02/nurses-sentenced-to-five-years-in-prison-for-incorrectly-administering-mmr-vaccine-that-led-to-deaths-of-two-infants-in-samoa/' } },
      { date: 'August 2019', text: 'An infected traveler from Auckland (amid a New Zealand outbreak) is believed to introduce measles to Upolu \u2014 into a population with roughly 31% first-dose coverage.', src: { t: 'The Guardian', u: 'https://www.theguardian.com/world/2019/dec/18/these-babies-should-not-have-died-how-the-measles-outbreak-took-hold-in-samoa' } },
      { date: '16 October 2019', text: 'Samoa formally declares a measles outbreak with seven confirmed cases \u2014 the first Pacific nation to do so in the global resurgence. The exponential trajectory is already visible.', src: { t: 'The Lancet Infectious Diseases', u: 'https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(20)30053-0/abstract' } },
      { date: '15 November 2019', text: 'The government declares a state of emergency: schools close, public gatherings by children are banned, and vaccination becomes mandatory for priority groups. A mass vaccination campaign begins on 20 November.', src: { t: 'The Guardian', u: 'https://www.theguardian.com/world/2019/nov/17/samoa-declares-state-of-emergency-over-deadly-measles-epidemic' } },
      { date: '22 November 2019', text: 'The toll reaches about 1,644 cases and 20 deaths; 92% of hospital admissions are children, and critically ill children overwhelm a six-bed ICU.', src: { t: 'WHO/UNICEF Pacific Situation Report', u: 'https://www.who.int/docs/default-source/wpro---documents/dps/outbreaks-and-emergencies/measles-2019/measles-pacific-who-unicef-sitrep-20191122-docx.pdf' } },
      { date: '5\u20136 December 2019', text: 'The government shuts down non-essential public services for two days, redeploying staff to a national vaccination drive. Unvaccinated households are asked to fly a red flag so mobile teams can find them; ~90% of the population is reached.', src: { t: 'NPR', u: 'https://www.npr.org/2019/12/02/784179707/samoan-government-to-close-its-offices-amid-measles-crisis-that-has-left-53-dead' } },
      { date: 'December 2019', text: 'Eighteen international Emergency Medical Teams and hundreds of health workers assist; UNICEF supplies over 200,000 doses. By 20 December about 94% of the eligible population is vaccinated.', src: { t: 'Western Pacific Surveillance and Response Journal', u: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11089276/' } },
      { date: '28 December 2019', text: 'With cases falling sharply, the state of emergency is lifted and replaced by a \u201cstate of recovery.\u201d Coverage reaches about 95%.', src: { t: 'ABC News', u: 'https://abcnews.go.com/Health/samoa-ends-measles-state-emergency/story?id=67982048' } },
      { date: '12 January 2020', text: 'The last confirmed case of the outbreak is recorded. The final toll: 5,707 cases and 83 deaths \u2014 87% of the deaths in children under five.', src: { t: 'The Lancet (Thornton, 2020)', u: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7255155/' } },
      { date: '6 March 2020', text: 'WHO declares the outbreak over. Samoa passes mandatory school-entry vaccination requirements and later builds its own national emergency medical team \u2014 lasting institutional legacies of the crisis.', src: { t: 'ReliefWeb / WHO', u: 'https://reliefweb.int/disaster/ep-2019-000139-wsm' } }
    ],
    sections: [
      {
        h: 'How vaccination coverage collapsed',
        p: [
          'Measles is one of the most contagious diseases there is, so about <strong>95%</strong> of people need to be vaccinated to keep it from spreading. Samoa, a Pacific island country of about 200,000 people, used to hit that mark. Then, over about a year and a half, a series of failures pulled its vaccination rate far below it.',
          'First-dose MMR coverage among one-year-olds drifted down from about <strong>90% in 2013 to 58% by 2017</strong>, driven by urbanization away from the village networks that had supported immunization, weaker outreach, and inconsistent data. Then came the defining tragedy: on <strong>6 July 2018</strong>, two infants died within minutes of receiving MMR at the same hospital.',
          'The subsequent investigation and court proceedings established that the deaths were caused entirely by a <strong>preparation error</strong> \u2014 a nurse had reconstituted the vaccine powder with an expired muscle relaxant instead of sterile water \u2014 <strong>not by the vaccine itself</strong>. The same vaccine batch was in use elsewhere without incident.',
          'But the national MMR program was suspended for roughly ten months, and the true cause was not clearly communicated to the public for many of those months. Into that vacuum flowed misinformation. By the end of 2018, first-dose coverage had collapsed to about <strong>31\u201334%</strong> \u2014 meaning most young children had no protection at all. The stage was set for an outbreak.'
        ],
        img: {
          src: 'assets/module-samoa.png',
          alt: 'Epidemic curve of the 2019 Samoa measles outbreak showing weekly and cumulative cases',
          caption: 'The outbreak\u2019s epidemic curve. Weekly case estimates modeled to match published WHO/UNICEF and Lancet cumulative figures. Graph is AI-generated based on real data.'
        }
      },
      {
        h: 'The outbreak',
        p: [
          'In August 2019, measles was most likely imported by a traveler from New Zealand, then in the midst of its own outbreak. The virus met a vast pool of susceptible children and spread explosively. On <strong>16 October 2019</strong> Samoa declared an outbreak with just seven cases; within weeks the count passed 1,000.',
          'On <strong>15 November 2019</strong> the government declared a state of emergency \u2014 closing schools, restricting gatherings, and making vaccination mandatory for priority groups. Even so, transmission kept accelerating: by 22 November there were about 1,644 cases and 20 deaths, with 92% of hospital admissions being children and a six-bed intensive care unit overwhelmed.',
          'The response escalated to extraordinary measures. Unvaccinated households were asked to fly a red flag so mobile teams could reach them, and on <strong>5\u20136 December</strong> the government shut down non-essential public services for two days to run a mass vaccination drive, reaching about 90% of the population. Eighteen international Emergency Medical Teams and hundreds of health workers assisted.',
          'The toll was devastating: <strong>5,707 measles cases and 83 deaths</strong> in a nation of ~200,000, with <strong>87% of the deaths in children under five</strong>. The country\u2019s peacetime health system \u2014 a six-bed ICU, a handful of specialists \u2014 was pushed far beyond capacity within weeks.'
        ]
      },
      {
        h: 'Aftermath and lessons',
        p: [
          'The mass campaign pushed coverage to about <strong>95%</strong> by late December, and cases fell sharply. The state of emergency ended on 28 December 2019; the last case was recorded on 12 January 2020, and WHO declared the outbreak over on 6 March 2020. Samoa passed mandatory school-entry vaccination rules and later established its own national emergency medical team.',
          'A few clear lessons come out of this. <strong>The 95% target is not optional.</strong> Because measles spreads so easily, it will find almost any gap in protection. Nearby Pacific islands that kept their vaccination rate near 99% did not have an outbreak like this one.',
          '<strong>Preventable disease returns fast.</strong> It took only about 14 months from the program\u2019s suspension for measles to find its opening and kill dozens of children.',
          'Above all, Samoa shows that a <strong>single clinical error, compounded by a program suspension, delayed transparency, and misinformation, can destroy immunization trust</strong> in a way that takes years to rebuild and costs lives. Clear, timely, honest communication after a vaccine-safety event is itself a life-saving public-health intervention \u2014 and maintaining high coverage is far cheaper, in lives and resources, than the outbreak that follows when coverage fails.'
        ]
      }
    ],
    keyFacts: [
      'Samoa\u2019s first-dose MMR coverage fell from about <strong>90% (2013) to 31\u201334% (2018)</strong> after a ten-month program suspension following a July 2018 vaccine-handling tragedy.',
      'The 2018 infant deaths were caused by a <strong>preparation error</strong> (vaccine mixed with an expired muscle relaxant), <strong>not the vaccine</strong> \u2014 confirmed in court.',
      'From September 2019 to January 2020 the outbreak caused <strong>5,707 cases and 83 deaths</strong> in a nation of ~200,000.',
      '<strong>87% of the deaths were in children under five.</strong>',
      'A state of emergency, mandatory vaccination, and a two-day government shutdown for a mass campaign raised coverage to about <strong>95%</strong> and ended the outbreak.',
      'The core lesson is systemic: transparency, trust, and sustained high coverage \u2014 not blame \u2014 are what prevent outbreaks.'
    ],
    sources: [
      { t: 'WHO/UNICEF \u2014 Pacific Measles Outbreak Situation Reports (2019\u20132020)', u: 'https://www.who.int/docs/default-source/wpro---documents/dps/outbreaks-and-emergencies/measles-2019/20200122-measles-pacific-who-unicef-sitrep-11.pdf?sfvrsn=9e1851f5_2' },
      { t: 'The Lancet Infectious Diseases \u2014 Samoa measles outbreak', u: 'https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(20)30053-0/abstract' },
      { t: 'The Lancet (Thornton, 2020) \u2014 outbreak and aftermath', u: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7255155/' },
      { t: 'Journal of Global Health (2020) \u2014 coverage collapse and toll', u: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7533430/' },
      { t: 'BBC News \u2014 how misinformation took hold', u: 'https://www.bbc.com/news/world-asia-50625680' },
      { t: 'The Guardian \u2014 how the outbreak took hold', u: 'https://www.theguardian.com/world/2019/dec/18/these-babies-should-not-have-died-how-the-measles-outbreak-took-hold-in-samoa' },
      { t: 'NPR \u2014 government shutdown for mass vaccination', u: 'https://www.npr.org/2019/12/02/784179707/samoan-government-to-close-its-offices-amid-measles-crisis-that-has-left-53-dead' },
      { t: '1News NZ \u2014 court findings on the 2018 administration error', u: 'https://www.1news.co.nz/2019/08/02/nurses-sentenced-to-five-years-in-prison-for-incorrectly-administering-mmr-vaccine-that-led-to-deaths-of-two-infants-in-samoa/' },
      { t: 'Doherty Institute \u2014 measles in Samoa', u: 'https://www.doherty.edu.au/articles/measles-in-samoa-in-the-grips-of-an-outbreak-disaster/' }
    ]
  },
  {
    id: 'myths',
    num: 8,
    title: 'Myths & Misconceptions',
    subtitle: 'The common claims about measles and the vaccine \u2014 and what the evidence actually says',
    icon: 'myths',
    summary:
      'A myth-by-myth guide to the most common false claims about measles and the MMR vaccine \u2014 from \u201cit causes autism\u201d to \u201cnatural infection is better\u201d \u2014 each paired with what the evidence really shows, plus a checklist for spotting the next myth yourself.',
    readingMinutes: 11,
    sections: [
      {
        h: 'Myth 1: \u201cThe MMR vaccine causes autism.\u201d',
        p: [
          '<strong>The claim:</strong> Getting the MMR shot causes autism, or raises a child\u2019s risk of it.',
          '<strong>What the evidence shows:</strong> This is the most studied \u2014 and most thoroughly disproven \u2014 vaccine claim in history. It traces back to a single 1998 paper by Andrew Wakefield built on just 12 children, later <strong>retracted</strong> and found to be deliberate fraud (see the Vaccine History module). Since then, researchers have looked for a link in <strong>millions</strong> of children and found none. A Danish study followed <strong>657,461</strong> children and found MMR did <em>not</em> increase autism risk \u2014 not even among children with autistic siblings or other risk factors.',
          'The autism myth survives partly because of timing, not biology: the first MMR dose is given around 12\u201315 months, which is also when the earliest signs of autism tend to become noticeable. Two things happening around the same age is a <strong>coincidence of timing, not cause and effect</strong>. Study after study, across different countries and designs, keeps landing on the same answer: the vaccine does not cause autism.',
          '<strong>A note on the CDC\u2019s website.</strong> In November 2025, the CDC changed its long-standing \u201cvaccines do not cause autism\u201d page to say that statement is \u201cnot an evidence-based claim.\u201d It is important to be clear about what did and did not happen here: <strong>no new study changed the science.</strong> This was a change in <em>wording on a government website</em>, driven by policy, not by new evidence. The large, high-quality studies described above still stand. When you see this cited, remember the difference between a political edit to a webpage and the actual body of research \u2014 which has not changed.'
        ],
        img: {
          src: 'assets/module-myths.png',
          alt: 'Illustration of herd immunity: rings of vaccinated people (green) surrounding and protecting vulnerable individuals (orange), blocking chains of disease transmission',
          caption: 'Herd immunity: when enough people are protected (green), the virus cannot find a path to those who cannot be vaccinated (orange). Illustration.'
        }
      },
      {
        h: 'Myth 2: \u201cCatching measles naturally is better than the vaccine.\u201d',
        p: [
          '<strong>The claim:</strong> A real infection gives stronger, more \u201cnatural\u201d immunity than a shot, so it is healthier to just get measles.',
          '<strong>What the evidence shows:</strong> Measles does not simply teach your immune system and leave. It actively <strong>damages</strong> it. In a process called <strong>immune amnesia</strong>, the virus destroys immune cells that hold your memory of past infections \u2014 erasing <strong>11\u201373%</strong> of the antibodies you had built up against <em>other</em> diseases. For up to two to three years afterward, a child who \u201cgot it over with\u201d can be newly vulnerable to illnesses they were already protected against.',
          'And that is the <em>best</em> case. \u201cGetting it naturally\u201d also means risking pneumonia (the most common cause of measles death in children), brain swelling (encephalitis) that can cause permanent disability, and \u2014 years later \u2014 a rare, always-fatal brain disease called <strong>SSPE</strong>. The vaccine trains the same immune response <em>without</em> the immune-erasing damage and without those risks. Natural infection is not a stronger version of the vaccine; it is the disease, with all of its dangers.'
        ]
      },
      {
        h: 'Myth 3: \u201cMeasles isn\u2019t serious \u2014 it\u2019s just a rash.\u201d',
        p: [
          '<strong>The claim:</strong> Measles is a mild childhood illness, like a cold with spots. People \u201cused to just get it.\u201d',
          '<strong>What the evidence shows:</strong> Measles is one of the most dangerous of the common childhood infections. About <strong>1 in 5</strong> unvaccinated people who get measles in the U.S. are hospitalized. Roughly <strong>1 in 20</strong> children develop pneumonia, about <strong>1 in 1,000</strong> develop brain-swelling encephalitis, and <strong>1 to 3 in 1,000</strong> die \u2014 even with modern care.',
          'It felt \u201croutine\u201d in the past only because it was so common that the harm was spread across millions of cases and simply accepted as normal. Before the vaccine, measles killed thousands of Americans a year. The 83 deaths in Samoa in 2019 \u2014 87% of them children under five \u2014 are what \u201cjust a rash\u201d looks like when it sweeps through an under-vaccinated population (see the Samoa module).'
        ]
      },
      {
        h: 'Myth 4: \u201cThe vaccine is full of toxins.\u201d',
        p: [
          '<strong>The claim:</strong> The MMR shot contains dangerous ingredients \u2014 mercury, aluminum, formaldehyde, or \u201cfetal cells.\u201d',
          '<strong>What the evidence shows:</strong> Let\u2019s take these one at a time, because the specifics matter. <strong>Mercury (thimerosal):</strong> the MMR vaccine has never contained thimerosal at all \u2014 it is a live vaccine that cannot use that kind of preservative. <strong>Aluminum:</strong> MMR contains <em>no</em> aluminum adjuvant either.',
          '<strong>\u201cFetal cells\u201d:</strong> the rubella part of MMR is grown using a cell line originally derived from tissue in the 1960s, but the vaccine does <em>not</em> contain fetal cells \u2014 the cells are a factory, not an ingredient, and are purified out. <strong>Formaldehyde:</strong> where trace amounts appear in vaccines generally, they are far smaller than the amount your own body <em>makes and carries naturally</em> at all times as part of normal metabolism.',
          'The deeper point is the oldest rule in toxicology: <strong>the dose makes the poison</strong>. Water, salt, and oxygen are all lethal at the wrong dose and harmless at the right one. A scary-sounding ingredient name tells you nothing without the amount \u2014 and for the MMR vaccine, the amounts are trivial or the ingredient is simply not there.'
        ]
      },
      {
        h: 'Myth 5: \u201cMeasles is gone, so we don\u2019t need the vaccine anymore.\u201d',
        p: [
          '<strong>The claim:</strong> Measles was eliminated decades ago, so continuing to vaccinate is unnecessary.',
          '<strong>What the evidence shows:</strong> \u201cElimination\u201d is not \u201ceradication.\u201d When the U.S. declared measles eliminated in 2000, it meant the virus was no longer <em>constantly circulating</em> here \u2014 not that it was gone from the world. Measles is still common in many countries, and it arrives on airplanes constantly. The only reason it usually does not spread after it lands is that most people around the traveler are vaccinated.',
          'When that protection slips, measles comes roaring back \u2014 fast. The <strong>2025 U.S. outbreak</strong> was the worst since 1992, with thousands of cases and the first U.S. child measles deaths in over two decades, overwhelmingly among the unvaccinated. The vaccine is not a relic of a solved problem; it is the thing that <em>keeps</em> the problem solved.'
        ]
      },
      {
        h: 'Myth 6: \u201cEveryone else is vaccinated, so my child doesn\u2019t need to be.\u201d',
        p: [
          '<strong>The claim:</strong> Because vaccination rates are high, an individual unvaccinated child is safe \u2014 protected by everyone else.',
          '<strong>What the evidence shows:</strong> This is a bet against math. Measles is <em>so</em> contagious \u2014 one case can infect 12 to 18 susceptible people \u2014 that about <strong>95%</strong> of a community must be immune to stop it from spreading. That high threshold, called <strong>herd immunity</strong>, exists to protect the people who genuinely <em>cannot</em> be vaccinated: newborns too young for the shot, people with weakened immune systems, and those undergoing cancer treatment.',
          'Every family that chooses to \u201cride on\u201d others\u2019 vaccination chips away at that shared wall. Herd immunity is not a resource you can quietly draw down without cost \u2014 it is a threshold, and once a community drops below it, the protection collapses for everyone at once. In an outbreak, it is precisely the unvaccinated who are infected first and hit hardest.'
        ]
      },
      {
        h: 'Myth 7: \u201cThe vaccine doesn\u2019t really work \u2014 vaccinated people still get measles.\u201d',
        p: [
          '<strong>The claim:</strong> Since some vaccinated people catch measles, the vaccine must not work.',
          '<strong>What the evidence shows:</strong> Two doses of MMR are about <strong>97%</strong> effective \u2014 among the most effective vaccines ever made \u2014 and that protection lasts for decades, likely for life. But 97% is not 100%, so in a large outbreak you will still see a small number of vaccinated cases. That is expected, and it does not mean the vaccine failed.',
          'Here is the trap in the reasoning. Imagine a school where 95% of students are vaccinated. If measles sweeps through, the vaccinated group is so much larger that its <em>tiny</em> failure rate can still produce a handful of cases \u2014 while the small unvaccinated group is devastated. Counting raw cases without accounting for how many people were in each group (the \u201cbase rate\u201d) makes a highly protective vaccine look weak. When you calculate the <em>risk per person</em>, the unvaccinated are many times more likely to be infected \u2014 and far more likely to be hospitalized or to die.'
        ]
      },
      {
        h: 'Myth 8: \u201cIt was better hygiene and nutrition \u2014 not the vaccine \u2014 that ended measles.\u201d',
        p: [
          '<strong>The claim:</strong> Measles was already fading thanks to cleaner water, better food, and modern sanitation; the vaccine just took the credit.',
          '<strong>What the evidence shows:</strong> Sanitation and nutrition genuinely reduced deaths from many diseases \u2014 but the timing here gives the game away. In the U.S., there were still hundreds of thousands of measles cases every year right up to <strong>1963</strong>, long after clean water and modern nutrition were widespread. Then the vaccine arrived, and cases fell by <strong>more than 97%</strong> within a few years.',
          'Measles does not spread through dirty water or poor diet \u2014 it spreads through the air, and even the cleanest, best-fed societies could not stop it until they had a vaccine. The near-vertical drop that lines up precisely with the vaccine\u2019s introduction \u2014 not a gradual decline over the decades of sanitation improvements before it \u2014 is exactly what you would expect if the vaccine, and only the vaccine, was the cause.'
        ]
      },
      {
        h: 'How to spot a measles myth',
        p: [
          'You will meet new claims that are not on this list. Here is a short checklist you can apply to any of them:',
          '<strong>1. One study vs. many.</strong> A single small paper (like Wakefield\u2019s 12 children) is a starting point, not a conclusion. Trust the <em>weight</em> of many large studies over one dramatic outlier.',
          '<strong>2. Timing is not cause.</strong> Two things happening around the same age (a shot and a diagnosis) does not mean one caused the other. Ask whether anyone has actually tested for a real link.',
          '<strong>3. The dose makes the poison.</strong> A scary ingredient name means nothing without the amount. Ask \u201chow much?\u201d before you ask \u201cwhat\u2019s in it?\u201d',
          '<strong>4. Mind the base rate.</strong> \u201cMost cases were vaccinated\u201d can be true and meaningless if almost everyone is vaccinated. Always ask about risk <em>per person</em>, not raw counts.',
          '<strong>5. Check who benefits and what changed.</strong> A change in wording on a website is not a change in the evidence. Follow the claim back to the actual research \u2014 and ask whether a real study, or just an opinion, is behind it.'
        ]
      }
    ],
    keyFacts: [
      'The MMR\u2013autism claim has been tested in <strong>millions</strong> of children \u2014 including a Danish study of <strong>657,461</strong> \u2014 and no link has ever been found. <strong>MMR does not cause autism.</strong>',
      'The CDC\u2019s November 2025 webpage change was a <strong>policy/wording decision, not new science</strong> \u2014 the underlying studies are unchanged.',
      '\u201cNatural\u201d measles causes <strong>immune amnesia</strong>, erasing 11\u201373% of existing antibodies \u2014 the vaccine trains immunity <em>without</em> that damage.',
      'MMR contains <strong>no thimerosal and no aluminum</strong>; \u201cfetal cells\u201d and \u201cformaldehyde\u201d claims collapse once you look at the actual amounts.',
      'Two doses of MMR are about <strong>97% effective</strong>; a small number of vaccinated cases in an outbreak is expected and does not mean the vaccine failed.',
      'Measles is <strong>eliminated, not eradicated</strong> \u2014 it returns fast wherever coverage drops below the ~95% herd-immunity threshold.'
    ],
    sources: [
      { t: 'Hviid et al., Annals of Internal Medicine (2019) \u2014 657,461-child cohort, no MMR\u2013autism link', u: 'https://www.acpjournals.org/doi/10.7326/M18-2101' },
      { t: 'CDC \u2014 Autism and Vaccines', u: 'https://www.cdc.gov/vaccine-safety/about/autism.html' },
      { t: 'Mina et al., Science (2019) \u2014 measles immune amnesia', u: 'https://www.science.org/doi/10.1126/science.aay6485' },
      { t: 'CDC \u2014 Measles Complications', u: 'https://www.cdc.gov/measles/symptoms/complications.html' },
      { t: 'CDC \u2014 Vaccine Ingredients (thimerosal, aluminum, formaldehyde)', u: 'https://www.cdc.gov/vaccine-safety/about/ingredients.html' },
      { t: 'CHOP Vaccine Education Center \u2014 vaccine ingredients and the dose-makes-the-poison principle', u: 'https://www.chop.edu/vaccine-education-center/vaccine-ingredients' },
      { t: 'WHO \u2014 Measles Fact Sheet', u: 'https://www.who.int/news-room/fact-sheets/detail/measles' },
      { t: 'CDC \u2014 Measles Cases and Outbreaks (2025)', u: 'https://www.cdc.gov/measles/data-research/index.html' },
      { t: 'BMJ (2011) \u2014 Wakefield\u2019s article was fraudulent', u: 'https://www.bmj.com/content/342/bmj.c7452' }
    ]
  }
];

/* ---- Quizzes: keyed by module id ---- */
const QUIZZES = {
  myths: [
    {
      q: 'What is the strongest evidence against the MMR\u2013autism claim?',
      options: ['Studies of millions of children \u2014 including a Danish cohort of 657,461 \u2014 found no link', 'A single small study of 12 children', 'The vaccine was never actually studied', 'Doctors simply agreed to stop discussing it'],
      correct: 0,
      why: 'The claim has been tested repeatedly in very large populations, including a 657,461-child Danish study, with no increased autism risk found \u2014 even in high-risk subgroups. The original 12-child paper was retracted as fraudulent.'
    },
    {
      q: 'The CDC changed its autism-vaccine webpage wording in November 2025. What did that change represent?',
      options: ['A policy/wording decision, not a new scientific finding', 'A large new study proving vaccines cause autism', 'The retraction of all prior vaccine research', 'A correction of a math error in earlier studies'],
      correct: 0,
      why: 'No new study changed the science. It was a change in wording on a government website, driven by policy \u2014 the large, high-quality studies finding no link still stand.'
    },
    {
      q: 'Why is catching measles \u201cnaturally\u201d not better than the vaccine?',
      options: ['Measles causes immune amnesia, erasing 11\u201373% of existing antibodies, plus risks like pneumonia and SSPE', 'Natural infection gives no immunity at all', 'The vaccine is actually the same as being infected', 'Natural measles is completely harmless'],
      correct: 0,
      why: 'Measles actively damages the immune system (immune amnesia) and carries serious risks. The vaccine trains the same immunity without the disease\u2019s harms.'
    },
    {
      q: 'Which statement about MMR ingredients is correct?',
      options: ['MMR contains no thimerosal and no aluminum', 'MMR is preserved with mercury', 'MMR contains large amounts of aluminum', 'MMR contains living fetal cells as an active ingredient'],
      correct: 0,
      why: 'The MMR vaccine has never contained thimerosal (it is a live vaccine) and has no aluminum adjuvant. \u201cFetal cells\u201d are a manufacturing tool that is purified out, not an ingredient.'
    },
    {
      q: 'In a highly vaccinated community, why can \u201cmost cases were vaccinated\u201d still be misleading?',
      options: ['Because of the base rate \u2014 the vaccinated group is far larger, so even a tiny failure rate can outnumber the small unvaccinated group', 'Because the vaccine makes people more likely to catch measles', 'Because vaccinated people are never counted correctly', 'Because measles only infects vaccinated people'],
      correct: 0,
      why: 'When almost everyone is vaccinated, a 3% failure rate in a huge group can produce more raw cases than a devastated small unvaccinated group. Risk per person still shows the unvaccinated are far more likely to be infected.'
    }
  ],
  samoa: [
    {
      q: 'Roughly how far did Samoa\u2019s first-dose MMR coverage fall by the end of 2018?',
      options: ['To about 31\u201334%', 'To about 80%', 'It stayed near 95%', 'To exactly 0%'],
      correct: 0,
      why: 'After the 2018 program suspension and a surge of misinformation, first-dose coverage collapsed to roughly 31\u201334% \u2014 far below the ~95% needed for herd immunity.'
    },
    {
      q: 'What actually caused the two infant deaths in July 2018?',
      options: ['A preparation error \u2014 the vaccine was mixed with an expired muscle relaxant', 'A defective vaccine batch', 'An allergic reaction to the vaccine', 'The measles virus itself'],
      correct: 0,
      why: 'A court confirmed the deaths were caused by a nurse mixing the MMR powder with an expired muscle relaxant instead of sterile water \u2014 not by the vaccine, which was not defective.'
    },
    {
      q: 'What was the final toll of the 2019 Samoa outbreak?',
      options: ['About 5,700 cases and 83 deaths', 'About 500 cases and 5 deaths', 'About 200 cases and no deaths', 'About 50,000 cases and 1,000 deaths'],
      correct: 0,
      why: 'The outbreak caused 5,707 cases and 83 deaths in a nation of ~200,000, with 87% of deaths in children under five.'
    },
    {
      q: 'Which extraordinary measure did Samoa take on 5\u20136 December 2019?',
      options: ['A two-day government shutdown to run a mass vaccination drive', 'Closing all borders permanently', 'Banning the MMR vaccine', 'Evacuating the islands'],
      correct: 0,
      why: 'The government shut down non-essential public services for two days and redeployed staff to a mass vaccination campaign, reaching about 90% of the population.'
    },
    {
      q: 'What is the central, apolitical lesson of the Samoa outbreak?',
      options: ['Systemic failures \u2014 lost coverage, delayed transparency, and misinformation \u2014 let a preventable disease return', 'Vaccines are inherently dangerous', 'Small nations cannot control outbreaks', 'Measles is not actually preventable'],
      correct: 0,
      why: 'The outbreak resulted from a chain of systems failures. Maintaining high coverage and communicating honestly after a safety event are what prevent such tragedies.'
    }
  ],
  origins: [
    {
      q: 'What is the closest known viral relative of the measles virus?',
      options: ['Rinderpest virus (a cattle pathogen)', 'Smallpox virus', 'Influenza virus', 'Poliovirus'],
      correct: 0,
      why: 'Measles most likely arose from an ancestral cattle-infecting virus related to rinderpest, which was eradicated in 2011.'
    },
    {
      q: 'According to the 2020 Science study, roughly when did measles diverge from rinderpest?',
      options: ['Around 528 BCE', 'Around 1500 CE', 'Around 1900 CE', 'Around 10,000 BCE'],
      correct: 0,
      why: 'Düx et al. (2020) sequenced a 1912 genome and estimated a mean divergence of about 528 BCE — far earlier than older estimates.'
    },
    {
      q: 'What is the approximate "critical community size" measles needs to persist endemically?',
      options: ['250,000–500,000 people', '1,000–5,000 people', '10–50 million people', '50,000–100,000 people'],
      correct: 0,
      why: 'F.L. Black estimated a critical community size of roughly 250,000–500,000 — below which measles burns out locally.'
    },
    {
      q: 'Who wrote the first clinical description distinguishing measles from smallpox?',
      options: ['Rhazes (al-Razi)', 'Edward Jenner', 'Louis Pasteur', 'Hippocrates'],
      correct: 0,
      why: 'The Persian physician Rhazes (c. 854–925 CE) first clearly distinguished measles from smallpox in writing.'
    }
  ],
  virology: [
    {
      q: 'What type of genetic material does the measles virus carry?',
      options: ['Single-stranded, negative-sense RNA', 'Double-stranded DNA', 'Single-stranded, positive-sense RNA', 'Double-stranded RNA'],
      correct: 0,
      why: 'MeV has a single-stranded, negative-sense RNA genome (~15.9 kb), so it must first transcribe its genome into mRNA.'
    },
    {
      q: 'Which two receptors does the measles virus use to enter cells?',
      options: ['SLAM/CD150 and nectin-4', 'ACE2 and TMPRSS2', 'CD4 and CCR5', 'Sialic acid and CD46 only'],
      correct: 0,
      why: 'MeV uses SLAM/CD150 on immune cells and nectin-4 on airway epithelial cells.'
    },
    {
      q: 'Why do 1960s measles vaccines still work today?',
      options: ['Measles has only one antigenically stable serotype', 'The vaccine is updated every year', 'Measles no longer mutates at all', 'Modern vaccines use a completely different strain'],
      correct: 0,
      why: 'Unlike influenza, measles has a single serotype, so vaccines from the 1960s remain effective against all circulating strains.'
    },
    {
      q: 'What is "immune amnesia" caused by measles?',
      options: ['Destruction of preexisting immune memory to other pathogens', 'Temporary loss of the sense of smell', 'Permanent forgetting of childhood memories', 'A form of encephalitis affecting memory'],
      correct: 0,
      why: 'Measles preferentially destroys memory lymphocytes, erasing 11–73% of a person\'s antibody repertoire for years.'
    }
  ],
  clinical: [
    {
      q: 'What is the basic reproduction number (R\u2080) of measles?',
      options: ['12–18', '1–2', '2–3', '30–40'],
      correct: 0,
      why: 'Measles has an R\u2080 of 12–18, among the highest of any known pathogen.'
    },
    {
      q: 'What are Koplik spots?',
      options: ['Blue-white lesions inside the cheek appearing before the rash', 'The measles rash on the trunk', 'Red eyes caused by conjunctivitis', 'Fever blisters on the lips'],
      correct: 0,
      why: 'Koplik spots are pathognomonic blue-white lesions on the buccal mucosa, appearing 1–2 days before the rash.'
    },
    {
      q: 'How long can infectious measles aerosols linger in a room after an infected person leaves?',
      options: ['Up to 2 hours', 'A few seconds', 'About 10 minutes', 'Up to 2 days'],
      correct: 0,
      why: 'Airborne measles particles can remain infectious for up to 2 hours after the person has left.'
    },
    {
      q: 'What is SSPE?',
      options: ['A fatal brain disease appearing years after infection', 'A mild childhood rash', 'A type of measles vaccine', 'A skin complication of the rash'],
      correct: 0,
      why: 'Subacute sclerosing panencephalitis is a uniformly fatal degenerative brain disease that appears years after measles infection.'
    }
  ],
  'epi-past': [
    {
      q: 'Roughly how many measles cases occurred each year in the U.S. before the 1963 vaccine?',
      options: ['3–4 million', '10,000–20,000', '100,000', '50 million'],
      correct: 0,
      why: 'An estimated 3–4 million Americans caught measles each year pre-vaccine, though only ~500,000 were reported.'
    },
    {
      q: 'What did Panum\u2019s 1846 Faroe Islands study establish?',
      options: ['A ~13–14 day incubation period and lifelong immunity', 'That measles is caused by bacteria', 'That measles only affects adults', 'The chemical structure of the virus'],
      correct: 0,
      why: 'Panum documented a 13–14 day incubation and showed survivors of the 1781 epidemic were still immune 65 years later.'
    },
    {
      q: 'Approximately what fraction of Fiji\u2019s population died in the 1875 measles epidemic?',
      options: ['About one-quarter', 'About 1%', 'About half', 'About 5%'],
      correct: 0,
      why: 'The 1875 Fiji epidemic killed an estimated 25,000–40,000 people — roughly a quarter of the population.'
    },
    {
      q: 'What epidemic pattern did measles show in large pre-vaccine cities?',
      options: ['2–3 year cycles', 'Daily fluctuations', 'A single outbreak every 50 years', 'No pattern at all'],
      correct: 0,
      why: 'Large cities saw 2–3 year cycles as new susceptible birth cohorts accumulated.'
    }
  ],
  'epi-current': [
    {
      q: 'What vaccination coverage is needed to maintain measles elimination?',
      options: ['Above 95%', 'About 50%', 'About 70%', 'Exactly 100%'],
      correct: 0,
      why: 'Because of its high R\u2080, measles requires roughly 95% coverage to maintain herd immunity and elimination.'
    },
    {
      q: 'How many confirmed measles cases did the U.S. record in the 2025 outbreak?',
      options: ['2,288', '312', '45,000', '120'],
      correct: 0,
      why: 'The 2025 U.S. outbreak reached 2,288 confirmed cases across 45 jurisdictions — the worst since 1992.'
    },
    {
      q: 'In the 2025 U.S. outbreak, what share of cases were unvaccinated or of unknown status?',
      options: ['93%', '10%', '50%', '30%'],
      correct: 0,
      why: 'About 93% of 2025 cases were unvaccinated or had unknown vaccination status; only 4% had two MMR doses.'
    },
    {
      q: 'Roughly how many deaths did measles vaccination avert between 2000 and 2024?',
      options: ['About 59 million', 'About 1 million', 'About 500,000', 'About 10 million'],
      correct: 0,
      why: 'Measles vaccination is estimated to have averted nearly 59 million deaths from 2000–2024 — the largest of any vaccine program.'
    }
  ],
  vaccine: [
    {
      q: 'Who isolated the measles virus in 1954, giving rise to the Edmonston strain?',
      options: ['John Enders and Thomas Peebles', 'Jonas Salk', 'Louis Pasteur', 'Edward Jenner'],
      correct: 0,
      why: 'Enders and Peebles isolated the virus from student David Edmonston in 1954.'
    },
    {
      q: 'What does "Moraten," the name of Hilleman\u2019s 1968 strain, stand for?',
      options: ['More Attenuated Enders', 'Modern Rapid Attenuation', 'Merck Original Antigen', 'Measles Orally Rendered'],
      correct: 0,
      why: 'Hilleman named his less-reactogenic strain "Moraten" for "More Attenuated Enders."'
    },
    {
      q: 'In what year was the combined MMR vaccine licensed?',
      options: ['1971', '1954', '1989', '2000'],
      correct: 0,
      why: 'Merck licensed the combined measles-mumps-rubella (MMR) vaccine in 1971.'
    },
    {
      q: 'What ultimately happened to Andrew Wakefield\u2019s 1998 MMR–autism paper?',
      options: ['It was fully retracted and declared fraudulent', 'It was confirmed by later studies', 'It won a scientific prize', 'It was never formally reviewed'],
      correct: 0,
      why: 'The Lancet fully retracted the paper in 2010; the BMJ later concluded it was deliberate fraud, and Wakefield lost his medical license.'
    }
  ]
};

/* ---- Timeline ---- */
const TIMELINE = [
  { year: '~528 BCE', era: true, title: 'Measles diverges from rinderpest', text: 'Genetic analysis of a 1912 measles virus suggests MeV likely split from rinderpest around the 6th century BCE — coinciding with the rise of large urban civilizations across Eurasia.', src: { t: 'Düx et al., Science (2020)', u: 'https://www.science.org/doi/10.1126/science.aba9411' } },
  { year: '~900 CE', title: 'Rhazes describes measles', text: 'Persian physician Rhazes (al-Razi) publishes the first clinical description clearly distinguishing measles from smallpox.', src: { t: 'Muslim Heritage', u: 'https://muslimheritage.com/al-razi-smallpox-measles/' } },
  { year: '1757', title: 'Francis Home shows measles is infectious', text: 'Scottish physician Francis Home experimentally transmits measles via infected blood, demonstrating an infectious agent.', src: { t: 'WHO — History of Measles Vaccination', u: 'https://www.who.int/news-room/spotlight/history-of-vaccination/history-of-measles-vaccination' } },
  { year: '1846', title: 'Panum\u2019s Faroe Islands study', text: 'Peter Ludwig Panum documents the 13–14 day incubation period and lifelong immunity — founding documents of modern epidemiology.', src: { t: 'AJPH reprint', u: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1530953/' } },
  { year: '1875', era: true, title: 'The Fiji virgin-soil catastrophe', text: 'Measles arrives in Fiji and kills an estimated 25,000–40,000 people — roughly a quarter of the population — within months.', src: { t: 'Journal of Pacific Studies (2023)', u: 'https://www.usp.ac.fj/journal-of-pacific-studies/wp-content/uploads/sites/162/2023/12/Epidemics-in-Fijis-history.pdf' } },
  { year: '1912', title: 'Measles becomes notifiable in the U.S.', text: 'In the first decade of national reporting, an average of 6,000 measles-related deaths are recorded each year.', src: { t: 'CDC — History of Measles', u: 'https://www.cdc.gov/measles/about/history.html' } },
  { year: '1954', era: true, title: 'Enders & Peebles isolate the virus', text: 'The measles virus (Edmonston strain) is isolated from 11-year-old David Edmonston; Enders wins the Nobel Prize that year for polio tissue-culture work.', src: { t: 'CDC — History of Measles', u: 'https://www.cdc.gov/measles/about/history.html' } },
  { year: '1963', era: true, title: 'First measles vaccine licensed', text: 'The Edmonston-B vaccine — the first licensed measles vaccine — is approved in the United States.', src: { t: 'WHO — History of Measles Vaccination', u: 'https://www.who.int/news-room/spotlight/history-of-vaccination/history-of-measles-vaccination' } },
  { year: '1968', title: 'Hilleman\u2019s Moraten strain', text: 'Maurice Hilleman develops the far less reactogenic Moraten (Edmonston-Enders) strain — still the only measles vaccine used in the U.S. today.', src: { t: 'National Academies — Hilleman memoir', u: 'https://www.nasonline.org/wp-content/uploads/2024/06/hilleman-maurice.pdf' } },
  { year: '1971', era: true, title: 'MMR combination vaccine', text: 'Merck licenses the first combined measles-mumps-rubella (MMR) vaccine, developed by Hilleman and Buynak.', src: { t: 'Merck company history', u: 'https://www.merck.com/company-overview/history/' } },
  { year: '1974', title: 'WHO launches the EPI', text: 'The Expanded Programme on Immunization begins with measles among its six target diseases; fewer than 5% of infants globally were then vaccinated.', src: { t: 'WHO EPI 50th anniversary', u: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12197319/' } },
  { year: '1989', title: 'Second MMR dose recommended', text: 'Outbreaks among vaccinated school-age children prompt a recommendation for a routine second MMR dose.', src: { t: 'CDC — History of Measles', u: 'https://www.cdc.gov/measles/about/history.html' } },
  { year: '1998', title: 'The Wakefield paper is published', text: 'Andrew Wakefield publishes a fraudulent 12-child case series falsely linking MMR to autism; vaccination rates begin to fall.', src: { t: 'Indian Journal of Psychiatry (2011)', u: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3136032/' } },
  { year: '2000', era: true, title: 'U.S. declares measles eliminated', text: 'The United States officially declares measles eliminated after interrupting endemic transmission for over 12 months.', src: { t: 'CDC — History of Measles', u: 'https://www.cdc.gov/measles/about/history.html' } },
  { year: '2010', title: 'Wakefield paper retracted; author struck off', text: 'The Lancet fully retracts the 1998 paper (February); Wakefield is struck off the UK medical register (May).', src: { t: 'BMJ (2011)', u: 'https://www.bmj.com/content/342/bmj.c7452' } },
  { year: '2019', title: 'Immune amnesia quantified', text: 'Landmark Science studies show measles can erase 11–73% of a person\'s preexisting antibody repertoire, with effects lasting years.', src: { t: 'Mina et al., Science (2019)', u: 'https://www.science.org/doi/10.1126/science.aay6485' } },
  { year: '2019', era: true, title: 'Global & U.S. resurgence', text: 'Global cases reach 869,770 (up 556% from 2016) with ~207,500 deaths; the U.S. records 1,274 cases and nearly loses elimination status.', src: { t: 'WHO (2020)', u: 'https://www.who.int/news/item/12-11-2020-worldwide-measles-deaths-climb-50-from-2016-to-2019-claiming-over-207-500-lives-in-2019' } },
  { year: '2019–20', era: true, title: 'Samoa: a place without vaccines', text: 'After MMR coverage collapsed to ~31%, a measles outbreak in Samoa caused 5,707 cases and 83 deaths — 87% in children under five — in a nation of ~200,000. See Module 7.', src: { t: 'The Lancet (2020)', u: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7255155/' } },
  { year: '2020', title: 'Measles origins pushed back', text: 'Düx et al. use a 1912 viral genome to estimate the measles–rinderpest divergence at least as far back as the 6th century BCE.', src: { t: 'Düx et al., Science (2020)', u: 'https://www.science.org/doi/10.1126/science.aba9411' } },
  { year: '2024', title: '59 million deaths averted', text: 'WHO estimates ~95,000 global measles deaths, with vaccination having averted nearly 59 million deaths since 2000; ~30 million infants remain under-protected.', src: { t: 'WHO Fact Sheet (Nov 2025)', u: 'https://www.who.int/news-room/fact-sheets/detail/measles' } },
  { year: '2025', era: true, title: 'Largest U.S. resurgence since 1992', text: '2,288 confirmed cases across 45 jurisdictions, 48 outbreaks, and 3 deaths (including the first pediatric measles deaths since 2003); 93% of cases unvaccinated.', src: { t: 'CDC — Measles Cases and Outbreaks', u: 'https://www.cdc.gov/measles/data-research/index.html' } },
  { year: '2025', title: 'CDC autism-vaccine webpage altered', text: 'In November 2025 the CDC changed its long-standing "vaccines do not cause autism" page to call that statement "not an evidence-based claim." No new study prompted the change \u2014 it was a policy/wording decision. The large studies (including a 657,461-child Danish cohort) finding no link remain unchanged. See the Myths module.', src: { t: 'CDC — Autism and Vaccines', u: 'https://www.cdc.gov/vaccine-safety/about/autism.html' } }
];
