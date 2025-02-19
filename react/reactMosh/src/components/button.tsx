

interface Props {
  children: string;
  //Question mark makes it optional, with values, can only accept values below
  color?: 'primary' | 'secondary';
  onClick: () => void;
}

export default function Button({
  children,
  onClick,
  color = "primary",
}: Props) {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
