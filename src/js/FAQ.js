const faqArray = [
    {
        id: "faq1",
        title: "How can i be a writer",
        tags: ["writers", "write", "how to"],
        count: 0,
        answer: "You can be a writer by signing up as a writer and then filling out the forms for verifying who you are, after the verification process you can write on this platform. you'll also get a certificate indicating you are a writer in this platform",
    },
    {
        id: "faq2",
        title: "How can i be a writer",
        tags: ["writers", "write", "how to"],
        count: 0,
        answer: "You can be a writer by signing up as a writer and then filling out the forms for verifying who you are, after the verification process you can write on this platform. you'll also get a certificate indicating you are a writer in this platform",
    },
    {
        id: "faq3",
        title: "How can i be a writer",
        tags: ["writers", "write", "how to"],
        count: 0,
        answer: "You can be a writer by signing up as a writer and then filling out the forms for verifying who you are, after the verification process you can write on this platform. you'll also get a certificate indicating you are a writer in this platform",
    },
    {
        id: "faq4",
        title: "How can i be a writer",
        tags: ["writers", "write", "how to"],
        count: 0,
        answer: "You can be a writer by signing up as a writer and then filling out the forms for verifying who you are, after the verification process you can write on this platform. you'll also get a certificate indicating you are a writer in this platform",
    },
    {
        id: "faq5",
        title: "How can i be a writer",
        tags: ["writers", "write", "how to"],
        count: 0,
        answer: "You can be a writer by signing up as a writer and then filling out the forms for verifying who you are, after the verification process you can write on this platform. you'll also get a certificate indicating you are a writer in this platform",
    }
]


    const FaqContainer = document.getElementById("faq-container");

    faqArray.forEach(faq => {
        const content = `
        <div class="faq">
            <div class="question">
                <h3>${faq.title}</h3>

                <svg width="15" height="10" viewBox="0 0 42 25">
                    <path 
                    d="M3 3L21 21L39 3" 
                    stroke="white" 
                    stroke-width="7" 
                    stroke-linecap="round"
                    />
                </svg>
            </div>
            <div class="answer">
                <p>${faq.answer}</p>
            </div>
        </div>`

        FaqContainer.innerHTML += content;
    })

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});