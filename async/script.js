function getUser(){
    console.log("request started");
    let userId = document.querySelector('#userid').value;

    fetch(`https://reqres.in/api/users/${userId}`)
        .then((response) => {
            console.log(response);
            if(response.status == 200){
               return response.json();
            }
        }).then(responseBody => {
            console.log(responseBody);
            let paragraph = document.querySelector('.response')
            let headerElement = document.querySelector('#name')
            headerElement.textContent = `${responseBody.data.first_name} ${responseBody.data.last_name}`
            paragraph.innerHTML = `<img src='${responseBody.data.avatar}'>`;

        }
        ).catch((err)=>{
            console.log(err)

        })

        console.log("request ended");
}