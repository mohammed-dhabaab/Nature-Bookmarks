const styles = {
    outerWrapper: "px-6 py-10 md:py-20 h-auto",
    wrapper: "max-w-[75rem] mx-auto",
    heroSidePseudoElement: "before:content-[''] before:h-[55%] md:before:h-full  before:w-1/4 md:before:w-2/5 before:bg-primary before:opacity-90 before:absolute before:right-0 before:top-0 before:z-[-10]",
    sidePseudoElement: "h-[100%] md:h-full  w-1/4 md:w-2/5 bg-primary opacity-90 absolute right-0 top-0 z-[-10]",

    heading1: "text-5xl sm:text-6xl md:text-7xl font-bold mb-5 sm:mb-6 md:mb-7",
    heading2: "font-fraunces text-[28px] md:text-[56px] font-semibold",
    heading3: "font-fraunces font-semibold text-[20px] md:text-[32px]",
    heading4: "text-1xl sm:text-3xl md:text-4xl font-semibold tracking-widest",
    paragraph: "text-[14px] md:text-[16px] max-w-[45ch] text-secondary",
    inputLabel: "text-xl flex flex-col gap-1",

    input: "w-full py-1 px-3 outline outline-solid outline-gray-200 focus:outline focus:outline-solid focus:outline-gray-200 rounded-sm",

    primaryButton: "uppercase py-3 px-6 text-[11px] font-bold tracking-widest text-primary hover:bg-primary hover:text-light-primary border border-solid border-primary transition-all duration-200 ease-in-out",
    secondaryButton: "uppercase py-[10px] px-8 text-xs font-semibold text-light-primary border border-solid border-light-primary hover:bg-light-primary hover:text-dark transition-all duration-200 ease-in-out",
    ghostButton: "bg-slate-800 hover:bg-slate-700 text-white py-2 px-6 rounded-md transition-all ease-in-out duration-500",

    transition200: "transition-all duration-200 ease-in-out"
}

export default styles;