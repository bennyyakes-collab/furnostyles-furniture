const btn=document.getElementById('menuBtn');const nav=document.getElementById('navbar');if(btn&&nav){btn.addEventListener('click',()=>nav.classList.toggle('show'));}console.log('Furnostyles Furniture loaded');

const imageInput = document.getElementById('projectImages');
const imagePreview = document.getElementById('imagePreview');

if (imageInput && imagePreview) {
  imageInput.addEventListener('change', () => {
    imagePreview.innerHTML = '';
    Array.from(imageInput.files).forEach((file) => {
      if (!file.type.startsWith('image/')) return;
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.alt = 'Uploaded furniture reference image';
      imagePreview.appendChild(img);
    });
  });
}
