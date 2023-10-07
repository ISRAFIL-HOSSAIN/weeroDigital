interface Technology {
    id: number;
    name: string;
    icon: string; // You can specify the correct type for icon based on your application's needs
  }
  
  // Define an interface for the technologies object
export interface Technologies {
    frontend: Technology[];
    backend: Technology[];
    mobile: Technology[];
    nocode: Technology[];
    db: Technology[];
  }
export interface Showcase { 
  id:number; 
  name : string; 
  icon: string; 
}
export interface ShowCases { 
  web: Showcase[]; 
  mobile: Showcase[]; 
  nocode : Showcase[]; 
}

export interface Experience {
    title : string; 
    subtitle: string;
    tech: string; 
    icon: string;
    icon2: string;
    iconBg: string; 
    points : string[]; 
    date? : string; 
}

export interface Industry {
    icon : string; 
    title : string;
}

