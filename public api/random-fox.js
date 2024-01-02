const apiUrl = "https://randomfox.ca/floof/";

const imagearea = document.getElementById("fox-image");

const loadfoximage = ({ image }) => {
  const imgElement = document.createElement("img");

  imgElement.src = image;
  imagearea.appendChild(imgElement);
};

const getRandomfox = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  imagearea.innerHTML = " ";
  loadfoximage(data);
};
getRandomfox();
