let currentQuestion = 0;
let noClickCount = 0;
const questions = [
    "for the last 6 months we lived togther, describe our relationship🥺 <3",
    "Do you Ever expect to find true love ?, was i your real true love?",
    "Describe your Mesh.. i mean how your true love life story will be"
];
const proposalTextVariations = [
    "I might not be a genie, but I can make your dreams come true.",
    "kitty are you sue 😡",
    "click yessss i demand itttttt 😡",
    "once there was a zingy who said anyone who clicks no will be a zingy  ",
    "whoooo daaareee youuuuu !!!!!",
    "im done",
    "definetilly done ( idk how to type definetilly)",
    "kitty i demand itttt clicking yesssss😡😡😡😡",
    "kitty!",
    "kittykittykittykittykittykitty!",
    "ok"

    
];
const proposalImages = [
    "proposal-image"
    
];

function initializeQuestionnaire() {
    document.getElementById("question").innerText = questions[currentQuestion];

}
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestion];
        document.getElementById("answer").value = "";

    } else {
        document.getElementById("content").style.display = "none";
        showProposal();
    }
}
function showProposal() {
    document.getElementById("proposal").style.display = "block";
}
function acceptProposal() {
    document.getElementById("proposal").style.display = "none";
    document.getElementById("celebration").style.display = "block";
    {
    document.getElementById("celebrationText").innerText = "My Dearest Reema On this day of love and soft whispers of romance, I find myself reflecting on the beautiful tapestry we've woven over these past six months. It's a canvas painted with the most vibrant colors of life, and every stroke is a testament to the bond we share.Your kindness, Reema, is like the gentle cascade of the spring's first rain—nourishing everything it touches without asking for anything in return. The world is brighter and more beautiful with your selfless acts of love. You give so much, not just to me, but to everyone around you, with such grace and warmth.The courage and grace you display in every facet of your life do not go unnoticed. They are qualities that resonate deeply with those around you, making you a beacon of hope and a pillar of comfort. You have this unparalleled ability to see beauty in the mundane, to find hope in the chaos, and to bring peace where there is unrest.Celebrating our six months together is like reveling in a festival that never ends. Each day brings its own kind of joy, its unique celebration of 'us.' We've discovered the harmonies in each other's souls, creating a symphony that plays a melody of lasting affection and mutual respect. Your influence in my life is a boundless source of joy. You have a way of making the simplest moments magical and turning routine days into memories I cherish deeply. Your spirit, so full of love and vivacity, has become intertwined with my own, creating a story that I hold precious.This Valentine's Day, I want to honor the incredible person that you are. Stand tall and proud, for your inner light shines so brilliantly that it cannot help but guide the way for myself and for others who have the joy of knowing you. Reema, my affection for you knows no bounds. It transcends the need for physical expression, for it is found in every shared sunrise, in every whispered dream, and in every quiet moment that speaks volumes of our shared connection.Here's to the beauty of our journey, to the past six months, and to the many more that we will embrace together.With all my love,[Mesho]";
}
}
document.getElementById("noBtn").addEventListener("click", function() {
    noClickCount++;
    const yesBtn = document.getElementById("yesBtn");
    const proposalImage = document.getElementById("proposal-image");
    const proposalText = document.getElementById("proposalText");
    if (noClickCount < proposalTextVariations.length) {
        proposalText.innerText = proposalTextVariations[noClickCount - 1];
    } else {
        proposalText.innerText = proposalTextVariations[proposalTextVariations.length - 1];
    }
    proposalImage.src = '/path/to/Sad Kitty_.jfif';
    if (noClickCount <= proposalImages.length) {
        proposalImage.src = proposalImages[noClickCount - 1];
    } else {
        proposalImage.src = proposalImages[proposalImages.length - 1];
    }
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize + 1}px`;
});
document.getElementById("yesBtn").addEventListener("click", acceptProposal);
document.addEventListener('DOMContentLoaded', initializeQuestionnaire);
document.addEventListener('click', function() {
    const audio = document.querySelector('audio');
    if (audio) audio.play();
});

