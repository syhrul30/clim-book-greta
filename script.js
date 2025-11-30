document.addEventListener('DOMContentLoaded', function() {
    
    // ================================================================
    // ================ KONFIGURASI PARTIKEL (DATA MOLECULES) =========
    // ================================================================
    tsParticles.load("tsparticles", {
        particles: {
            number: {
                value: 40,
                density: { enable: true, value_area: 800 }
            },
            color: {
                value: ["#3B82F6", "#EF4444", "#FFFFFF"] // Tema: Biru, Merah, Putih
            },
            shape: { type: "circle" },
            opacity: {
                value: 0.6,
                random: true,
                anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 4,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#475569",
                opacity: 0.6,
                width: 2
            },
            move: {
                enable: true,
                speed: 0.6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 0.6 } },
                push: { particles_nb: 3 }
            }
        },
        retina_detect: true,
        background: { color: "transparent" } // Background handled by CSS
    });

    // ================================================================
    // ================= CONTOH DATA ARTIKEL ==========================
    // ================================================================
    const articlesData = [
      {
            title: "PART ONE: How Climate Works",
            original: [ 
                    
             ],
            translation: [
                
            ]
        },
{
                        title: "1.1 ‘To solve this problem, we need to understand it’ / Greta Thunberg",
            type: 'sub-article',
            original: [ 
  "1.1 To solve this problem, we need to understand it",
  "",
  "Greta Thunberg",
  "",
  "- - -",
  "",
  "The climate and ecological crisis is the greatest threat that humanity has ever faced.",
  "It will no doubt be the issue that will define and shape our future everyday life like no other.",
  "This is painfully clear.",
  "In the last few years, the way we see and talk about the crisis has started to shift.",
  "But since we have wasted so many decades ignoring and downplaying this escalating emergency, our societies are still in a state of denial.",
  "This is, after all, the age of communication, where what you say can easily outweigh what you do.",
  "That is how we have ended up with such a great number of major fossil-fuel-producing – and high-emitting – nations calling themselves climate leaders, despite not having any credible climate mitigation policies in place.",
  "This is the age of the great greenwashing machine.",
  "",
  "There are no black-and-white issues in life.",
  "No categorical answers.",
  "Everything is a subject for endless debate and compromise.",
  "This is one of the core principles of our current society.",
  "A society which, when it comes to sustainability, has a lot to answer for.",
  "Because that core principle is wrong.",
  "There are some issues that are black and white.",
  "There are indeed planetary and societal boundaries that must not be crossed.",
  "For instance, we think our societies can be a little bit more or a little bit less sustainable.",
  "But in the long run you cannot be a little bit sustainable – either you are sustainable or you are unsustainable.",
  "It is like walking on thin ice – either it carries your weight, or it does not.",
  "Either you make it to the shore, or you fall into the deep, dark, cold waters.",
  "And if that should happen to us, there will not be any nearby planet coming to our rescue.",
  "We are completely on our own.",
  "",
  "It is my genuine belief that the only way we will be able to avoid the worst consequences of this emerging existential crisis is if we create a critical mass of people who demand the changes required.",
  "For that to happen, we need to rapidly spread awareness, because the general public still lacks much of the basic knowledge that is necessary to understand the dire situation we are in.",
  "My wish is to be part of the effort to change that.",
  "",
  "I have decided to use my platform to create a book based on the current best available science – a book that covers the climate, ecological and sustainability crisis holistically.",
  "Because the climate crisis is, of course, only a symptom of a much larger sustainability crisis.",
  "My hope is that this book might be some kind of go-to source for understanding these different, closely interconnected crises.",
  "",
  "In 2021, I invited a great number of leading scientists and experts, and activists, authors and storytellers to contribute with their individual expertise.",
  "This book is the result of their work: a comprehensive collection of facts, stories, graphs and photographs showing some of the different faces of the sustainability crisis with a clear focus on climate and ecology.",
  "",
  "It covers everything from melting ice shelves to economics, from fast fashion to the loss of species, from pandemics to vanishing islands, from deforestation to the loss of fertile soils, from water shortages to Indigenous sovereignty, from future food production to carbon budgets – and it lays bare the actions of those responsible and the failures of those who should have already shared this information with the citizens of the world.",
  "",
  "There is still time for us to avoid the worst outcomes.",
  "There is still hope, but not if we continue as we are today.",
  "To solve this problem, we first need to understand it – and to understand the fact that the problem itself is by definition a series of interconnected problems.",
  "We need to lay out the facts and tell it like it is.",
  "Science is a tool, and we all need to learn how to use it.",
  "",
  "We also need to answer some fundamental questions.",
  "Like, what is it, exactly, we want to solve in the first place?",
  "What is our goal?",
  "Is it to lower emissions, or to be able to go on living as we are today?",
  "Is our goal to safeguard present and future living conditions, or is it to maintain a high-consumption way of life?",
  "Is there such a thing as green growth?",
  "And can we have eternal economic growth on a finite planet?",
  "",
  "Right now, many of us are in need of hope.",
  "But what is hope?",
  "And hope for whom?",
  "Hope for those of us who have created the problem, or for those who are already suffering its consequences?",
  "And can our desire to deliver this hope get in the way of taking action and therefore risk doing more harm than good?",
  "",
  "The richest 1 per cent of the world’s population are responsible for more than twice as much carbon pollution as the people who make up the poorest half of humanity.",
  "",
  "Perhaps, if you are one of the 19 million US citizens or the 4 million citizens of China who belong to that top 1 per cent – along with everyone else who has a net worth of $1,055,337 or more – then hope is perhaps not what you need the most.",
  "At least not from an objective perspective.",
  "",
  "Of course, we hear, some progress is being made.",
  "Some nations and regions report quite astonishing reductions in CO2 emissions – or at least in the years since the world first started negotiating the frameworks for how we manage our statistics.",
  "But how do all those reductions hold up once we include our total emissions, rather than carefully managed territorial statistics?",
  "In other words, all those emissions that we so successfully negotiated out of these figures.",
  "For instance, outsourcing factories to distant parts of the world and negotiating emissions from international aviation and shipping out of our statistics – which means that we not only manufacture our products by using cheap labour and exploiting people, we also erase the associated emissions – emissions that have, in reality, increased.",
  "Is that progress?",
  "",
  "To stay in line with our international climate targets we need to get our individual per capita emissions down to somewhere around 1 tonne of carbon dioxide a year.",
  "In Sweden, that figure currently stands at around 9 tonnes, once you include consumption of imported goods.",
  "In the US that figure is 17.1 tonnes, in Canada 15.4 tonnes, in Australia 14.9 tonnes and in China 6.6 tonnes.",
  "When you add biogenic emissions – such as emissions from the burning of wood and vegetation – those figures will in many cases be even higher.",
  "And in forestry nations such as Sweden and Canada, significantly higher.",
  "",
  "- - -",
  "",
  "Global income and associated lifestyle emissions",
  "",
  { type: 'image', src: "https://cdn.jsdelivr.net/gh/syhrul30/clim-book-greta/Img_450_13-book_reader_ReadEra.webp", 
    alt:"climbook_13"},
  "",
  "- - -",
  "",
  "Keeping emissions below 1 tonne per person a year will not be a problem for the majority of the world’s population, since they will only need to make modest reductions – if any – in order to live inside the planetary boundaries.",
  "In many cases, they would even be able to increase their emissions quite substantially.",
  "",
  "But the idea that countries such as Germany, Italy, Switzerland, New Zealand, Norway, and so on will be able to achieve such enormous reductions within a couple of decades without major systemic transformations is naive.",
  "And still this is what the leaders of the so-called Global North are suggesting will happen.",
  "In Part Four of this book we will be looking at how that progress is coming along.",
  "",
  "Some people believe that if they were to join the climate movement now, they would be among the last.",
  "But that is very far from true.",
  "In fact, if you do decide to take action now, you would still be a pioneer.",
  "The final part of this book focuses on solutions and things we can actually do to make a real difference, from small, individual actions to a planetary system change.",
  "",
  "This book is intended to be democratic, because democracy is our best tool to solve this crisis.",
  "There may be subtle disagreements between the people writing from the front lines.",
  "Each person in this book is speaking from their own point of view and may arrive at different conclusions.",
  "However, we need all of their collective wisdom if we are to create the enormous public pressure required to make change.",
  "And rather than having one or two ‘communication experts’ or individual scientists drawing all the conclusions for you as a reader, the idea behind this book is that, taken together, their knowledge in their respective areas of expertise will lead you to a point where you can start to connect the dots yourself.",
  "At least, this is my hope.",
  "Because I believe the most important conclusions are yet to be drawn – and hopefully they will be drawn by you.",
  "/",
  ""
],
translation: [ 
  "1.1 Untuk menyelesaikan masalah ini, kita perlu memahaminya",
  "",
  "Greta Thunberg",
  "",
  "- - -",
  "",
  "Krisis iklim dan ekologis adalah ancaman terbesar yang pernah dihadapi umat manusia.",
  "Tidak diragukan lagi, ini akan menjadi isu yang mendefinisikan dan membentuk kehidupan sehari-hari kita di masa depan, lebih dari isu apa pun.",
  "Hal ini sudah teramat jelas.",
  "Dalam beberapa tahun terakhir, cara kita memandang dan membicarakan krisis ini mulai berubah.",
  "Namun, karena kita telah menyia-nyiakan waktu selama puluhan tahun dengan mengabaikan dan mengecilkan keadaan darurat yang kian memburuk ini, masyarakat kita masih berada dalam fase penyangkalan.",
  "Bagaimanapun juga, ini adalah era komunikasi, di mana ucapan Anda dapat dengan mudah mengalahkan tindakan Anda.",
  "Begitulah akhirnya kita mendapati begitu banyak negara penghasil bahan bakar fosil utama—dan penghasil emisi tinggi—yang menyebut diri mereka pemimpin iklim, meskipun tidak memiliki kebijakan mitigasi iklim yang kredibel.",
  "Ini adalah era mesin greenwashing raksasa.",
  "",
  "Tidak ada persoalan yang benar-benar hitam-putih dalam hidup.",
  "Tidak ada jawaban yang mutlak.",
  "Segala sesuatu bisa menjadi bahan perdebatan dan kompromi tanpa henti.",
  "Ini adalah salah satu prinsip utama masyarakat kita saat ini.",
  "Masyarakat yang, jika bicara soal keberlanjutan, harus banyak bertanggung jawab.",
  "Karena prinsip utama itu keliru.",
  "Ada beberapa persoalan yang memang hitam-putih.",
  "Memang ada batas-batas planet dan sosial yang tidak boleh dilanggar.",
  "Sebagai contoh, kita berpikir masyarakat kita bisa menjadi sedikit lebih berkelanjutan atau sedikit kurang berkelanjutan.",
  "Namun dalam jangka panjang, Anda tidak bisa menjadi 'sedikit' berkelanjutan—pilihannya hanyalah Anda berkelanjutan atau tidak berkelanjutan.",
  "Ibarat berjalan di atas es tipis—entah es itu mampu menahan berat badan Anda, atau tidak.",
  "Entah Anda berhasil sampai ke tepian, atau Anda terperosok ke dalam air yang dalam, gelap, dan dingin.",
  "Dan jika hal itu terjadi pada kita, tidak akan ada planet terdekat yang datang menyelamatkan.",
  "Kita benar-benar berjuang sendirian.",
  "",
  "Saya sangat yakin bahwa satu-satunya cara kita bisa menghindari konsekuensi terburuk dari krisis eksistensial yang mulai muncul ini adalah dengan menciptakan massa kritis yang menuntut perubahan yang diperlukan.",
  "Agar hal itu terwujud, kita perlu menyebarkan kesadaran dengan cepat, karena masyarakat umum masih belum memiliki banyak pengetahuan dasar yang diperlukan untuk memahami situasi genting yang sedang kita hadapi.",
  "Harapan saya adalah menjadi bagian dari upaya untuk mengubah hal tersebut.",
  "",
  "Saya telah memutuskan untuk menggunakan platform saya guna menyusun buku berdasarkan sains terbaik yang tersedia saat ini—sebuah buku yang membahas krisis iklim, ekologis, dan keberlanjutan secara holistik.",
  "Karena krisis iklim, tentu saja, hanyalah gejala dari krisis keberlanjutan yang jauh lebih besar.",
  "Saya berharap buku ini bisa menjadi semacam sumber rujukan utama untuk memahami berbagai krisis yang saling berkaitan erat ini.",
  "",
  "Pada tahun 2021, saya mengundang banyak ilmuwan dan ahli terkemuka, serta aktivis, penulis, dan pencerita untuk berkontribusi dengan keahlian mereka masing-masing.",
  "Buku ini adalah hasil karya mereka: kumpulan fakta, kisah, grafik, dan foto yang komprehensif, yang memperlihatkan berbagai wajah krisis keberlanjutan dengan fokus yang jelas pada iklim dan ekologi.",
  "",
  "Buku ini mencakup segalanya, mulai dari lapisan es yang mencair hingga ekonomi, dari fast fashion hingga kepunahan spesies, dari pandemi hingga pulau-pulau yang tenggelam, dari deforestasi hingga hilangnya tanah subur, dari kelangkaan air hingga kedaulatan Masyarakat Adat, dari produksi pangan masa depan hingga anggaran karbon—serta menyingkap tindakan pihak-pihak yang bertanggung jawab dan kegagalan mereka yang seharusnya sudah membagikan informasi ini kepada warga dunia.",
  "",
  "Masih ada waktu bagi kita untuk menghindari dampak terburuk.",
  "Masih ada harapan, tetapi tidak jika kita terus bertindak seperti sekarang ini.",
  "Untuk menyelesaikan masalah ini, pertama-tama kita perlu memahaminya—dan memahami fakta bahwa masalah ini sendiri, menurut definisinya, adalah serangkaian masalah yang saling berkaitan.",
  "Kita perlu memaparkan fakta-faktanya dan menyampaikannya apa adanya.",
  "Sains adalah alat, dan kita semua perlu belajar cara menggunakannya.",
  "",
  "Kita juga perlu menjawab beberapa pertanyaan mendasar.",
  "Misalnya, apa sebenarnya yang ingin kita selesaikan sejak awal?",
  "Apa tujuan kita?",
  "Apakah untuk menurunkan emisi, atau agar bisa terus hidup seperti sekarang ini?",
  "Apakah tujuan kita untuk menjaga kondisi kehidupan saat ini dan masa depan, atau untuk mempertahankan gaya hidup konsumtif yang tinggi?",
  "Apakah ada yang namanya pertumbuhan hijau?",
  "Dan bisakah kita memiliki pertumbuhan ekonomi tanpa batas di planet yang terbatas?",
  "",
  "Saat ini, banyak dari kita membutuhkan harapan.",
  "Namun, apa itu harapan?",
  "Dan harapan bagi siapa?",
  "Harapan bagi kita yang telah menciptakan masalah ini, atau bagi mereka yang sudah menderita akibat konsekuensinya?",
  "Dan bisakah keinginan kita untuk memberikan harapan ini justru menghalangi tindakan nyata, sehingga berisiko mendatangkan lebih banyak mudarat daripada manfaat?",
  "",
  "Sebanyak 1 persen penduduk terkaya di dunia bertanggung jawab atas polusi karbon dua kali lebih banyak dibandingkan separuh populasi termiskin umat manusia.",
  "",
  "Mungkin, jika Anda adalah salah satu dari 19 juta warga AS atau 4 juta warga Tiongkok yang termasuk dalam 1 persen teratas tersebut—bersama dengan orang lain yang memiliki kekayaan bersih $1.055.337 atau lebih—maka harapan mungkin bukanlah hal yang paling Anda butuhkan.",
  "Setidaknya tidak dari sudut pandang objektif.",
  "",
  "Tentu saja, kita mendengar bahwa ada kemajuan yang sedang dicapai.",
  "Beberapa negara dan wilayah melaporkan pengurangan emisi CO2 yang cukup mencengangkan—atau setidaknya dalam tahun-tahun sejak dunia pertama kali mulai menegosiasikan kerangka kerja tentang cara kita mengelola statistik kita.",
  "Namun, apakah semua pengurangan itu terbukti valid jika kita menyertakan total emisi kita, dan bukan sekadar statistik teritorial yang diatur dengan cermat?",
  "Dengan kata lain, semua emisi yang dengan begitu suksesnya kita negosiasikan agar tidak dimasukkan ke dalam angka-angka tersebut.",
  "Misalnya, memindahkan pabrik ke belahan dunia yang jauh dan menegosiasikan agar emisi dari penerbangan dan pelayaran internasional dikeluarkan dari statistik kita—yang berarti kita tidak hanya memproduksi barang dengan menggunakan tenaga kerja murah dan mengeksploitasi orang, tetapi juga menghapus jejak emisi terkait—emisi yang, pada kenyataannya, justru meningkat.",
  "Apakah itu kemajuan?",
  "",
  "Agar tetap sejalan dengan target iklim internasional, kita perlu menurunkan emisi per kapita individu kita hingga sekitar 1 ton karbon dioksida per tahun.",
  "Di Swedia, angka tersebut saat ini mencapai sekitar 9 ton, jika konsumsi barang impor diperhitungkan.",
  "Di AS angka tersebut adalah 17,1 ton, di Kanada 15,4 ton, di Australia 14,9 ton, dan di Tiongkok 6,6 ton.",
  "Jika Anda menambahkan emisi biogenik—seperti emisi dari pembakaran kayu dan vegetasi—angka-angka tersebut dalam banyak kasus akan menjadi lebih tinggi lagi.",
  "Dan di negara-negara yang memiliki banyak hutan seperti Swedia dan Kanada, angkanya jauh lebih tinggi.",
  "",
  "- - -",
  "",
  "Pendapatan global dan emisi gaya hidup terkait",
  "",
  "(GAMBAR 13)",
  "",
  "- - -",
  "",
  "Menjaga emisi di bawah 1 ton per orang per tahun tidak akan menjadi masalah bagi mayoritas penduduk dunia, karena mereka hanya perlu melakukan pengurangan kecil—jika ada—agar dapat hidup dalam batas-batas planet.",
  "Dalam banyak kasus, mereka bahkan bisa meningkatkan emisi mereka secara cukup signifikan.",
  "",
  "Namun, gagasan bahwa negara-negara seperti Jerman, Italia, Swiss, Selandia Baru, Norwegia, dan sebagainya akan mampu mencapai pengurangan sebesar itu dalam beberapa dekade tanpa transformasi sistemik yang besar adalah pemikiran yang naif.",
  "Namun, hal inilah yang disarankan oleh para pemimpin negara-negara yang disebut 'Global North' akan terjadi.",
  "Di Bagian Empat buku ini, kita akan melihat bagaimana perkembangan kemajuan tersebut.",
  "",
  "Beberapa orang percaya bahwa jika mereka bergabung dengan gerakan iklim sekarang, mereka akan menjadi yang paling akhir.",
  "Namun, hal itu sangat jauh dari kebenaran.",
  "Faktanya, jika Anda memutuskan untuk bertindak sekarang, Anda masih tergolong perintis.",
  "Bagian akhir buku ini berfokus pada solusi dan hal-hal yang benar-benar dapat kita lakukan untuk membuat perbedaan nyata, mulai dari tindakan individu yang kecil hingga perubahan sistem planet.",
  "",
  "Buku ini dimaksudkan untuk bersifat demokratis, karena demokrasi adalah alat terbaik kita untuk menyelesaikan krisis ini.",
  "Mungkin terdapat perbedaan pendapat yang halus di antara orang-orang yang menulis dari garis depan.",
  "Setiap orang dalam buku ini berbicara dari sudut pandang mereka sendiri dan mungkin sampai pada kesimpulan yang berbeda.",
  "Namun, kita membutuhkan seluruh kearifan kolektif mereka jika kita ingin menciptakan tekanan publik yang sangat besar yang diperlukan untuk membuat perubahan.",
  "Dan alih-alih membiarkan satu atau dua 'pakar komunikasi' atau ilmuwan individu menarik semua kesimpulan untuk Anda sebagai pembaca, gagasan di balik buku ini adalah bahwa, jika digabungkan, pengetahuan mereka di bidang keahlian masing-masing akan membawa Anda ke titik di mana Anda dapat mulai menghubungkan titik-titik tersebut sendiri.",
  "Setidaknya, inilah harapan saya.",
  "Karena saya percaya kesimpulan yang paling penting belum dibuat—dan semoga kesimpulan itu akan dibuat oleh Anda.",
  "/",
  ""            
]
        },
{
            title: "1.2 The Deep History of Carbon Dioxide",
            type: 'sub-article',
            original: [ 
  "1.2 The Deep History of Carbon Dioxide",
  "",
  "Peter Brannen",
  "",
  "- - -",
  "",
  "All life is conjured from CO2.",
  "This is the original magic trick, from which everything else in the living world follows.",
  "At Earth’s surface, with mere sunlight and water, it is transformed into living matter through photosynthesis, leaving oxygen in its wake.",
  "This plant carbon then flows through animal bodies and ecosystems and back out into the oceans and air as CO2 once again.",
  "But some of this carbon slips the churn of the surface world altogether and passes into the Earth – as limestone, or as carbon-rich sludge, slumbering deep in the planet’s crust for hundreds of millions of years.",
  "If it isn’t buried, this plant stuff is quickly burned on Earth’s surface in the fires of metabolism, by animals, fungi, bacteria.",
  "In this way, life uses up 99.99 per cent of the oxygen produced by photosynthesis – and would use it all, if it weren’t for that infinitesimal leak of plant matter into the rocks.",
  "But it is from this leak into the rocks that the planet has been gifted its strange surplus of oxygen.",
  "In other words, the Earth’s breathable atmosphere is the legacy not of forests and swirls of plankton alive today but of the CO2 captured by life over all of our planet’s history and commended to Earth’s crust as fossil fuels.",
  "",
  "If this was the end of the story, and CO2 was merely the fundamental substrate of all living things on Earth and the indirect source of its life-sustaining oxygen, that would be interesting enough.",
  "But it just so happens that this same unassuming molecule also critically modulates the temperature of the entire planet and the chemistry of the entire ocean.",
  "When this carbon chemistry goes awry, the living world is warped, the thermostat breaks, the oceans acidify and things die.",
  "This astounding significance of carbon dioxide to every component of the Earth system is why it’s not just another noisome industrial pollutant to regulate, like chlorofluorocarbons or lead.",
  "It is rather, as the oceanographer Roger Revelle wrote in 1985, ‘the most important substance in the biosphere’.",
  "",
  "The most important substance in the biosphere is not one to be treated cavalierly.",
  "The movement of CO2 – as it billows from volcanoes, stirs into the air and oceans, swirls through eddies of life and soaks back into the rocks again – is what makes the Earth the Earth.",
  "This is called the carbon cycle, and life on Earth crucially depends on this global cycle maintaining a kind of delicate, if dynamic, balance.",
  "While CO2 perennially issues from volcanoes (at a hundredth the rate of human emissions) and living organisms exchange it in a ceaseless frenzy at the Earth’s surface, the planet is meanwhile constantly scrubbing it from the system at the same time, preventing climate catastrophe.",
  "Feedbacks that draw down CO2 – from the erosion of whole mountain chains to the sinking of blizzards of carbon-rich plankton to the bottom of the sea – serve to maintain a kind of planetary equilibrium.",
  "Most of the time.",
  "This is an unlikely, miraculous world we live on, and one that we recklessly take for granted.",
  "",
  "Sometimes in the geologic record, though, the planet has been pushed beyond a threshold.",
  "The Earth system can bend, but it can also break.",
  "And sometimes – in exceedingly rare, exceedingly catastrophic episodes buried deep in Earth history – the carbon cycle has been completely overwhelmed, undone, spun out of control.",
  "And the reliable consequence has been mass extinction.",
  "",
  "What would happen if, say, continent-scale volcanoes, burning through kingdoms of carbon-rich limestone and igniting massive coal and natural gas deposits underground, injected thousands of gigatonnes of CO2 into the air – from exploding calderas and from steaming, incandescent expanses of basalt lava?",
  "This was the predicament for the hapless creatures alive 251.9 million years ago, in the moments before the greatest mass extinction in the history of life on Earth.",
  "At the end of the Permian period, 90 per cent of this life would learn the fatal cost of a carbon cycle completely deranged by too much carbon dioxide.",
  "",
  "In the End-Permian mass extinction, carbon dioxide blasted out of Siberian volcanoes for thousands of years and nearly ended the project of complex life.",
  "All the normal guardrails in the carbon cycle buckled and failed in this, the single worst moment in the entire geologic record.",
  "The temperature soared by 10°C, the planet convulsed with lethally hot, acidifying oceans which pulsed with lurid blooms of algal slime that robbed their ancient waters of oxygen.",
  "This anoxic ocean instead filled with poisonous hydrogen sulphide as hurricanes roared overhead, taking on an unearthly intensity.",
  "In the aftermath, when the fever finally broke, one could travel the world without seeing a tree, the world’s coral reefs had been replaced by bacterial slime, the fossil record went silent and the planet took nearly 10 million years to pull itself back from oblivion.",
  "Thanks, in large part, to burning fossil fuels.",
  "",
  "Every single mass extinction in Earth history is similarly marked by massive disruptions of the global carbon cycle, the signals of which have been teased out of the rocks by geochemists.",
  "Given the central importance of CO2 to the biosphere, perhaps we shouldn’t be surprised to find that pushing this system so far from equilibrium can so reliably result in planetary devastation.",
  "",
  "Now, what if one lineage of the primate Homo tried to do the exact same thing as those ancient volcanoes hundreds of millions of years ago?",
  "What if they immolated those same massive reservoirs of underground carbon – buried by photosynthetic life over all of Earth history – not by mindlessly exploding it all through the crust like a supervolcano but in a rather more mannered fashion, retrieving it from the deep and burning it all at the surface in a more diffuse eruption, in the pistons and forges of modernity . . . and at a rate ten times that of the ancient mass extinctions?",
  "That is the absurd question we now demand the planet answer for us.",
  "",
  "The climate is not responsive to political sloganeering; it is not accountable to economic models.",
  "It is accountable only to physics.",
  "It doesn’t know, or care, whether the excess CO2 in the atmosphere comes from a once-in-a-100-million-year volcanic event or from a once-in-the-history-of-life industrial civilization.",
  "It will react the same way.",
  "And we have in the rocks an unmistakable warning – a fossil record littered with the tombstones of ancient apocalypses.",
  "The good news is that we’re still a long way from matching the gruesome crescendos of those cataclysms past.",
  "And it could even be the case that the planet is more resilient to carbon cycle shocks today than in those very bad old days.",
  "There is no reason we need to etch our names on this ignominious roster of the worst events ever in Earth history.",
  "But if the rocks tell us anything, it is that we are pulling the most powerful levers of the Earth system.",
  "And we pull them at our peril.",
  "",
  "This is an unlikely, miraculous world we live on, and one that we recklessly take for granted."
],
translation: [ 
  "1.2 Sejarah Panjang Karbon Dioksida",
  "",
  "Peter Brannen",
  "",
  "- - -",
  "",
  "Segala kehidupan disulap dari CO2.",
  "Ini adalah trik sulap orisinal, yang menjadi asal muasal segala hal lain di dunia kehidupan.",
  "Di permukaan Bumi, hanya dengan sinar matahari dan air, ia diubah menjadi materi hidup melalui fotosintesis, meninggalkan jejak berupa oksigen.",
  "Karbon tumbuhan ini kemudian mengalir melalui tubuh hewan dan ekosistem, lalu kembali ke lautan dan udara sebagai CO2.",
  "Namun, sebagian karbon ini lolos dari perputaran dunia permukaan dan masuk ke dalam Bumi—sebagai batu kapur, atau sebagai lumpur kaya karbon, terlelap jauh di dalam kerak planet selama ratusan juta tahun.",
  "Jika tidak terkubur, materi tumbuhan ini dengan cepat terbakar di permukaan Bumi dalam api metabolisme, oleh hewan, jamur, dan bakteri.",
  "Dengan cara ini, kehidupan menghabiskan 99,99 persen oksigen yang dihasilkan oleh fotosintesis—dan akan menghabiskan semuanya, jika bukan karena kebocoran sekelumit materi tumbuhan ke dalam bebatuan.",
  "Namun, dari kebocoran ke dalam bebatuan inilah planet ini dianugerahi kelebihan oksigen yang ganjil.",
  "Dengan kata lain, atmosfer Bumi yang bisa dihirup bukanlah warisan dari hutan dan pusaran plankton yang hidup saat ini, melainkan dari CO2 yang ditangkap oleh kehidupan sepanjang sejarah planet kita dan diserahkan ke kerak Bumi sebagai bahan bakar fosil.",
  "",
  "Jika ini adalah akhir kisahnya, dan CO2 hanyalah substrat mendasar dari semua makhluk hidup di Bumi serta sumber tidak langsung dari oksigen penopang kehidupan, itu saja sudah cukup menarik.",
  "Namun, kebetulan molekul yang tampak sederhana ini juga secara kritis mengatur suhu seluruh planet dan kimia seluruh lautan.",
  "Ketika kimia karbon ini kacau, dunia kehidupan menjadi terdistorsi, termostat rusak, lautan menjadi asam, dan makhluk hidup mati.",
  "Pentingnya karbon dioksida yang luar biasa bagi setiap komponen sistem Bumi inilah yang membuatnya bukan sekadar polutan industri pengganggu yang perlu diatur, seperti klorofluorokarbon atau timbal.",
  "Sebaliknya, seperti yang ditulis oleh oseanografer Roger Revelle pada tahun 1985, ia adalah 'zat terpenting di biosfer'.",
  "",
  "Zat terpenting di biosfer bukanlah sesuatu yang boleh diperlakukan secara sembrono.",
  "Pergerakan CO2—saat ia mengepul dari gunung berapi, berbaur ke udara dan lautan, berputar melalui pusaran kehidupan, dan meresap kembali ke dalam bebatuan—adalah hal yang menjadikan Bumi sebagai Bumi.",
  "Ini disebut siklus karbon, dan kehidupan di Bumi sangat bergantung pada siklus global ini untuk menjaga keseimbangan yang rapuh, namun dinamis.",
  "Sementara CO2 senantiasa keluar dari gunung berapi (dengan laju seperseratus dari emisi manusia) dan organisme hidup mempertukarkannya dalam hiruk-pikuk tanpa henti di permukaan Bumi, planet ini pada saat yang sama terus-menerus membersihkannya dari sistem, mencegah bencana iklim.",
  "Umpan balik yang menyerap CO2—dari erosi seluruh pegunungan hingga tenggelamnya badai plankton kaya karbon ke dasar laut—berfungsi menjaga semacam kesetimbangan planet.",
  "Hampir setiap waktu.",
  "Ini adalah dunia yang tak terduga dan ajaib tempat kita tinggal, dan dunia yang dengan gegabah kita anggap remeh.",
  "",
  "Namun, terkadang dalam catatan geologi, planet ini telah didorong melampaui ambang batas.",
  "Sistem Bumi bisa melentur, tetapi juga bisa patah.",
  "Dan terkadang—dalam episode yang sangat langka dan sangat dahsyat yang terkubur jauh dalam sejarah Bumi—siklus karbon benar-benar kewalahan, hancur, dan berputar di luar kendali.",
  "Dan konsekuensi pastinya adalah kepunahan massal.",
  "",
  "Apa yang akan terjadi jika, katakanlah, gunung berapi skala benua, yang membakar kerajaan batu kapur kaya karbon dan menyulut deposit batu bara serta gas alam raksasa di bawah tanah, menyuntikkan ribuan gigaton CO2 ke udara—dari kaldera yang meledak dan dari hamparan lava basal yang membara dan berasap?",
  "Inilah kesulitan yang dihadapi makhluk-makhluk malang yang hidup 251,9 juta tahun lalu, pada saat-saat sebelum kepunahan massal terbesar dalam sejarah kehidupan di Bumi.",
  "Pada akhir periode Permian, 90 persen kehidupan ini harus menanggung akibat fatal dari siklus karbon yang benar-benar kacau akibat terlalu banyak karbon dioksida.",
  "",
  "Dalam kepunahan massal Akhir Permian, karbon dioksida menyembur keluar dari gunung berapi Siberia selama ribuan tahun dan hampir mengakhiri proyek kehidupan kompleks.",
  "Semua pengaman normal dalam siklus karbon runtuh dan gagal dalam peristiwa ini, momen terburuk tunggal dalam seluruh catatan geologi.",
  "Suhu melonjak hingga 10°C, planet ini terguncang oleh lautan yang panas mematikan dan semakin asam, yang berdenyut dengan ledakan lendir alga yang mengerikan, merampas oksigen dari perairan purba tersebut.",
  "Lautan anoksik ini justru dipenuhi hidrogen sulfida beracun saat badai menderu di atasnya, dengan intensitas yang tidak wajar.",
  "Setelah itu, ketika demam akhirnya mereda, seseorang bisa berkeliling dunia tanpa melihat satu pun pohon, terumbu karang dunia telah digantikan oleh lendir bakteri, catatan fosil menjadi sunyi, dan planet ini membutuhkan waktu hampir 10 juta tahun untuk bangkit kembali dari kehancuran.",
  "Terima kasih, sebagian besar, pada pembakaran bahan bakar fosil.",
  "",
  "Setiap kepunahan massal dalam sejarah Bumi juga ditandai dengan gangguan besar pada siklus karbon global, yang sinyal-sinyalnya telah diungkap dari bebatuan oleh para ahli geokimia.",
  "Mengingat pentingnya peran sentral CO2 bagi biosfer, mungkin kita tidak perlu terkejut mendapati bahwa mendorong sistem ini begitu jauh dari kesetimbangan dapat secara pasti mengakibatkan kehancuran planet.",
  "",
  "Sekarang, bagaimana jika satu garis keturunan primata Homo mencoba melakukan hal yang persis sama seperti gunung berapi purba ratusan juta tahun yang lalu itu?",
  "Bagaimana jika mereka membakar cadangan karbon bawah tanah raksasa yang sama itu—yang dikubur oleh kehidupan fotosintetik sepanjang sejarah Bumi—bukan dengan meledakkan semuanya secara membabi buta melalui kerak bumi seperti supervulkan, melainkan dengan cara yang lebih beradab, mengambilnya dari kedalaman dan membakar semuanya di permukaan dalam letusan yang lebih tersebar, di dalam piston dan tungku modernitas... dan dengan laju sepuluh kali lipat dari kepunahan massal purba?",
  "Itulah pertanyaan absurd yang kini kita tuntut agar dijawab oleh planet ini untuk kita.",
  "",
  "Iklim tidak responsif terhadap slogan politik; ia tidak bertanggung jawab kepada model ekonomi.",
  "Ia hanya bertanggung jawab kepada fisika.",
  "Ia tidak tahu, atau peduli, apakah kelebihan CO2 di atmosfer berasal dari peristiwa vulkanik sekali dalam 100 juta tahun atau dari peradaban industri yang hanya ada sekali dalam sejarah kehidupan.",
  "Ia akan bereaksi dengan cara yang sama.",
  "Dan di dalam bebatuan, kita memiliki peringatan yang tak terbantahkan—catatan fosil yang berserakan dengan batu nisan dari kiamat purba.",
  "Kabar baiknya adalah kita masih jauh dari menyamai puncak mengerikan dari bencana-bencana masa lalu itu.",
  "Dan bahkan mungkin saja planet ini lebih tangguh terhadap guncangan siklus karbon saat ini dibandingkan pada masa-masa kelam di masa lalu.",
  "Tidak ada alasan bagi kita untuk mengukir nama kita dalam daftar memalukan peristiwa terburuk dalam sejarah Bumi ini.",
  "Namun, jika bebatuan memberi tahu kita sesuatu, itu adalah bahwa kita sedang menarik tuas paling kuat dari sistem Bumi.",
  "Dan kita menariknya dengan risiko yang kita tanggung sendiri.",
  "",
  "Ini adalah dunia yang tak terduga dan ajaib tempat kita tinggal, dan dunia yang dengan gegabah kita anggap remeh."            
]
        },
{
            title: "1.3 Our Evolutionary Impact",
            type: 'sub-article',
            original: [ 
  "1.3 Our Evolutionary Impact",
  "",
  "Beth Shapiro",
  "",
  "- - -",
  "",
  "The earliest evidence of humans as an evolutionary force comes from the fossil remains recovered at the earliest sites of human occupation on the planet’s continents and islands.",
  "As people dispersed out of Africa more than 50,000 years ago and spread around the globe, the communities they joined began to change.",
  "Animal species, and particularly megafauna, including giant wombats, woolly rhinoceroses and giant sloths, started to go extinct.",
  "Our ancestors were efficient predators armed with uniquely human technologies – tools that improved the chance of a successful hunt and an ability to communicate and quickly refine these tools.",
  "The coincidence in timing of the megafaunal extinctions and the first appearance of people is recorded in the fossil records of every continent other than Africa.",
  "But coincidence does not necessarily prove causality.",
  "In Europe, Asia and the Americas, human arrival and the extinctions of local megafauna occurred during periods of climatic upheaval, leading to decades of debate about the relative culpability of these two forces in causing the megafaunal extinctions.",
  "Proof of our culpability comes, however, from Australia, where the earliest extinctions tied to humans are recorded, and from islands, where some of the most recent human-caused extinctions – the moa of Aotearoa (New Zealand) and the Mauritian dodo both became extinct within the last several hundred years – have taken place.",
  "The Australian and more recent island extinctions did not occur during periods of major climate change, and neither are extinctions recorded during more ancient climate events.",
  "Instead, these extinctions, like those on other continents, are the consequence of changes to the local habitat brought about by the appearance of people.",
  "In our earliest phase of interacting with wildlife, we had already begun to determine other species’ evolutionary fate.",
  "",
  "By 15,000 years ago, humans had entered a new phase of interactions with other species.",
  "Grey wolves that had been attracted to human settlements as sources of food had transformed into domestic dogs, and both dogs and humans were benefitting from their increasingly close relationship.",
  "The last ice age ended and the climate improved, and expanding human settlements demanded reliable sources of food, clothing and shelter.",
  "Around 10,000 years ago, people began to adopt hunting strategies that sustained prey populations rather than driving them towards extinction.",
  "Some hunters took only males or non-reproductive females, and later started to corral prey species and keep them close to their settlements.",
  "Soon, people began to choose which animals would be the parents to the next generation, and those animals that could not be tamed were taken for food.",
  "Their experiments were not limited to animals.",
  "They also planted seeds, choosing to propagate those that produced more food per plant or were ripe for harvest at the same time as others.",
  "They created irrigation networks and trained animals to clear land for farms.",
  "As our ancestors transitioned from hunters to herders and from gatherers to farmers, they transformed the land on which they lived and the species on which they increasingly relied.",
  "",
  "By the turn of the twentieth century, the successes of our ancestors as herders and farmers were threatening the stability of the societies that they created.",
  "Wildlands had been replaced by farmland or rangeland and degraded by continuous use.",
  "Air and water quality had begun to decline.",
  "Extinction rates were again on the rise.",
  "This time, however, the devastation was more obvious, people were wealthier and technology was more advanced.",
  "As once-widespread species became scarce, an appetite emerged to protect what wild species and spaces remained.",
  "Our ancestors once again entered a new phase of interactions with other species: they became protectors, guarding endangered species and habitats from the dangers of the natural and increasingly human world.",
  "With this transition, humans became the evolutionary force that would decide the fate of every species, as well as the habitats in which these species live.",
  "",
  "We are the evolutionary force that will decide the fate of every species, as well as the habitats in which those species live."
],
translation: [ 
  "1.3 Dampak Evolusioner Kita",
  "",
  "Beth Shapiro",
  "",
  "- - -",
  "",
  "Bukti paling awal mengenai manusia sebagai kekuatan evolusioner berasal dari sisa-sisa fosil yang ditemukan di situs-situs hunian manusia tertua di benua dan pulau di planet ini.",
  "Saat manusia menyebar keluar dari Afrika lebih dari 50.000 tahun yang lalu dan meluas ke seluruh dunia, komunitas yang mereka masuki mulai berubah.",
  "Spesies hewan, dan khususnya megafauna, termasuk wombat raksasa, badak berbulu wol, dan kungkang raksasa, mulai punah.",
  "Nenek moyang kita adalah predator efisien yang berbekal teknologi khas manusia—perkakas yang meningkatkan peluang keberhasilan berburu serta kemampuan untuk berkomunikasi dan menyempurnakan perkakas tersebut dengan cepat.",
  "Kesamaan waktu antara kepunahan megafauna dan kemunculan pertama manusia terekam dalam catatan fosil di setiap benua selain Afrika.",
  "Namun, kesamaan waktu tidak serta-merta membuktikan adanya hubungan sebab-akibat.",
  "Di Eropa, Asia, dan Amerika, kedatangan manusia dan kepunahan megafauna lokal terjadi selama periode pergolakan iklim, yang memicu perdebatan selama beberapa dekade mengenai seberapa besar andil kedua kekuatan ini dalam menyebabkan kepunahan megafauna tersebut.",
  "Namun, bukti andil kita berasal dari Australia, tempat tercatatnya kepunahan paling awal yang dikaitkan dengan manusia, dan dari pulau-pulau, tempat terjadinya beberapa kepunahan paling baru akibat ulah manusia—moa dari Aotearoa (Selandia Baru) dan dodo Mauritius keduanya punah dalam beberapa ratus tahun terakhir.",
  "Kepunahan di Australia dan kepunahan di pulau-pulau yang lebih baru tidak terjadi selama periode perubahan iklim besar, dan kepunahan juga tidak tercatat selama peristiwa iklim yang lebih kuno.",
  "Sebaliknya, kepunahan ini, seperti halnya di benua lain, merupakan konsekuensi dari perubahan habitat lokal yang disebabkan oleh kemunculan manusia.",
  "Pada fase paling awal interaksi kita dengan satwa liar, kita sudah mulai menentukan nasib evolusioner spesies lain.",
  "",
  "Menjelang 15.000 tahun yang lalu, manusia telah memasuki fase baru interaksi dengan spesies lain.",
  "Serigala abu-abu yang tertarik ke pemukiman manusia sebagai sumber makanan telah bertransformasi menjadi anjing domestik, dan baik anjing maupun manusia mendapat manfaat dari hubungan mereka yang kian erat.",
  "Zaman es terakhir berakhir dan iklim membaik, serta pemukiman manusia yang meluas menuntut sumber makanan, pakaian, dan tempat berlindung yang dapat diandalkan.",
  "Sekitar 10.000 tahun yang lalu, manusia mulai menerapkan strategi berburu yang mempertahankan populasi mangsa alih-alih mendorong mereka menuju kepunahan.",
  "Beberapa pemburu hanya mengambil pejantan atau betina yang tidak produktif, dan kemudian mulai mengurung spesies mangsa serta menempatkan mereka dekat dengan pemukiman.",
  "Segera, manusia mulai memilih hewan mana yang akan menjadi induk bagi generasi berikutnya, dan hewan-hewan yang tidak bisa dijinakkan diambil untuk dijadikan makanan.",
  "Eksperimen mereka tidak terbatas pada hewan.",
  "Mereka juga menanam benih, memilih untuk memperbanyak tanaman yang menghasilkan lebih banyak pangan per tanaman atau yang matang untuk dipanen pada waktu yang bersamaan dengan yang lain.",
  "Mereka membuat jaringan irigasi dan melatih hewan untuk membuka lahan pertanian.",
  "Saat nenek moyang kita beralih dari pemburu menjadi penggembala dan dari pengumpul menjadi petani, mereka mengubah lahan tempat mereka tinggal dan spesies yang kian mereka andalkan.",
  "",
  "Menjelang pergantian abad kedua puluh, keberhasilan nenek moyang kita sebagai penggembala dan petani mengancam stabilitas masyarakat yang mereka ciptakan.",
  "Alam liar telah digantikan oleh lahan pertanian atau padang penggembalaan dan terdegradasi akibat penggunaan terus-menerus.",
  "Kualitas udara dan air mulai menurun.",
  "Laju kepunahan kembali meningkat.",
  "Namun kali ini, kerusakan tersebut lebih nyata, masyarakat lebih makmur, dan teknologi lebih maju.",
  "Ketika spesies yang dulunya tersebar luas menjadi langka, muncul keinginan untuk melindungi spesies dan ruang liar yang tersisa.",
  "Nenek moyang kita sekali lagi memasuki fase baru interaksi dengan spesies lain: mereka menjadi pelindung, menjaga spesies dan habitat yang terancam punah dari bahaya alam dan dunia yang semakin didominasi manusia.",
  "Dengan transisi ini, manusia menjadi kekuatan evolusioner yang akan menentukan nasib setiap spesies, serta habitat tempat spesies tersebut hidup.",
  "",
  "Kita adalah kekuatan evolusioner yang akan menentukan nasib setiap spesies, serta habitat tempat spesies tersebut hidup."            
]
        },
{
            title: "1.4 Civilization and Extinction",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "1.5 ‘The science is as solid as it gets’ / Greta Thunberg",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "1.6 The Discovery of Climate Change",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "1.7 Why Didn’t They Act?",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "1.8 Tipping Points and Feedback Loops",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "1.9 ‘This is the biggest story in the world’ / Greta Thunberg",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "PART TWO: How Our Planet Is Changing",
            original: [ 
                    
             ],
            translation: [
                
            ]
        },
{
            title: "2.1 ‘The weather seems to be on steroids’ / Greta Thunberg",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.2 Heat",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.3 Methane and Other Gases",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.4 Air Pollution and Aerosols",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.5 Clouds",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.6 Arctic Warming and the Jet Stream",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.7 Dangerous Weather",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.8 ‘The snowball has been set in motion’ / Greta Thunberg",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.9 Droughts and Floods",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.10  Ice Sheets, Shelves and Glaciers",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.11 Warming Oceans and Rising Seas",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.12  Acidification and Marine Ecosystems",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.13 Microplastics",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.14 Fresh Water",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.15 ‘It is much closer to home than we think’ / Greta Thunberg",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.16 Wildfires",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.17 The Amazon",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.18 Boreal and Temperate Forests",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.19 Terrestrial Biodiversity",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.20 Insects",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.21 Nature’s Calendar",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.22 Soil",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.23 Permafrost",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "2.24 What Happens at 1.5, 2 and 4°C of Warming?",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "PART THREE: How It Affects Us",
            original: [ 
                    
             ],
            translation: [
                
            ]
        },
{
            title: "3.1 ‘The world has a fever’ / Greta Thunberg",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.2 Health and Climate",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.3 Heat and Illness",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.4 Air Pollution",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.5 Vector-borne Diseases",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.6 Antibiotic Resistance",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.7 Food and Nutrition",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.8 ‘We are not all in the same boat’ / Greta Thunberg",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.9 Life at 1.1°C",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.10 Environmental Racism",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.11 Climate Refugees",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.12 Sea-level Rise and Small Islands",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.13 Rain in the Sahel",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.14 Winter in Sápmi",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.15 Fighting for the Forest",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.16 ‘Enormous challenges are waiting’ / Greta Thunberg",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.17 Warming and Inequality",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.18 Water Shortages",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.19 Climate Conflicts",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        },
{
            title: "3.20 The True Cost of Climate Change",
            type: 'sub-article',
            original: [
              ], 
            translation: [
             ]
        }


    ];

    // ================================================================
    // ================= LOGIKA UTAMA (SAMA SEPERTI SEBELUMNYA) =======
    // ================================================================
    
    // --- ELEMEN HTML ---
    const articlesContainer = document.getElementById('articles-container');
    const popup = document.getElementById('translation-popup');
    const fontAdjusterToggle = document.getElementById('font-adjuster-toggle');
    const fontAdjusterContainer = document.getElementById('font-adjuster-container');
    const fontSizeSlider = document.getElementById('font-size-slider');
    
    const vocabToggleButton = document.getElementById('vocab-toggle-button');
    const vocabSidebar = document.getElementById('vocab-sidebar');
    const vocabList = document.getElementById('vocab-list');
    const clearVocabButton = document.getElementById('clear-vocab-button');

    const imagePreviewOverlay = document.getElementById('image-preview-overlay');
    const previewImage = document.getElementById('preview-image');
    const previewCloseButton = document.getElementById('preview-close-button');
    const zoomInButton = document.getElementById('zoom-in-button');
    const zoomOutButton = document.getElementById('zoom-out-button');
    const zoomResetButton = document.getElementById('zoom-reset-button');

    // STATE
    const savedFontSize = localStorage.getItem('fontSize') || '3';
    const savedActiveArticles = JSON.parse(localStorage.getItem('activeArticles')) || [];
    let vocabulary = JSON.parse(localStorage.getItem('vocabulary')) || [];

    let currentScale = 1;
    let translateX = 0;
    let translateY = 0;
    let isPanning = false;
    let panStartX, panStartY;
    let currentlySelectedSegment = null;

    function applyFontSize(size) {
        for (let i = 1; i <= 5; i++) articlesContainer.classList.remove(`font-size-${i}`);
        articlesContainer.classList.add(`font-size-${size}`);
        fontSizeSlider.value = size;
    }
    applyFontSize(savedFontSize);

    // RENDER LOGIC
    articlesData.forEach((articleData, articleIndex) => {
        const articleContainerEl = document.createElement('div');
        articleContainerEl.className = articleData.type === 'sub-article' ? 'article-container sub-article-container' : 'article-container';
        articleContainerEl.dataset.articleIndex = articleIndex; 

        if (savedActiveArticles.includes(articleIndex)) {
            articleContainerEl.classList.add('active');
        }

        const articleHeader = document.createElement('div');
        articleHeader.className = 'article-header';
        articleHeader.innerHTML = `<h3 class="text-white">${articleData.title}</h3><div class="collapse-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></div>`;

        const articleContent = document.createElement('div');
        articleContent.className = 'article-content';
        const contentInner = document.createElement('div');
        contentInner.className = 'article-content-inner';
        const textContainer = document.createElement('div');
        textContainer.className = 'text-lg leading-relaxed'; 
        
        const createParagraph = (contentArray) => { 
            if (contentArray.length === 0) return;
            const p = document.createElement('p');
            contentArray.forEach(item => {
                const span = document.createElement('span');
                span.textContent = item.text;
                span.dataset.articleIndex = item.articleIndex;
                span.dataset.segmentIndex = item.segmentIndex;
                span.classList.add('original-text-segment');
                if (item.style === 'italic') span.classList.add('italic');
                p.appendChild(span);
                p.append(' ');
            });
            textContainer.appendChild(p);
        };
        let paragraphContent = [];
        articleData.original.forEach((segment, segmentIndex) => {
            if (typeof segment === 'object' && segment !== null) {
                if (segment.type === 'image') {
                    createParagraph(paragraphContent);
                    paragraphContent = [];
                    const img = document.createElement('img');
                    img.src = segment.src;
                    img.alt = segment.alt || 'Gambar dalam artikel';
                    img.className = 'w-full h-auto rounded shadow-lg my-6 border border-slate-700 cursor-zoom-in'; 
                    
                    img.addEventListener('click', () => {
                        previewImage.src = img.src;
                        resetImageTransform();
                        imagePreviewOverlay.style.display = 'flex'; 
                        setTimeout(() => { imagePreviewOverlay.classList.add('visible'); }, 10); 
                    });

                    textContainer.appendChild(img);
                } else if (segment.text) {
                    paragraphContent.push({ text: segment.text, style: segment.style || 'normal', articleIndex: articleIndex, segmentIndex: segmentIndex });
                }
            } else if (segment === "") {
                createParagraph(paragraphContent);
                paragraphContent = [];
            } else if (typeof segment === 'string' && segment.length > 0) {
                paragraphContent.push({ text: segment, style: 'normal', articleIndex: articleIndex, segmentIndex: segmentIndex });
            }
        });
        createParagraph(paragraphContent);

        contentInner.appendChild(textContainer);
        articleContent.appendChild(contentInner);
        
        articleContainerEl.appendChild(articleHeader);
        articleContainerEl.appendChild(articleContent);
        articlesContainer.appendChild(articleContainerEl);

        articleHeader.addEventListener('click', () => { 
            const isActive = articleContainerEl.classList.toggle('active');
            const currentActive = JSON.parse(localStorage.getItem('activeArticles')) || [];
            if (isActive) {
                if (!currentActive.includes(articleIndex)) currentActive.push(articleIndex);
            } else {
                const indexToRemove = currentActive.indexOf(articleIndex);
                if (indexToRemove > -1) currentActive.splice(indexToRemove, 1);
            }
            localStorage.setItem('activeArticles', JSON.stringify(currentActive));
            
            hidePopup();
            const previouslySelected = document.querySelector('.selected-text');
            if (previouslySelected) previouslySelected.classList.remove('selected-text');
        });
        
        articleContent.addEventListener('scroll', () => {
            if (currentlySelectedSegment && popup.classList.contains('visible')) {
                const scrollingArticleIndex = articleContent.parentElement.dataset.articleIndex;
                if (currentlySelectedSegment.dataset.articleIndex === scrollingArticleIndex) {
                    const rect = currentlySelectedSegment.getBoundingClientRect();
                    popup.style.top = `${window.scrollY + rect.bottom}px`;
                    popup.style.left = `${window.scrollX + rect.left}px`;
                }
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.article-container').forEach(articleEl => observer.observe(articleEl));

    // IMAGE PREVIEW FUNC
    function applyImageTransform() {
        previewImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
        if (currentScale > 1) previewImage.classList.add('pannable');
        else previewImage.classList.remove('pannable');
    }
    function resetImageTransform() {
        currentScale = 1; translateX = 0; translateY = 0; applyImageTransform();
    }
    function closeImagePreview() {
        imagePreviewOverlay.classList.remove('visible');
        setTimeout(() => { imagePreviewOverlay.style.display = 'none'; }, 300);
    }

    // POPUP LOGIC
    function showPopup(target) {
        const articleIndex = target.dataset.articleIndex;
        const segmentIndex = target.dataset.segmentIndex;
        let originalSegment = articlesData[articleIndex].original[segmentIndex];
        let translationSegment = articlesData[articleIndex].translation[segmentIndex];
        
        if (typeof originalSegment === 'object') originalSegment = originalSegment.text;
        if (typeof translationSegment === 'object') translationSegment = translationSegment.text;

        if (!translationSegment) { hidePopup(); return; }

        const isAlreadyAdded = vocabulary.some(item => item.original === originalSegment);
        const addedClass = isAlreadyAdded ? 'added' : '';
        // Icon SVG: Plus vs Check
        const buttonContent = isAlreadyAdded ? 
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>' : 
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';

        popup.innerHTML = `
            <span>${translationSegment}</span>
            <button class="add-vocab-btn ${addedClass}" title="Bookmark" data-original="${originalSegment}" data-translation="${translationSegment}" data-article-index="${articleIndex}" data-segment-index="${segmentIndex}">
                ${buttonContent}
            </button>
        `;
        
        const rect = target.getBoundingClientRect();
        popup.style.top = `${window.scrollY + rect.bottom}px`;
        popup.style.left = `${window.scrollX + rect.left}px`;
        popup.classList.add('visible');
        currentlySelectedSegment = target;
    }

    function hidePopup() {
        popup.classList.remove('visible');
        currentlySelectedSegment = null;
    }
    
    function renderVocabulary() {
        vocabList.innerHTML = ''; 
        if (vocabulary.length === 0) {
            vocabList.innerHTML = '<li class="empty-vocab-message">No bookmarks saved yet.</li>';
            return;
        }
        vocabulary.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'vocab-item';
            listItem.dataset.articleIndex = item.articleIndex;
            listItem.dataset.vocabIndex = index;
            listItem.dataset.segmentIndex = item.segmentIndex;
            listItem.innerHTML = `
                <div class="vocab-item-original">${item.original}</div>
                <div class="vocab-item-translation">${item.translation}</div>
                <div class="vocab-item-source">SOURCE: ${item.title}</div>
                <button class="delete-vocab-btn" title="Remove">&times;</button>
            `;
            vocabList.appendChild(listItem);
        });
    }

    function addVocabulary(original, translation, articleIndex, segmentIndex) {
        if (vocabulary.some(item => item.original === original)) return;
        vocabulary.unshift({
            original: original, translation: translation, title: articlesData[articleIndex].title,
            articleIndex: articleIndex, segmentIndex: segmentIndex
        });
        localStorage.setItem('vocabulary', JSON.stringify(vocabulary));
        renderVocabulary();
    }
    
    function removeVocabulary(originalText) {
        const indexToRemove = vocabulary.findIndex(item => item.original === originalText);
        if (indexToRemove > -1) {
            vocabulary.splice(indexToRemove, 1);
            localStorage.setItem('vocabulary', JSON.stringify(vocabulary));
            renderVocabulary();
        }
    }
    renderVocabulary();

    // LISTENERS
    articlesContainer.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('original-text-segment')) {
            const previouslySelected = document.querySelector('.selected-text');
            if (previouslySelected) previouslySelected.classList.remove('selected-text');
            if (previouslySelected === target) { hidePopup(); return; }
            target.classList.add('selected-text');
            showPopup(target);
        }
    });
    
    popup.addEventListener('click', function(event){
        const target = event.target.closest('.add-vocab-btn');
        if(target) {
            const originalText = target.dataset.original;
            if (target.classList.contains('added')) {
                if (confirm('Remove bookmark?')) {
                    removeVocabulary(originalText);
                    target.classList.remove('added');
                    target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';
                }
            } else {
                addVocabulary(originalText, target.dataset.translation, target.dataset.articleIndex, target.dataset.segmentIndex);
                target.classList.add('added');
                target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            }
        }
    });

    vocabList.addEventListener('click', (event) => {
        const target = event.target;
        const vocabItem = target.closest('.vocab-item');
        if (!vocabItem) return;

        if (target.classList.contains('delete-vocab-btn')) {
            const vocabIndex = parseInt(vocabItem.dataset.vocabIndex);
            vocabulary.splice(vocabIndex, 1);
            localStorage.setItem('vocabulary', JSON.stringify(vocabulary));
            renderVocabulary();
        } else {
            const articleIndex = vocabItem.dataset.articleIndex;
            const segmentIndex = vocabItem.dataset.segmentIndex;
            const targetArticle = document.querySelector(`.article-container[data-article-index="${articleIndex}"]`);
            if (targetArticle) {
                if (!targetArticle.classList.contains('active')) {
                    targetArticle.classList.add('active');
                    const currentActive = JSON.parse(localStorage.getItem('activeArticles')) || [];
                    const numericArticleIndex = parseInt(articleIndex);
                    if (!currentActive.includes(numericArticleIndex)) {
                        currentActive.push(numericArticleIndex);
                        localStorage.setItem('activeArticles', JSON.stringify(currentActive));
                    }
                }
                setTimeout(() => {
                    const targetSegment = targetArticle.querySelector(`.original-text-segment[data-segment-index="${segmentIndex}"]`);
                    if (targetSegment) {
                        targetSegment.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        targetSegment.classList.add('bookmark-highlight');
                        setTimeout(() => { targetSegment.classList.remove('bookmark-highlight'); }, 2400); 
                    }
                }, 300);
            }
            vocabSidebar.classList.remove('visible');
        }
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.article-container') && !event.target.closest('#translation-popup')) {
             hidePopup();
             const previouslySelected = document.querySelector('.selected-text');
             if (previouslySelected) previouslySelected.classList.remove('selected-text');
        }
        if (!event.target.closest('#font-adjuster-container') && !event.target.closest('#font-adjuster-toggle')) {
            fontAdjusterContainer.classList.remove('visible');
        }
        if (!event.target.closest('#vocab-sidebar') && !event.target.closest('#vocab-toggle-button')) {
            vocabSidebar.classList.remove('visible');
        }
    });

    const progressBar = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        progressBar.style.width = `${(scrollTop / scrollHeight) * 100}%`;
    });

    fontAdjusterToggle.addEventListener('click', () => fontAdjusterContainer.classList.toggle('visible'));
    fontSizeSlider.addEventListener('input', (e) => {
        applyFontSize(e.target.value);
        localStorage.setItem('fontSize', e.target.value);
    });

    vocabToggleButton.addEventListener('click', () => vocabSidebar.classList.toggle('visible'));
    clearVocabButton.addEventListener('click', () => { 
        if (confirm('Delete all bookmarks?')) {
            vocabulary = [];
            localStorage.removeItem('vocabulary');
            renderVocabulary();
        }
     });

    previewCloseButton.addEventListener('click', closeImagePreview);
    zoomInButton.addEventListener('click', () => { currentScale += 0.2; applyImageTransform(); });
    zoomOutButton.addEventListener('click', () => { if (currentScale > 0.3) { currentScale -= 0.2; applyImageTransform(); } });
    zoomResetButton.addEventListener('click', resetImageTransform);

    previewImage.addEventListener('mousedown', (e) => {
        if (currentScale > 1) {
            e.preventDefault();
            isPanning = true;
            panStartX = e.clientX - translateX;
            panStartY = e.clientY - translateY;
            previewImage.classList.add('panning');
        }
    });

    window.addEventListener('mouseup', () => { isPanning = false; previewImage.classList.remove('panning'); });
    window.addEventListener('mousemove', (e) => {
        if (isPanning) {
            translateX = e.clientX - panStartX;
            translateY = e.clientY - panStartY;
            applyImageTransform();
        }
    });

    imagePreviewOverlay.addEventListener('click', (event) => {
        if (event.target === imagePreviewOverlay) closeImagePreview();
    });
});