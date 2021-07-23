import styles from './Text.module.scss';

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {}

function Text({ children }: TextProps) {
  return <span className={styles.text}>{children}</span>;
}

export default Text;
