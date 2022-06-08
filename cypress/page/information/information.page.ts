class Information {

    private firstNameTextBox: string;
    private lastNameTextBox: string;
    private emailTextBox: string;
    private genderRadioButton: string;
    private mobileNumberTextBox: string;
    private hobbiesCheckBox: string;
    private currentAddressTextBox: string;
    private stateSelect: string;
    private citySelect: string;
    private submitButton:string;

    constructor(){
        this.firstNameTextBox = 'input[placeholder="First Name"]';
        this.lastNameTextBox = 'input[placeholder="Last Name"]';
        this.emailTextBox = 'input[placeholder="name@example.com"]';
        this.genderRadioButton = 'input[type="radio"]';
        this.mobileNumberTextBox = 'input[placeholder="Mobile Number"]';
        this.hobbiesCheckBox = 'input[type="checkbox"]';
        this.currentAddressTextBox = 'textarea[placeholder="Current Address"]';
        this.stateSelect = "#react-select-3-input";
        this.citySelect = "#react-select-4-input";
        this.submitButton = "#submit";

    }

    public fillForm(information:any){
        cy.get(this.firstNameTextBox).type(information.firstName);
        cy.get(this.lastNameTextBox).type(information.lastName);
        cy.get(this.emailTextBox).type(information.email);
        cy.get(this.genderRadioButton).check(information.gender,{ force: true });
        cy.get(this.mobileNumberTextBox).type(information.mobileNumber);

        for (let item of information.hobbies) {
           cy.get(this.hobbiesCheckBox).check(this.selectHobbie(item),{force: true});
          }

        cy.get(this.currentAddressTextBox).type(information.currentAddress);
        cy.get(this.stateSelect).type(information.state,{force: true}).type('{enter}');
        cy.get(this.citySelect).type(information.city,{force: true}).type('{enter}');
        cy.get(this.submitButton).click({force: true});

    }

    private selectHobbie(hobbie:string):string{
        switch (hobbie) {
            case "Sports": {
                hobbie = "1";
            break;
            }
            case "Reading": {
                hobbie = "2";
            break;
            }
            case "Music": {
                hobbie = "3";
            break;
            }
        }
        return hobbie;
    }
    
}
export {Information }
