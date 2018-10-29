//Your ImageService is a global class what can you do here to instantiate it? done(i think)
import ImageService from "./image-service.js"
let imageService = new ImageService()

console.log(imageService + "this is image service start of controller")



export default class ImageController {

  constructor() {
    console.log("is this even doing anyhing?") 
    //working for now - image is tiling need to fix
    //looking for where i can style that
    console.log(imageService.getImage(Image => {
      document.getElementById("body").style.backgroundImage = "url(" + Image.url + ")"

    }))
  }
}