import home_image from "../assets/home_image.png";
import tv from "../assets/tv.png";
import pc from "../assets/pc.png";


export default [
    {
        id:1,
        module_title: "Admin & Principals Module",
        module_description:"This module contains all details of the school regarding Students, teachers, parents, Grades, promotions, academic sessions and results.",
        one_title: "Admission Processing",
        one_description: "The admin is responsible for admitting students, therefore the admin is provided with a means of creating opportunities for admissions and managing the steps required for admitting students.",
        two_title: "Data Creation & Management",
        two_description:"All information and data relating to parents, teachers, classes, students, grades and academic sessions are created by the admin",
        three_title: "Results & Report processing",
        three_description: "The admin and principal have access to students results and school reports for past and present academic sessions.",
        four_title: "Notices & Messaging",
        four_description: "The Principal has the ability to send notices to parents via their portal and can also send messages to them.",
        button_text: "Principal’s Login",
        module_image: tv,
        module_theme: "bg-figmaBlue",
        style: "bottom"
    },
    {
        id:2,
        module_title: "Bursary Module",
        module_description:"This module is accessed by the bursar or secretary of the school. It allows them to see an overview of bill payments made by parents/guardians.",
        one_title: "Creating & Managing bills",
        one_description: "This module allows the secretary to create bills for each school in the system and also manage/edit those bills.",
        two_title: "Payment Handling",
        two_description:"The secretary is allowed to handle all payment requests, either school fees, uniform fee, books e.t.c.",
        three_title: "Bills & Payment Analysis",
        three_description: "The admin and principal have access to students results and school reports for past and present academic sessions.",
        button_text: "Secretary’s Login",
        module_image: home_image,
        module_theme: "bg-figmaGreen",
        style: "right"
    },
    {
        id:3,
        module_title: "Teachers Module",
        module_description:"This module of School toolkit allows for teachers to perform their daily activities in the class. Some of these activities are;",
        one_title: "Taking Class Attendance",
        one_description: "This module allows class teachers to take daily attendance of students in their classes.",
        two_title: "Access to Lesson Notes and Creation",
        two_description:"Teachers are provided with past notes that has been created under a syllabus, they can as well create new notes on topics in a syllabus.",
        three_title: "Tests and Exam Recording",
        three_description: "The result processing starts from the teacher recording each students tests and exam scores.",
        button_text: "Teacher’s Login   ",
        module_image: pc,
        module_theme: "bg-figmaBlue",
        style: "left"
    },
    {
        id: 4,
        module_title: "Parents Module",
        module_description:"The parents module allows parents to monitor their wards performance and to make payment for school fees or other bills.",
        one_title: "Bill Payment",
        one_description: "This module allows the secretary to create bills for each school in the system and also manage/edit those bills.",
        two_title: "Results Generation",
        two_description:"The secretary is allowed to handle all payment requests, either school fees, uniform fee, books e.t.c.",
        three_title: "Admission Manager",
        three_description: "The Secretary is provided with a summary of payments made or yet to be made, making it easy for decision making.",
        button_text: "Parent’s Login   ",
        module_image: home_image,
        module_theme: "bg-figmaGreen",
        style: "right"
    },


]