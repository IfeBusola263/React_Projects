export default function Button({ textOnly, children, className, ...props }) {
  let cssClass = textOnly ? `text-button ${className}` : `button ${className}`;

  return (
    <button className={cssClass} {...props}>
      {children}
    </button>
  );
}
