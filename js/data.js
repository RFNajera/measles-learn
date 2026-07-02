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
    subtitle: 'How a cattle plague became a human disease',
    icon: 'origin',
    summary:
      'Trace measles from its evolutionary split with rinderpest to the first written descriptions by Rhazes — and learn why big cities were a prerequisite for the virus to survive.',
    readingMinutes: 6,
    sections: [
      {
        h: 'Evolutionary origins and the rinderpest connection',
        p: [
          'Measles is a uniquely human disease with deep roots in the livestock-dense agricultural societies of the ancient world. The measles virus (MeV) belongs to the genus <em>Morbillivirus</em>, and its closest known relative is the rinderpest virus (RPV), a devastating cattle pathogen officially eradicated in 2011. The scientific consensus is that measles arose from a spillover event — a zoonotic jump in which an ancestral cattle-infecting virus crossed into humans and adapted to sustained person-to-person transmission.',
          'For decades, scientists placed the measles–rinderpest split in the 11th–12th century CE. A 2010 molecular-clock study estimated divergence around 1074–1171 CE. But a methodologically superior 2020 study in <em>Science</em> sequenced a 1912 measles genome — the oldest human RNA virus genome ever recovered — and pushed the divergence back dramatically to a mean estimate of <strong>528 BCE</strong>. That earlier date aligns with the rise of large, interconnected cities across Eurasia.'
        ]
      },
      {
        h: 'The critical community size threshold',
        p: [
          'Measles cannot sustain itself in small populations. Because natural infection confers lifelong immunity, the virus must continually find new susceptible people — mostly newborns — to keep circulating. Below a certain population threshold, measles burns through the available susceptibles and goes locally extinct, returning only via importation.',
          'The epidemiologist F.L. Black identified a <strong>critical community size</strong> of roughly 250,000–500,000 people needed for measles to persist endemically. This biological constraint is itself a clue about origins: such large, dense, connected populations did not exist before early civilizations, so the virus could not establish sustained human transmission until settlements of sufficient scale emerged.'
        ]
      },
      {
        h: 'The earliest written descriptions',
        p: [
          'The first clinically recognizable account of measles comes from the Persian physician <strong>Abu Bakr Muhammad ibn Zakariyya al-Razi</strong> — known in the West as Rhazes (c. 854–925 CE). In his treatise <em>A Treatise on Smallpox and Measles</em>, Rhazes provided the first written distinction between measles and smallpox, describing the rash, prodromal fever, and clinical differences with remarkable precision for his era.'
        ]
      }
    ],
    keyFacts: [
      'Measles virus diverged from rinderpest (a cattle pathogen) around <strong>528 BCE</strong> (95% CI: 1174 BCE–165 CE), per a 2020 molecular-clock analysis of a 1912 viral genome.',
      'An older estimate placed divergence in the 11th–12th century CE; current consensus favors the earlier date.',
      'Measles needs a <strong>critical community size of ~250,000–500,000</strong> people to persist endemically.',
      'Rhazes (al-Razi) authored the first clinical description distinguishing measles from smallpox in the 9th–10th century CE.',
      'Rinderpest was eradicated in 2011 — the only animal disease ever eradicated — leaving measles as the sole survivor of a once-shared viral lineage.'
    ],
    sources: [
      { t: 'Düx et al., Science (2020) — measles–rinderpest divergence', u: 'https://www.science.org/doi/10.1126/science.aba9411' },
      { t: 'Furuse et al., Virology Journal (2010)', u: 'https://d-nb.info/1098729005/34' },
      { t: 'Black, Journal of Theoretical Biology (1966) — critical community size', u: 'https://andreashandel.github.io/IDEMAcourse/media/black66jtb.pdf' },
      { t: 'CDC — History of Measles', u: 'https://www.cdc.gov/measles/about/history.html' },
      { t: 'Muslim Heritage — Al-Razi on Smallpox and Measles', u: 'https://muslimheritage.com/al-razi-smallpox-measles/' }
    ]
  },
  {
    id: 'virology',
    num: 2,
    title: 'Virology',
    subtitle: 'Structure, receptors, and immune amnesia',
    icon: 'virus',
    summary:
      'Understand the measles genome, its H and F glycoproteins, the two receptors (SLAM/CD150 and nectin-4) it exploits, why there is only one serotype, and the startling phenomenon of immune amnesia.',
    readingMinutes: 7,
    sections: [
      {
        h: 'Classification and genome',
        p: [
          '<em>Measles morbillivirus</em> (MeV) belongs to the family <strong>Paramyxoviridae</strong>, which also includes mumps, parainfluenza, Nipah, and canine distemper viruses. It is an enveloped, pleomorphic virion roughly 100–300 nm across. Its genome is a <strong>single-stranded, negative-sense, non-segmented RNA</strong> molecule of about 15.9 kilobases.',
          'Being negative-sense means the genome cannot be translated directly — the virus must first transcribe it into positive-sense messenger RNA using its own RNA-dependent RNA polymerase (the L protein). The genome encodes six structural proteins (N, P, M, F, H, L) and two non-structural immune-evasion proteins (V and C).'
        ]
      },
      {
        h: 'Surface glycoproteins: H and F',
        p: [
          'The two membrane glycoproteins, <strong>H (hemagglutinin)</strong> and <strong>F (fusion)</strong>, are the critical outer features and the primary targets of neutralizing antibodies. The H protein mediates receptor binding, attaching the virus to specific surface molecules on host cells. Receptor engagement then triggers the F protein to fuse the viral envelope with the host membrane, delivering the nucleocapsid into the cytoplasm.'
        ]
      },
      {
        h: 'Two receptors, two entry pathways',
        p: [
          '<strong>SLAM (CD150)</strong> is expressed on immune cells — dendritic cells, macrophages, and activated T and B cells — and is MeV\'s primary receptor during the initial respiratory phase. Crucially, memory T cells express more CD150 than naïve T cells, making them disproportionately vulnerable.',
          '<strong>Nectin-4</strong> is expressed on the basolateral surface of airway epithelial cells. After amplifying within the lymphoid system, MeV spreads to nectin-4-expressing epithelium, from which infectious virions are shed into the airway and expelled by coughing and sneezing — completing the transmission chain.'
        ]
      },
      {
        h: 'The single-serotype advantage',
        p: [
          'Unlike influenza, which evolves new surface antigens annually, MeV has only <strong>one serotype</strong>. Despite circulating as 24 genotypes, its H and F proteins have stayed antigenically stable for over a century. Neutralizing antibodies raised against the 1954 Edmonston strain still neutralize all current wild-type strains — which is exactly why 1960s vaccines remain effective today without reformulation.'
        ]
      },
      {
        h: 'Immune amnesia',
        p: [
          'One of measles\' most alarming properties is <strong>immune amnesia</strong> — the destruction of preexisting immunological memory. Because MeV uses CD150, and memory T cells carry more of it, measles preferentially infects and destroys memory lymphocytes. A 2019 <em>Science</em> study using VirScan found measles eliminated <strong>11%–73%</strong> of a child\'s total antibody pool, wiping out years of accumulated immunity. This suppression typically lasts 2–3 years, with some studies documenting elevated infection risk for up to five years. Critically, the MMR vaccine does <strong>not</strong> cause immune amnesia — it builds immunity without depleting memory cells.'
        ]
      }
    ],
    keyFacts: [
      'MeV is a <strong>negative-sense, single-stranded RNA virus</strong> in the family Paramyxoviridae, genus <em>Morbillivirus</em>.',
      'The H protein binds SLAM/CD150 (immune cells) and nectin-4 (epithelial cells); the F protein mediates membrane fusion.',
      'MeV has <strong>only one serotype</strong>, so 1960s vaccines still protect against all circulating strains.',
      '<strong>Immune amnesia</strong> can erase 11–73% of a person\'s antibody repertoire and last 2–3 years.',
      'Memory T cells are more vulnerable than naïve T cells because they express more CD150.',
      'The ~15.9 kb genome encodes 6 structural proteins (N, P, M, F, H, L) plus V and C.'
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
    subtitle: 'Symptoms, transmission, complications, and history',
    icon: 'clinical',
    summary:
      'Follow measles from exposure to rash, understand why an R\u2080 of 12–18 makes it one of the most contagious diseases known, and survey its complications — from pneumonia to the fatal SSPE.',
    readingMinutes: 7,
    sections: [
      {
        h: 'Disease progression: from exposure to rash',
        p: [
          'Measles follows a predictable course. After exposure, a symptom-free <strong>incubation period</strong> of about 10–12 days (range 7–21) passes. The illness then opens with the <strong>prodrome</strong> — a 2–4 day symptomatic phase marked by high fever (often 103–105°F) and the classic triad of cough, coryza (runny nose), and conjunctivitis: the "three C\'s." Infectivity peaks during this prodrome, before the tell-tale rash appears, making containment difficult.',
          'A pathognomonic early sign is <strong>Koplik spots</strong> — tiny blue-white lesions on the inner cheek, appearing 1–2 days before the rash. The maculopapular rash then erupts on the face and hairline and spreads downward over 3–5 days. A patient is infectious from 4 days before to 4 days after rash onset.'
        ]
      },
      {
        h: 'Exceptional transmissibility: an R\u2080 of 12–18',
        p: [
          'Measles is one of the most contagious diseases ever documented. Its <strong>basic reproduction number (R\u2080) is 12–18</strong> — a single case generates 12 to 18 secondary cases in a fully susceptible population. For comparison, seasonal flu is 1–2 and original SARS-CoV-2 was about 2–3.',
          'Measles spreads through the air: infectious aerosols can linger for up to <strong>2 hours</strong> after an infected person leaves a room. Up to 9 of 10 susceptible people sharing that airspace will become infected.'
        ]
      },
      {
        h: 'Complications',
        p: [
          'Measles is far more than a rash. <strong>Pneumonia</strong> is the most common cause of measles death (1–6% of cases). <strong>Encephalitis</strong> strikes about 1 in 1,000 cases, killing 10–15% and leaving 20–40% of survivors with neurological damage. <strong>Otitis media</strong> (7–9%) is a leading cause of preventable hearing loss, and corneal damage with vitamin A deficiency causes preventable blindness in low-income settings. Case fatality is 1–3 per 1,000 in high-income countries, but can reach 10–25% in malnourished populations during outbreaks.'
        ]
      },
      {
        h: 'Subacute sclerosing panencephalitis (SSPE)',
        p: [
          'Among measles\' most feared complications is <strong>SSPE</strong> — a uniformly fatal, progressive brain disease caused by a persistent, hypermutated measles infection. It strikes 7–10 years (sometimes decades) after an apparently ordinary infection. Children infected before age 2 face dramatically elevated risk. SSPE begins with subtle behavioral decline, progresses through seizures and coma, and is always fatal, usually within 1–3 years of onset.'
        ]
      },
      {
        h: 'Impact on immunologically naïve populations',
        p: [
          'The concept of <strong>virgin-soil epidemics</strong> reveals measles at its most lethal. In the Faroe Islands (1846), measles returned after a 65-year absence and affected nearly the entire population. The 1875 Fiji epidemic killed roughly a quarter of the population within months. Among Indigenous peoples of the Americas, measles drove catastrophic collapses. This differential mortality reflected no prior immunity, poverty, crowding, and a lack of health infrastructure — not any inherent biological vulnerability.'
        ]
      }
    ],
    keyFacts: [
      'Prodrome: fever, cough, coryza, conjunctivitis ("three C\'s"), with <strong>Koplik spots</strong> appearing 1–2 days before the rash.',
      '<strong>R\u2080 of 12–18</strong> — one of the highest of any pathogen; aerosols persist up to 2 hours in a room.',
      '<strong>SSPE</strong> occurs in ~1 in 25,000–100,000 cases overall (far higher in infants) and is uniformly fatal.',
      'Case fatality is 1–3 per 1,000 in high-income settings, far higher where malnutrition is common.',
      'Immune amnesia extends the disease burden for years after the acute illness.',
      'Virgin-soil epidemics (Fiji 1875, Indigenous Americas) had case fatality many times higher than in populations with herd immunity.'
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
    subtitle: 'The pre-vaccine burden and founding studies',
    icon: 'past',
    summary:
      'Examine the staggering pre-vaccine burden (3–4 million U.S. cases a year), the 2–3 year epidemic cycles, and the landmark investigations of Panum in the Faroe Islands and the 1875 Fiji catastrophe.',
    readingMinutes: 6,
    sections: [
      {
        h: 'Pre-vaccine burden in the United States',
        p: [
          'Before the 1963 vaccine, measles was so ubiquitous that nearly every American child caught it. By age 15, roughly <strong>95% of the population</strong> had been infected, with an estimated <strong>3–4 million cases per year</strong> (only ~500,000 reported due to massive underreporting). Each year in the decade before the vaccine, measles caused roughly <strong>400–500 deaths</strong>, 48,000 hospitalizations, and 1,000 cases of encephalitis with permanent disability.'
        ]
      },
      {
        h: 'Epidemic cycles and seasonality',
        p: [
          'In the pre-vaccine era, measles showed regular dynamics: large cities saw <strong>2-to-3-year epidemic cycles</strong>, driven by the accumulation of newly susceptible newborns. Outbreaks peaked in late winter and early spring, tied to school aggregation. In communities below the critical community size, the virus burned out and re-entered only by importation. Globally, measles killed an estimated <strong>2.6 million people per year</strong> before widespread vaccination.'
        ]
      },
      {
        h: 'The Faroe Islands study (Panum, 1846)',
        p: [
          'The 1846 Faroe Islands epidemic produced one of medicine\'s most important investigations. Peter Ludwig Panum, a young Danish physician, documented that the <strong>incubation period</strong> was consistently 13–14 days, that survivors of the previous 1781 epidemic were <strong>fully protected</strong> (proving lifelong immunity), and that the disease spread by close personal contact. Panum\'s work remains a clear demonstration of herd immunity and incubation-period estimation, achieved entirely through field observation with no knowledge of virology.'
        ]
      },
      {
        h: 'The 1875 Fiji epidemic',
        p: [
          'Few events illustrate measles\' destructive power more starkly. When Fiji\'s King Cakobau returned from Australia in 1875, measles came with the ship and spread through a population that had never encountered it. Estimates put the death toll at <strong>25,000–40,000 Fijians</strong> — roughly a quarter of the population — within months. The severity was compounded by the simultaneous infection of entire families and the collapse of food production when whole villages fell ill at once.'
        ]
      }
    ],
    keyFacts: [
      'Pre-vaccine U.S. burden: ~3–4 million infections and 400–500 deaths per year.',
      'Urban measles followed <strong>2–3 year cycles</strong> driven by susceptible birth cohorts.',
      'Globally, measles killed an estimated <strong>2.6 million people per year</strong> before vaccination.',
      'Panum\'s 1846 Faroe Islands study confirmed a 13–14-day incubation period and lifelong immunity.',
      'The 1875 Fiji epidemic killed ~25,000–40,000 people — about a quarter of the population.',
      'In the first decade of U.S. reporting (after 1912), ~6,000 measles deaths were recorded annually.'
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
    subtitle: 'Resurgence, herd immunity, and 2025',
    icon: 'current',
    summary:
      'See how declining vaccination has driven a global resurgence, why 95% coverage is the magic number, and how the 2025 U.S. outbreak became the worst since 1992.',
    readingMinutes: 7,
    sections: [
      {
        h: 'The herd immunity threshold',
        p: [
          'Because measles is so transmissible (R\u2080 of 12–18), the <strong>herd immunity threshold</strong> is correspondingly high — about 92–95%. Using p_c = 1 − (1/R\u2080), an R\u2080 of 15 requires at least 93.3% immunity. In practice, <strong>vaccination coverage must exceed 95%</strong> to maintain elimination, accounting for non-responders and those too young or immunocompromised to vaccinate. Any dip below this threshold — even in a small cluster — creates conditions for rapid resurgence.'
        ]
      },
      {
        h: 'Global resurgence: 2017–2019',
        p: [
          'After reaching a historic low in 2016 (~132,490 reported cases), measles staged a dramatic comeback. Reported cases rose <strong>556%</strong> by 2019 to <strong>869,770 confirmed cases</strong> — the highest since 1996 — with an estimated <strong>207,500 deaths</strong>. Devastating outbreaks hit the Democratic Republic of Congo, Madagascar, Samoa, Ukraine, and the Philippines. The root cause everywhere was a failure to vaccinate.'
        ]
      },
      {
        h: 'Threat to U.S. elimination status',
        p: [
          'The U.S. declared measles <strong>eliminated in 2000</strong>. But in 2019, prolonged outbreaks in undervaccinated communities in New York drove <strong>1,274 confirmed cases</strong> across 31 states — the highest since 1992 — nearly costing the country its elimination status. About 89% of those affected were unvaccinated or of unknown status.'
        ]
      },
      {
        h: 'Current global burden (2024)',
        p: [
          'As of the most recent WHO estimates for <strong>2024</strong>, there were roughly <strong>95,000 measles deaths</strong> globally, with first-dose coverage at 84% and two-dose at 76% — both below the 95% target. Yet measles vaccination has been extraordinarily effective: it is estimated to have <strong>averted nearly 59 million deaths between 2000 and 2024</strong>, the single greatest contributor among all vaccine-preventable diseases.'
        ]
      },
      {
        h: 'The 2025 U.S. outbreak',
        p: [
          'The United States experienced its <strong>largest measles resurgence since 1992</strong> in 2025: <strong>2,288 confirmed cases</strong> across 45 states and jurisdictions, 48 outbreaks, and <strong>3 deaths</strong>, with an 11% hospitalization rate (18% in children under 5). Among confirmed cases, <strong>93% were unvaccinated or of unknown status</strong>. A major epicenter in West Texas and New Mexico produced the first measles deaths in American children in more than 20 years — the previous pediatric measles death was in 2003.'
        ]
      }
    ],
    keyFacts: [
      'Herd immunity requires ~92–95% population immunity because of measles\' high R\u2080.',
      'In 2019, global cases surged to <strong>869,770</strong> (up 556% from 2016) with ~207,500 deaths.',
      '2024 global burden: ~95,000 deaths; 84% first-dose and 76% two-dose coverage; ~30 million infants under-protected.',
      'Measles vaccination averted an estimated <strong>59 million deaths</strong> from 2000 to 2024.',
      '2025 U.S. outbreak: 2,288 cases, 48 outbreaks, 3 deaths — worst since 1992; 93% of cases unvaccinated.',
      'The U.S. declared elimination in 2000; that status has been threatened in 2014, 2019, and 2025.'
    ],
    sources: [
      { t: 'WHO — Measles Fact Sheet (updated Nov 2025)', u: 'https://www.who.int/news-room/fact-sheets/detail/measles' },
      { t: 'WHO (2020) — worldwide measles deaths climb 50%', u: 'https://www.who.int/news/item/12-11-2020-worldwide-measles-deaths-climb-50-from-2016-to-2019-claiming-over-207-500-lives-in-2019' },
      { t: 'CDC — Measles Cases and Outbreaks (2025)', u: 'https://www.cdc.gov/measles/data-research/index.html' },
      { t: 'Lancet (2024) — deaths averted by vaccination', u: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11140691/' },
      { t: 'KFF — Measles elimination status', u: 'https://www.kff.org/other-health/measles-elimination-status-what-it-is-and-how-the-u-s-could-lose-it/' }
    ]
  },
  {
    id: 'vaccine',
    num: 6,
    title: 'Vaccine Development History',
    subtitle: 'From Enders to MMR — and the Wakefield fraud',
    icon: 'vaccine',
    summary:
      'Meet the scientists who tamed measles — Enders, Peebles, and Hilleman — trace the path from the Edmonston strain to MMR, and understand the debunked 1998 fraud that fueled vaccine hesitancy.',
    readingMinutes: 8,
    sections: [
      {
        h: 'Isolating the virus (1954)',
        p: [
          'The story begins in the winter of 1953–54 at Fay School in Southborough, Massachusetts, during a measles outbreak. <strong>John Franklin Enders</strong> — the 1954 Nobel Laureate for showing poliovirus could be grown in non-neural tissue culture — sent his trainee <strong>Thomas C. Peebles</strong> to collect samples. Peebles obtained blood from an 11-year-old named <strong>David Edmonston</strong> and successfully cultured the measles virus. That isolate, the <strong>Edmonston strain</strong>, became the genetic progenitor of virtually every live-attenuated measles vaccine since.'
        ]
      },
      {
        h: 'First licensed vaccine: Edmonston-B (1963)',
        p: [
          'Enders and colleagues, including Samuel Katz, spent the late 1950s attenuating the Edmonston strain through serial passage. By 1961 it was reported as 100% effective in trials involving thousands of children. In <strong>1963</strong>, the <strong>Edmonston-B vaccine</strong> was licensed — the first measles vaccine for public use. It worked, but caused frequent fever and rash, often requiring immune serum globulin alongside it. Even so, reported cases dropped more than 97% between 1965 and 1968.'
        ]
      },
      {
        h: 'Hilleman\u2019s breakthrough: the Moraten strain (1968)',
        p: [
          'The reactogenicity problem fell to <strong>Maurice Hilleman</strong> at Merck — arguably the most prolific vaccine developer in history, responsible for over 40 vaccines. He further attenuated the Enders strain through 40 additional passages in chick embryo cells, producing a far less reactogenic vaccine with equivalent efficacy. He named it <strong>"Moraten"</strong> — "More Attenuated Enders" — licensed in <strong>1968</strong>. The Moraten (Edmonston-Enders) strain has been the only measles vaccine used in the U.S. ever since.'
        ]
      },
      {
        h: 'The MMR combination vaccine (1971)',
        p: [
          'Hilleman and colleague Eugene Buynak had also developed vaccines for mumps (1967) and rubella (1969). Recognizing the advantages of a single shot, Merck combined all three into the <strong>MMR vaccine</strong>, licensed in <strong>1971</strong>. In <strong>1989</strong>, amid outbreaks among vaccinated school-age children, a <strong>second dose</strong> was recommended. Today, two doses of MMR are 97% effective against measles.'
        ]
      },
      {
        h: 'The Wakefield fraud (1998–2010)',
        p: [
          'On February 28, 1998, Andrew Wakefield and co-authors published a 12-child case series in <em>The Lancet</em> suggesting a link between MMR and autism. The paper was small, uncontrolled, and speculative — but heavily amplified by the media, and vaccination rates fell. Multiple large studies of hundreds of thousands to millions of children refuted any causal link.',
          'Investigative journalist Brian Deer revealed that Wakefield had undisclosed financial conflicts and had misrepresented the children\'s histories. <em>The Lancet</em> <strong>fully retracted</strong> the paper in February 2010, and Wakefield was <strong>struck off the UK medical register</strong> in May 2010. The BMJ later concluded the paper was deliberate <strong>data falsification</strong> for financial gain. Its public-health consequences — decades of vaccine hesitancy — persist to this day.'
        ]
      }
    ],
    keyFacts: [
      'In 1954, <strong>Enders and Peebles</strong> isolated measles from David Edmonston — the Edmonston strain.',
      'Enders won the 1954 Nobel Prize for poliovirus tissue-culture work later applied to measles.',
      'The first vaccine (<strong>Edmonston-B</strong>) was licensed in 1963.',
      '<strong>Maurice Hilleman</strong> developed the improved Moraten strain in 1968 — still the U.S. vaccine today.',
      'The <strong>MMR</strong> vaccine was licensed in 1971; a second dose was added in 1989.',
      'Wakefield\'s 1998 MMR–autism paper was fully retracted in 2010 and declared deliberate fraud.'
    ],
    sources: [
      { t: 'CDC — History of Measles', u: 'https://www.cdc.gov/measles/about/history.html' },
      { t: 'WHO — History of Measles Vaccination', u: 'https://www.who.int/news-room/spotlight/history-of-vaccination/history-of-measles-vaccination' },
      { t: 'National Academies — Maurice Hilleman biographical memoir', u: 'https://www.nasonline.org/wp-content/uploads/2024/06/hilleman-maurice.pdf' },
      { t: 'BMJ (2011) — Wakefield\u2019s article was fraudulent', u: 'https://www.bmj.com/content/342/bmj.c7452' },
      { t: 'Indian Journal of Psychiatry (2011) — the Wakefield affair', u: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3136032/' }
    ]
  }
];

/* ---- Quizzes: keyed by module id ---- */
const QUIZZES = {
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
  { year: '2020', title: 'Measles origins pushed back', text: 'Düx et al. use a 1912 viral genome to estimate the measles–rinderpest divergence at least as far back as the 6th century BCE.', src: { t: 'Düx et al., Science (2020)', u: 'https://www.science.org/doi/10.1126/science.aba9411' } },
  { year: '2024', title: '59 million deaths averted', text: 'WHO estimates ~95,000 global measles deaths, with vaccination having averted nearly 59 million deaths since 2000; ~30 million infants remain under-protected.', src: { t: 'WHO Fact Sheet (Nov 2025)', u: 'https://www.who.int/news-room/fact-sheets/detail/measles' } },
  { year: '2025', era: true, title: 'Largest U.S. resurgence since 1992', text: '2,288 confirmed cases across 45 jurisdictions, 48 outbreaks, and 3 deaths (including the first pediatric measles deaths since 2003); 93% of cases unvaccinated.', src: { t: 'CDC — Measles Cases and Outbreaks', u: 'https://www.cdc.gov/measles/data-research/index.html' } }
];
