const messageList = document.querySelector(".chat-box");
const input = document.querySelector(".chat-input input");
const sendButton = document.querySelector(".chat-input button");

const responses = {
    Greeting: [
        "Hello there!",
        "Hi! How can I help you today?",
    ],
    Farewell: [
        "Goodybye!",
        "Bye! Have a great day!",
    ],
    Default: [
        "I'm afraid I don't have an answer for that. Can you try asking something else?",
    ],
    Joke: [
        "Why did the tomato turn red? Because it saw the salad dressing!",
        "How do you organize a space party? You planet.",
        "Why don't scientists trust atoms? Because they make up everything.",
        "Why did the coffee file a police report? It got mugged.",
        "Why did the scarecrow win an award? Because he was outstanding in his field.",
        "What do you call a fake noodle? An impasta.",
        "Why did the math book look sad? Because it had too many problems.",
        "What do you call a boomerang that doesn't come back? A stick.",
        "What did one wall say to the other wall? I'll meet you at the corner.",
        "Why do seagulls fly over the sea? Because if they flew over the bay, they'd be bagels.",
        "How does a penguin build its house? Igloos it together.",
        "Why don't scientists trust atoms? Because they make up everything.",
        "Why did the chicken cross the playground? To get to the other slide.",
        "Why did the banana go to the doctor? Because it wasn't peeling well.",
        "Why don't skeletons fight each other? They don't have the guts.",
        "What do you call a bear with no teeth? A gummy bear.",
        "Why did the cookie go to the doctor? Because it was feeling crumbly.",
        "What do you call a can opener that doesn't work? A can't opener.",
        "What do you call a fake noodle? An impasta.",
        "Why did the crab never share? Because he was shellfish."
      ],
};

sendButton.addEventListener("click", () => {
    if (input.value !== "") {
        const message = document.createElement("div");
        message.classList.add("chat-message", "user-message");
        message.innerHTML = `<div class="chat-message-text">${input.value}</div>`;
        messageList.appendChild(message);
        console.log("Messge list listen: ", messageList)
        input.addEventListener("keyup" , (e) => {
            if (e.key === "Enter") {
                sendButton.click();
            }
        });

        const inputText = input.value.toLowerCase();
        let intent = "Default";
        if (inputText.includes("hello") || inputText.includes("hi")) {
            intent = "Greeting";
        } else if (inputText.includes("bye") || inputText.includes("goodbye")) {
            intent = "Farewell";
        } else if (inputText.includes("joke")) {
            intent = "Joke";
        }

        input.value = "";

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * responses[intent].length);
            const responseText = responses[intent][randomIndex];
            const botMessage = document.createElement("div");
            botMessage.classList.add("chat-message", "bot-message");
            botMessage.innerHTML = `<div class="chat-message-text">${responseText}</div>`;
            messageList.appendChild(botMessage);
            console.log("Messge list timout: ", messageList)

            messageList.scrollTop = messageList.scrollHeight;
        }, 1000);
    }
});