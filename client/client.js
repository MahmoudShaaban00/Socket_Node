const socket = io("http://localhost:3000");

socket.on("connect", () => {
    socket.emit("load")
});

let title = document.getElementById("title");
let description = document.getElementById("description");

function addPost() {
    const post = {
        title: title.value,
        description: description.value
    };
    socket.emit("new-post", post);
}

socket.on("all-posts", (posts) => {
    display(posts);
})

function display(message) {
    let cartona = ``;
    for (let i = 0; i < message.length; i++) {
        cartona += `<div class="alert alert-primary">
        <h4>${message[i].title}</h4>
        <p>${message[i].description}</p>
        <button class="btn btn-danger" onclick="deletePost('${message[i]._id}')">Delete</button>
        </div>`;
    }
    document.getElementById("row").innerHTML = cartona;
}

function deletePost(PostID) {
    // Deletion logic to be implemented
    alert("Delete functionality is not implemented yet for post ID: " + PostID);
    socket.emit("deletePost", PostID);
}

function searsh(value) {
    socket.emit("search",value)
}
