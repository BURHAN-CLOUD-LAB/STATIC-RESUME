"use strict";
class ResumeBuilder {
    constructor() {
        this.resume = {
            name: "",
            email: "",
            phone: "",
            address: {
                street: "",
                city: "",
                state: "",
                zip: "",
            },
            objective: "",
            education: [],
            workExperience: [],
            skills: [],
        };
    }
    setName(name) {
        this.resume.name = name;
    }
    setEmail(email) {
        this.resume.email = email;
    }
    setPhone(phone) {
        this.resume.phone = phone;
    }
    setAddress(address) {
        this.resume.address = address;
    }
    setObjective(objective) {
        this.resume.objective = objective;
    }
    addEducation(education) {
        this.resume.education.push(education);
    }
    addWorkExperience(workExperience) {
        this.resume.workExperience.push(workExperience);
    }
    addSkill(skill) {
        this.resume.skills.push(skill);
    }
    getResume() {
        return this.resume;
    }
}
// Example usage
const resumeBuilder = new ResumeBuilder();
resumeBuilder.setName("John Doe");
resumeBuilder.setEmail("john.doe@example.com");
resumeBuilder.setPhone("123-456-7890");
const address = {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
};
resumeBuilder.setAddress(address);
resumeBuilder.setObjective("To obtain a challenging role in software development.");
const education = {
    institution: "Anytown University",
    degree: "Bachelor of Science",
    fieldOfStudy: "Computer Science",
    startDate: new Date("2010-01-01"),
    endDate: new Date("2014-01-01"),
};
resumeBuilder.addEducation(education);
const workExperience = {
    company: "ABC Corporation",
    position: "Software Developer",
    startDate: new Date("2014-01-01"),
    endDate: new Date("2018-01-01"),
    description: "Developed multiple web applications using JavaScript and React.",
};
resumeBuilder.addWorkExperience(workExperience);
const skill = {
    name: "JavaScript",
    level: "Expert",
};
resumeBuilder.addSkill(skill);
console.log(resumeBuilder.getResume());
