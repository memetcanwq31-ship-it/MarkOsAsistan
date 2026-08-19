const chat = document.getElementById("chat");
const input = document.getElementById("message");

function addMessage(text, type) {

    const message = document.createElement("div");

    message.className = "message " + type;

    message.textContent = text;

    chat.appendChild(message);

    chat.scrollTop = chat.scrollHeight;
}

function removeWelcome() {

    const welcome = document.querySelector(".welcome");

    if (welcome) {
        welcome.remove();
    }
}

function sendMessage() {

    const text = input.value.trim();

    if (!text) {
        return;
    }

    removeWelcome();

    addMessage(text, "user");

    input.value = "";

    setTimeout(() => {

        addMessage(
            "⚡ MarkOS Asistan\n\n" +
            "Mesajını aldım.\n\n" +
            "AI motoru henüz bağlanmadı. " +
            "Bu arayüze daha sonra ücretsiz bir AI motoru ekleyebiliriz.",
            "assistant"
        );

    }, 400);
}

function quickMessage(text) {

    input.value = text;

    sendMessage();
}

function handleKey(event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendMessage();
    }
}
