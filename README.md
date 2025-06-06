# PNG National Color 🇵🇬

A simple npm package that provides the national colors of Papua New Guinea (PNG) as RGB, HEX, and HSL values. Useful for theming, design, or any application that requires PNG's official colors.

## 📥 Install
Install the package via npm:

```bash
npm install @chrisaugu/png-national-color
```
Or with Yarn:

```bash
yarn add @chrisaugu/png-national-color
```
## 🛠 How to Use
Import the package and access PNG's national colors in different formats:

```javascript
const pngColors = require('@chrisaugu/png-national-color');

// Get all colors
console.log(pngColors.all); 

// Get specific color formats
console.log(pngColors.hex); // HEX values
console.log(pngColors.rgb); // RGB values
console.log(pngColors.hsl); // HSL values

// Access individual colors
console.log(pngColors.hex.black); // '#000000'
console.log(pngColors.rgb.red);   // [207, 20, 43]
console.log(pngColors.hsl.gold);  // [42, 100%, 50%]
```

Available Colors
* Black (Traditional)
* Red (Symbolizes unity)
* Gold/Yellow (Represents the sun and wealth)

## 📜 License
This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

## 🤝 Contribution
Contributions are welcome! If you'd like to improve this package:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add new color format'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 👤 Author
* Christian Augustyn
* GitHub: @chrisaugu
* NPM: @chrisaugu

## 🧪 Test
To run tests (if available), use:

```bash
npm test
```
Or check the `/test` directory for examples.