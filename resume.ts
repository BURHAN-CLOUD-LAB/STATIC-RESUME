

// Resume.ts
interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
  }
  
  interface Education {
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: Date;
    endDate: Date;
  }
  
  interface WorkExperience {
    company: string;
    position: string;
    startDate: Date;
    endDate: Date;
    description: string;
  }
  
  interface Skill {
    name: string;
    level: string;
  }
  
  interface Resume {
    name: string;
    email: string;
    phone: string;
    address: Address;
    objective: string;
    education: Education[];
    workExperience: WorkExperience[];
    skills: Skill[];
  }
  
  class ResumeBuilder {
    private resume: Resume;
  
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
  
    public setName(name: string): void {
      this.resume.name = name;
    }
  
    public setEmail(email: string): void {
      this.resume.email = email;
    }
  
    public setPhone(phone: string): void {
      this.resume.phone = phone;
    }
  
    public setAddress(address: Address): void {
      this.resume.address = address;
    }
  
    public setObjective(objective: string): void {
      this.resume.objective = objective;
    }
  
    public addEducation(education: Education): void {
      this.resume.education.push(education);
    }
  
    public addWorkExperience(workExperience: WorkExperience): void {
      this.resume.workExperience.push(workExperience);
    }
  
    public addSkill(skill: Skill): void {
      this.resume.skills.push(skill);
    }
  
    public getResume(): Resume {
      return this.resume;
    }
  }
  
  // Example usage
  const resumeBuilder = new ResumeBuilder();
  
  resumeBuilder.setName("John Doe");
  resumeBuilder.setEmail("john.doe@example.com");
  resumeBuilder.setPhone("123-456-7890");
  
  const address: Address = {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  };
  resumeBuilder.setAddress(address);
  
  resumeBuilder.setObjective("To obtain a challenging role in software development.");
  
  const education: Education = {
    institution: "Anytown University",
    degree: "Bachelor of Science",
    fieldOfStudy: "Computer Science",
    startDate: new Date("2010-01-01"),
    endDate: new Date("2014-01-01"),
  };
  resumeBuilder.addEducation(education);
  
  const workExperience: WorkExperience = {
    company: "ABC Corporation",
    position: "Software Developer",
    startDate: new Date("2014-01-01"),
    endDate: new Date("2018-01-01"),
    description: "Developed multiple web applications using JavaScript and React.",
  };
  resumeBuilder.addWorkExperience(workExperience);
  
  const skill: Skill = {
    name: "JavaScript",
    level: "Expert",
  };
  resumeBuilder.addSkill(skill);
  
  console.log(resumeBuilder.getResume());