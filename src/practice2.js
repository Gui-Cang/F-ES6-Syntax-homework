const inject = (arr, injectSections) => {
    let result = arr;
    let n = 0;
    for (let e of injectSections) {
        result.splice(e.index + n, 0, e.content);
        n++;
        // console.log(e.index,e.content)
        // console.log(result)
    }
    return result;
}
export {inject};
