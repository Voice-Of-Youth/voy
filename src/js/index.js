const articlesStorage = JSON.parse(sessionStorage.getItem("articles")); 
const userData = JSON.parse(sessionStorage.getItem("database"))
const loggedInSession = JSON.parse(sessionStorage.getItem("login-session"))

console.log(JSON.parse(sessionStorage.getItem("articles")))
console.log(JSON.parse(sessionStorage.getItem("database")))
console.log(JSON.parse(sessionStorage.getItem("login-session")))

let navContent = `<a href="./src/views/auth.html" class="btn-link link">Sign In</a>`
document.getElementById("nav-button-dynamic").innerHTML = navContent;

if(loggedInSession) {
    if(userData.readers.some(user => user.email === loggedInSession.mail && user.password === loggedInSession.pass)) {
        navContent = `
        <button id="signout-button" class="btn-link link">
            SignOut
        </button>
        `
        document.getElementById("nav-button-dynamic").innerHTML = navContent;
    } 

    //   Signout Feature 

    document.getElementById("signout-button").addEventListener("click", e => {
        e.preventDefault();
        sessionStorage.removeItem("login-session");
    })

    function follow(i) {
        document.getElementsByClassName("follow-button")[i].innerHTML = "following"
    }
}



// Load dynamically the articles list 
  const articlesCardContainer = document.getElementById('card-lists');
  
  articlesStorage.forEach((article) => {
    const content = `
    <div class="blog-card">
        <div class="blog-card-container">
            <div class="image-container">
                <img class="card-image" src="${article.blogImage}" alt="Article Image">
            </div>
            <div class="blog-details">
                <a href="${article.href}" class="link">
                    <h1 class="blog-header">${article.title}</h1>
                    <p class="blod-description">${article.description}</p>
                </a>
                <div class="blog-info">
                    <span class="blog-date">${article.date}</span>
                    <div class="blog-options">
                        <div class="blog-writer">
                            <div class="user-icon">
                                <img src="https://media.istockphoto.com/photos/headshot-of-44-year-old-mixed-race-man-in-casual-polo-shirt-picture-id1264106963?b=1&k=20&m=1264106963&s=170667a&w=0&h=dLQliHpFkaweGQhiRfkNGkwsAPoKCEy9UWWk-m2iCCk=" alt="">
                            </div>
                            <span>${article.writer}</span>
                        </div>
                        <i class="fa-solid fa-bookmark"></i>
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            </div>   
        </div>
    </div>
    `;
  
    // Append newyly created card element to the container
    articlesCardContainer.innerHTML += content;
  })

// Slider Functionality

let slideposition = 0;
const slides = document.getElementsByClassName('carousel-item')
const totalSlides = slides.length;

document.getElementById('next').addEventListener("click", ()=> {
        moveToNextSlide();
})

document.getElementById('previous').addEventListener("click", ()=> {
        moveToPreviousSlide();
})

const updateSlidePosition = () => {
    for(let slide of slides) {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }

    slides[slideposition].classList.add("carousel-item-visible")
}

const moveToPreviousSlide = () => {
    if(slideposition === 0) {
        slideposition = totalSlides -1;
    } else {
        slideposition--
    }

    updateSlidePosition();
}

const moveToNextSlide = () => {
    if(slideposition === totalSlides - 1) {
        slideposition = 0;
    } else {
        slideposition++
    }

    updateSlidePosition();
}