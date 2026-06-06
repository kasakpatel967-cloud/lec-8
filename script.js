let previousFact = -1;

function showFact()
{
    let facts =
    [
        "The first computer bug was an actual moth found in a computer.",
        "Python was named after Monty Python, not the snake.",
        "The first website ever created is still online today.",
        "More than 90% of the world's currency exists only digitally.",
        "Email was invented before the World Wide Web.",
        "The first computer programmer was Ada Lovelace.",
        "The original name of Windows was Interface Manager.",
        "Google processes billions of searches every day."
    ];

    let randomIndex;

    do
    {
        randomIndex = Math.floor(Math.random() * facts.length);
    }
    while (randomIndex === previousFact);

    previousFact = randomIndex;

    document.getElementById("fact").innerHTML = facts[randomIndex];
}
function greetUser()
{
    let name = document.getElementById("name").value;

    if (name.trim() === "")
    {
        document.getElementById("response").innerHTML =
            "Please enter your name.";
    }
    else
    {
        document.getElementById("response").innerHTML =
            "Hello, " + name + "! Thanks for visiting my homepage.";
    }
}
function submitForm()
{
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let response = document.getElementById("response");

    // Check empty fields
    if (name === "" || email === "" || message === "")
    {
        response.style.color = "red";
        response.innerHTML = "All fields are required.";
        return;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email))
    {
        response.style.color = "red";
        response.innerHTML =
            "Please enter a valid email address (example: abc@gmail.com).";

        document.getElementById("email").focus();
        return;
    }

    response.style.color = "green";
    response.innerHTML =
        "Thank you, " + name + "! Your message has been submitted successfully.";

    // Clear form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}