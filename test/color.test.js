const pngColors = require("@chrisaugu/png-national-color");

describe("PNG National Colors", () => {
  test("should export all color formats", () => {
    expect(pngColors.color.black).toBe("#000000");
    expect(pngColors.color.white).toBe("#FFFFFF");
    expect(pngColors.color.red).toBe("#CE1126");
    expect(pngColors.color.yellow).toBe("#FCD116");
    expect(pngColors.emoji_color).toBe("⬛⬜🟥🟨");
    expect(pngColors.emoji).toBe("⬛⬜🟥🟨");
  });
});

// describe("PNG National Colors", () => {
//   test("should export all color formats", () => {
//     expect(pngColors).toHaveProperty("all");
//     expect(pngColors).toHaveProperty("hex");
//     expect(pngColors).toHaveProperty("rgb");
//     expect(pngColors).toHaveProperty("hsl");
//   });

//   describe("HEX colors", () => {
//     test("should have correct black hex value", () => {
//       expect(pngColors.hex.black).toBe("#000000");
//     });

//     test("should have correct red hex value", () => {
//       expect(pngColors.hex.red).toBe("#CF142B");
//     });

//     test("should have correct gold hex value", () => {
//       expect(pngColors.hex.gold).toBe("#FFD100");
//     });
//   });

//   describe("RGB colors", () => {
//     test("should have correct black rgb value", () => {
//       expect(pngColors.rgb.black).toEqual([0, 0, 0]);
//     });

//     test("should have correct red rgb value", () => {
//       expect(pngColors.rgb.red).toEqual([207, 20, 43]);
//     });

//     test("should have correct gold rgb value", () => {
//       expect(pngColors.rgb.gold).toEqual([255, 209, 0]);
//     });
//   });

//   describe("HSL colors", () => {
//     test("should have correct black hsl value", () => {
//       expect(pngColors.hsl.black).toEqual([0, 0, 0]);
//     });

//     test("should have correct red hsl value", () => {
//       expect(pngColors.hsl.red).toEqual([352, 82, 45]);
//     });

//     test("should have correct gold hsl value", () => {
//       expect(pngColors.hsl.gold).toEqual([49, 100, 50]);
//     });
//   });

//   describe("All colors object", () => {
//     test("should contain all color formats", () => {
//       expect(pngColors.all).toEqual({
//         black: {
//           hex: "#000000",
//           rgb: [0, 0, 0],
//           hsl: [0, 0, 0],
//         },
//         red: {
//           hex: "#CF142B",
//           rgb: [207, 20, 43],
//           hsl: [352, 82, 45],
//         },
//         gold: {
//           hex: "#FFD100",
//           rgb: [255, 209, 0],
//           hsl: [49, 100, 50],
//         },
//       });
//     });
//   });
// });
