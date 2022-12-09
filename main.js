/*{
    "login": "koehlertimo",
    "id": 29931187,
    "node_id": "MDQ6VXNlcjI5OTMxMTg3",
    "avatar_url": "https://avatars.githubusercontent.com/u/29931187?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/koehlertimo",
    "html_url": "https://github.com/koehlertimo",
    "followers_url": "https://api.github.com/users/koehlertimo/followers",
    "following_url": "https://api.github.com/users/koehlertimo/following{/other_user}",
    "gists_url": "https://api.github.com/users/koehlertimo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/koehlertimo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/koehlertimo/subscriptions",
    "organizations_url": "https://api.github.com/users/koehlertimo/orgs",
    "repos_url": "https://api.github.com/users/koehlertimo/repos",
    "events_url": "https://api.github.com/users/koehlertimo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/koehlertimo/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Timo Köhler",
    "company": "Volkswagen AG",
    "blog": "",
    "location": "Wolfsburg, Germany",
    "email": null,
    "hireable": true,
    "bio": "Junior Software Development Student @ Fakultät73 ",
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 2,
    "followers": 6,
    "following": 12,
    "created_at": "2017-07-05T21:01:54Z",
    "updated_at": "2022-12-08T12:52:10Z"
} */


var userData= {};

url = "https://api.github.com/users/";

function getData(username){
    fetch(url + username)
    .then(res => res.json())
    .then(data => {
        if(data.hasOwnProperty("message")){
            console.log(data.message);
            clearContent();
            document.getElementById("loginname").innerHTML = data.message;
        }else{
            changeContent(data);
        }
    })
    .catch(err => console.log(err))
}

function searchProfile(){
    getData(document.getElementById('userInput').value);
}

function changeContent(data){
    document.getElementById("avatar").src = data["avatar_url"];
    document.getElementById("loginname").innerHTML = data["login"];
    document.getElementById("name").innerHTML = data["name"];
    document.getElementById("id").innerHTML = data["id"];
    document.getElementById("bio").innerHTML = data["bio"];
    document.getElementById("followers").innerHTML = data["followers"];
    document.getElementById("following").innerHTML = data["following"];
    document.getElementById("repos").innerHTML = data["public_repos"];
    document.getElementById("gists").innerHTML = data["public_gists"];
    document.getElementById("location").innerHTML = data["location"];
    document.getElementById("company").innerHTML = data["company"];
    document.getElementById("email").innerHTML = data["email"]; 
    document.getElementById("company").innerHTML = data["twitter_username"];
    document.getElementById("created").innerHTML = data["created_at"];
    document.getElementById("updated").innerHTML = data["updated_at"];
    document.getElementById("link").innerHTML = data["blog"];

}

//not working right now
function clearContent(){
    document.getElementsByClassName("content").innerHTML = "";
}

getData("koehlertimo");