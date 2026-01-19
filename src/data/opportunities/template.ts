import { OpportunityData } from "@/types/data";

export const opportunityTemplate: OpportunityData = {
  id: "your-opportunity-id",
  title: "Your Opportunity Title",
  subtitle: "Optional subtitle or short highlight",
  description:
    "Short description of the opportunity. Describe who you are looking for and what the role is about.",
  imageUrl: "/images/project-1.jpg",
  imageAlt: "Opportunity image description",
  type: "Position type, for example PhD, Postdoc, Internship",
  deadline: "2026-12-31",
  location: "Location of the position",
  salaryRange: "Monthly gross salary range, e.g. 20 000–25 000 PLN",
  employmentType: "Full-time / Part-time / Internship",
  workload: "e.g. 40 hours per week",
  contractType: "e.g. Employment contract / B2B / Scholarship",
  detailedDescription:
    "Longer description of the role, research context, responsibilities and collaboration environment.",
  requirements: [
    "First requirement",
    "Second requirement",
    "Third requirement",
  ],
  responsibilities: [
    "Example responsibility one",
    "Example responsibility two",
  ],
  benefits: ["Example benefit one", "Example benefit two"],
  contactEmail: "contact@example.com",
};

