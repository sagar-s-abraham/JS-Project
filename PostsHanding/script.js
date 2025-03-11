var posts = JSON.parse(localStorage.getItem("posts")) || [
    {id: 1, title: "Daily JS News"},
    {id: 2, title: "Daily PHP News"},
    {id: 3, title: "Daily Python News"},
    {id: 4, title: "Daily C++ News"}
];

function displayPosts() {
    var tableBody = document.querySelector(".grid-container tbody");
    var rowsHTML = "";

    posts.forEach(post => {
        rowsHTML += `<tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
        </tr>`;
    });

    tableBody.innerHTML = rowsHTML;
}

function storeInput() {
    var idValue = document.getElementById("postId").value;
    var titleValue = document.getElementById("postTitle").value;

    posts.push({id: idValue, title: titleValue});
    localStorage.setItem("posts", JSON.stringify(posts));

    window.location.href = "index.html";
}

displayPosts();