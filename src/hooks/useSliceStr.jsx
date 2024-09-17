export const useSliceStr = ({text, length}) => {
    let slicedStr = ""
    if (text.length > length) {
        for (let i = 0; i < length; i++) {
            slicedStr += text[i]
        }
    } else {
        return text
    }
    return slicedStr + "...";
}