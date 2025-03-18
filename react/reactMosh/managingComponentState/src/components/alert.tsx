//Shortcut for React Arrow Function Export Component
//rafce shortcut

import styles from './alert.module.css'

interface Props {
  children: string;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissable">
      {children}
      <button type="button" className={styles.listGroup} data-bs-dismiss="alert"aria-label="Close" onClick={onClose}>Remove</button>
    </div>
  );
};

export default Alert;
