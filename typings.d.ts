type Base = {
    _createAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Publication extends Base { 
    title: string,
    authors: string,
    link: string
}

interface Project extends Base { 
    title: string;
    slug: Slug;
    mainImage: Image;
    description: string;
    technology: string[];
    publishedAt: Date;
    body: Block[]
}

interface Author extends Base {
    name: string;
    slug: Slug;
    mainImage: Image;
    bio: Block[],
    paperPublished: number;
    projectCompleted: number;
    experience: string;
    designation: string;
    email: string;
    phoneNumber: string;
    address: Block[];
    instagram: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    education: Education[]
    work: Work[]
    skills: string[]
}

interface Education {
    university: string;
    degree: string;
    timeSpan: string
}

interface Work  {
    designation: string;
    workAt: Block[];
    timeSpan: string
}
 
interface Image {
    _type: 'image',
    asset: Reference;
}

interface Reference {
    _ref: string,
    _type: "reference";
}

interface Slug {
    _type: "slug",
    current: string
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote"
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}