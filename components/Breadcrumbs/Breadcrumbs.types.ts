export type Breadcrumb = {
  path: string;
  text: string;
  isLast: boolean;
};

export type Breadcrumbs = {
  breadcrumbs: Breadcrumb[];
};
