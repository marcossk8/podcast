export const itPassedADay = (time:string | null) => {
    if(!time) return true;

    const date = new Date();

    const differenceOfTime = date.getTime() - JSON.parse(time)
    const dayInMilliseconds = 86400000

    return differenceOfTime >= dayInMilliseconds
}