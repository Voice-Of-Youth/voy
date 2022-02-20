class User {
    constructor(fname, dname, password, email) {
        this.fullName = fname,
            this.userName = dname,
            this.password = password,
            this.email = email,
            this.list = {
                articles: [],
                following: [],
                followers: [],
            }
    }
}

const database = {
    readers: [
        new User("Nathnael Mekonnen", "nmktad", "ETS0523/12", "nmktadesse@gmail.com"),
        new User("Nathnael Shimelis", "Natishimex", "ETS0524/12", "Natishimex@gmail.com"),
        new User("Nahom Temam", "NahomTM", "ETS0499/12", "NahomTM@gmail.com"),
        new User("Mahlet Assbu", "massbu", "ETS0431/12", "massbu@gmail.com"),
        new User("Mahlet Tizazu", "Mahitz16", "ETS0430/12", "Mahitz16@gmail.com"),
        new User("Nathnael Menelik", "idonthaveausername2", "ETS0535/12", "idonthaveausername2@gmail.com"),
    ],

    writers: [
        new User("Nathnael Mekonnen", "nmktad", "ETS0523/12", "nmktadesse@gmail.com"),
        new User("Nathnael Shimelis", "Natishimex", "ETS0524/12", "Natishimex@gmail.com"),
        new User("Nahom Temam", "NahomTM", "ETS0499/12", "NahomTM@gmail.com"),
        new User("Mahlet Assbu", "massbu", "ETS0431/12", "massbu@gmail.com"),
        new User("Mahlet Tizazu", "Mahitz16", "ETS0430/12", "Mahitz16@gmail.com"),
        new User("Nathnael Menelik", "idonthaveausername2", "ETS0535/12", "idonthaveausername2@gmail.com"),
    ]
}

const articles = [
    {
        count: 4,
        id: "art1",
        writer: "Nahom Temam",
        href: "../views/articles/article1.html",
        title: "How to stay confident",
        date: "Jan 15, 2022",
        description: "How culture affects sexual education. How culture affects sexual education",
        blogImage: "https://i2.wp.com/www.dailycal.org/assets/uploads/2019/03/coloredited_ameenagolding_sexeducation_file.jpg?ssl=1",
        tags: [],
        content: {
        }
    },
    {
        count: 9,
        id: "art2",
        writer: "Nathnael Shimelis",
        href: "../views/articles/article2.html",
        title: "Curture and it's challenges",
        date: "Feb 2, 2022",
        description: "How culture affects sexual education. How culture affects sexual education",
        blogImage: "https://i2.wp.com/www.dailycal.org/assets/uploads/2019/03/coloredited_ameenagolding_sexeducation_file.jpg?ssl=1",
        tags: [],
        content: {
        }
    },
    {
        count: 7,
        id: "art3",
        writer: "John Doe",
        href: "../views/articles/article3.html",
        title: "How culture affects sexual education",
        date: "Dec 26, 2021",
        description: "How culture affects sexual education. How culture affects sexual education",
        blogImage: "https://i2.wp.com/www.dailycal.org/assets/uploads/2019/03/coloredited_ameenagolding_sexeducation_file.jpg?ssl=1",
        tags: [],
        content: {
        }
    },
    {
        count: 10,
        id: "art4",
        writer: "John Doe",
        href: "../views/articles/article4.html",
        title: "How culture affects sexual education",
        date: "Dec 26, 2021",
        description: "How culture affects sexual education. How culture affects sexual education",
        blogImage: "https://i2.wp.com/www.dailycal.org/assets/uploads/2019/03/coloredited_ameenagolding_sexeducation_file.jpg?ssl=1",
        tags: [],
        content: {
        }
    },
    {
        count: 10,
        id: "art5",
        writer: "John Doe",
        href: "../views/articles/article5.html",
        title: "How culture affects sexual education",
        date: "Dec 26, 2021",
        description: "How culture affects sexual education. How culture affects sexual education",
        blogImage: "https://i2.wp.com/www.dailycal.org/assets/uploads/2019/03/coloredited_ameenagolding_sexeducation_file.jpg?ssl=1",
        tags: [],
        content: {
        }
    },
    {
        count: 0,
        id: "art6",
        writer: "John Doe",
        href: "../views/articles/article6.html",
        title: "How culture affects sexual education",
        date: "Dec 26, 2021",
        description: "How culture affects sexual education. How culture affects sexual education",
        blogImage: "https://i2.wp.com/www.dailycal.org/assets/uploads/2019/03/coloredited_ameenagolding_sexeducation_file.jpg?ssl=1",
        tags: [],
        content: {
        }
    },
]

const faq = [
    {
        id: "faq1",
        title: "How can i be a writer",
        tags: ["writers", "write", "how to"],
        count: 0,
        answer: "You can be a writer by signing up as a writer and then filling out the forms for verifying who you are, after the verification process you can write on this platform. you'll also get a certificate indicating you are a writer in this platform",
    }
]

function setSession() {
    sessionStorage.setItem("Faq", JSON.stringify(faq))
    sessionStorage.setItem("articles", JSON.stringify(articles))
    sessionStorage.setItem("database", JSON.stringify(database));
}

window.onload = setSession;