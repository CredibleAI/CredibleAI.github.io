import { BrokerProfile } from "@/types/team";

// WARNING: everything except the name and the photo is placeholder, written to
// the right length rather than to be published.
//
// What each field is for, as a brief for the real copy:
//
// `role` is the label under the name. It answers what to call him, and it is the
// only field a reader takes in without deciding to read.
//
// `description` is aimed at a company deciding whether he is the right person to
// write to, and at a researcher deciding whether to forward an enquiry. It should
// be concrete about the activity rather than the ambition, third person, and
// about the length of a team leader's description.
//
// `mission` is aimed at a reader who wants to know why the Centre employs
// somebody for this at all. It is the institutional answer, not his personal
// one, so it should say what the Centre wants to be true because this role
// exists.
export const commercialization: BrokerProfile[] = [
  {
    id: "piotr-biczyk",
    name: "Dr. Piotr Biczyk",
    imageUrl: "/images/team/biczyk.webp",
    imageAlt: "Dr. Piotr Biczyk",
    role: "Scientific Broker",
    description:
      "Dr. Piotr Biczyk connects companies with the research groups inside the Centre. He works with organisations facing a problem that an off-the-shelf model does not solve, turns it into a research question, and matches it to the group whose methods fit. He stays with the work from the first conversation through to a running collaboration.",
    missionTitle: "Research that does not stop at publication",
    mission:
      "The methods built here for interpretability, auditing and validation matter most where decisions are actually made, so the Centre keeps a direct route between the people who build them and the organisations that need them. We seek out collaborations, share the methods and tools we build with the people who can use them, and follow our own ideas out of the Centre when they are ready to become products or spin-offs.",
    tags: ["industry collaboration", "tech transfer"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/pebepe/",
      email: "ccai@pw.edu.pl",
    },
  },
];
