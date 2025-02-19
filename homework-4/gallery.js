let photos = ["https://fastly.picsum.photos/id/804/300/400.jpg?hmac=Y6cx9oentnw75-Q7gYdlaJBBAnSAlUHRYXbvFMIrZNI", "https://fastly.picsum.photos/id/185/300/400.jpg?hmac=7jvc9SGhArOCJhgLoOfYSTezJsc1xrIXhDOXkiZSrbs", "https://fastly.picsum.photos/id/229/300/400.jpg?hmac=CZOWn8sQ8oa9EfbMZw5tYqPMNKK0mNOYUsEgz81K8io", "https://fastly.picsum.photos/id/211/300/400.jpg?hmac=l0zi1AkBxaPoAMnWav0iWH8TsWfblHXdm_IGSNDMFWQ"];
let photoList = document.getElementById("photos");

/*for (i = 0; i < photos.length; i++) {
    photoList.createElement("img"); I do not know what to do past this point.
}*/

document.getElementById("photo 1").src = photos[0];
document.getElementById("photo 1").alt = "Image 0";
document.getElementById("photo 1").height = 300;

document.getElementById("photo 2").src = photos[1];
document.getElementById("photo 2").alt = "Image 1";
document.getElementById("photo 2").height = 300;

document.getElementById("photo 3").src = photos[2];
document.getElementById("photo 3").alt = "Image 2";
document.getElementById("photo 3").height = 300;

document.getElementById("photo 4").src = photos[3];
document.getElementById("photo 4").alt = "Image 3";
document.getElementById("photo 4").height = 300;