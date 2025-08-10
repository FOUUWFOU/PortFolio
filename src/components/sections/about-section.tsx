import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Skill, Experience, Education, SkillCategory } from "@/types";
import {
  Coffee,
  Layers,
  Lightbulb,
  Users,
  Smartphone,
  Code,
  Wind,
  Terminal,
  Server,
  Network,
  Database,
  Container,
  Anchor,
  Wrench,
  Github,
  Cloud,
  Gauge,
  AreaChart,
  Brain,
  TestTubeDiagonal,
  Settings,
  Flame,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import profilePic from "../../app/images/profilepic2.jpeg";
import hsclogo from "../../app/images/KBPlogo.png";
import sppulogo from "../../app/images/sppulogo.png";
import aresslogo from "../../app/images/aresslogo.jpeg";
import raspilogo from "../../app/images/raspi.jpeg";

const newIntroParagraph =
  "I’m Aarti Sangale, a passionate Full-Stack Developer focused on creating fast, scalable, and user-friendly web applications. I enjoy solving complex problems with clean and efficient code. Skilled in both front-end and back-end technologies like ASP.NET Core, React, Angular, SQL, and MongoDB, I turn ideas into powerful, reliable products. I thrive working with teams and always stay updated with the latest tech to build high-quality software that truly makes a difference. I prioritize collaboration and clear communication to deliver solutions that meet real-world needs, and by leveraging best practices and innovative tools, I ensure projects are completed on time and exceed expectations.";

interface Competency {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const competenciesData: Competency[] = [
  {
    id: "fsd",
    title: "Full-Stack Development",
    icon: Layers,
    description:
      "Delivering full-stack web solutions by integrating visually intuitive front-end layouts with solid back-end architecture, ensuring robust performance and seamless interaction.",
  },
  {
    id: "problem-solving",
    title: "Creative Problem-Solving",
    icon: Lightbulb,
    description:
      "Analyzing complex challenges and devising innovative, effective solutions. I enjoy tackling puzzles and finding elegant answers to tough questions.",
  },
  {
    id: "collaboration",
    title: "Team Collaboration",
    icon: Users,
    description:
      "Working effectively within diverse teams, fostering a positive and productive environment. I believe strong communication is key to successful projects.",
  },
];

const skillCategoriesData: SkillCategory[] = [
  {
    id: "frontend",
    name: "Front End",
    icon: Smartphone,
    skills: [
      { id: "react", name: "React", icon: Code },
      { id: "angular", name: "Angular", icon: Code },
      { id: "typescript", name: "TypeScript", icon: Code },
      { id: "javascript", name: "JavaScript", icon: Code },
      { id: "html_css_js", name: "HTML / CSS / JS", icon: Smartphone },
    ],
  },
  {
    id: "backend",
    name: "Back End",
    icon: Server,
    skills: [
      { id: "aspnetcore", name: "ASP.NET Core", icon: Code },
      { id: "mvc", name: "MVC", icon: Code },
      { id: "nodejs", name: "Node.js", icon: Code },
      { id: "expressjs", name: "Express.js", icon: Code },
    ],
  },
  {
    id: "database",
    name: "Databases",
    icon: Database,
    skills: [
      { id: "sqlserver", name: "SQL Server", icon: Database },
      { id: "mongodb", name: "MongoDB", icon: Database },
      { id: "mysql", name: "MySQL", icon: Database },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Tools",
    icon: Settings,
    skills: [
      { id: "git", name: "Git & GitHub", icon: Github },
      { id: "docker", name: "Docker", icon: Container },
      { id: "ci_cd", name: "CI/CD", icon: Wrench },
    ],
  },
];

const experienceData: Experience[] = [
  {
    id: "exp1",
    role: "Software Engineer",
    company: "Aress Softwarre",
    duration: "Aug 2023 - Present",
    logoUrl: aresslogo,
    imageHint: "company logo web",
    descriptionPoints: [
      "Integrated core features using .NET Core and Angular, React enhancing overall application performance and usability.",
      "Collaborated cross-functionally with developers, testers, and product owners to identify and resolve issues.",
      "Implemented CQRS pattern for improved performance.",
    ],
  },
  {
    id: "exp2",
    role: "Embedded Systems Developer",
    company: "Raspi Invent",
    duration: "March 2022 - March 2022",
    logoUrl: raspilogo,
    imageHint: "company logo tech",
    descriptionPoints: [
      "Developed an autonomous robotic trolley for serving food in indoor environments like restaurants and hospitals.",
      "Integrated ultrasonic sensors for obstacle detection and avoidance during movement.",
    ],
  },
];

const educationData: Education[] = [
  {
    id: "edu1",
    degree: "B.E in Computer Engineering",
    institution: "Savitribai Phule Pune University",
    duration: "2019 - 2023",
    logoUrl: sppulogo,
    imageHint: "university logo",
    description:
      "Focused on fundamentals of computers engineering and software engineering ",
  },
  {
    id: "edu2",
    degree: "High School",
    institution: "K.B.P. Arts, Science & Commerce Jr. College, Vinchur",
    duration: "2017 - 2019",
    logoUrl: hsclogo,
    imageHint: "High school",
    description: "Graduated with honors, active in coding club.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full scroll-mt-20 py-16 md:py-24 lg:py-32 bg-secondary/50"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-16 section-fade-in">
          About Me
        </h2>

        {/* Profile Image and Main Description */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center mb-20 section-fade-in p-5 profile-card-hover">
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <Image
              src={profilePic}
              alt="John Doe - Profile Picture"
              width={350}
              height={400}
              className="rounded-xl shadow-2xl object-cover"
              data-ai-hint="professional portrait"
            />
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-semibold mb-4 text-accent">
              A Bit About Me
            </h3>
            <div className="space-y-4 text-muted-foreground text-base">
              {newIntroParagraph.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* What I Do Section */}
        <div className="mb-20 section-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            What I Do
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-fade-in">
            {competenciesData.map((competency) => (
              <Card
                key={competency.id}
                className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 bg-card border-animation"
              >
                <CardHeader className="items-center text-center">
                  <competency.icon className="h-12 w-12 mb-3 text-accent" />
                  <CardTitle className="text-xl">{competency.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>{competency.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-20 section-fade-in">
          <h3 className="text-3xl font-bold text-center mb-4 text-foreground">
            Technical <span className="text-accent">Skills</span>
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-base">
            I&apos;ve gained proficiency in various technologies throughout my
            career. Here are the key tools and frameworks I use to build
            exceptional products.
          </p>
          <div className="grid md:grid-cols-2 gap-8 stagger-fade-in">
            {skillCategoriesData.map((category) => (
              <Card
                key={category.id}
                className="shadow-lg bg-card overflow-hidden card-interactive-hover"
              >
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-4">
                  <category.icon className="h-7 w-7 text-accent" />
                  <CardTitle className="text-xl font-semibold">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 pt-0">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.id}
                      variant="outline"
                      className="px-3 py-1.5 text-sm flex items-center gap-2 border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors duration-200 tech-icon-hover"
                    >
                      {skill.icon && (
                        <skill.icon className="h-4 w-4 text-accent" />
                      )}
                      <span>{skill.name}</span>
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* My Journey Section */}
        <div className="section-fade-in">
          <h3 className="text-3xl font-bold text-center mb-16 text-foreground">
            My Journey
          </h3>

          {/* EDUCATION JOURNEY */}
          <div className="mb-20">
            <h4 className="text-2xl font-bold tracking-tight text-center sm:text-3xl mb-12 text-accent">
              EDUCATION
            </h4>
            <div className="relative container mx-auto w-full max-w-5xl px-4">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/50 transform -translate-x-1/2 hidden md:block timeline-connector-line"></div>
              {educationData.map((edu, idx) => (
                <div
                  key={edu.id}
                  className={`mb-12 flex md:items-center w-full timeline-item-animate`}
                  style={{ animationDelay: `${idx * 0.2 + 0.2}s` }}
                >
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${
                      idx % 2 === 0
                        ? "md:ml-auto md:pl-8 md:text-left"
                        : "md:mr-auto md:pr-8 md:text-right"
                    }`}
                  >
                    <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] bg-card ">
                      <CardHeader
                        className={`pb-3 ${
                          idx % 2 === 0 ? "md:items-start" : "md:items-end"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {edu.logoUrl && (
                            <Image
                              src={edu.logoUrl}
                              alt={`${edu.institution} logo`}
                              width={40}
                              height={40}
                              className="rounded-sm border object-contain"
                              data-ai-hint={edu.imageHint || "university logo"}
                            />
                          )}
                          <CardTitle className="text-lg font-semibold">
                            {edu.degree}
                          </CardTitle>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {edu.institution}
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          {edu.duration}
                        </Badge>
                      </CardHeader>
                      <CardContent
                        className={`${
                          idx % 2 === 0 ? "md:text-left" : "md:text-right"
                        }`}
                      >
                        {edu.description && (
                          <p className="text-sm text-muted-foreground">
                            {edu.description}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-accent rounded-full items-center justify-center text-accent-foreground font-bold shadow-md">
                    {idx + 1}
                  </div>
                  <div className="md:hidden flex-shrink-0 w-10 h-10 mr-4 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold shadow-md">
                    {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE JOURNEY */}
          <div>
            <h4 className="text-2xl font-bold tracking-tight text-center sm:text-3xl mb-12 text-accent">
              EXPERIENCE
            </h4>
            <div className="relative container mx-auto w-full max-w-5xl px-4">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/50 transform -translate-x-1/2 hidden md:block timeline-connector-line"></div>
              {experienceData.map((exp, idx) => (
                <div
                  key={exp.id}
                  className={`mb-12 flex md:items-center w-full timeline-item-animate`}
                  style={{ animationDelay: `${idx * 0.2 + 0.2}s` }}
                >
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${
                      idx % 2 === 0
                        ? "md:ml-auto md:pl-8 md:text-left"
                        : "md:mr-auto md:pr-8 md:text-right"
                    }`}
                  >
                    <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] bg-card">
                      <CardHeader
                        className={`pb-3 ${
                          idx % 2 === 0 ? "md:items-start" : "md:items-end"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {exp.logoUrl && (
                            <Image
                              src={exp.logoUrl}
                              alt={`${exp.company} logo`}
                              width={50}
                              height={50}
                              className="rounded-sm border object-contain"
                              data-ai-hint={exp.imageHint || "company logo"}
                            />
                          )}
                          <CardTitle className="text-lg font-semibold">
                            {exp.role}
                          </CardTitle>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {exp.company}
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          {exp.duration}
                        </Badge>
                      </CardHeader>
                      <CardContent
                        className={`${
                          idx % 2 === 0 ? "md:text-left" : "md:text-right"
                        }`}
                      >
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {exp.descriptionPoints.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-accent rounded-full items-center justify-center text-accent-foreground font-bold shadow-md">
                    {idx + 1}
                  </div>
                  <div className="md:hidden flex-shrink-0 w-10 h-10 mr-4 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold shadow-md">
                    {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
