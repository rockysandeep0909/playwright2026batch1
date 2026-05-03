/**
 * Utility class for handling dropdown interactions
 * Methods
 * - selectDropdownoptions(dropdownlocator,option value): Select an option based on dropdown based on provided value
 * 
 */


class DropDownUtil{
    async selectDropdownOption(dropdownLocator,optionValue){
          await dropdownLocator.selectOption(optionValue);
    }
}

export default DropDownUtil;