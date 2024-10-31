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
const EndlessSpringPallete = {
    id: "EndlessSpring",
    "700": "#081C00",
    "600": "#1A3E00",
    "500": "#2D6200",
    "400": "#428A00",
    "300": "#58B300",
    "200": "#6FDE00",
    "100": "#BCFFA2",
  };
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
  const Palletes = [EndlessSpringPallete, GrayScale];
  export const getShade = (id) => (shade) => {
      const palette = Palletes.find(pallete => pallete.id === id);
        if (!palette) throw new Error(`Palette ${id} not found.`);
        const color = palette[shade];
        if (!color) throw new Error(`Shade ${shade} not found in palette ${id}.`);
        return color;
    };
    const getEndlessSpringPallete = getShade("EndlessSpring")
    const getGrayScalePallete = getShade("GrayScale")
    
    //-------------------------- Theme -------------------------- //
export const isDarkMode = () => {  
    const isDark = localStorage.getItem("isDark");
    if(isDark === null) {
      throw new Error("dark mode was not found");
      
    }
    if(isDark === "0") {
      return true
    }
    if(isDark === "1") {
      return false
    }
    throw new Error("dark mode was not found");
  };

    export const EndlessSpring = {
        id: "EndlessSpring",
      
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
          pallete: getEndlessSpringPallete
        }