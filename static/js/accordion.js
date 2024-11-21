const faqData = [
    {
        question: "What is the purpose of the hackathon?",
        answer: "The main objective of our hackathon is to develop something new and sustainable while having fun and learning! Participants will have the chance to work on innovative projects that align with sustainability goals and are encouraged to explore fresh ideas with like-minded students."
    },
    {
        question: "Who is eligible to participate, and can students join in teams?",
        answer: "High school students with an educational email address and who are under 18 years old are eligible to join. Participants can compete individually or in teams of up to two people."
    },
    {
        question: "When and where will the hackathon take place?",
        answer: "The event is scheduled for December 16th and will be held in person at Panetti Pitagora High School, located at Via Giuseppe Re David 186, Bari, BA. It will run from 8:00 AM to 4:00 PM."
    },
    {
        question: "What can participants expect from the event structure?",
        answer: "This event will be hosted in the school’s computer science labs, offering a relaxed atmosphere made by students, for students. Each participant will have access to a computer, and the focus will be on collaborating, learning, and having fun. Teachers will be available to help if needed. A detailed schedule will be shared soon."
    },
    {
        question: "What are the prizes?",
        answer: "The prize pool is expected to be 300€, with additional rewards for the top five participants, who will receive free pizza! Final prize details will be shared once main expenses are confirmed."
    },
    {
        question: "How can I register for the hackathon?",
        answer: "You can register by entering your educational email in the box at the top of this page. Teachers may request additional authorization. Registration is completely free."
    },
    {
        question: "How will projects be judged?",
        answer: "Projects will be evaluated based on these criteria: Social Impact, Sustainability, Innovation, Feasibility, Technical Skill, Presentation and Communication, Team Collaboration, and Scalability & Reach. Each category holds equal weight in scoring."
    },
    {
        question: "Are there any specific requirements?",
        answer: "We welcome students of all skill levels! There are no strict requirements or themes, though it's beneficial to have some coding and presentation experience. Show us something new, beyond typical hackathon projects!"
    }
];

const faqAccordion = document.getElementById("faqAccordion");

faqData.forEach((item, index) => {
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    accordionItem.innerHTML = `
        <h2 class="accordion-header" id="flush-heading${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                ${item.question}
            </button>
        </h2>
        <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
                ${item.answer}
            </div>
        </div>
    `;

    faqAccordion.appendChild(accordionItem);
});