export const about = {
  name     : "Tinnaphat Somsang",
  nick     : "Tin",
  dob      : 1226282400000,
  age      : new Date(new Date().getTime() - 1226282400000).getFullYear() - 1970,
  aka      : "Tinarskii",
  loc      : "Samutprakarn, Thailand",
  height   : "180 cm", // 179 to be exact but ok
  weight   : "86 kg",
  blood    : "B",
  disease  : "None",
  status   : "Single",
  religion : "พระบาทสมเด็จพระบรมชนกาธิเบศรมหาภูมิพลอดุลยเดชมหาราชบรมนาถบพิตร",
  language : "Thai (Native), English (Fluent), Chinese (Intermediate)",
  jobs     : "Student",
}

export const contact = [
  "Github ",  "github.com/tinarskii",
  "Facebook ",  "facebook.com/tinarskii",
  "Twitter",  "twitter.com/tinarskii",
  "Twitch",  "twitch.tv/moldyy_Tin",
  "Youtube",  "youtube.com/tinarskii",
  "Steam",  "steamcommunity.com/id/tinarskii",
  "Reddit",  "reddit.com/u/tinarskii",
  "Medium",  "tinarskii.medium.com/#/tinarskii",
  "TikTok",  "tiktok.com/@tinarskii/#/tinarskii",
  "Instagram",  "instagram.com/t1.narskii",
  "Discord",  "tinyurl.com/tinarskii#2065",
  "Website",  "www.tinarskii.com",
  "Blog (Hashnode)",  "journey.tinarskii.com",
  "Email", "tinarskii@tinarskii.com",
  "Telephone",  "+66984176673",
]


export const education = [
  {
    name : "Assumption College Samutprakarn",
    level: "Primary School",
    grade: "3.92",
    prog : "Modern Language Program",
    grad : "April 9, 2021"
  },
  {
    name : "Assumption College Samutprakarn",
    level: "Secondary School",
    grade: "3.88 (Secondary 1)",
    prog : "i-Science (ACSP GEMS Project: i-Classroom)",
    cert : [
      { desc: "Semester 1", path: "/ed/m1t1.png" },
      { desc: "Semester 2", path: "/ed/m1t2.jpg" },
      { desc: "Semester 3", path: "/ed/m2t1.jpeg" },
    ],
  },
]

export const events = [
  {
    name : "Code In The Wind",
    org  : "showdown.space",
    roles: "Participant",
    info : "Game show where contestants implement a web page according to the reference screenshot and a set of objectives using Tailwind CSS",
    award: "(None)",
    links: "https://www.twitch.tv/videos/1490280508",
    img  : "https://creatorsgarten.org/images/hacks/compressed/wind.webp"
  },
  {
    name : "Stupid Hackathon in Thailand 6",
    org  : "Creatorsgarten Thailand",
    roles: "Participant (Teams)",
    info : "The Stupid Hackathon in Thailand is a collaborative hackathon in Thailand with non-competitive intentions and no focuses on business value",
    award: "3rd MOST IMPRESSIVE TECHNOLOGY AWARD",
    links: "https://www.youtube.com/watch?v=4Ekgdku2pVY",
    img  : "https://creatorsgarten.org/images/hacks/compressed/sht6.webp"
  },
  {
    name : "Bkk.js Meetup #16",
    org  : "Creatorsgarten Thailand",
    roles: "Participant",
    info : "เพื่อเฉลิมฉลองเดือน บางกอกวิทยา ของกรุงเทพมหานคร กลัวมาแล้วกับ Bkk.js Meetup #16",
    award: "(NOT A COMPETITION)",
    links: "",
    img  : "https://p-u.popcdn.net/event_details/posters/000/013/479/large/715f8dc35b5366bf025ae729b7bae609701080d9.png?1660276121"
  },
  {
    name : "Code Golf Party #1",
    org  : "showdown.space and Creatorsgarten Thailand",
    roles: "Participant",
    info : "⛳️Code Golf เป็นกิจกรรมนันทนาการสำหรับโปรแกรมเมอร์ เป็นกิจกรรมที่มีโจทย์ปัญหามาให้เขียนโปรแกรมแก้ แล้วมาหาวิธีแก้ที่ใช้ซอร์ซโค้ดขนาดเล็กที่สุด",
    award: "(None)",
    links: "https://www.facebook.com/showdown.space/videos/589192172698870",
    img  : "https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/298664741_1752854085047490_3476851038825162428_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=340051&_nc_eui2=AeE9vooIoEeknJZ24mQ4WGgPyByTlg-7EDjIHJOWD7sQOKaDuEf8HitPJ1Bbak5HkZpwJfhPJVsQU-buMszGUsYA&_nc_ohc=8-xfXWNS5uUAX8peEMt&_nc_ht=scontent.fbkk8-2.fna&oh=00_AfAMv-2BL-dmVZWaN6hCAogrWB-FKH68h_aYSEK6m6SetA&oe=6368B476"
  },
  {
    name : "Hacktoberfest Thailand 2022",
    org  : "Creatorsgarten Thailand and Thinc.",
    roles: "Contributors",
    info : "We are hosting the Thailand chapter of the annual Hacktoberfest event, a global open-source contribution challenge held each year in October to introduce and incentivize people to contribute to open-source software.",
    award: "(NOT A COMPETITION)",
    links: "",
    img  : "https://miro.medium.com/max/828/1*0DQlVH0bYOGG_UEhrOMN0g.png"
  },
]

export const projects = [
  {
    name: "WrongLang Web Application",
    from: "Wrong-Lang",
    info: "The Thai Mutation Language To Normal Thai Language Global Translator",
    gh  : "github.com/wrong-lang/WrongLang",
    link: "www.wrong-lang.click",
    img : "/wl_cover.png",
    full: true
  },
  {
    name: "Spark",
    from: "Wrong-Lang",
    info: "Portable version of WrongLang, available now for Windows!",
    gh  : "github.com/wrong-lang/spark",
    link: "spark.wrong-lang.click",
    img : "/spark_cover.png",
    full: true
  },
  {
    name: "Sveltaily",
    from: "Mulforma",
    info: "Sveltekit and TailwindCSS boilerplate with tests and more!",
    gh  : "github.com/mulforma/Sveltaily",
    link: "",
    img : "/taily_cover.png",
    full: true
  },
  {
    name: "HardTail",
    from: "Mulforma",
    info: "SolidJS and TailwindCSS boilerplate with tests and more!",
    gh  : "github.com/mulforma/HardTail",
    link: "hard-tail.vercel.app",
    img : "/taily2_cover.png",
    full: true
  },
  {
    name: "Moore",
    from: "Mulforma",
    info: "A discord bot built with Discord.js with a lot of functionality!",
    gh  : "github.com/mulforma/zelar",
    link: "zelar.mulforma.space",
    img : "/moore_cover.png",
    full: true
  },
  {
    name: "XURLSH",
    from: "Mulforma",
    info: "The VVX URL Shortener, built with go",
    gh  : "github.com/mulforma/xurlsh",
    link: "x.vvx.bar",
    img : "/xurlsh_cover.png",
    full: true
  },
  {
    name: "LYNK::R (lynkr.lol)",
    from: "Mulforma",
    info: "It's a storage for your links, with a simple and clean UI, build with SolidJS",
    gh  : "github.com/mulforma/lynkr.lol",
    link: "lynkr.lol",
    img : "/lynkr_cover.png",
    full: true
  },
  {
    name: "Karma Soulbound",
    from: "de",
    info: "กรรม, but on blockchain (SHiT6 Project)",
    gh  : "github.com/karma-soulbound",
    link: "localhost:3000",
    img : "/de.png",
    full: true
  },
  {
    name: "Pong Fish",
    from: "Tinarskii",
    info: "Popcat, but it's a fish",
    gh  : "",
    link: "pong-fish.vercel.app",
    img : "/popfish.png",
    full: true
  },
  {
    name: "Muk Pak Pak",
    from: "Tinarskii",
    info: "Collections of Thai Jokes Website",
    gh  : "github.com/tinarskii/mukpakpak",
    link: "thjokes.tin-sci.me",
    img : "/mukquotes_cover.png",
    full: true
  },
  {
    name: "Awesome Curry Quotes",
    from: "Tinarskii",
    info: "Collections of awesome quotes from 🍛",
    gh  : "github.com/tinarskii/awesome-curry-quotes",
    link: "watacurry.vercel.app",
    img : "/watacurry_cover.png",
    full: true
  },
  {
    name: "SoundNep",
    from: "Tinarskii",
    info: "Soundboard but it's all neps",
    gh  : "github.com/tinarskii/soundnep",
    link: "soundnep.tin-sci.me",
    img : "/nep_cover.gif",
    full: true
  },
]

export const technology = {
  lang:      ["TypeScript", "JavaScript"],
  framework: ["Solid.js", "Svelte", "TailwindCSS"],
  ides:      ["IntelliJ IDEA", "WebStorm"],
  tools:     ["Git", "Fish", "Docker"],
  misc:      ["Microsoft Azure", "AWS", "Vercel", "Cloudflare", "Railway", "Supabase"]
}

export const interests = {
  subject: ["Computer Science", "Linguistics", "Chemistry"],
  games:   ["Counter-Strike: Global Offensive", "Neptunia Series", "Minecraft", "Blue Archive"],
  music:   ["Thai Rock"],
}

export const courses = [
  {
    name: "Introduction to Front-End Development",
    by  : "Meta",
    link: "https://coursera.org/verify/GTU6MQWYHHWS",
    img : "https://coursera-certificate-images.s3.amazonaws.com/GTU6MQWYHHWS"
  },
]

export const images = ["nsm.jpg", "m22.jpg", "labcom1.jpg", "stlouis.jpg"]

export const gallery = [
  {
    name: "Recent Photos",
    author: "Tinnaphat Somsang, Nakhun Pumjan, Nattawat Raksuravongsa, Jirayu Boonlerd",
    images: [...images],
  },
  {
    name: "The Original",
    author: "Ronnarit Kittikornsakul, Tinnaphat Somsang",
    images: [
      "tin.webp",
      "tpfz.webp",
      "gallery/origin1.jpg",
      "gallery/origin2.jpg",
      "https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/304629246_1446485132517586_7021277352103894060_n.png?stp=dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeGT3daDqc-mpZH830-9Z3xOsnDlgKxcqQ6ycOWArFypDk_8ss6vg6tW9a0f59_HwHS5Z00X2e8HLGy_he6orhx2&_nc_ohc=diQ2AP2QtLYAX_Qy5tZ&_nc_oc=AQnNEUNkaLFFO3dpFlLz_iiGhB187t2rUSUTciwEnTMjklphxPmALZNhYpKIrhhPDggM1dwBOIBdM1O9G99vZseG&_nc_ht=scontent.fbkk12-4.fna&oh=00_AfAWkZIxAZi_xI6Pwt9DJIXjmoYdB2QqAZQ02i_NyFNd2g&oe=63726E75",
      "https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/273050904_1304735593359208_7956063808445806478_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeHa8xv1gSN3iwG41MJucnq8Wwt-y9tP84VbC37L20_zhRSKWlM3K-Kjql2qr8XBPKmfhEvDgQLZGYP8rIWpXpfT&_nc_ohc=k4isA-HAGVsAX86qTV2&_nc_ht=scontent.fbkk13-1.fna&oh=00_AfD36QNxf5n2YcPgVqohvX2g6jG5Jd53dZsAwGvAxJ_2MQ&oe=6372686B",
      "https://scontent.fbkk9-2.fna.fbcdn.net/v/t39.30808-6/274376900_1318777361955031_1255361924462113776_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeFJBngTynRrXRCb7Xx1nYD0iKOGi2WpyzSIo4aLZanLNBMGjFyCjxYVVbPTHacVEyiMqy8lABIgfSn4qxZ_2hw_&_nc_ohc=wtG8cAU5Zb4AX-9jTE8&_nc_ht=scontent.fbkk9-2.fna&oh=00_AfBV_deHNzQ3AMKJgli6I8PntAvzJ4Y2tb9ah5nSnJRQmQ&oe=63732090",
    ]
  },
  {
    name: "NSM Book's Collection",
    author: "Nattapong Arun, Kathathorn Ruenpirom",
    images: [...[...Array(8)].map((_, i) => `gallery/e${i+1}.jpg`)]
  },
  {
    name: "13th September 2022",
    author: "Tinnaphat Somsang, Weerapat Sudjai",
    images: [...[...Array(50)].map((_, i) => `gallery/career (${i+1}).jpg`)]
  }
]