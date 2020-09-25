export interface WindowInterface {
  packageName: string;
  pid: number;
  name: string;
  title: string;
  icon: string;
  isOpenAtCenter?: boolean;
  positionX?: number;
  positionY?: number;
  isClosable: boolean;
  isModal: boolean;
  isMinimizable: boolean;
  isMaximizable: boolean;
  width?: number;
  height?: number;
  zIndex: number;
  port: number;
}
