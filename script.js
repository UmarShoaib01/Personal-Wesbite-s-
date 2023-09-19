// Get all experience elements
const experiences = document.querySelectorAll(".projbox");

// Get the description element
const descriptionText = document.getElementById("descriptionText");

// Add a hover event listener to each experience element
experiences.forEach((experience, index) => {
    experience.addEventListener("mouseover", () => {
        // Define descriptions for each experience
        const descriptions = [
            "I collaborated with the Card Management POD team to enhance TD Bank's Credit Card Application, focusing on improving user experiences and essential functionalities. I played a key role in Agile practices, conducting manual testing, regression testing, and generating innovative test cases integrated into JIRA for comprehensive documentation and coverage.",
            "Working within the Release POD team, I was responsible for crafting and automating test cases using tools like Selenium, Cucumber, and Java, while also implementing the Behavior-Driven Development (BDD) methodology to ensure alignment between test scenarios and project requirements. Additionally, I actively collaborated with cross-functional teams in an Agile environment, participated in daily stand-ups and backlog refinement sessions, and managed test cases using JIRA/JTMF. My role also encompassed manual testing on credit card applications such as CCMN and BCH",
            "During my time at PepsiCo, I served as an IT Power Platform and Analytics Intern. In this capacity, I contributed to the development of automation processes by leveraging Power Apps, Power BI, and Power Automate to enhance workplace productivity. I also played a vital role in debugging and optimizing existing solutions, resolving delegation errors, and creating business-oriented solutions like PO Requests and Employee Movement. Additionally, I took ownership of a third-party Power App, building upon existing code and database resources, resulting in significant cost savings for the department.",
            "Designed captivating Power Apps and Power BI Dashboards, resulting in a 30% increase in client engagement due to enhanced design and user experience. Additionally, I improved existing Creospark products and solutions by incorporating competitor features.",
            "As a Mobile Developer Intern at Project Bunker, I significantly contributed to crafting outstanding user experiences for the 'Roomiez' app using Flutter, Dart, and Firebase. In an Agile team of four, I enhanced the app's design and functionality, implemented user-engaging features like bug reporting, and refined the UI based on user feedback. I actively participated in Agile discussions, contributed to project documentation including software requirements and testing plans, and created the Android version using Java."
        ];

        // Update the description text based on the hovered experience
        descriptionText.textContent = descriptions[index];
    });

    // Add a mouseout event listener to reset the description when not hovering
    experience.addEventListener("mouseout", () => {
        descriptionText.textContent = "Hover Over An Experience!";
    });
});

// Set the initial description text
descriptionText.textContent = "Hover Over An Experience!";