console.log("Ajax test file loaded");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler() {
    console.log("clicked");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true);

    //Optional
    xhr.onprogress = () => {
        console.log('On progress');
    }

    //After Loading
    xhr.onload = (e) => {
        if(xhr.status === 200) {
            document.querySelector(".demo").innerHTML = xhr.responseText;
        } else {
            document.querySelector(".demo").innerHTML ='Some Error occured!!!';
        }
    }

    xhr.send();

    // console.log('We are done');
}

let popBtn = document.getElementById('populateBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log("clicked pop handler");

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);

    //Optional
    xhr.onprogress = () => {
        console.log('On progress');
    }

    //After Loading
    xhr.onload = (e) => {
        if(xhr.status === 200) {
            let obj = JSON.parse(xhr.responseText);
            let list = document.getElementById("list");
            let str ="";

            for(key in obj) {
                str += `<li>${obj[key].employee_name}</li>`;
            }
            list.innerHTML = str;
        } else {
            document.getElementById("list").innerHTML ='Some Error occured!!!';
        }
    }

    xhr.send();

}