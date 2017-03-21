

function getRepositories() {
	username = document.getElementById("username").value
	const URL = "https://api.github.com/users/" + username + "/repos"
	const req = new XMLHttpRequest()
	req.addEventListener("load", displayRepositories)
	req.open("GET", URL)
	req.send()
}

function displayRepositories() {
  const repos = JSON.parse(this.responseText)
  const reposList = `<ul>${repos.map(repo => '<li><strong>' + repo.html_url +'</strong> - '+ '</li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = reposList
}

function getCommits(element) {
  const name = element.dataset.repository
  const URL = "https://api.github.com/repos/" + username + "/" + name
  const req = new XMLHttpRequest()
  req.addEventListener("load", displayCommits);
  req.open("GET", URL + '/commits')
  req.send()
}

function displayCommits() {
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + commit.commit.author.name +'</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("details").innerHTML = commitsList
}

function getBranches(element) {
  const name = element.dataset.repository
  const URL = "https://api.github.com/repos/" + username +  "/" + name
  const req = new XMLHttpRequest()
  req.addEventListener("load", displayBranches);
  req.open("GET", URL + '/branches')
  req.send()
}

function displayBranches() {
  const branches = JSON.parse(this.responseText)
  const branchesList = `<ul>${branches.map(branch => '<li><strong>' + branch.name +'</strong> - '+ '</li>').join('')}</ul>`
  document.getElementById("details").innerHTML = branchesList
}
