const countries = [
    {
        id: 'uk',
        name: 'United Kingdom',
        flag: '🇬🇧',
        accent: '#012169',
        tagline: 'World-class education at the heart of Europe',
        intro:
            'The UK is home to some of the world\'s most prestigious universities and offers a rich academic heritage, vibrant multicultural cities, and strong post-study work opportunities.',
        facts: [
            { label: 'Top Universities', value: 'Oxford, Cambridge, Imperial College, UCL, Edinburgh' },
            { label: 'Popular Courses', value: 'Business, Law, Engineering, Medicine, Arts' },
            { label: 'Avg. Tuition', value: 'price / year' },
            { label: 'Post-Study Work', value: 'Graduate Route Visa – up to 2 years' },
            { label: 'Visa Type', value: 'UK Student Visa (Tier 4)' },
            { label: 'Duration', value: '3 yrs UG · 1 yr PG · PhD varies' },
        ],
    },
    {
        id: 'usa',
        name: 'United States',
        flag: '🇺🇸',
        accent: '#B22234',
        tagline: 'Unlock boundless opportunities in the land of innovation',
        intro:
            'The USA offers a flexible education system, world-renowned research facilities, and a vibrant campus culture. With hundreds of universities spread across diverse cities, there is a perfect fit for every student.',
        facts: [
            { label: 'Top Universities', value: 'MIT, Harvard, Stanford, Caltech, Yale' },
            { label: 'Popular Courses', value: 'Computer Science, MBA, Engineering, Liberal Arts, Medicine' },
            { label: 'Avg. Tuition', value: 'price / year' },
            { label: 'Post-Study Work', value: 'OPT – 1 yr (3 yrs for STEM)' },
            { label: 'Visa Type', value: 'F-1 Student Visa' },
            { label: 'Duration', value: '4 yrs UG · 1–2 yrs PG · PhD 4–6 yrs' },
        ],
    },
    {
        id: 'canada',
        name: 'Canada',
        flag: '🇨🇦',
        accent: '#D80621',
        tagline: 'Quality education with a path to permanent residency',
        intro:
            'Canada is consistently ranked among the top study destinations for its high quality of life, multicultural society, affordable tuition, and generous immigration pathways for international graduates.',
        facts: [
            { label: 'Top Universities', value: 'UofT, UBC, McGill, Waterloo, McMaster' },
            { label: 'Popular Courses', value: 'IT, Business, Engineering, Health Sciences, Environmental Studies' },
            { label: 'Avg. Tuition', value: 'price / year' },
            { label: 'Post-Study Work', value: 'PGWP – up to 3 years' },
            { label: 'Visa Type', value: 'Canadian Study Permit' },
            { label: 'Duration', value: '4 yrs UG · 1–2 yrs PG · PhD 4–5 yrs' },
        ],
    },
    {
        id: 'australia',
        name: 'Australia',
        flag: '🇦🇺',
        accent: '#00843D',
        tagline: 'World-class education under the Southern sun',
        intro:
            'Australia offers eight of the world\'s top 100 universities, stunning campuses, and a laid-back lifestyle — combined with strong career prospects and two years of post-study work rights for graduates.',
        facts: [
            { label: 'Top Universities', value: 'ANU, Melbourne, Sydney, Monash, Queensland' },
            { label: 'Popular Courses', value: 'Nursing, IT, Education, Business, Engineering' },
            { label: 'Avg. Tuition', value: 'price / year' },
            { label: 'Post-Study Work', value: 'Temporary Graduate Visa – 2–4 years' },
            { label: 'Visa Type', value: 'Student Subclass 500 Visa' },
            { label: 'Duration', value: '3 yrs UG · 1.5–2 yrs PG · PhD 4 yrs' },
        ],
    },
    {
        id: 'ireland',
        name: 'Ireland',
        flag: '🇮🇪',
        accent: '#009A49',
        tagline: 'Europe\'s Silicon Valley with a warm Irish welcome',
        intro:
            'Ireland is the only English-speaking country in the EU and serves as the European headquarters for major tech giants like Google, Meta, and Apple — making it an ideal launchpad for a global career.',
        facts: [
            { label: 'Top Universities', value: 'Trinity College, UCD, UCC, NUI Galway, DCU' },
            { label: 'Popular Courses', value: 'Technology, Pharma, Business, Data Science, Finance' },
            { label: 'Avg. Tuition', value: 'price / year' },
            { label: 'Post-Study Work', value: 'Third Level Graduate Programme – 1–2 years' },
            { label: 'Visa Type', value: 'Irish Study Visa' },
            { label: 'Duration', value: '3–4 yrs UG · 1 yr PG · PhD 4 yrs' },
        ],
    },
    {
        id: 'germany',
        name: 'Germany',
        flag: '🇩🇪',
        accent: '#FFCE00',
        tagline: 'Tuition-free education in the heart of Europe',
        intro:
            'Germany is celebrated for its engineering excellence, research culture, and low or zero tuition fees at public universities. Its booming economy and central European location make it a top choice for ambitious students.',
        facts: [
            { label: 'Top Universities', value: 'TU Munich, LMU Munich, Heidelberg, Humboldt, RWTH Aachen' },
            { label: 'Popular Courses', value: 'Engineering, Computer Science, Automotive, Finance, Medicine' },
            { label: 'Avg. Tuition', value: 'price / semester (public)' },
            { label: 'Post-Study Work', value: 'Residence permit for job search – 18 months' },
            { label: 'Visa Type', value: 'National Visa (D-Visa) / Student Visa' },
            { label: 'Duration', value: '3 yrs UG · 2 yrs PG · PhD 3–5 yrs' },
        ],
    },
]

function StudyDestinations() {
    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="study-destination" className="section study-destinations">
            <div className="container">
                <p className="section-tagline">Explore Your Options</p>
                <h2 className="section-title">Study Destinations</h2>

                <div className="country-sections-list">
                    {countries.map((country) => (
                        <div key={country.id} id={country.id} className="country-section">
                            <div
                                className="country-accent-bar"
                                style={{ background: country.accent }}
                            />
                            <div className="country-header">
                                <span className="country-flag">{country.flag}</span>
                                <div>
                                    <h3 className="country-name">{country.name}</h3>
                                    <p className="country-tagline">{country.tagline}</p>
                                </div>
                            </div>
                            <p className="country-intro">{country.intro}</p>
                            <div className="country-grid">
                                {country.facts.map((fact) => (
                                    <div key={fact.label} className="country-card">
                                        <span className="country-card-label">{fact.label}</span>
                                        <span className="country-card-value">{fact.value}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                className="btn btn-primary country-cta"
                                onClick={() => scrollTo('contact')}
                            >
                                Apply for {country.name} →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StudyDestinations
