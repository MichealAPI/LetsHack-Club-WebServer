const rules = [
    {
        number: 1,
        title: "Form Your Team (up to 2 members) –",
        description: "Team up and brainstorm a project idea focused on social impact. Think about how your tech solution can make a difference!"
    },
    {
        number: 2,
        title: "Create & Present –",
        description: "Bring your idea to life and prepare a compelling presentation to showcase your project."
    },
    {
        number: 3,
        title: "Cast Your Votes –",
        description: "Check out all the amazing projects and vote for your favorites. The top-voted projects win the best prizes!"
    }
];

function renderRules() {
    const rulesContainer = document.getElementById("rulesContainer");

    rules.forEach(rule => {
        // Create row for each rule
        const ruleRow = document.createElement("div");
        ruleRow.className = "row";

        // Number column
        const numberCol = document.createElement("div");
        numberCol.className = "col-md-auto offset-md-4";
        numberCol.innerHTML = `
            <div class="rule">
                <div class="number">
                    <h1>${rule.number}.</h1>
                </div>
            </div>
        `;

        // Description column
        const descriptionCol = document.createElement("div");
        descriptionCol.className = "col-md-4 d-flex align-items-center";
        descriptionCol.innerHTML = `
            <div class="rule">
                <div class="description">
                    <p>
                        <b>${rule.title}</b> ${rule.description}
                    </p>
                </div>
            </div>
        `;

        // Append number and description columns to the row
        ruleRow.appendChild(numberCol);
        ruleRow.appendChild(descriptionCol);

        // Append row to the rules container
        rulesContainer.appendChild(ruleRow);
    });
}

renderRules();