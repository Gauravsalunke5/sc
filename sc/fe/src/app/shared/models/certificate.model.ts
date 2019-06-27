import { StudentRecord } from "./studentRecord.model";


export class Certificate {

    
    public prNo: string;
    public studentName: string;
    public collegeName: string;
    public seatNo: string;
    public examination: string;
    public yearOfPassing: string;
    public sub: string;
    //public subject: string;
    public subject2: string;
    public subject3: string;
    public subject4: string;
    public subject5: string;
    public subject6: string;
    public SUB: string;


    public key: number;
    public record: StudentRecord;


    constructor(data: any) {
        
        this.key = data.Key ? data.Key : null;
        this.record = data.Record ? new StudentRecord(data.Record) : new StudentRecord({});



        this.prNo = data.PR_no ? data.PR_no : null;
        this.studentName = data.Student_Name ? data.Student_Name : null;
        this.collegeName = data.College_Name ? data.College_Name : null;
        this.seatNo = data.Seat_no ? data.Seat_no : null;
        this.examination = data.Examination ? data.Examination : null;
        this.yearOfPassing = data.Year_Of_Passing ? data.Year_Of_Passing : null;

       // this.SUB = JSON.parse(data.Sub);
       
        this.sub = data.Sub ? data.Sub :null;
        //this.subject2 = data.Sub.sub2 ? data.Sub.sub2 : null;
        /*this.subject3 = data.Sub.c ? data.Sub.c : null;
        this.subject4 = data.Sub.d ? data.Sub.d : null;
        this.subject5 = data.Sub.e ? data.Sub.e : null;
        this.subject6 = data.Sub.f ? data.Sub.f : null;
*/

    }
}
