# KBL Cosmetic Project

This project uses Tailwind CSS for styling by including the minified CSS file directly. It also includes JavaScript files for additional functionality.

## Usage

1. **Tailwind CSS**: The project includes Tailwind CSS by linking the minified CSS file in the HTML. Make sure the following line is included in the `<head>` section of your HTML file:

    ```html
    <link href="./assets/css/tailwind.min.css" rel="stylesheet" />
    ```

2. **Custom CSS**: If you need to modify styles or add custom classes, you can do so directly in the HTML or by using the custom CSS file:

    ```html
    <link href="./assets/css/style.css" rel="stylesheet" />
    ```

3. **JavaScript Files**:
   - **`index.js`**: This file includes the main JavaScript code for your project. Make sure to include it at the end of the `<body>` section in your HTML:

    ```html
    <script src="./assets/Js/index.js"></script>
    ```

   - **`tailwind.js`**: This file contains additional JavaScript related to Tailwind CSS functionality. Include it in your HTML file as needed:

    ```html
    <script src="./assets/Js/tailwind.js"></script>
    ```

Feel free to continue using the minified CSS version if no further customizations are needed.
