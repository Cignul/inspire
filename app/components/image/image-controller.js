//Your ImageService is a global class what can you do here to instantiate it? done(i think)
import ImageService from "./image-service.js"
let imageService = new ImageService()

console.log(imageService + "this is image service start of controller")







export default class ImageController {
  //getImage() figure out how to call not doing a dammed thing
  constructor() {
    console.log("is this even doing anyhing?") //yes actually reaching here on page
    //need to figure out what to pass (why is u undefined)
    console.log(imageService.getImage())
    imageService.getImage()
  }

}