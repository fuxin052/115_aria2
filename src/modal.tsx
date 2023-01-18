import {
    createPortal,
    useState,
    useEffect,
    memo,
    FunctionComponent,
} from 'preact/compat';

type Props = {
    onCloseClick?: () => void;
    closeIcon?: string;
    isOpen: boolean;
    hideClose?: boolean;
    width?: number
};

const Modal: FunctionComponent<Props> = ({
    children,
    onCloseClick,
    closeIcon,
    isOpen,
    hideClose = false,
    width = 600,
}) => {
    const [isStateOpen, setIsStateOpen] = useState(isOpen);

    useEffect(() => {
        setIsStateOpen(isOpen);
    }, [isOpen]);

    return isStateOpen
        ? createPortal(
              <>
                  <Overlay />
                  <Holder width={width}>
                      {hideClose ? null : (
                          <Close onClick={onCloseClick}>
                              <img
                                  src={closeIcon || DefaultCloseIcon}
                                  alt="Close"
                              />
                          </Close>
                      )}
                      {children}
                  </Holder>
              </>,
              document.body
          )
        : null;
};

const DefaultCloseIcon = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14"><path d="M444 387L312 255l132-130c5-5 5-14 0-19l-38-38c-2-2-6-4-9-4-4 0-8 2-10 4L256 198 125 68c-3-2-6-4-10-4s-7 2-10 4l-37 38c-5 5-5 14 0 20l132 130L68 387a14 14 0 000 20l38 37a14 14 0 0019 0l131-131 131 131a14 14 0 0019 0l38-37c2-3 4-6 4-10s-2-7-4-10z" fill="black"/></svg>`;

const Overlay = () => (
    <div
        className="overlay"
        style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(200,200,200,0.5)',
            zIndex: 101,
        }}
    />
);

const Holder: FunctionComponent<{width:number}> = ({ children, width }) => (
    <div
        className="holder"
        style={{
            position: 'fixed',
            left: '50%',
            top: 100,
            width: width,
            transform: 'translateX(-50%)',
            background: '#fff',
            borderRadius: 5,
            boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
            padding: 20,
            zIndex: 102,
        }}
    >
        {children}
    </div>
);

const Close: FunctionComponent<{ onClick: any }> = props => (
    <button
        style={{
            position: 'absolute',
            cursor: 'pointer',
            right: 0,
            top: 0,
            padding: '5px 10px',
            background: '#eee',
            border: 0,
        }}
        {...props}
    />
);

export default memo(Modal);
