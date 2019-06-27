export class StudentRecord {
    public collegeName: string;
    public prNo: number;
    public branch: number;
    public firstName: string;
    public secondName: string;
    public surname: string;
    public emailId: string;
    public mobileNumber: string;
    public yearOfAdmission: number;
    public password:string;

    constructor(data: any) {
        this.collegeName = data.College_Name ? data.College_Name : null;
        this.prNo = data.PR_no ? data.PR_no : null;
        this.branch = data.Branch ? data.Branch : null;
        this.firstName = data.First_Name ? data.First_Name : null;
        this.secondName = data.Middle_Name ? data.Middle_Name : null;
        this.surname = data.Last_Name ? data.Last_Name : null;
        this.emailId = data.Email_Id ? data.Email_Id : null;
        this.mobileNumber = data.Mobile ? data.Mobile : null;
        this.password=data.Password ? data.Password:null;
        this.yearOfAdmission = data.Year_Of_Admission ? data.Year_Of_Admission : null;
    }
}