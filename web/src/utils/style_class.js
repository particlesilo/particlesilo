export const styleClass = {
  bodyBackground:
    "min-h-screen bg-gradient-to-br from-background-dark to-background-light",
  navigation: {
    link: "text-gray-300 hover:text-gray-50",
    active: "text-red-400", 
    item: "mr-8 text-lg my-auto"
  },
  container: "w-3/5 mx-auto items-center justify-items-center", 
  home : {
      logo: "object-scale-down w-1/2 mx-auto",
      headline: "text-gray-50 text-xl text-center"
  }, 
  btn : { 
    outline: "bg-transparent hover:bg-red-400 border border-red-400 hover:border-transparent font-semibold py-2 px-4 rounded-xl text-white",
    outlineBlue: "bg-transparent hover:bg-white border border-blueStroke text-white hover:text-black text-center py-2 px-4 rounded-lg", 
    fillBlueGradient: "bg-gradient-to-l from-blueStroke to-darkBlue text-white hover:text-black hover:border-0 text-center py-2 px-4 rounded-lg"
  }
};
