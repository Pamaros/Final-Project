export interface ItemOfTheDataArray {
  image_id: string;
  title: string;
  id: number;
  place_of_origin: string;
  date_end: number;
  artwork_type_title: string;
  description: string;
}

export interface ProjectsListInterface {
  config: {
    iiif_url: string;
    website_url: string;
  };
  data: ItemOfTheDataArray[];
  info: {
    license_links: string[];
    license_text: string;
    version: string;
  };
  pagination: {
    current_page: number;
    limit: number;
    next_url: string;
    offset: number;
    total: number;
    total_pages: number;
  };
}


export interface ProjectInterface {
  config: {
    iiif_url: string;
    website_url: string;
  };
  data: ItemOfTheDataArray;
  info: {
    license_links: string[];
    license_text: string;
    version: string;
  };
  pagination: {
    current_page: number;
    limit: number;
    next_url: string;
    offset: number;
    total: number;
    total_pages: number;
  };
}