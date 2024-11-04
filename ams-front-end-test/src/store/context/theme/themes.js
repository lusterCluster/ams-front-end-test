//-------------------------- Typography -------------------------- //
export const Roboto = {
    family: { fontFamily: "Roboto" },
    weight: {
      "100": { fontWeight: 100 },
      "300": { fontWeight: 300 },
      "400": { fontWeight: 400 },
      "500": { fontWeight: 500 },
      "900": { fontWeight: 900 },
    },
    style: {
      normal: { fontStyle: "normal" },
      italic: { fontStyle: "italic" },
    },
  };

  export const Shade = {
    Dark : "700",
    SecondaryDark : "600",
    Surface : "500",
    SecondarySurface : "400",
    Focus : "300",
    Hover : "200",
    LightSurface : "100",
  }

//-------------------------- Pallete -------------------------- //

function createGradientPalette(paletteId, steps) {
  return function(colorStartHex, colorEndHex) {
      const colorStart = hexToRgb(colorStartHex);
      const colorEnd = hexToRgb(colorEndHex);

      const palette = { id: paletteId };
      const colorInterpolator = interpolateColor(colorStart, colorEnd);

      for (let i = 0; i < steps; i++) {
          const factor = i / (steps - 1);
          const color = colorInterpolator(factor);
          palette[(i + 1) * 100] = `#${rgbToHex(color)}`;
      }
      return palette;
  };
}

function interpolateColor(color1, color2) {
  return function(factor) {
      const result = color1.slice();
      for (let i = 0; i < 3; i++) {
          result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
      }
      return result;
  };
}

function hexToRgb(hex) {
  // Eliminamos el símbolo '#' si está presente
  hex = hex.replace(/^#/, '');

  // Nos aseguramos de que el string tenga exactamente 6 caracteres
  if (hex.length !== 6) {
      throw new Error("Formato de color hexadecimal no válido");
  }

  return [
      parseInt(hex.slice(0, 2), 16),
      parseInt(hex.slice(2, 4), 16),
      parseInt(hex.slice(4, 6), 16)
  ];
}

function rgbToHex(rgb) {
  return rgb.map(x => x.toString(16).padStart(2, '0')).join('');
}

const generateAutumnEmberPalette = createGradientPalette("AutumnEmber", 7);
const AutumnEmberPalette = generateAutumnEmberPalette("#FFF7EF", "#01131B");


  export const GrayScale = {
    id: "GrayScale",
    "700": "#000000",
    "600": "#434343",
    "500": "#656565",
    "400": "#898989",
    "300": "#AFAFAF",
    "200": "#D6D6D6",
    "100": "#FFFFFF",
  };
  const Palletes = [AutumnEmberPalette, GrayScale];
  export const getShade = (id) => (shade) => {
      const palette = Palletes.find(pallete => pallete.id === id);
        if (!palette) throw new Error(`Palette ${id} not found.`);
        const color = palette[shade];
        if (!color) throw new Error(`Shade ${shade} not found in palette ${id}.`);
        return color;
    };
    const getAtunumEmberPallete = getShade("AutumnEmber")
    const getGrayScalePallete = getShade("GrayScale")
    
    //-------------------------- Theme -------------------------- //


    export const AtunumEmber = {
        id: "AtunumEmber",
      
        typography: {
          fontFamily: Roboto.family.fontFamily,
          fontSize: {
            "12": "12px",
            "14": "14px",
            "16": "16px",
            "21": "21px",
            "32": "32px",
            "55": "55px",
            "64": "64px",
            "72": "72px",
            "94": "94px",
          },
          fontWeight: {
            "100": 100,
            "300": 300,
            "400": 400,
            "500": 500,
            "900": 900,
          },
          //  color: getEndlessSpringPallete(isDarkMode() ? Shade.LightSurface : Shade.Dark),
          
        },      
          grayScale: getGrayScalePallete,
          pallete: getAtunumEmberPallete
        }