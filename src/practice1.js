const parseData = (input) => {
    let {data, column} = input;
    const keyArr = column.map(e => e.name)
    return data
        .map(e => e
            .reduce((acc, cur, curIndex) => {
                acc[keyArr[curIndex]] = cur;
                return acc
            }, {})
        )
}
export {parseData};
