declare module 'react-pageflip' {
  import { ReactNode, Component } from 'react';
  
  interface HTMLFlipBookProps {
    width?: number;
    height?: number;
    size?: 'fixed' | 'stretch';
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    drawShadow?: boolean;
    flippingTime?: number;
    usePortrait?: boolean;
    startPage?: number;
    showCover?: boolean;
    maxShadowOpacity?: number;
    autoSize?: boolean;
    mobileScrollSupport?: boolean;
    clickEventForward?: boolean;
    useMouseEvents?: boolean;
    swipeDistance?: number;
    showPageCorners?: boolean;
    disableFlipByClick?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children: ReactNode;
    onFlip?: (e: any) => void;
    onChangeOrientation?: (e: any) => void;
    onChangeState?: (e: any) => void;
    onInit?: (e: any) => void;
    onUpdate?: (e: any) => void;
  }
  
  class HTMLFlipBook extends Component<HTMLFlipBookProps> {
    pageFlip(): {
      flipNext(): void;
      flipPrev(): void;
      flip(pageNumber: number): void;
      turnToPage(pageNumber: number): void;
      getCurrentPageIndex(): number;
      getTotalPages(): number;
    };
  }
  
  export default HTMLFlipBook;
}