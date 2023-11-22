export type ToggleProps = {
  toggle: boolean;
  onToggle(): void;
};

export type MenuProps = {
  className: string;
  toggle: boolean;
  onClose(): void;
};

export type DropdownProps = {
  Toggle: React.FC<ToggleProps>;
  Menu: React.FC<MenuProps>;
};
