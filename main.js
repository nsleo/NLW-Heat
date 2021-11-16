const links = {
github: "nsleo",
youtube: "UC2koCdmW63DdxkCP6Kj6GcA",
instagram: "n.s.leo",
facebook: "nsleov",
twitter: "leotelho",
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')  
    li.children[0].href = `https://${social}.com/${links[social]}`             
  }
}

changeSocialMediaLinks()


function getGithubProfileInfos(){
  const url = `https://api.github.com/users/${links.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    data.name
    const newUserName = data.name
    userName.textContent = newUserName
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userAvatar.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGithubProfileInfos()

//function changeSocialMediaLinks(){
//    document.getElementById("userName").textContent = "Leonardo Nunes"
//}

//function changeSocialMediaLinks() {
//    userName.textContent = 'Leonardo Nunes'
//}
