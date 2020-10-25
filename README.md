# password-generator-u03
Create a simple random password generator using prompts and inputs

## Description of application

This password generator has 5 prompts when you click 'Generate Password'

1. Prompt for the length of password to be generated, between 8 and 128 characters.
2. Confirm if USER wants numbers in the password.
3. Confirm if USER wants lowercase letters in the password.
4. Confirm if USER wants uppercase letters in the password.
5. Confirm if USER wants special characters in the password.

After every confirm prompt closes, if the confirm was submited, that array of characters is added to the pool array from where the application will randomly select the password.

The application will (for each character of the password) randomly select a character from the pool array and add it to the password.

The application will then post the password in the textbox.

![Image of Deployed Application](assets/images/depolyed-generator.png)

[Deployed Application](https://epowelldev.github.io/password-generator-u03/)

[GitHub Repo](https://github.com/epowelldev/password-generator-u03)