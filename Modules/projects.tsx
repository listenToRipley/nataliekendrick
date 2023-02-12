export interface Project {
  "id": number,
  "projectName": string,
  "completed": {
    "year": number,
    "month": string
  },
  "description": string, 
  "skills": string[],
  "color": string,
  "image": string,
  "altText": string,
  "site": string,
  "code": string
};