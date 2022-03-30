export interface IHistory {
  history: any;
}

interface ISubMenuItems {
  label: string;
  link: string;
  icon: string;
  color?: string;
}

export type LayoutProps = {
  onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  children?: any;
  searchKey?: string;
  subMenuItems?: ISubMenuItems[];
};
