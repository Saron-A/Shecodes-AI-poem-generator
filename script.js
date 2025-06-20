let input = document.querySelector("input");
let btn = document.querySelector(".input-btn button");
let poemDiv = document.querySelector(".poem");
let signature = document.querySelector(".poem-sign p");
let hiddenDiv = document.querySelector(".poem-sign");

const placeHolderText = () => {
  poemDiv.innerHTML = `Generating poem...`;
  signature.innerText = "";
  hiddenDiv.classList.remove("hidden");

  setTimeout(() => {
    fetchAIPoems();
  }, 100);
};

const fetchAIPoems = async () => {
  let topic = input.value.trim();
  let apiKey = `5704c3b4443b30c3afaa70c5fodbt64b`;
  let context = "Make the poem concise and clear; not longer that 7 lines";
  let prompt = `Generate a poem about ${topic}`;

  let response = await axios.get(
    `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
  );

  let data = response.data;
  console.log(data);

  let poem = data.answer.replace(/\n/g, "<br>");

  // Show poem area
  hiddenDiv.classList.remove("hidden");

  // Clear any previous output
  poemDiv.innerHTML = "";
  signature.innerText = "";

  // Typewriter effect
  const typewriter = new Typewriter(poemDiv, {
    autoStart: true,
    delay: 40,
  });

  typewriter
    .typeString(poem)
    .pauseFor(800)
    .callFunction(() => {
      signature.innerHTML = "<em>SheCodes AI</em>";
    })
    .start();
};

btn.addEventListener("click", placeHolderText);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") placeHolderText();
});
