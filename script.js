document.querySelector("form").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  let form = document.querySelector("form");
  form.style.display = "none";

  let firstName = document.getElementById("first_name");
  firstName = firstName.value;

  let surname = document.getElementById("last_name");
  surname = surname.value;

  let companyName = document.getElementById("company_name");
  companyName = companyName.value;

  const formContainer = document.getElementById("contactUs");
  formContainer.classList.add("contact-us-box");
  formContainer.classList.add("center_page");

  const thanksForSubmitting = document.createElement("p");
  formContainer.appendChild(thanksForSubmitting);
  thanksForSubmitting.innerHTML = `Thank you ${firstName} ${surname} from ${companyName} for submitting the form!`;

  const githubLinks = document.createElement("p");
  githubLinks.classList.add("github-p");
  githubLinks.innerHTML = "Check out our Githubs: ";
  formContainer.appendChild(githubLinks);

  let joeGitHubLink = document.createElement("a");
  joeGitHubLink.classList.add("github-link-styling");
  joeGitHubLink.setAttribute("href", "https://github.com/Joe-Lindie");
  joeGitHubLink.innerText = `Joe's Github`;
  githubLinks.appendChild(joeGitHubLink);

  let alexGitHubLink = document.createElement("a");
  alexGitHubLink.classList.add("github-link-styling");
  alexGitHubLink.setAttribute("href", "https://github.com/AlexPD93");
  alexGitHubLink.innerText = `   Alex's Github`;
  githubLinks.appendChild(alexGitHubLink);
}
