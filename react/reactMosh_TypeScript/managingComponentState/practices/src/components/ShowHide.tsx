//Click button to alert

interface Props {
  children: string;
  onClose: () => void;
}

export default function ShowHide({ children, onClose }: Props) {
  return (
    <>
      <button onClick={onClose}>{children}</button>
    </>
  );
}
