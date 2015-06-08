// A button will call this function
// To capture photo
function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(uploadPhoto, onFail, { 
        quality: 50, destinationType: Camera.DestinationType.FILE_URI 
    });
}

// A button will call this function
// To select image from gallery
function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(uploadPhoto, onFail, { quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}
function getPhoto2(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}

function uploadPhoto(imageURI) {
    //If you wish to display image on your page in app
    // Get image handle
    var largeImage = document.getElementById('largeImage');

    // Unhide image elements
    largeImage.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    largeImage.src = imageURI;

    var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = window.localStorage.getItem("usuario");;
    var imagefilename = userid + Number(new Date()) + ".jpg";
    options.fileName = imagefilename;
    options.mimeType = "image/jpg";
    $('#nombreimagen').val(imagefilename);
    var params = new Object();
    params.imageURI = imageURI;
    params.userid = sessionStorage.loginuserid;
    options.params = params;
    options.chunkedMode = false;
    var ft = new FileTransfer();
    var url = "http://desarrollotricolor.com.ve/ffasil/subirimagen.php";
    ft.upload(imageURI, url, win, fail, options, true);
}
function uploadPhoto2(imageURI) {
    //If you wish to display image on your page in app
    // Get image handle
    var largeImagen = document.getElementById('largeImagen');

    // Unhide image elements
    largeImagen.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    largeImagen.src = imageURI;

    var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = window.localStorage.getItem("usuario");;
    var imagefilename = userid + Number(new Date()) + ".jpg";
    options.fileName = imagefilename;
    options.mimeType = "image/jpg";
    $('#nombreimagen2').val(imagefilename);
    var params = new Object();
    params.imageURI = imageURI;
    params.userid = sessionStorage.loginuserid;
    options.params = params;
    options.chunkedMode = false;
    var ft = new FileTransfer();
    var url = "http://desarrollotricolor.com.ve/ffasil/subirimagen.php";
    ft.upload(imageURI, url, win, fail, options, true);

}
//Success callback
function win(r) {
}
//Failure callback
function fail(error) {
}
// Called if something bad happens.
// 
function onFail(message) {
    
}