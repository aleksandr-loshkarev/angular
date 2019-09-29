export interface ICourses {
    id: number;
    courseName: string;
    price: number;
}

export interface ISchool {
    name: string;
    executive: string;
    courses: ICourses[];
}

export interface ISchools {
    getSchoolName(): string;
    getExecutive(): string;
}
