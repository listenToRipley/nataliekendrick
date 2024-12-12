export interface Professional {
  company: {
    name: string
    site: string
    type: string
    location: string
    },
  title: string
  tenure: {
    start: string
    end: string
  },
  divider: string 
  responsibilities: string[]
};

export interface PartTime {
  company: {
    name: string
    site: string | undefined
    type: string
    location: string
    },
  title: string
  tenure: {
    start: number
    end: number
  },
  responsibilities: string[]
};

export interface Volunteer {
    company: {
      name: string,
      site: string, 
      location: string,
      description: string
    },
    title: string,
    tenure: {
      start: number,
      end:  number | string
    }
};
