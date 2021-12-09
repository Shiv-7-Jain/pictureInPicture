const vidElement = document.getElementById('vid');
const btn = document.getElementById('btn');

async function pictureInPicture(){
    try{
        const screenCapture = await navigator.mediaDevices.getDisplayMedia();
        vidElement.srcObject = screenCapture;
        vidElement.onloadedmetadata = () => {
            vidElement.play();
        }
    } catch(error){
        console.log('Error is :', error);
    }
}

btn.addEventListener('click', async () => {
    // Disable the button
    btn.disabled = true;
    // Request picture in picture 
    await vidElement.requestPictureInPicture();
    // Enable the button
    btn.disabled = false;
});

pictureInPicture();