const form = document.getElementById("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    const files = document.getElementById("files");

    console.log("files", files);

    const formData = new FormData();

    console.log("files.files", files.files);

    for (let i = 0; i < files.files.length; i++) {
        formData.append("file", files.files[i]);
    }

    fetch("http://localhost:9854/api/users/fileuploads", {
        method:"POST",
        body:formData,
        // headers:{
        //     "Content-Type":"multipart/form-data"
        // }
    }).then((res)=>console.log(res)).catch((err)=>console.log("error", err))

}