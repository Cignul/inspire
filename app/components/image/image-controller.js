//Your ImageService is a global class what can you do here to instantiate it? done(i think)
import ImageService from "./image-service.js"
let imageService = new ImageService()

console.log(imageService + "this is image service start of controller")







export default class ImageController {
  drawImage() {
    let myImageName = imageService.getImage.name
    return myImageName
    console.log(myImageName)
  }

  // function() {

  // }
}