const uploadIcon = document.querySelector("#file-input img");
const uploadInput = document.querySelector("#file-input input");
const galleryContainer = document.querySelector("#gallery .container");
const gallerySection = document.querySelector("#gallery");
const fileInputSection = document.querySelector("#file-input");

uploadIcon.addEventListener("click",()=>{
  uploadInput.click()
  uploadInput.addEventListener("change", (e) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.addEventListener("load", () => {
      addImageGallery(fileReader.result);
    });
  });
})


function addImageGallery(url) {
  const galleryPhoto = document.createElement("div");
  galleryPhoto.className = "gallery-photo";
  const galleryPhotoImg = document.createElement("img");
  galleryPhotoImg.setAttribute("src", `${url}`);
  galleryPhoto.appendChild(galleryPhotoImg);
  galleryContainer.appendChild(galleryPhoto);
  galleryPhoto.addEventListener("click", () => {
    const modalSection = document.querySelector("#photo-modal");
    const modalPhoto = document.querySelector("#modal-image");
    gallerySection.style.filter = "blur(2px)";
    fileInputSection.style.filter = "blur(2px)";
    modalPhoto.setAttribute("src", `${url}`);
    modalSection.style.display = "flex";
    const iconLeft = document.querySelector(".icon-left");
    const iconRight = document.querySelector(".icon-right");
    const iconClose=document.querySelector(".icon-close");
    iconClose.addEventListener("click",()=>{
        modalSection.style.display="none";
        gallerySection.style.filter = "none";
    fileInputSection.style.filter = "none";
    })
    iconLeft.addEventListener("click",()=>{
        galleryPhoto.previousElementSibling.childNodes.forEach((e)=>{
           let previousUrl= e.getAttribute("src");
           modalPhoto.setAttribute("src",`${previousUrl}`);
        })
    })
    iconRight.addEventListener("click", () => {
      galleryPhoto.nextElementSibling.childNodes.forEach((e) => {
        let nextUrl = e.getAttribute("src");
        modalPhoto.setAttribute("src", `${nextUrl}`);
      });
    });
  });
}
