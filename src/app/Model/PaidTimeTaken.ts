export class PaidTimeTaken{
    yrid: number;
    yr: string;
    mcategory: string;
    nospo: number;
    gross: number;
    avgdayssincerec: number;
    avgdayssinceQC: number

    constructor(yrid: number,
        yr: string,
        mcategory: string,
        nospo: number,
        gross: number,
        avgdayssincerec: number,
        avgdayssinceQC: number
    ){

        this.yrid=yrid,
        this.yr=yr,
        this.mcategory=mcategory,
        this.nospo=nospo,
        this.gross=gross,
        this.avgdayssincerec=avgdayssincerec,
        this.avgdayssinceQC=avgdayssinceQC


    }
}