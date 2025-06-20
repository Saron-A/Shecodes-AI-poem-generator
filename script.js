let input = document.querySelector("input");
let btn = document.querySelector(".input-btn button");
let div = document.querySelector(".poem");

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

  div.innerHTML = data.answer;
  div.classList.add("show-poem");
};

btn.addEventListener("click", fetchAIPoems);
