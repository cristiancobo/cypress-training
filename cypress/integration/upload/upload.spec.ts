import {
  Upload,
} from "../../page";

const upload: Upload = new Upload();

describe("The user wants upload an image", () => {
  let image: {googleImage:string};
  beforeEach(()=>{
    cy.fixture("images").then((imageName) =>{
      image = imageName;
    });
  });
  it("the image is uploaded correctly", () => {
    cy.visit(Cypress.env("urlUploadImage"));
    upload.uploadImage(image.googleImage);
    upload.getCardImageSelector(image.googleImage).should("contain.text", "google.png");
  });
});
