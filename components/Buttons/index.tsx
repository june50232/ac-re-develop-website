export default function Buttons(props) {
  return (
    <button
      className={
        'px-7 py-3 rounded-full text-xs font-extrabold' +
        (props.classnames ? ` ${props?.classnames}` : '')
      }
      type="button"
      onClick={() => {
        // 導頁
      }}
    >
      {props?.title}
    </button>
  );
}
