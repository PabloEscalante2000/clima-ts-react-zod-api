export const formatTemperature = (tempreature:number):number=>{
    const kelvin = 273.15
    return parseInt((tempreature - kelvin).toString()) 
}